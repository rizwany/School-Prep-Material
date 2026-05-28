
# Bulk transform script for LearnPad for_school pages
# Adds: site navbar (lp-help-a / lp-ws-a only), h1 on worksheets (lp-ws-a only),
#       prev/next topic navigation (all English help + worksheet pages)

$dir = "d:\coding\claude\School-Prep-Material\for_school"

# ── Topic registry (ordered for prev/next navigation) ─────────────────────────
# Each entry: key, display name, grade, help file, worksheet file
$topics = @(
  @{ k='math-grade1-counting-numbers';            d='Counting Numbers';                g=1; h='math-grade1-counting-numbers-help.html';            w='math-grade1-counting-numbers-worksheet.html' },
  @{ k='math-grade1-number-before-after';         d='Number Before &amp; After';        g=1; h='math-grade1-number-before-after-help.html';         w='math-grade1-number-before-after-worksheet.html' },
  @{ k='math-grade1-addition-within-20';          d='Addition (within 20)';             g=1; h='math-grade1-addition-within-20-help.html';          w='math-grade1-addition-within-20-worksheet.html' },
  @{ k='math-grade1-subtraction-within-20';       d='Subtraction (within 20)';          g=1; h='math-grade1-subtraction-within-20-help.html';       w='math-grade1-subtraction-within-20-worksheet.html' },
  @{ k='math-grade1-shapes-patterns';             d='Shapes &amp; Patterns';            g=1; h='math-grade1-shapes-patterns-help.html';             w='math-grade1-shapes-patterns-worksheet.html' },
  @{ k='math-grade1-basic-measurement';           d='Basic Measurement';                g=1; h='math-grade1-basic-measurement-help.html';           w='math-grade1-basic-measurement-worksheet.html' },
  @{ k='math-grade1-skip-counting';               d='Skip Counting';                    g=1; h='math-grade1-skip-counting-help.html';               w='math-grade1-skip-counting-worksheet.html' },
  @{ k='math-grade2-place-value-tens-ones';       d='Place Value (Tens &amp; Ones)';    g=2; h='math-grade2-place-value-tens-ones-help.html';       w='math-grade2-place-value-tens-ones-worksheet.html' },
  @{ k='math-grade2-addition-carrying';           d='Addition (Carrying)';              g=2; h='math-grade2-addition-carrying-help.html';           w='math-grade2-addition-carrying-worksheet.html' },
  @{ k='math-grade2-subtraction-borrowing';       d='Subtraction (Borrowing)';          g=2; h='math-grade2-subtraction-borrowing-help.html';       w='math-grade2-subtraction-borrowing-worksheet.html' },
  @{ k='math-grade2-multiplication-intro';        d='Multiplication Intro';             g=2; h='math-grade2-multiplication-intro-help.html';        w='math-grade2-multiplication-intro-worksheet.html' },
  @{ k='math-grade2-telling-time';                d='Telling Time';                     g=2; h='math-grade2-telling-time-help.html';                w='math-grade2-telling-time-worksheet.html' },
  @{ k='math-grade2-money-basics';                d='Money Basics';                     g=2; h='math-grade2-money-basics-help.html';                w='math-grade2-money-basics-worksheet.html' },
  @{ k='math-grade2-shapes-2d-3d';               d='Shapes (2D &amp; 3D)';             g=2; h='math-grade2-shapes-2d-3d-help.html';               w='math-grade2-shapes-2d-3d-worksheet.html' },
  @{ k='math-grade3-multiplication-tables';       d='Multiplication Tables';            g=3; h='math-grade3-multiplication-tables-help.html';       w='math-grade3-multiplication-tables-worksheet.html' },
  @{ k='math-grade3-division-basics';             d='Division Basics';                  g=3; h='math-grade3-division-basics-help.html';             w='math-grade3-division-basics-worksheet.html' },
  @{ k='math-grade3-fractions-intro';             d='Fractions Intro';                  g=3; h='math-grade3-fractions-intro-help.html';             w='math-grade3-fractions-intro-worksheet.html' },
  @{ k='math-grade3-addition-subtraction-3digit'; d='Addition &amp; Subtraction (3-Digit)'; g=3; h='math-grade3-addition-subtraction-3digit-help.html'; w='math-grade3-addition-subtraction-3digit-worksheet.html' },
  @{ k='math-grade3-time-calendar';               d='Time &amp; Calendar';              g=3; h='math-grade3-time-calendar-help.html';               w='math-grade3-time-calendar-worksheet.html' },
  @{ k='math-grade3-perimeter';                   d='Perimeter';                        g=3; h='math-grade3-perimeter-help.html';                   w='math-grade3-perimeter-worksheet.html' },
  @{ k='math-grade3-pictographs-bar-graphs';      d='Pictographs &amp; Bar Graphs';     g=3; h='math-grade3-graphs-intro-help.html';                w='math-grade3-graphs-intro-worksheet.html' },
  @{ k='math-grade4-multi-digit-multiplication';  d='Multi-digit Multiplication';       g=4; h='math-grade4-multi-digit-multiplication-help.html';  w='math-grade4-multi-digit-multiplication-worksheet.html' },
  @{ k='math-grade4-long-division';               d='Long Division';                    g=4; h='math-grade4-long-division-help.html';               w='math-grade4-long-division-worksheet.html' },
  @{ k='math-grade4-fractions-equivalent';        d='Fractions (Equivalent)';           g=4; h='math-grade4-fractions-equivalent-help.html';        w='math-grade4-fractions-equivalent-worksheet.html' },
  @{ k='math-grade4-decimals-intro';              d='Decimals Intro';                   g=4; h='math-grade4-decimals-intro-help.html';              w='math-grade4-decimals-intro-worksheet.html' },
  @{ k='math-grade4-area-perimeter';              d='Area &amp; Perimeter';             g=4; h='math-grade4-area-perimeter-help.html';              w='math-grade4-area-perimeter-worksheet.html' },
  @{ k='math-grade4-angles-lines';                d='Angles &amp; Lines';               g=4; h='math-grade4-angles-lines-help.html';                w='math-grade4-angles-lines-worksheet.html' },
  @{ k='math-grade4-factors-multiples';           d='Factors &amp; Multiples';          g=4; h='math-grade4-factors-multiples-help.html';           w='math-grade4-factors-multiples-worksheet.html' },
  @{ k='math-grade5-fractions-add-subtract';      d='Fractions (Add &amp; Subtract)';   g=5; h='math-grade5-fractions-add-subtract-help.html';      w='math-grade5-fractions-add-subtract-worksheet.html' },
  @{ k='math-grade5-fractions-multiply';          d='Fractions (Multiply)';             g=5; h='math-grade5-fractions-multiply-help.html';          w='math-grade5-fractions-multiply-worksheet.html' },
  @{ k='math-grade5-decimals-operations';         d='Decimals (Operations)';            g=5; h='math-grade5-decimals-operations-help.html';         w='math-grade5-decimals-operations-worksheet.html' },
  @{ k='math-grade5-percentages-intro';           d='Percentages Intro';                g=5; h='math-grade5-percentages-intro-help.html';           w='math-grade5-percentages-intro-worksheet.html' },
  @{ k='math-grade5-volume-capacity';             d='Volume &amp; Capacity';            g=5; h='math-grade5-volume-capacity-help.html';             w='math-grade5-volume-capacity-worksheet.html' },
  @{ k='math-grade5-coordinate-planes';           d='Coordinate Planes';                g=5; h='math-grade5-coordinate-planes-help.html';           w='math-grade5-coordinate-planes-worksheet.html' },
  @{ k='math-grade5-mean-median-mode';            d='Mean, Median &amp; Mode';          g=5; h='math-grade5-mean-median-mode-help.html';            w='math-grade5-mean-median-mode-worksheet.html' },
  @{ k='math-grade6-ratios-proportions';          d='Ratios &amp; Proportions';         g=6; h='math-grade6-ratios-proportions-help.html';          w='math-grade6-ratios-proportions-worksheet.html' },
  @{ k='math-grade6-integers';                    d='Integers';                         g=6; h='math-grade6-integers-help.html';                    w='math-grade6-integers-worksheet.html' },
  @{ k='math-grade6-order-of-operations';         d='Order of Operations';              g=6; h='math-grade6-order-of-operations-help.html';         w='math-grade6-order-of-operations-worksheet.html' },
  @{ k='math-grade6-algebra-basics';              d='Algebra Basics';                   g=6; h='math-grade6-algebra-basics-help.html';              w='math-grade6-algebra-basics-worksheet.html' },
  @{ k='math-grade6-percentage-calculations';     d='Percentage Calculations';          g=6; h='math-grade6-percentage-calculations-help.html';     w='math-grade6-percentage-calculations-worksheet.html' },
  @{ k='math-grade6-area-triangles-quads';        d='Area: Triangles &amp; Quads';      g=6; h='math-grade6-area-triangles-quads-help.html';        w='math-grade6-area-triangles-quads-worksheet.html' },
  @{ k='math-grade6-statistics-basics';           d='Statistics Basics';                g=6; h='math-grade6-statistics-basics-help.html';           w='math-grade6-statistics-basics-worksheet.html' },
  @{ k='math-grade7-linear-equations';            d='Linear Equations';                 g=7; h='math-grade7-linear-equations-help.html';            w='math-grade7-linear-equations-worksheet.html' },
  @{ k='math-grade7-rational-numbers';            d='Rational Numbers';                 g=7; h='math-grade7-rational-numbers-help.html';            w='math-grade7-rational-numbers-worksheet.html' },
  @{ k='math-grade7-exponents-powers';            d='Exponents &amp; Powers';           g=7; h='math-grade7-exponents-powers-help.html';            w='math-grade7-exponents-powers-worksheet.html' },
  @{ k='math-grade7-geometry-triangles';          d='Geometry: Triangles';              g=7; h='math-grade7-geometry-triangles-help.html';          w='math-grade7-geometry-triangles-worksheet.html' },
  @{ k='math-grade7-symmetry-transformations';    d='Symmetry &amp; Transformations';   g=7; h='math-grade7-symmetry-transformations-help.html';    w='math-grade7-symmetry-transformations-worksheet.html' },
  @{ k='math-grade7-profit-loss';                 d='Profit &amp; Loss';                g=7; h='math-grade7-profit-loss-help.html';                 w='math-grade7-profit-loss-worksheet.html' },
  @{ k='math-grade7-probability-basics';          d='Probability Basics';               g=7; h='math-grade7-probability-basics-help.html';          w='math-grade7-probability-basics-worksheet.html' },
  @{ k='math-grade8-squares-cubes-roots';         d='Squares, Cubes &amp; Roots';       g=8; h='math-grade8-squares-cubes-roots-help.html';         w='math-grade8-squares-cubes-roots-worksheet.html' },
  @{ k='math-grade8-linear-equations-two-var';    d='Linear Equations (Two Var)';       g=8; h='math-grade8-linear-equations-two-var-help.html';    w='math-grade8-linear-equations-two-var-worksheet.html' },
  @{ k='math-grade8-quadratic-expressions';       d='Quadratic Expressions';            g=8; h='math-grade8-quadratic-expressions-help.html';       w='math-grade8-quadratic-expressions-worksheet.html' },
  @{ k='math-grade8-coordinate-geometry';         d='Coordinate Geometry';              g=8; h='math-grade8-coordinate-geometry-help.html';         w='math-grade8-coordinate-geometry-worksheet.html' },
  @{ k='math-grade8-mensuration';                 d='Mensuration';                      g=8; h='math-grade8-mensuration-help.html';                  w='math-grade8-mensuration-worksheet.html' },
  @{ k='math-grade8-exponents-laws';              d='Exponents (Laws)';                 g=8; h='math-grade8-exponents-laws-help.html';              w='math-grade8-exponents-laws-worksheet.html' },
  @{ k='math-grade8-data-interpretation';         d='Data Interpretation';              g=8; h='math-grade8-data-interpretation-help.html';         w='math-grade8-data-interpretation-worksheet.html' },
  @{ k='math-grade9-real-numbers';                d='Real Numbers';                     g=9; h='math-grade9-real-numbers-help.html';                w='math-grade9-real-numbers-worksheet.html' },
  @{ k='math-grade9-polynomials';                 d='Polynomials';                      g=9; h='math-grade9-polynomials-help.html';                  w='math-grade9-polynomials-worksheet.html' },
  @{ k='math-grade9-linear-eq-two-variables';     d='Linear Eq (Two Variables)';        g=9; h='math-grade9-linear-eq-two-variables-help.html';     w='math-grade9-linear-eq-two-variables-worksheet.html' },
  @{ k='math-grade9-trigonometry-intro';          d='Trigonometry Intro';               g=9; h='math-grade9-trigonometry-intro-help.html';          w='math-grade9-trigonometry-intro-worksheet.html' },
  @{ k='math-grade9-lines-angles';                d='Lines &amp; Angles';               g=9; h='math-grade9-lines-angles-help.html';                w='math-grade9-lines-angles-worksheet.html' },
  @{ k='math-grade9-triangles-congruence';        d='Triangles (Congruence)';           g=9; h='math-grade9-triangles-congruence-help.html';        w='math-grade9-triangles-congruence-worksheet.html' },
  @{ k='math-grade9-sets-functions';              d='Sets &amp; Functions';             g=9; h='math-grade9-sets-functions-help.html';              w='math-grade9-sets-functions-worksheet.html' },
  @{ k='math-grade10-quadratic-equations';        d='Quadratic Equations';              g=10; h='math-grade10-quadratic-equations-help.html';        w='math-grade10-quadratic-equations-worksheet.html' },
  @{ k='math-grade10-arithmetic-progressions';    d='Arithmetic Progressions';          g=10; h='math-grade10-arithmetic-progressions-help.html';    w='math-grade10-arithmetic-progressions-worksheet.html' },
  @{ k='math-grade10-trigonometry-ratios';        d='Trigonometry Ratios';              g=10; h='math-grade10-trigonometry-ratios-help.html';        w='math-grade10-trigonometry-ratios-worksheet.html' },
  @{ k='math-grade10-circles-tangents';           d='Circles &amp; Tangents';           g=10; h='math-grade10-circles-tangents-help.html';           w='math-grade10-circles-tangents-worksheet.html' },
  @{ k='math-grade10-geometric-constructions';    d='Geometric Constructions';          g=10; h='math-grade10-geometric-constructions-help.html';    w='math-grade10-geometric-constructions-worksheet.html' },
  @{ k='math-grade10-statistics-advanced';        d='Statistics Advanced';              g=10; h='math-grade10-statistics-advanced-help.html';        w='math-grade10-statistics-advanced-worksheet.html' },
  @{ k='math-grade10-probability-advanced';       d='Probability Advanced';             g=10; h='math-grade10-probability-advanced-help.html';       w='math-grade10-probability-advanced-worksheet.html' }
)

