################################################################################
# LearnPad - HTML optimiser
# Extracts common CSS/JS to external files, rewrites all English for_school pages
################################################################################
$ErrorActionPreference = 'Stop'
$base   = Split-Path $PSScriptRoot -Parent
$assets = $PSScriptRoot

# ---------------------------------------------------------------------------
function Get-StyleContent($html, [bool]$isBurger) {
    if ($isBurger) {
        $pat = '(?s)<style\s+id="burger-menu-styles"[^>]*>(.*?)</style>'
    } else {
        $pat = '(?s)<style(?!\s+id)[^>]*>(.*?)</style>'
    }
    $m = [regex]::Match($html, $pat, [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if ($m.Success) { return $m.Groups[1].Value }
    return ''
}

function Get-ScriptContent($html) {
    $m = [regex]::Match($html, '(?s)<script\s+id="burger-menu-js">(.*?)</script>',
            [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if ($m.Success) { return $m.Groups[1].Value }
    return ''
}

function Build-LineSet($content) {
    $set = [System.Collections.Generic.HashSet[string]]::new(
               [System.StringComparer]::Ordinal)
    foreach ($line in ($content -split '\r?\n')) { $set.Add($line) | Out-Null }
    return $set
}

# ---------------------------------------------------------------------------
# Step 1: read representative pages
Write-Host 'Reading representative pages...'
$helpC = [System.IO.File]::ReadAllText("$base/math-grade6-algebra-basics-help.html",
             [System.Text.Encoding]::UTF8)
$wsC   = [System.IO.File]::ReadAllText("$base/math-grade6-algebra-basics-worksheet.html",
             [System.Text.Encoding]::UTF8)
$helpA = [System.IO.File]::ReadAllText("$base/math-grade1-addition-within-20-help.html",
             [System.Text.Encoding]::UTF8)
$wsA   = [System.IO.File]::ReadAllText("$base/math-grade1-addition-within-20-worksheet.html",
             [System.Text.Encoding]::UTF8)

# ---------------------------------------------------------------------------
# Step 2: build CSS file content (main CSS + burger CSS concatenated)
Write-Host 'Building CSS files...'
$helpCCss = (Get-StyleContent $helpC $false) + "`n" + (Get-StyleContent $helpC $true)
$wsCCss   = (Get-StyleContent $wsC   $false) + "`n" + (Get-StyleContent $wsC   $true)
$helpACss = (Get-StyleContent $helpA $false) + "`n" + (Get-StyleContent $helpA $true)
$wsACss   = (Get-StyleContent $wsA   $false) + "`n" + (Get-StyleContent $wsA   $true)

$utf8 = [System.Text.Encoding]::UTF8
[System.IO.File]::WriteAllText("$assets/lp-help-c.css", $helpCCss, $utf8)
[System.IO.File]::WriteAllText("$assets/lp-ws-c.css",   $wsCCss,   $utf8)
[System.IO.File]::WriteAllText("$assets/lp-help-a.css", $helpACss, $utf8)
[System.IO.File]::WriteAllText("$assets/lp-ws-a.css",   $wsACss,   $utf8)

# ---------------------------------------------------------------------------
# Step 3: burger JS file
$burgerJs = (Get-ScriptContent $helpC).Trim()
[System.IO.File]::WriteAllText("$assets/lp-burger.js", $burgerJs, $utf8)
Write-Host "  lp-burger.js  ($($burgerJs.Length) bytes)"
Write-Host "  lp-help-c.css ($($helpCCss.Length) bytes)"
Write-Host "  lp-ws-c.css   ($($wsCCss.Length) bytes)"
Write-Host "  lp-help-a.css ($($helpACss.Length) bytes)"
Write-Host "  lp-ws-a.css   ($($wsACss.Length) bytes)"

# ---------------------------------------------------------------------------
# Step 4: build lookup sets
Write-Host 'Building CSS lookup sets...'
$helpCSet = Build-LineSet $helpCCss
$wsCSet   = Build-LineSet $wsCCss
$helpASet = Build-LineSet $helpACss
$wsASet   = Build-LineSet $wsACss

# ---------------------------------------------------------------------------
# Step 5: transform HTML files
$SKIP_NAMES = @('index.html', 'contact.html')
$htmlFiles  = Get-ChildItem $base -Filter '*.html' |
    Where-Object {
        $_.Name -notin $SKIP_NAMES -and
        $_.Name -notmatch '-ur\.html$' -and
        $_.Name -notmatch '-urdu-'
    }

$done = 0
$skipped = 0
$errors = 0

Write-Host "Processing $($htmlFiles.Count) English HTML files..."

foreach ($file in $htmlFiles) {
    $html = [System.IO.File]::ReadAllText($file.FullName, $utf8)

    # Skip if already converted
    if ($html -match 'href="assets/lp-') { $skipped++; continue }

    # Detect template & page type
    $isWorksheet = $file.Name -match '-worksheet\.html$'
    $isTemplateA = $html -match '--clr-bg:'

    if ($isTemplateA) {
        $cssSet  = if ($isWorksheet) { $wsASet  } else { $helpASet }
        $cssHref = if ($isWorksheet) { 'assets/lp-ws-a.css' } else { 'assets/lp-help-a.css' }
    } else {
        $cssSet  = if ($isWorksheet) { $wsCSet  } else { $helpCSet }
        $cssHref = if ($isWorksheet) { 'assets/lp-ws-c.css' } else { 'assets/lp-help-c.css' }
    }

    # --- Replace main style block -------------------------------------------
    $mainPat = '(?s)<style(?!\s+id)[^>]*>(.*?)</style>'
    $mainM   = [regex]::Match($html, $mainPat,
                   [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if (-not $mainM.Success) {
        Write-Warning "  No main style in $($file.Name) - skipping"
        $errors++
        continue
    }

    # Filter inline CSS: keep only lines NOT in the external CSS set
    $inlineLines = $mainM.Groups[1].Value -split '\r?\n'
    $remaining   = [System.Collections.Generic.List[string]]::new()
    foreach ($ln in $inlineLines) {
        if (-not $cssSet.Contains($ln)) { $remaining.Add($ln) }
    }
    # Trim leading/trailing blank lines
    while ($remaining.Count -gt 0 -and $remaining[0].Trim() -eq '') {
        $remaining.RemoveAt(0)
    }
    while ($remaining.Count -gt 0 -and $remaining[$remaining.Count - 1].Trim() -eq '') {
        $remaining.RemoveAt($remaining.Count - 1)
    }
    $hasContent = ($remaining | Where-Object { $_.Trim() -ne '' })

    $nl = [char]10
    if ($hasContent) {
        $linkTag = ('  <link rel="stylesheet" href="' + $cssHref + '">' + $nl +
                    '  <style>' + $nl +
                    ($remaining -join $nl) + $nl +
                    '  </style>')
    } else {
        $linkTag = '  <link rel="stylesheet" href="' + $cssHref + '">'
    }

    $html = $html.Substring(0, $mainM.Index) + $linkTag +
            $html.Substring($mainM.Index + $mainM.Length)

    # --- Remove burger style block ------------------------------------------
    $bPat = '(?s)\r?\n<style\s+id="burger-menu-styles"[^>]*>.*?</style>'
    $bM   = [regex]::Match($html, $bPat,
                [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if ($bM.Success) {
        $html = $html.Substring(0, $bM.Index) + $html.Substring($bM.Index + $bM.Length)
    }

    # --- Replace burger script with external ref ----------------------------
    $jPat = '(?s)<script\s+id="burger-menu-js">.*?</script>'
    $jM   = [regex]::Match($html, $jPat,
                [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if ($jM.Success) {
        $jsTag = '<script src="assets/lp-burger.js">' + '</script>'
        $html = $html.Substring(0, $jM.Index) + $jsTag +
                $html.Substring($jM.Index + $jM.Length)
    }

    [System.IO.File]::WriteAllText($file.FullName, $html, $utf8)
    $done++
}

Write-Host ''
Write-Host "Done. Transformed=$done  Skipped=$skipped  Errors=$errors"
