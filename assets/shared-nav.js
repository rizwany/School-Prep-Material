/* LearnPad – Shared Navigation v2.0
   Injects a consistent header + footer on every page.
   Auto-detects root path from its own <script src> URL. */
(function () {
  'use strict';

  /* ── 0. Username key sync (runs synchronously, before DOMContentLoaded)
     Worksheets check 'ws_username'; the nav uses 'lp_username'.
     Mirror whichever is set so worksheets never ask again. ──────── */
  try {
    var _lp = localStorage.getItem('lp_username');
    var _ws = localStorage.getItem('ws_username');
    if (_lp && !_ws) localStorage.setItem('ws_username', _lp);
    else if (_ws && !_lp) localStorage.setItem('lp_username', _ws);
  } catch (e) {}

  /* ── 1. Root path ─────────────────────────────────────────────── */
  var scriptEl = document.currentScript;
  var scriptSrc = scriptEl ? scriptEl.src : '';
  var root = scriptSrc.replace(/assets\/shared-nav\.js[^]*/, '');
  if (!root) {
    var depth = (window.location.pathname.match(/\//g) || []).length - 1;
    root = depth > 0 ? Array(depth).fill('..').join('/') + '/' : './';
  }

  /* ── 2. CSS ───────────────────────────────────────────────────── */
  var css = [
    "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');",

    /* ─ nav shell ─ */
    "#lp-nav{",
    "  background:#fff;border-bottom:2px solid #e2e6f0;",
    "  padding:0 24px;position:sticky;top:0;z-index:99999;",
    "  direction:ltr;font-family:'Nunito',sans-serif;",
    "}",
    ".lp-nav-inner{",
    "  max-width:1100px;margin:0 auto;",
    "  display:flex;align-items:center;justify-content:space-between;",
    "  height:56px;gap:12px;",
    "}",

    /* ─ logo ─ */
    ".lp-nav-logo{text-decoration:none;display:flex;align-items:center;gap:8px;flex-shrink:0;}",
    ".lp-nav-logo-img{height:32px;width:auto;display:block;}",
    ".lp-nav-logo-txt{font-weight:900;font-size:1.1rem;color:#4361EE;letter-spacing:-.01em;}",

    /* ─ nav links ─ */
    ".lp-nav-links{display:flex;align-items:center;gap:2px;}",
    ".lp-nav-link{",
    "  font-weight:700;font-size:0.84rem;color:#5a6076;",
    "  text-decoration:none;padding:6px 11px;border-radius:8px;",
    "  transition:color .15s,background .15s;white-space:nowrap;",
    "}",
    ".lp-nav-link:hover{color:#4361EE;background:#eef1fd;}",
    ".lp-nav-link.active{color:#4361EE;background:#eef1fd;font-weight:800;}",

    /* ─ section badge ─ */
    ".lp-nav-badge{",
    "  font-size:0.72rem;font-weight:800;padding:4px 11px;",
    "  border-radius:50px;background:#4361EE;color:#fff;",
    "  white-space:nowrap;flex-shrink:0;",
    "}",

    /* ─ username button ─ */
    ".lp-username-btn{",
    "  display:flex;align-items:center;gap:6px;flex-shrink:0;",
    "  background:#eef1fd;border:2px solid transparent;",
    "  color:#4361EE;font-weight:800;font-size:0.82rem;",
    "  padding:5px 12px;border-radius:20px;",
    "  cursor:pointer;font-family:'Nunito',sans-serif;",
    "  transition:background .15s,border-color .15s;white-space:nowrap;",
    "  max-width:140px;overflow:hidden;text-overflow:ellipsis;",
    "}",
    ".lp-username-btn:hover{background:#d8e0fb;border-color:#4361EE;}",
    ".lp-username-btn.has-name{background:#f0fdf4;color:#059669;border-color:transparent;}",
    ".lp-username-btn.has-name:hover{background:#dcfce7;border-color:#059669;}",

    /* ─ username popup ─ */
    "#lp-username-popup{",
    "  display:none;position:fixed;",
    "  top:64px;right:20px;",
    "  background:#fff;border:2px solid #e2e6f0;",
    "  border-radius:14px;padding:18px;",
    "  box-shadow:0 8px 32px rgba(0,0,0,.12);",
    "  z-index:999999;width:240px;",
    "  font-family:'Nunito',sans-serif;",
    "}",
    "#lp-username-popup.open{display:block;}",
    "#lp-username-popup label{",
    "  display:block;font-size:0.7rem;font-weight:800;",
    "  text-transform:uppercase;letter-spacing:.08em;",
    "  color:#5a6076;margin-bottom:8px;",
    "}",
    "#lp-username-popup input{",
    "  width:100%;padding:9px 12px;",
    "  border:2px solid #e2e6f0;border-radius:9px;",
    "  font-family:'Nunito',sans-serif;font-size:0.92rem;font-weight:700;",
    "  color:#1a1f36;outline:none;margin-bottom:12px;box-sizing:border-box;",
    "}",
    "#lp-username-popup input:focus{border-color:#4361EE;}",
    ".lp-popup-actions{display:flex;gap:8px;}",
    ".lp-popup-save{",
    "  flex:1;padding:8px;border-radius:8px;border:none;",
    "  background:#4361EE;color:#fff;",
    "  font-family:'Nunito',sans-serif;font-weight:800;font-size:0.85rem;",
    "  cursor:pointer;transition:opacity .15s;",
    "}",
    ".lp-popup-save:hover{opacity:.88;}",
    ".lp-popup-cancel{",
    "  padding:8px 12px;border-radius:8px;",
    "  border:2px solid #e2e6f0;background:#fff;",
    "  font-family:'Nunito',sans-serif;font-weight:700;font-size:0.85rem;",
    "  cursor:pointer;color:#5a6076;transition:border-color .15s,color .15s;",
    "}",
    ".lp-popup-cancel:hover{border-color:#4361EE;color:#4361EE;}",
    ".lp-popup-greeting{",
    "  font-size:0.78rem;color:#5a6076;margin-bottom:12px;line-height:1.4;",
    "  padding-bottom:12px;border-bottom:1px solid #e2e6f0;",
    "}",
    ".lp-popup-greeting strong{color:#1a1f36;}",

    /* ─ burger ─ */
    ".lp-burger{display:none;flex-direction:column;justify-content:center;gap:5px;",
    "  background:none;border:none;cursor:pointer;padding:8px;",
    "  border-radius:8px;transition:background .15s;flex-shrink:0;}",
    ".lp-burger:hover{background:#eef1fd;}",
    ".lp-burger span{display:block;width:22px;height:2px;background:#1a1f36;",
    "  border-radius:2px;transition:transform .25s,opacity .25s;}",
    ".lp-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}",
    ".lp-burger.open span:nth-child(2){opacity:0;transform:scaleX(0);}",
    ".lp-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}",

    /* ─ mobile ─ */
    "@media(max-width:680px){",
    "  .lp-burger{display:flex;}",
    "  #lp-nav{position:relative;}",
    "  .lp-nav-links{",
    "    display:none;flex-direction:column;align-items:flex-start;",
    "    position:absolute;top:100%;left:0;right:0;",
    "    background:#fff;border-bottom:2px solid #e2e6f0;",
    "    padding:8px 20px 16px;z-index:99999;gap:2px;",
    "    box-shadow:0 8px 24px rgba(0,0,0,.1);",
    "  }",
    "  .lp-nav-links.open{display:flex;}",
    "  .lp-nav-link{width:100%;padding:10px 12px;font-size:0.9rem;}",
    "  .lp-nav-badge{display:none;}",
    "  .lp-username-btn{font-size:0.75rem;padding:4px 10px;max-width:110px;}",
    "  #lp-username-popup{right:12px;width:220px;}",
    "}",

    /* ─ footer ─ */
    "#lp-footer{",
    "  background:#1a1f36;color:rgba(255,255,255,.72);",
    "  padding:40px 24px 0;margin-top:auto;",
    "  direction:ltr;font-family:'Nunito',sans-serif;",
    "}",
    ".lp-footer-inner{",
    "  max-width:1100px;margin:0 auto;padding-bottom:24px;",
    "  display:grid;grid-template-columns:1fr auto 1fr;",
    "  gap:32px;align-items:start;",
    "  border-bottom:1px solid rgba(255,255,255,.08);",
    "}",
    ".lp-footer-brand{font-weight:900;font-size:1.05rem;color:#fff;}",
    ".lp-footer-tagline{font-size:.78rem;color:rgba(255,255,255,.38);margin-top:4px;font-style:italic;}",
    ".lp-footer-nav-label{font-size:.66rem;font-weight:800;text-transform:uppercase;",
    "  letter-spacing:.1em;color:rgba(255,255,255,.36);margin-bottom:8px;text-align:center;}",
    ".lp-footer-nav{display:flex;flex-wrap:wrap;gap:4px 10px;justify-content:center;list-style:none;padding:0;margin:0;}",
    ".lp-footer-nav li:not(:last-child)::after{content:'·';color:rgba(255,255,255,.2);margin-left:10px;}",
    ".lp-footer-nav a{font-weight:700;font-size:.78rem;color:rgba(255,255,255,.52);",
    "  text-decoration:none;transition:color .15s;}",
    ".lp-footer-nav a:hover{color:#fff;}",
    ".lp-footer-right{text-align:right;font-size:.85rem;line-height:1.7;color:rgba(255,255,255,.72);}",
    ".lp-footer-bottom{",
    "  max-width:1100px;margin:0 auto;padding:16px 0 20px;",
    "  text-align:center;font-size:.72rem;color:rgba(255,255,255,.28);",
    "}",
    "@media(max-width:640px){",
    "  .lp-footer-inner{grid-template-columns:1fr;text-align:center;}",
    "  .lp-footer-right{text-align:center;}",
    "}"
  ].join('\n');

  var styleEl = document.createElement('style');
  styleEl.id = 'lp-shared-nav-styles';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── 3. Active section detection ─────────────────────────────── */
  var path = window.location.pathname;
  function active(section) {
    var map = {
      school:    '/for_school/',
      learnings: '/learnings/',
      mathfun:   '/math_fun/',
      sitemap:   'sitemap'
    };
    return path.includes(map[section]) ? ' active' : '';
  }

  /* ── 4. Section badge (shows current section in header) ──────── */
  function sectionBadge() {
    if (path.includes('/for_school/'))  return '<span class="lp-nav-badge">School</span>';
    if (path.includes('/learnings/'))   return '<span class="lp-nav-badge">Tech in Urdu</span>';
    if (path.includes('/math_fun/'))    return '<span class="lp-nav-badge">Math Fun</span>';
    return '';
  }

  /* ── 5. Build header ─────────────────────────────────────────── */
  function buildHeader() {
    var el = document.createElement('header');
    el.id = 'lp-nav';
    el.setAttribute('role', 'banner');
    el.innerHTML = [
      '<div class="lp-nav-inner">',
        '<a class="lp-nav-logo" href="' + root + 'index.html" aria-label="LearnPad – Home">',
          '<img class="lp-nav-logo-img" src="' + root + 'logo.png" alt="LearnPad"',
          ' onerror="this.style.display=\'none\';this.nextSibling.style.display=\'block\'" />',
          '<span class="lp-nav-logo-txt" style="display:none">LearnPad</span>',
        '</a>',
        sectionBadge(),
        '<nav class="lp-nav-links" id="lpNavLinks" aria-label="Main navigation">',
          '<a class="lp-nav-link' + active('school')    + '" href="' + root + 'index.html#school">🏫 School</a>',
          '<a class="lp-nav-link' + active('learnings') + '" href="' + root + 'index.html#learnings">🤖 Tech in Urdu</a>',
          '<a class="lp-nav-link' + active('mathfun')   + '" href="' + root + 'index.html#mathfun">🎮 Knowledge Check</a>',
        '</nav>',
        '<button class="lp-username-btn" id="lpUsernameBtn" aria-label="Set your name" aria-haspopup="true" aria-expanded="false">',
          '<span id="lpUsernameBtnText">👤 Set Name</span>',
        '</button>',
        '<button class="lp-burger" id="lpBurger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="lpNavLinks">',
          '<span></span><span></span><span></span>',
        '</button>',
      '</div>',
      /* username popup – appended inside nav so it scrolls with sticky header */
      '<div id="lp-username-popup" role="dialog" aria-label="Set your name">',
        '<div class="lp-popup-greeting" id="lpPopupGreeting" style="display:none"></div>',
        '<label for="lp-name-input">Your Name</label>',
        '<input type="text" id="lp-name-input" placeholder="e.g. Ali, Sara..." maxlength="30" autocomplete="off" />',
        '<div class="lp-popup-actions">',
          '<button class="lp-popup-save" id="lpSaveNameBtn">Save</button>',
          '<button class="lp-popup-cancel" id="lpCancelNameBtn">Cancel</button>',
        '</div>',
      '</div>'
    ].join('');
    return el;
  }

  /* ── 6. Build footer ─────────────────────────────────────────── */
  function buildFooter() {
    var el = document.createElement('footer');
    el.id = 'lp-footer';
    el.setAttribute('role', 'contentinfo');
    el.innerHTML = [
      '<div class="lp-footer-inner">',
        '<div>',
          '<div class="lp-footer-brand">LearnPad</div>',
          '<div class="lp-footer-tagline">Learn it. Practice it. Own it.</div>',
        '</div>',
        '<div>',
          '<div class="lp-footer-nav-label">Quick Links</div>',
          '<ul class="lp-footer-nav">',
            '<li><a href="' + root + 'index.html">Home</a></li>',
            '<li><a href="' + root + 'index.html#school">School Worksheets</a></li>',
            '<li><a href="' + root + 'index.html#learnings">Tech in Urdu</a></li>',
            '<li><a href="' + root + 'index.html#mathfun">Knowledge Check</a></li>',
            '<li><a href="' + root + 'for_school/contact.html">Contact Us</a></li>',
          '</ul>',
        '</div>',
        '<div class="lp-footer-right">Made with ❤️ for curious learners everywhere</div>',
      '</div>',
      '<div class="lp-footer-bottom">© 2025 LearnPad · Free educational resources for students everywhere</div>'
    ].join('');
    return el;
  }

  /* ── 7. Inject ───────────────────────────────────────────────── */
  function inject() {
    /* Remove old site headers/navs */
    [
      'header.site-header',
      'nav.common-site-nav',
      'nav.navbar',
      '#lp-nav'
    ].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { el.remove(); });
    });

    var firstH = document.querySelector('body > header:not([class]):not([id])');
    if (firstH) firstH.remove();

    ['footer.common-site-footer', 'footer#lp-footer'].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { el.remove(); });
    });

    document.body.insertBefore(buildHeader(), document.body.firstChild);
    document.body.appendChild(buildFooter());

    /* ── Burger ─────────────────────────────────────────────────── */
    var burger   = document.getElementById('lpBurger');
    var navLinks = document.getElementById('lpNavLinks');
    if (burger && navLinks) {
      burger.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = navLinks.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (navLinks.classList.contains('open') && !e.target.closest('#lp-nav')) {
          navLinks.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* ── Username ────────────────────────────────────────────────── */
    var USERNAME_KEY  = 'lp_username';
    var usernameBtn   = document.getElementById('lpUsernameBtn');
    var usernameBtnTx = document.getElementById('lpUsernameBtnText');
    var popup         = document.getElementById('lp-username-popup');
    var nameInput     = document.getElementById('lp-name-input');
    var saveBtn       = document.getElementById('lpSaveNameBtn');
    var cancelBtn     = document.getElementById('lpCancelNameBtn');
    var greeting      = document.getElementById('lpPopupGreeting');

    function getStoredName() {
      try { return localStorage.getItem(USERNAME_KEY) || ''; } catch(e) { return ''; }
    }
    function storeName(n) {
      try {
        localStorage.setItem(USERNAME_KEY, n);
        localStorage.setItem('ws_username', n); // keep worksheets in sync
      } catch(e) {}
    }

    function refreshBtn() {
      var name = getStoredName();
      if (name) {
        usernameBtnTx.textContent = '👤 ' + name;
        usernameBtn.classList.add('has-name');
        usernameBtn.setAttribute('aria-label', 'Change name: ' + name);
      } else {
        usernameBtnTx.textContent = '👤 Set Name';
        usernameBtn.classList.remove('has-name');
        usernameBtn.setAttribute('aria-label', 'Set your name');
      }
    }

    function openPopup() {
      var name = getStoredName();
      nameInput.value = name;
      if (name) {
        greeting.textContent = 'Hello, ' + name + '! Update your name below.';
        greeting.style.display = 'block';
      } else {
        greeting.style.display = 'none';
      }
      popup.classList.add('open');
      usernameBtn.setAttribute('aria-expanded', 'true');
      setTimeout(function() { nameInput.focus(); nameInput.select(); }, 50);
    }

    function closePopup() {
      popup.classList.remove('open');
      usernameBtn.setAttribute('aria-expanded', 'false');
    }

    function saveName() {
      var n = nameInput.value.trim();
      if (n) { storeName(n); refreshBtn(); }
      closePopup();
    }

    refreshBtn();

    usernameBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      popup.classList.contains('open') ? closePopup() : openPopup();
    });

    saveBtn.addEventListener('click', saveName);

    cancelBtn.addEventListener('click', closePopup);

    nameInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter')  saveName();
      if (e.key === 'Escape') closePopup();
    });

    document.addEventListener('click', function (e) {
      if (popup.classList.contains('open') &&
          !e.target.closest('#lp-username-popup') &&
          !e.target.closest('#lpUsernameBtn')) {
        closePopup();
      }
    });

    /* ── Auto-bypass Urdu worksheet name modal (nameModal pattern) ─
       Grade 3-9 Urdu worksheets show #nameModal by default and call
       startWS() when the user submits. If a name is already stored,
       pre-fill the input and call startWS() so the modal is skipped. */
    var nameModal = document.getElementById('nameModal');
    if (nameModal) {
      var storedName = getStoredName();
      if (storedName) {
        var inp = document.getElementById('nameInp') || document.getElementById('nameInput');
        if (inp) {
          inp.value = storedName;
          if (typeof startWS === 'function') startWS();
        }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