# ── Helpers ───────────────────────────────────────────────────────────────────
function Read-File($path) {
  [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
}
function Write-File($path, $content) {
  [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
}

function Build-PrevNext($prevTopic, $nextTopic, $fileType) {
  # fileType: 'help' or 'worksheet'
  $prevLink = if ($prevTopic) {
    $prevFile = if ($fileType -eq 'help') { $prevTopic.h } else { $prevTopic.w }
    "<a href=`"$prevFile`">&#8592; $($prevTopic.d)</a>"
  } else { '<span></span>' }

  $nextLink = if ($nextTopic) {
    $nextFile = if ($fileType -eq 'help') { $nextTopic.h } else { $nextTopic.w }
    "<a href=`"$nextFile`">$($nextTopic.d) &#8594;</a>"
  } else { '<span></span>' }

  return @"
<div class="topic-prev-next">
  $prevLink
  $nextLink
</div>
"@
}

# Site navbar HTML (for lp-help-a and lp-ws-a pages only)
# Uses id="siteNav" and id="burgerBtn" so lp-burger.js works
$NAVBAR_HTML = @'
<header class="site-header">
  <div class="header-inner">
    <a href="../index.html" class="logo-link"><img src="../logo.png" alt="LearnPad" class="logo-img" /></a>
    <nav id="siteNav">
      <a href="../index.html">Home</a>
      <a href="index.html">Worksheets</a>
      <a href="../learnings/">Tech in Urdu</a>
      <a href="contact.html">Contact</a>
    </nav>
    <button class="burger-btn" id="burgerBtn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="siteNav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
'@

$NAVBAR_GUARD = 'class="site-header"'

# ── Process each topic ────────────────────────────────────────────────────────
$count = $topics.Count
for ($i = 0; $i -lt $count; $i++) {
  $topic    = $topics[$i]
  $prev     = if ($i -gt 0)          { $topics[$i-1] } else { $null }
  $next     = if ($i -lt $count - 1) { $topics[$i+1] } else { $null }
  $grade    = $topic.g

  # Build prev/next HTML variants
  $helpPN = Build-PrevNext $prev $next 'help'
  $wsPN   = Build-PrevNext $prev $next 'worksheet'

  # ── HELP PAGE ──────────────────────────────────────────────────────────────
  $helpPath = Join-Path $dir $topic.h
  if (Test-Path $helpPath) {
    $c = Read-File $helpPath
    $changed = $false

    # Detect CSS type
    $isHelpA = $c -match 'lp-help-a\.css'
    $isHelpC = $c -match 'lp-help-c\.css'

    # ── lp-help-a: add navbar ──────────────────────────────────────────
    if ($isHelpA -and ($c -notmatch [regex]::Escape($NAVBAR_GUARD))) {
      # Remove id="siteNav" from breadcrumb (it's now on the new header nav)
      $c = $c -replace '<nav id="siteNav" class="breadcrumb"', '<nav class="breadcrumb"'
      # Insert navbar before <div class="page-wrap">
      $c = $c -replace '(<div class="page-wrap">)', "$NAVBAR_HTML`$1"
      $changed = $true
    }

    # ── Prev/next: add if not already present ──────────────────────────
    if ($c -notmatch 'class="topic-prev-next"') {
      if ($isHelpA) {
        # Insert before </div>\n<script src="assets/lp-burger.js">
        $c = $c -replace '(</div>\r?\n<script src="assets/lp-burger\.js">)', "$helpPN`$1"
        $changed = $true
      } elseif ($isHelpC) {
        # Insert before <footer>
        $c = $c -replace '(<footer>)', "$helpPN`$1"
        $changed = $true
      }
    }

    if ($changed) {
      Write-File $helpPath $c
      Write-Host "Updated help: $($topic.h)"
    }
  } else {
    Write-Warning "Help file not found: $($topic.h)"
  }

  # ── WORKSHEET PAGE ─────────────────────────────────────────────────────────
  $wsPath = Join-Path $dir $topic.w
  if (Test-Path $wsPath) {
    $c = Read-File $wsPath
    $changed = $false

    $isWsA = $c -match 'lp-ws-a\.css'
    $isWsC = $c -match 'lp-ws-c\.css'

    # ── lp-ws-a: add navbar ────────────────────────────────────────────
    if ($isWsA -and ($c -notmatch [regex]::Escape($NAVBAR_GUARD))) {
      # Remove id="siteNav" from breadcrumb in top-bar
      $c = $c -replace '<nav id="siteNav" class="breadcrumb"', '<nav class="breadcrumb"'
      # Insert navbar before <div class="modal-overlay"
      $c = $c -replace '(<div class="modal-overlay")', "$NAVBAR_HTML`$1"
      $changed = $true
    }

    # ── lp-ws-a: add h1 heading ────────────────────────────────────────
    if ($isWsA -and ($c -notmatch 'class="ws-hero"')) {
      $h1Html = @"
  <div class="ws-hero">
    <h1>$($topic.d)</h1>
    <p>Grade $grade &nbsp;&middot;&nbsp; Math &nbsp;&middot;&nbsp; Worksheet</p>
  </div>
"@
      # Insert before <div class="welcome-bar">
      $c = $c -replace '(\r?\n  <div class="welcome-bar">)', "`n$h1Html`$1"
      $changed = $true
    }

    # ── Prev/next ──────────────────────────────────────────────────────
    if ($c -notmatch 'class="topic-prev-next"') {
      if ($isWsA) {
        # Replace .bottom-nav with prev/next
        $c = $c -replace '(?s)\r?\n  <div class="bottom-nav">.*?</div>\r?\n', "`n$wsPN`n"
        $changed = $true
      } elseif ($isWsC) {
        # Insert before <footer>
        $c = $c -replace '(<footer>)', "$wsPN`$1"
        $changed = $true
      }
    }

    if ($changed) {
      Write-File $wsPath $c
      Write-Host "Updated worksheet: $($topic.w)"
    }
  } else {
    Write-Warning "Worksheet file not found: $($topic.w)"
  }
}

Write-Host "`nDone! Processed $count topics." -ForegroundColor Green
