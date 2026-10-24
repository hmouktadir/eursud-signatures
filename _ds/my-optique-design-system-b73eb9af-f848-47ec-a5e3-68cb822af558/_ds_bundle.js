/* @ds-bundle: {"format":3,"namespace":"MyOptiqueDesignSystem_b73eb9","components":[{"name":"BrowserMockup","sourcePath":"components/brand/BrowserMockup.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"PlanCard","sourcePath":"components/cards/PlanCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"SidebarNavItem","sourcePath":"components/navigation/SidebarNavItem.jsx"}],"sourceHashes":{"components/brand/BrowserMockup.jsx":"06c73d4f3523","components/buttons/Button.jsx":"8a9e8af33bc4","components/buttons/IconButton.jsx":"6d51b239a6ce","components/cards/Card.jsx":"2518c7e84d60","components/cards/PlanCard.jsx":"4396906802f2","components/cards/StatCard.jsx":"0388b7a4b42d","components/data/DataTable.jsx":"f3769037523b","components/feedback/Alert.jsx":"2fde5883e3e9","components/feedback/Badge.jsx":"b8b832551301","components/feedback/Modal.jsx":"81eec40f21d5","components/feedback/Toast.jsx":"3fad91de125c","components/forms/Checkbox.jsx":"73a10bf06cc2","components/forms/Input.jsx":"c63bba467561","components/forms/Select.jsx":"d7d61c9cb163","components/forms/Switch.jsx":"8eaf49ada1df","components/navigation/Navbar.jsx":"4cc05f33836f","components/navigation/SidebarNavItem.jsx":"3380a6bfb063","ui_kits/marketing/FeatureGrid.jsx":"a7d3678649fc","ui_kits/marketing/HeroSection.jsx":"82c7cc2f9972","ui_kits/marketing/PricingSection.jsx":"1ed690109076","ui_kits/platform/AppShell.jsx":"7a4931cc76eb","ui_kits/platform/ClientsScreen.jsx":"c7e234a85510","ui_kits/platform/DashboardScreen.jsx":"befbb9f45d55","ui_kits/platform/LoginScreen.jsx":"1e8cea0c280d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MyOptiqueDesignSystem_b73eb9 = window.MyOptiqueDesignSystem_b73eb9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrowserMockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-browser{border-radius:var(--radius-xl);overflow:hidden;background:var(--surface-card);
  border:1px solid var(--border);box-shadow:var(--shadow-lg);font-family:var(--font-sans);}
.mo-browser__bar{display:flex;align-items:center;gap:14px;padding:11px 16px;
  background:var(--surface-tint);border-bottom:1px solid var(--border);}
.mo-browser__dots{display:flex;gap:7px;flex-shrink:0;}
.mo-browser__dot{width:11px;height:11px;border-radius:50%;}
.mo-browser__dot--r{background:#EC6A5E;}
.mo-browser__dot--y{background:#F4BF50;}
.mo-browser__dot--g{background:#61C554;}
.mo-browser__url{flex:1;display:flex;align-items:center;gap:8px;min-width:0;
  background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-pill);
  padding:5px 14px;font-size:10px;color:var(--text-secondary);}
.mo-browser__url i{font-size:9px;color:var(--success);}
.mo-browser__url span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.mo-browser__body{background:var(--bg-base);}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'browser');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function BrowserMockup({
  url = 'platform.optic-management.com',
  children,
  className = '',
  bodyStyle,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['mo-browser', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "mo-browser__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-browser__dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mo-browser__dot mo-browser__dot--r"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mo-browser__dot mo-browser__dot--y"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mo-browser__dot mo-browser__dot--g"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mo-browser__url"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lock",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, url))), /*#__PURE__*/React.createElement("div", {
    className: "mo-browser__body",
    style: bodyStyle
  }, children));
}
Object.assign(__ds_scope, { BrowserMockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrowserMockup.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Hover/active/focus live here; everything
   is expressed through design-system custom properties so dark/light
   themes resolve from the nearest [data-theme] ancestor. */
const CSS = `
.mo-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-sans);font-weight:700;text-transform:uppercase;
  letter-spacing:var(--tracking-label);border:1px solid transparent;cursor:pointer;
  white-space:nowrap;transition:background var(--dur-base) var(--ease),
  color var(--dur-base) var(--ease),border-color var(--dur-base) var(--ease),
  transform var(--dur-fast) var(--ease),box-shadow var(--dur-base) var(--ease);}
.mo-btn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring);}
.mo-btn[disabled]{opacity:.45;cursor:not-allowed;pointer-events:none;}

/* sizes */
.mo-btn--sm{height:32px;padding:0 14px;font-size:9px;border-radius:var(--radius-md);}
.mo-btn--md{height:38px;padding:0 18px;font-size:10px;border-radius:var(--radius-md);}
.mo-btn--lg{height:52px;padding:0 30px;font-size:11px;letter-spacing:var(--tracking-wider);border-radius:var(--radius-md);}
.mo-btn--pill{border-radius:var(--radius-pill);}

/* primary — bronze */
.mo-btn--primary{background:var(--accent);color:var(--accent-contrast);box-shadow:var(--shadow-sm);}
.mo-btn--primary:hover{background:var(--accent-hover);transform:translateY(-1px);box-shadow:var(--shadow-md);}
.mo-btn--primary:active{transform:translateY(0);}

/* cta — bronze gradient, glowing, pill */
.mo-btn--cta{background:linear-gradient(135deg,var(--bronze-light),var(--bronze) 55%,var(--bronze-hover));
  color:#fff;box-shadow:var(--shadow-cta);border-radius:var(--radius-pill);}
.mo-btn--cta:hover{transform:translateY(-2px);box-shadow:0 20px 48px -10px rgba(171,131,98,.7);}
.mo-btn--cta:active{transform:translateY(0);}

/* dark — charcoal that inverts to bronze on hover (nav CTA) */
.mo-btn--dark{background:var(--charcoal);color:var(--cream);}
.mo-btn--dark:hover{background:var(--accent);}
[data-theme="dark"] .mo-btn--dark,.theme-dark .mo-btn--dark{background:var(--cream);color:var(--charcoal);}
[data-theme="dark"] .mo-btn--dark:hover,.theme-dark .mo-btn--dark:hover{background:var(--accent);color:#fff;}

/* ghost — quiet outline */
.mo-btn--ghost{background:transparent;color:var(--text-secondary);border-color:var(--border);}
.mo-btn--ghost:hover{background:var(--surface-tint);color:var(--text-primary);border-color:var(--border-strong);}

/* danger */
.mo-btn--danger{background:transparent;color:var(--error);border-color:color-mix(in srgb,var(--error) 35%,transparent);}
.mo-btn--danger:hover{background:var(--error-soft);border-color:var(--error);}
.mo-btn--danger.mo-btn--solid{background:var(--error);color:#fff;border-color:transparent;}
.mo-btn--danger.mo-btn--solid:hover{background:#d93838;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'button');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  solid = false,
  icon,
  iconRight,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-btn', `mo-btn--${variant}`, `mo-btn--${size}`, pill ? 'mo-btn--pill' : '', solid ? 'mo-btn--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), icon ? /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon}`,
    style: {
      fontSize: '0.85em'
    },
    "aria-hidden": "true"
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${iconRight}`,
    style: {
      fontSize: '0.85em'
    },
    "aria-hidden": "true"
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-iconbtn{display:inline-flex;align-items:center;justify-content:center;
  background:var(--surface-tint);border:1px solid var(--border);color:var(--text-secondary);
  cursor:pointer;transition:background var(--dur-base) var(--ease),color var(--dur-base) var(--ease),
  border-color var(--dur-base) var(--ease),transform var(--dur-fast) var(--ease);}
.mo-iconbtn:hover{background:var(--surface-card);color:var(--text-primary);border-color:var(--border-strong);}
.mo-iconbtn:active{transform:scale(.94);}
.mo-iconbtn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring);}
.mo-iconbtn[disabled]{opacity:.45;cursor:not-allowed;pointer-events:none;}
.mo-iconbtn--sm{width:32px;height:32px;border-radius:var(--radius-sm);font-size:11px;}
.mo-iconbtn--md{width:38px;height:38px;border-radius:var(--radius-md);font-size:13px;}
.mo-iconbtn--lg{width:46px;height:46px;border-radius:var(--radius-lg);font-size:15px;}
.mo-iconbtn--accent{background:var(--accent-soft);border-color:transparent;color:var(--accent);}
.mo-iconbtn--accent:hover{background:var(--accent);color:#fff;}
.mo-iconbtn--bare{background:transparent;border-color:transparent;}
.mo-iconbtn--bare:hover{background:var(--surface-tint);}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'iconbutton');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function IconButton({
  icon,
  size = 'md',
  variant = 'default',
  disabled = false,
  'aria-label': ariaLabel,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-iconbtn', `mo-iconbtn--${size}`, variant !== 'default' ? `mo-iconbtn--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-label": ariaLabel
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-card{background:var(--surface-card);border:1px solid var(--border);
  border-radius:var(--radius-3xl);position:relative;font-family:var(--font-sans);color:var(--text-primary);}
.mo-card--pad{padding:28px;}

/* default — soft resting card */
.mo-card--default{box-shadow:var(--shadow-xl);}

/* elevated — frosted glass, lifts toward bronze on hover */
.mo-card--elevated{background:var(--surface-raised);-webkit-backdrop-filter:blur(16px);
  backdrop-filter:blur(16px);border-radius:var(--radius-2xl);
  transition:box-shadow var(--dur-slow) var(--ease),transform var(--dur-slow) var(--ease),border-color var(--dur-slow) var(--ease);}
.mo-card--elevated:hover{box-shadow:var(--shadow-md);transform:translateY(-3px);border-color:var(--border-strong);}

/* featured — dark panel with rotating bronze conic glow */
.mo-card--featured{background:var(--charcoal);color:var(--cream);border:0;overflow:hidden;
  border-radius:var(--radius-3xl);box-shadow:0 20px 50px -12px rgba(45,42,38,.35);z-index:0;}
.mo-card--featured::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;
  background:conic-gradient(from 0deg,transparent 70%,var(--bronze) 100%);
  animation:mo-rotate-glow 5s linear infinite;z-index:-2;}
.mo-card--featured::after{content:'';position:absolute;inset:1.5px;background:var(--charcoal);
  border-radius:calc(var(--radius-3xl) - 1px);z-index:-1;}
@keyframes mo-rotate-glow{100%{transform:rotate(360deg);}}
@media (prefers-reduced-motion: reduce){.mo-card--featured::before{animation:none;}}
.mo-card--featured.mo-card--pad{padding:30px;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'card');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  children,
  variant = 'default',
  padded = true,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-card', `mo-card--${variant}`, padded ? 'mo-card--pad' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/PlanCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-plan{position:relative;display:flex;flex-direction:column;background:var(--surface-card);
  border:1px solid var(--border);border-radius:var(--radius-3xl);padding:28px;font-family:var(--font-sans);
  transition:border-color var(--dur-base) var(--ease),box-shadow var(--dur-base) var(--ease),transform var(--dur-base) var(--ease);}
.mo-plan:hover{border-color:var(--border-strong);box-shadow:var(--shadow-lg);transform:translateY(-2px);}
.mo-plan--popular{border-color:var(--accent);box-shadow:0 18px 48px -16px rgba(171,131,98,.45);}
.mo-plan--popular::before{content:'';position:absolute;inset:0;border-radius:inherit;
  padding:1px;background:linear-gradient(160deg,var(--bronze-light),transparent 60%);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;}
.mo-plan__badge{position:absolute;top:-11px;left:28px;background:var(--accent);color:#fff;
  font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-wider);
  padding:5px 12px;border-radius:var(--radius-pill);box-shadow:var(--shadow-cta);}
.mo-plan__name{font-family:var(--font-display);font-style:italic;font-weight:300;font-size:26px;color:var(--text-primary);line-height:1;}
.mo-plan__tagline{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-label);color:var(--accent);margin-top:8px;}
.mo-plan__price{display:flex;align-items:baseline;gap:7px;margin:22px 0 4px;}
.mo-plan__amount{font-family:var(--font-display);font-style:italic;font-weight:200;font-size:46px;line-height:.9;color:var(--text-primary);letter-spacing:-.02em;}
.mo-plan__per{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:var(--tracking-label);color:var(--text-secondary);}
.mo-plan__divider{height:1px;background:var(--border-subtle);margin:22px 0;}
.mo-plan__features{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1;}
.mo-plan__feat{display:flex;align-items:flex-start;gap:11px;font-size:13px;color:var(--text-secondary);line-height:1.4;}
.mo-plan__feat i{color:var(--accent);font-size:11px;margin-top:3px;flex-shrink:0;}
.mo-plan__feat--off{opacity:.4;}
.mo-plan__feat--off i{color:var(--text-tertiary);}
.mo-plan__cta{margin-top:24px;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'plancard');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function PlanCard({
  name,
  tagline,
  price,
  per = '/ mois',
  features = [],
  popular = false,
  badge = 'Le plus choisi',
  cta,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-plan', popular ? 'mo-plan--popular' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), popular ? /*#__PURE__*/React.createElement("span", {
    className: "mo-plan__badge"
  }, badge) : null, /*#__PURE__*/React.createElement("div", {
    className: "mo-plan__name"
  }, name), tagline ? /*#__PURE__*/React.createElement("div", {
    className: "mo-plan__tagline"
  }, tagline) : null, /*#__PURE__*/React.createElement("div", {
    className: "mo-plan__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mo-plan__amount"
  }, price), /*#__PURE__*/React.createElement("span", {
    className: "mo-plan__per"
  }, per)), /*#__PURE__*/React.createElement("div", {
    className: "mo-plan__divider"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "mo-plan__features"
  }, features.map((f, i) => {
    const text = typeof f === 'string' ? f : f.text;
    const off = typeof f === 'object' && f.included === false;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: `mo-plan__feat ${off ? 'mo-plan__feat--off' : ''}`
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid ${off ? 'fa-minus' : 'fa-check'}`,
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", null, text));
  })), cta ? /*#__PURE__*/React.createElement("div", {
    className: "mo-plan__cta"
  }, cta) : null);
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-stat{display:flex;align-items:center;gap:16px;background:var(--surface-raised);
  -webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);
  border:1px solid var(--border);border-radius:var(--radius-2xl);padding:20px;
  font-family:var(--font-sans);transition:box-shadow var(--dur-slow) var(--ease),
  transform var(--dur-slow) var(--ease),border-color var(--dur-slow) var(--ease);}
.mo-stat:hover{box-shadow:var(--shadow-md);transform:translateY(-3px);border-color:var(--border-strong);}
.mo-stat__icon{width:42px;height:42px;border-radius:var(--radius-xl);background:var(--accent-soft);
  color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;}
.mo-stat__body{min-width:0;}
.mo-stat__label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-label);color:var(--text-secondary);}
.mo-stat__value{font-family:var(--font-display);font-style:italic;font-weight:200;
  font-size:32px;line-height:1;color:var(--text-primary);margin-top:6px;letter-spacing:-.02em;}
.mo-stat__unit{font-family:var(--font-sans);font-style:normal;font-weight:700;font-size:11px;
  letter-spacing:var(--tracking-label);color:var(--accent);margin-left:5px;}
.mo-stat__trend{display:inline-flex;align-items:center;gap:5px;margin-top:9px;
  font-size:10px;font-weight:700;padding:3px 9px;border-radius:var(--radius-pill);border:1px solid transparent;}
.mo-stat__trend--up{background:var(--success-soft);color:var(--success);}
.mo-stat__trend--down{background:var(--error-soft);color:var(--error);}
.mo-stat__trend i{font-size:8px;}

/* tone variants for alert states */
.mo-stat--warning{background:var(--warning-soft);border-color:color-mix(in srgb,var(--warning) 30%,transparent);}
.mo-stat--warning .mo-stat__icon{background:color-mix(in srgb,var(--warning) 18%,transparent);color:var(--warning);}
.mo-stat--warning .mo-stat__value{color:var(--warning);}
.mo-stat--error{background:var(--error-soft);border-color:color-mix(in srgb,var(--error) 25%,transparent);}
.mo-stat--error .mo-stat__icon{background:color-mix(in srgb,var(--error) 16%,transparent);color:var(--error);}
.mo-stat--error .mo-stat__value{color:var(--error);}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'statcard');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function StatCard({
  icon,
  label,
  value,
  unit,
  trend,
  tone = 'default',
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-stat', tone !== 'default' ? `mo-stat--${tone}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement("div", {
    className: "mo-stat__icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon}`,
    "aria-hidden": "true"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "mo-stat__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-stat__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "mo-stat__value"
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    className: "mo-stat__unit"
  }, unit) : null), trend ? /*#__PURE__*/React.createElement("span", {
    className: `mo-stat__trend mo-stat__trend--${trend.direction === 'down' ? 'down' : 'up'}`
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${trend.direction === 'down' ? 'fa-arrow-down-right' : 'fa-arrow-up-right'}`,
    "aria-hidden": "true"
  }), trend.value) : null));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-table-wrap{background:var(--surface-card);border:1px solid var(--border);
  border-radius:var(--radius-2xl);overflow:hidden;font-family:var(--font-sans);}
.mo-table{width:100%;border-collapse:collapse;}
.mo-table thead th{text-align:left;padding:13px 18px;font-size:9px;font-weight:700;
  text-transform:uppercase;letter-spacing:var(--tracking-label);color:var(--text-secondary);
  border-bottom:1px solid var(--border-subtle);white-space:nowrap;}
.mo-table th.mo-ta-right,.mo-table td.mo-ta-right{text-align:right;}
.mo-table th.mo-ta-center,.mo-table td.mo-ta-center{text-align:center;}
.mo-table tbody td{padding:14px 18px;font-size:12px;color:var(--text-secondary);
  border-bottom:1px solid var(--border-subtle);}
.mo-table tbody tr:last-child td{border-bottom:0;}
.mo-table tbody tr{transition:background var(--dur-base) var(--ease);cursor:default;}
.mo-table tbody tr.mo-table__row--clickable{cursor:pointer;}
.mo-table tbody tr:hover{background:var(--surface-sunken);}
.mo-table__id{font-family:var(--font-mono);font-weight:700;font-size:11px;color:var(--accent);}
.mo-table__amount{font-weight:700;color:var(--text-primary);}
.mo-table__amount em{font-style:normal;font-size:9px;letter-spacing:var(--tracking-label);color:var(--accent);margin-left:4px;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'table');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  className = '',
  ...rest
}) {
  useStyles();
  const alignCls = a => a === 'right' ? 'mo-ta-right' : a === 'center' ? 'mo-ta-center' : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['mo-table-wrap', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("table", {
    className: "mo-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: alignCls(c.align)
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    className: onRowClick ? 'mo-table__row--clickable' : '',
    onClick: onRowClick ? () => onRowClick(row, ri) : undefined
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    className: alignCls(c.align)
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-alert{display:flex;align-items:flex-start;gap:13px;padding:15px 18px;border:1px solid;
  border-radius:var(--radius-xl);font-family:var(--font-sans);}
.mo-alert__icon{font-size:13px;margin-top:1px;flex-shrink:0;}
.mo-alert__body{flex:1;min-width:0;}
.mo-alert__title{font-size:11px;font-weight:700;letter-spacing:.01em;}
.mo-alert__msg{font-size:11px;line-height:1.5;opacity:.85;margin-top:2px;}
.mo-alert__close{flex-shrink:0;background:none;border:0;cursor:pointer;font-size:12px;opacity:.55;
  transition:opacity var(--dur-base) var(--ease);margin-top:1px;color:inherit;}
.mo-alert__close:hover{opacity:1;}

.mo-alert--info{background:var(--info-soft);border-color:color-mix(in srgb,var(--info) 25%,transparent);color:var(--info);}
.mo-alert--success{background:var(--success-soft);border-color:color-mix(in srgb,var(--success) 25%,transparent);color:var(--success);}
.mo-alert--warning{background:var(--warning-soft);border-color:color-mix(in srgb,var(--warning) 30%,transparent);color:var(--warning);}
.mo-alert--error{background:var(--error-soft);border-color:color-mix(in srgb,var(--error) 28%,transparent);color:var(--error);}
.mo-alert--accent{background:var(--accent-soft);border-color:color-mix(in srgb,var(--accent) 30%,transparent);color:var(--accent);}
`;
const ICONS = {
  info: 'fa-circle-info',
  success: 'fa-circle-check',
  warning: 'fa-triangle-exclamation',
  error: 'fa-circle-exclamation',
  accent: 'fa-lightbulb'
};
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'alert');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  onClose,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-alert', `mo-alert--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon || ICONS[tone]} mo-alert__icon`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mo-alert__body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "mo-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "mo-alert__msg"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mo-alert__close",
    onClick: onClose,
    "aria-label": "Fermer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    "aria-hidden": "true"
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);
  font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-label);
  border:1px solid transparent;white-space:nowrap;line-height:1;}
.mo-badge--sm{font-size:8px;padding:4px 9px;border-radius:var(--radius-pill);}
.mo-badge--md{font-size:9px;padding:5px 11px;border-radius:var(--radius-pill);}
.mo-badge i{font-size:.85em;}
.mo-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}

.mo-badge--neutral{background:var(--surface-tint);color:var(--text-secondary);border-color:var(--border);}
.mo-badge--accent{background:var(--accent-soft);color:var(--accent);}
.mo-badge--success{background:var(--success-soft);color:var(--success);border-color:color-mix(in srgb,var(--success) 22%,transparent);}
.mo-badge--error{background:var(--error-soft);color:var(--error);border-color:color-mix(in srgb,var(--error) 22%,transparent);}
.mo-badge--warning{background:var(--warning-soft);color:var(--warning);border-color:color-mix(in srgb,var(--warning) 25%,transparent);}
.mo-badge--info{background:var(--info-soft);color:var(--info);border-color:color-mix(in srgb,var(--info) 22%,transparent);}
.mo-badge--purple{background:var(--purple-soft);color:var(--purple);border-color:color-mix(in srgb,var(--purple) 22%,transparent);}
.mo-badge--solid{color:#fff;border-color:transparent;}
.mo-badge--solid.mo-badge--accent{background:var(--accent);}
.mo-badge--solid.mo-badge--success{background:var(--success);}
.mo-badge--solid.mo-badge--error{background:var(--error);}
.mo-badge--solid.mo-badge--warning{background:var(--warning);}
.mo-badge--solid.mo-badge--info{background:var(--info);}
.mo-badge--solid.mo-badge--purple{background:var(--purple);}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'badge');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  solid = false,
  dot = false,
  icon,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-badge', `mo-badge--${tone}`, `mo-badge--${size}`, solid ? 'mo-badge--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "mo-badge__dot"
  }) : null, icon ? /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon}`,
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-modal-scrim{position:fixed;inset:0;background:var(--overlay-scrim);
  -webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:1000;
  display:flex;opacity:0;animation:mo-scrim-in var(--dur-slow) var(--ease) forwards;}
@keyframes mo-scrim-in{to{opacity:1;}}
.mo-modal-scrim--center{align-items:center;justify-content:center;padding:24px;}
.mo-modal-scrim--drawer{justify-content:flex-end;}

.mo-modal{background:var(--surface-card);border:1px solid var(--border);font-family:var(--font-sans);
  display:flex;flex-direction:column;position:relative;}
.mo-modal--center{width:520px;max-width:100%;border-radius:var(--radius-3xl);box-shadow:var(--shadow-lg);
  transform:translateY(14px) scale(.98);opacity:0;animation:mo-dialog-in var(--dur-slow) var(--ease-out) forwards;}
@keyframes mo-dialog-in{to{transform:none;opacity:1;}}
.mo-modal--drawer{width:440px;max-width:92vw;height:100%;border-radius:0;border-top:0;border-bottom:0;border-right:0;
  box-shadow:-12px 0 48px rgba(45,42,38,.18);transform:translateX(100%);
  animation:mo-drawer-in var(--dur-slow) var(--ease-out) forwards;}
@keyframes mo-drawer-in{to{transform:none;}}
@media (prefers-reduced-motion: reduce){
  .mo-modal-scrim,.mo-modal--center,.mo-modal--drawer{animation-duration:1ms;}
}

.mo-modal__head{display:flex;align-items:flex-start;gap:14px;padding:26px 26px 0;}
.mo-modal__eyebrow{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-wider);color:var(--accent);margin-bottom:5px;}
.mo-modal__title{font-family:var(--font-display);font-style:italic;font-weight:300;font-size:26px;line-height:1.05;color:var(--text-primary);}
.mo-modal__close{margin-left:auto;width:34px;height:34px;border-radius:var(--radius-md);background:var(--surface-tint);
  border:1px solid var(--border);color:var(--text-secondary);cursor:pointer;flex-shrink:0;
  transition:background var(--dur-base) var(--ease),color var(--dur-base) var(--ease);}
.mo-modal__close:hover{background:var(--surface-card);color:var(--text-primary);}
.mo-modal__body{padding:18px 26px;font-size:14px;color:var(--text-secondary);line-height:1.6;overflow-y:auto;flex:1;}
.mo-modal__foot{display:flex;justify-content:flex-end;gap:10px;padding:0 26px 26px;}
.mo-modal__foot--drawer{margin-top:auto;border-top:1px solid var(--border-subtle);padding-top:18px;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'modal');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Modal({
  open = true,
  onClose,
  variant = 'center',
  eyebrow,
  title,
  children,
  footer,
  className = '',
  ...rest
}) {
  useStyles();
  if (!open) return null;
  const onScrim = e => {
    if (e.target === e.currentTarget && onClose) onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `mo-modal-scrim mo-modal-scrim--${variant}`,
    onClick: onScrim
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['mo-modal', `mo-modal--${variant}`, className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "mo-modal__head"
  }, /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "mo-modal__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    className: "mo-modal__title"
  }, title) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mo-modal__close",
    onClick: onClose,
    "aria-label": "Fermer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    "aria-hidden": "true"
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "mo-modal__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: `mo-modal__foot ${variant === 'drawer' ? 'mo-modal__foot--drawer' : ''}`
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-toast{display:flex;align-items:flex-start;gap:13px;width:340px;max-width:92vw;
  background:var(--surface-card);border:1px solid var(--border);border-radius:var(--radius-xl);
  padding:14px 16px;box-shadow:var(--shadow-lg);font-family:var(--font-sans);position:relative;overflow:hidden;}
.mo-toast::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent);}
.mo-toast--success::before{background:var(--success);}
.mo-toast--error::before{background:var(--error);}
.mo-toast--warning::before{background:var(--warning);}
.mo-toast--info::before{background:var(--info);}
.mo-toast__icon{width:30px;height:30px;border-radius:var(--radius-md);display:flex;align-items:center;
  justify-content:center;font-size:12px;flex-shrink:0;}
.mo-toast--accent .mo-toast__icon{background:var(--accent-soft);color:var(--accent);}
.mo-toast--success .mo-toast__icon{background:var(--success-soft);color:var(--success);}
.mo-toast--error .mo-toast__icon{background:var(--error-soft);color:var(--error);}
.mo-toast--warning .mo-toast__icon{background:var(--warning-soft);color:var(--warning);}
.mo-toast--info .mo-toast__icon{background:var(--info-soft);color:var(--info);}
.mo-toast__body{flex:1;min-width:0;padding-top:1px;}
.mo-toast__title{font-size:11px;font-weight:700;color:var(--text-primary);}
.mo-toast__msg{font-size:11px;color:var(--text-secondary);line-height:1.45;margin-top:2px;}
.mo-toast__close{background:none;border:0;cursor:pointer;color:var(--text-tertiary);font-size:12px;
  transition:color var(--dur-base) var(--ease);flex-shrink:0;}
.mo-toast__close:hover{color:var(--text-primary);}
`;
const ICONS = {
  accent: 'fa-bell',
  success: 'fa-circle-check',
  error: 'fa-circle-exclamation',
  warning: 'fa-triangle-exclamation',
  info: 'fa-circle-info'
};
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'toast');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Toast({
  tone = 'accent',
  title,
  children,
  icon,
  onClose,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-toast', `mo-toast--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "mo-toast__icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon || ICONS[tone]}`,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mo-toast__body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "mo-toast__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "mo-toast__msg"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mo-toast__close",
    onClick: onClose,
    "aria-label": "Fermer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    "aria-hidden": "true"
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-check{display:inline-flex;align-items:center;gap:11px;cursor:pointer;font-family:var(--font-sans);}
.mo-check input{position:absolute;opacity:0;width:0;height:0;}
.mo-check__box{position:relative;width:16px;height:16px;border:1px solid var(--border);
  border-radius:var(--radius-xs);background:transparent;display:flex;align-items:center;justify-content:center;
  transition:background var(--dur-base) var(--ease),border-color var(--dur-base) var(--ease);flex-shrink:0;}
.mo-check__box i{font-size:8px;color:#fff;opacity:0;transition:opacity var(--dur-base) var(--ease);}
.mo-check input:checked + .mo-check__box{background:var(--accent);border-color:var(--accent);}
.mo-check input:checked + .mo-check__box i{opacity:1;}
.mo-check input:focus-visible + .mo-check__box{box-shadow:0 0 0 3px var(--focus-ring);}
.mo-check__label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-label);
  color:var(--text-secondary);transition:color var(--dur-base) var(--ease);}
.mo-check:hover .mo-check__label{color:var(--text-primary);}
.mo-check--disabled{opacity:.5;cursor:not-allowed;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'checkbox');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const cid = id || (label ? `mo-chk-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: ['mo-check', disabled ? 'mo-check--disabled' : '', className].filter(Boolean).join(' '),
    htmlFor: cid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mo-check__box"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    "aria-hidden": "true"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "mo-check__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-field{display:flex;flex-direction:column;gap:8px;font-family:var(--font-sans);}
.mo-field__label{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-wider);
  color:var(--text-secondary);transition:color var(--dur-base) var(--ease);}
.mo-field:focus-within .mo-field__label{color:var(--accent);}
.mo-field__hint{font-size:9px;color:var(--text-tertiary);letter-spacing:.04em;}
.mo-field__err{font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:var(--tracking-label);color:var(--error);}

/* Underline (editorial) variant — the auth look */
.mo-input--underline{background:transparent;border:0;border-bottom:1px solid var(--border);
  padding:10px 2px;font-family:var(--font-sans);font-size:18px;color:var(--text-primary);
  transition:border-color var(--dur-base) var(--ease);width:100%;}
.mo-input--underline::placeholder{color:var(--text-tertiary);}
.mo-input--underline:focus{outline:none;border-bottom-color:var(--accent);}

/* Boxed variant — the in-app look */
.mo-input--boxed{background:var(--surface-tint);border:1px solid var(--border);
  border-radius:var(--radius-md);padding:11px 14px;font-family:var(--font-sans);font-size:14px;
  color:var(--text-primary);transition:border-color var(--dur-base) var(--ease),
  box-shadow var(--dur-base) var(--ease),background var(--dur-base) var(--ease);width:100%;}
.mo-input--boxed::placeholder{color:var(--text-tertiary);}
.mo-input--boxed:focus{outline:none;background:var(--surface-card);border-color:var(--accent);
  box-shadow:0 0 0 3px var(--focus-ring);}
.mo-input--err{border-color:var(--error)!important;}
.mo-input:disabled{opacity:.55;cursor:not-allowed;}

.mo-input-wrap{position:relative;display:flex;align-items:center;}
.mo-input-wrap__icon{position:absolute;left:14px;color:var(--text-tertiary);font-size:12px;pointer-events:none;}
.mo-input-wrap--has-icon .mo-input--boxed{padding-left:36px;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'input');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  variant = 'boxed',
  icon,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const inputId = id || (label ? `mo-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['mo-input', `mo-input--${variant}`, error ? 'mo-input--err' : '', className].filter(Boolean).join(' ')
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: "mo-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "mo-field__label",
    htmlFor: inputId
  }, label) : null, icon && variant === 'boxed' ? /*#__PURE__*/React.createElement("div", {
    className: "mo-input-wrap mo-input-wrap--has-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon} mo-input-wrap__icon`,
    "aria-hidden": "true"
  }), input) : input, error ? /*#__PURE__*/React.createElement("span", {
    className: "mo-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "mo-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-select-wrap{position:relative;display:flex;flex-direction:column;gap:8px;font-family:var(--font-sans);}
.mo-select-wrap__label{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-wider);color:var(--text-secondary);}
.mo-select{appearance:none;-webkit-appearance:none;background:var(--surface-tint);
  border:1px solid var(--border);border-radius:var(--radius-md);padding:11px 38px 11px 14px;
  font-family:var(--font-sans);font-size:14px;color:var(--text-primary);width:100%;cursor:pointer;
  transition:border-color var(--dur-base) var(--ease),box-shadow var(--dur-base) var(--ease),background var(--dur-base) var(--ease);}
.mo-select:focus{outline:none;background:var(--surface-card);border-color:var(--accent);box-shadow:0 0 0 3px var(--focus-ring);}
.mo-select:disabled{opacity:.55;cursor:not-allowed;}
.mo-select-chev{position:absolute;right:14px;bottom:13px;color:var(--accent);font-size:11px;pointer-events:none;}
.mo-select-wrap--labelled .mo-select-chev{bottom:13px;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'select');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  label,
  options = [],
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const selId = id || (label ? `mo-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['mo-select-wrap', label ? 'mo-select-wrap--labelled' : ''].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "mo-select-wrap__label",
    htmlFor: selId
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: ['mo-select', className].filter(Boolean).join(' ')
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, children || options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down mo-select-chev",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-switch{display:inline-flex;align-items:center;gap:11px;cursor:pointer;font-family:var(--font-sans);}
.mo-switch input{position:absolute;opacity:0;width:0;height:0;}
.mo-switch__track{position:relative;width:38px;height:22px;border-radius:var(--radius-pill);
  background:var(--border-strong);transition:background var(--dur-base) var(--ease);flex-shrink:0;}
.mo-switch__thumb{position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;
  background:#fff;box-shadow:var(--shadow-sm);transition:transform var(--dur-base) var(--ease);}
.mo-switch input:checked + .mo-switch__track{background:var(--accent);}
.mo-switch input:checked + .mo-switch__track .mo-switch__thumb{transform:translateX(16px);}
.mo-switch input:focus-visible + .mo-switch__track{box-shadow:0 0 0 3px var(--focus-ring);}
.mo-switch__label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:var(--tracking-label);color:var(--text-secondary);}
.mo-switch--disabled{opacity:.5;cursor:not-allowed;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'switch');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Switch({
  label,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const sid = id || (label ? `mo-sw-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: ['mo-switch', disabled ? 'mo-switch--disabled' : '', className].filter(Boolean).join(' '),
    htmlFor: sid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: sid,
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mo-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mo-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "mo-switch__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-navbar{display:flex;align-items:center;gap:24px;width:100%;box-sizing:border-box;
  padding:16px 28px;font-family:var(--font-sans);
  transition:background var(--dur-slow) var(--ease),backdrop-filter var(--dur-slow) var(--ease),
  border-color var(--dur-slow) var(--ease),box-shadow var(--dur-slow) var(--ease);
  border-bottom:1px solid transparent;}
.mo-navbar--transparent{background:transparent;}
.mo-navbar--glass{background:color-mix(in srgb,var(--bg-canvas) 72%,transparent);
  -webkit-backdrop-filter:blur(16px) saturate(1.4);backdrop-filter:blur(16px) saturate(1.4);
  border-bottom-color:var(--border);box-shadow:var(--shadow-sm);}
.mo-navbar__brand{display:flex;align-items:center;gap:11px;}
.mo-navbar__mark{font-family:var(--font-display);font-style:italic;font-weight:300;font-size:24px;color:var(--accent);line-height:1;}
.mo-navbar__name{font-family:var(--font-display);font-style:italic;font-weight:300;font-size:18px;color:var(--text-primary);letter-spacing:.01em;}
.mo-navbar__links{display:flex;align-items:center;gap:26px;margin-left:14px;}
.mo-navbar__link{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:var(--tracking-label);
  color:var(--text-secondary);text-decoration:none;transition:color var(--dur-base) var(--ease);}
.mo-navbar__link:hover{color:var(--text-primary);}
.mo-navbar__link--active{color:var(--accent);}
.mo-navbar__spacer{flex:1;}
.mo-navbar__actions{display:flex;align-items:center;gap:12px;}
`;
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'navbar');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Navbar({
  brand = 'My Optique',
  mark = 'O',
  links = [],
  actions,
  scrolled = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mo-navbar', scrolled ? 'mo-navbar--glass' : 'mo-navbar--transparent', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "mo-navbar__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mo-navbar__mark"
  }, mark), /*#__PURE__*/React.createElement("span", {
    className: "mo-navbar__name"
  }, brand)), links.length ? /*#__PURE__*/React.createElement("div", {
    className: "mo-navbar__links"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || '#',
    className: `mo-navbar__link ${l.active ? 'mo-navbar__link--active' : ''}`
  }, l.label))) : null, /*#__PURE__*/React.createElement("div", {
    className: "mo-navbar__spacer"
  }), actions ? /*#__PURE__*/React.createElement("div", {
    className: "mo-navbar__actions"
  }, actions) : null);
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mo-navitem{position:relative;display:flex;align-items:center;gap:0;width:100%;text-align:left;
  padding:11px 14px;border-radius:var(--radius-lg);font-family:var(--font-sans);
  background:transparent;border:0;cursor:pointer;white-space:nowrap;
  transition:background var(--dur-base) var(--ease);text-decoration:none;}
.mo-navitem::before{content:'';position:absolute;inset:0;border-radius:inherit;background:var(--linen);
  opacity:0;transition:opacity var(--dur-base) var(--ease);}
[data-theme="dark"] .mo-navitem::before,.theme-dark .mo-navitem::before{background:rgba(249,248,243,.06);}
.mo-navitem:hover::before{opacity:1;}
.mo-navitem--active::before{background:var(--sand-pale);opacity:1;}
[data-theme="dark"] .mo-navitem--active::before,.theme-dark .mo-navitem--active::before{background:var(--accent-soft);}
.mo-navitem--active::after{content:'';position:absolute;left:0;top:22%;bottom:22%;width:2.5px;
  border-radius:0 2px 2px 0;background:var(--accent);}
.mo-navitem__num{font-family:var(--font-display);font-style:italic;font-weight:300;font-size:14px;
  color:var(--sand);width:30px;flex-shrink:0;position:relative;z-index:1;transition:color var(--dur-base) var(--ease);}
.mo-navitem:hover .mo-navitem__num,.mo-navitem--active .mo-navitem__num{color:var(--accent);}
.mo-navitem__label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:var(--tracking-wider);
  color:var(--text-secondary);position:relative;z-index:1;
  transition:color var(--dur-base) var(--ease),transform var(--dur-base) var(--ease);}
.mo-navitem:hover .mo-navitem__label{color:var(--text-primary);transform:translateX(3px);}
.mo-navitem--active .mo-navitem__label{color:var(--text-primary);}
`;
const ROMANS = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.', 'VIII.', 'IX.', 'X.', 'XI.', 'XII.'];
let injected = false;
function useStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-mo', 'navitem');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function SidebarNavItem({
  label,
  num,
  index,
  active = false,
  as = 'a',
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const roman = num != null ? num : index != null ? ROMANS[index] || `${index + 1}.` : '';
  const cls = ['mo-navitem', active ? 'mo-navitem--active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, Tag === 'a' ? {} : {
    type: 'button'
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "mo-navitem__num"
  }, roman), /*#__PURE__*/React.createElement("span", {
    className: "mo-navitem__label"
  }, label || children));
}
Object.assign(__ds_scope, { SidebarNavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNavItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
/* FeatureGrid — three editorial feature cards on the dark surface. */
const {
  Card
} = window.MyOptiqueDesignSystem_b73eb9;
const FEATURES = [['fa-address-card', 'Le Registre', 'Chaque client, son historique d\'ordonnances et ses montures — réunis dans un dossier vivant.'], ['fa-wand-magic-sparkles', 'Le Scan OCR', 'Photographiez une ordonnance : les valeurs sphère, cylindre et axe se remplissent seules.'], ['fa-chart-line', 'Le Bilan', 'Chiffre d\'affaires, marges et renouvellements — lus d\'un coup d\'œil, en chiffres clairs.']];
function FeatureGrid() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow"
  }, "Ce que l'atelier vous offre"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-h2"
  }, "Trois gestes, ", /*#__PURE__*/React.createElement("em", null, "tout le m\xE9tier."))), /*#__PURE__*/React.createElement("div", {
    className: "mk-features__grid"
  }, FEATURES.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    variant: "elevated",
    className: "mk-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-feature__icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon}`
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mk-feature__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mk-feature__body"
  }, body)))));
}
window.MarketingScreens = Object.assign(window.MarketingScreens || {}, {
  FeatureGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HeroSection.jsx
try { (() => {
/* HeroSection — dark editorial hero with grid-dot motif, eyebrow, Fraunces
   headline, and a browser mockup of the product. */
const {
  Button,
  BrowserMockup,
  Badge
} = window.MyOptiqueDesignSystem_b73eb9;
function HeroSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__dots"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-hero__eyebrow"
  }, "My Optique \xB7 SaaS pour opticiens"), /*#__PURE__*/React.createElement("h1", {
    className: "mk-hero__title"
  }, "Votre boutique,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "vue de plus haut.")), /*#__PURE__*/React.createElement("p", {
    className: "mk-hero__sub"
  }, "Clients, ordonnances, ventes et stock \u2014 r\xE9unis dans un atelier num\xE9rique pens\xE9 pour les opticiens ind\xE9pendants du Maroc."), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg"
  }, "Demander une d\xE9mo"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    iconRight: "fa-arrow-right"
  }, "Voir les tarifs")), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__mock"
  }, /*#__PURE__*/React.createElement(BrowserMockup, {
    url: "demo.optic-management.com/atelier"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-logo"
  }, "O"), ["L'Atelier", "La Collection", "Les Clients", "Les Ventes"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "mk-hero__shot-nav" + (i === 0 ? " is-active" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-hero__shot-num"
  }, ['I.', 'II.', 'III.', 'IV.'][i]), l))), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-greet"
  }, "Bonjour, Hamza"), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-h1"
  }, "L'Atelier."), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-stats"
  }, [['Ventes', '12'], ['CA', '12 480'], ['Dossiers', '328']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "mk-hero__shot-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-hero__shot-stat-lab"
  }, l), /*#__PURE__*/React.createElement("span", {
    className: "mk-hero__shot-stat-val"
  }, v, /*#__PURE__*/React.createElement("i", null, i === 1 ? 'MAD' : ''))))), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-hero__shot-rev-lab"
  }, "Chiffre d'affaires \xB7 Juin"), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__shot-rev-amt"
  }, "47 499", /*#__PURE__*/React.createElement("i", null, "MAD")))))))));
}
window.MarketingScreens = Object.assign(window.MarketingScreens || {}, {
  HeroSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/PricingSection.jsx
try { (() => {
/* PricingSection — three plan cards on dark, Premium highlighted. */
const {
  PlanCard,
  Button
} = window.MyOptiqueDesignSystem_b73eb9;
function PricingSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow"
  }, "Des formules \xE0 votre mesure"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-h2"
  }, "Choisissez ", /*#__PURE__*/React.createElement("em", null, "votre atelier."))), /*#__PURE__*/React.createElement("div", {
    className: "mk-pricing__grid"
  }, /*#__PURE__*/React.createElement(PlanCard, {
    name: "Free",
    tagline: "D\xE9couverte",
    price: "0",
    per: "14 j d'essai",
    features: ['10 clients / mois', '1 utilisateur', {
      text: 'Scan OCR',
      included: false
    }, {
      text: 'Exports comptables',
      included: false
    }],
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      pill: true,
      style: {
        width: '100%'
      }
    }, "D\xE9marrer")
  }), /*#__PURE__*/React.createElement(PlanCard, {
    name: "Premium",
    tagline: "Sans limites",
    price: "599",
    popular: true,
    features: ['Clients illimités', '10 utilisateurs', 'Scan OCR par IA', 'Portail client', 'Exports comptables'],
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "cta",
      pill: true,
      style: {
        width: '100%'
      }
    }, "Choisir Premium")
  }), /*#__PURE__*/React.createElement(PlanCard, {
    name: "Standard",
    tagline: "La boutique",
    price: "299",
    features: ['50 clients / mois', '3 utilisateurs', '200 montures', 'Facturation PDF'],
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      pill: true,
      style: {
        width: '100%'
      }
    }, "Choisir")
  })));
}
window.MarketingScreens = Object.assign(window.MarketingScreens || {}, {
  PricingSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/PricingSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/AppShell.jsx
try { (() => {
/* AppShell — sidebar + main panel chrome for the My Optique boutique app.
   Mirrors layouts/app.blade.php: paper canvas, 280px sidebar with a hairline
   separator, a floating white main panel with a big radius, topbar with
   editorial breadcrumb + Fraunces title. */
const {
  SidebarNavItem,
  IconButton
} = window.MyOptiqueDesignSystem_b73eb9;
const NAV = ["L'Atelier", "La Collection", "Les Clients", "Les Ventes", "Le Bilan", "L'Analyse", "Le Support", "Facturation"];
function AppShell({
  active,
  onNavigate,
  breadcrumb,
  title,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mo-app"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "mo-app__sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-app__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/socrate-optic-logo.png",
    alt: "Socrate Optic"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mo-app__divider"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "mo-app__nav"
  }, NAV.map((label, i) => /*#__PURE__*/React.createElement(SidebarNavItem, {
    key: label,
    index: i,
    label: label,
    active: active === i,
    as: "button",
    onClick: () => onNavigate && onNavigate(i, label)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mo-app__footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-app__user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-app__avatar"
  }, "H", /*#__PURE__*/React.createElement("span", {
    className: "mo-app__avatar-dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mo-app__user-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mo-app__user-name"
  }, "Hamza M."), /*#__PURE__*/React.createElement("span", {
    className: "mo-app__user-role"
  }, "Modifier le profil"))))), /*#__PURE__*/React.createElement("main", {
    className: "mo-app__main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mo-app__topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-app__page"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mo-app__breadcrumb"
  }, breadcrumb), /*#__PURE__*/React.createElement("h1", {
    className: "mo-app__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "mo-app__topbar-actions"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "fa-magnifying-glass",
    "aria-label": "Rechercher"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "fa-bell",
    "aria-label": "Notifications"
  }), actions)), /*#__PURE__*/React.createElement("div", {
    className: "mo-app__content"
  }, children)));
}
window.PlatformScreens = Object.assign(window.PlatformScreens || {}, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/ClientsScreen.jsx
try { (() => {
/* ClientsScreen — "Les Clients" registry. Search + filter row, then the data
   table with status chips. */
const {
  DataTable,
  Badge,
  Input,
  Select,
  Button
} = window.MyOptiqueDesignSystem_b73eb9;
const CLIENTS = [['DOSS-204', 'Benali', 'Yasmine', '06 61 24 88 10', 'À jour', 'ok'], ['DOSS-203', 'Tahiri', 'Omar', '06 72 90 13 45', 'Renouveler', 'warn'], ['DOSS-202', 'El Amrani', 'Salma', '06 55 47 21 09', 'À jour', 'ok'], ['DOSS-201', 'Cherkaoui', 'Adil', '06 13 88 76 52', 'À jour', 'ok'], ['DOSS-200', 'Bouzidi', 'Nadia', '06 90 34 12 78', 'Expirée', 'err']];
const statusMap = {
  ok: ['success', 'À jour'],
  warn: ['warning', 'Renouveler'],
  err: ['error', 'Expirée']
};
function ClientsScreen() {
  const rows = CLIENTS.map(([id, last, first, phone,, s]) => ({
    id,
    name: `${last} ${first}`,
    phone,
    s
  }));
  const columns = [{
    key: 'id',
    header: 'Dossier',
    render: v => /*#__PURE__*/React.createElement("span", {
      className: "mo-table__id"
    }, v)
  }, {
    key: 'name',
    header: 'Client',
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--charcoal)',
        textTransform: 'uppercase',
        fontSize: '11px',
        letterSpacing: '0.04em'
      }
    }, v)
  }, {
    key: 'phone',
    header: 'Téléphone'
  }, {
    key: 's',
    header: 'Ordonnance',
    align: 'center',
    render: v => /*#__PURE__*/React.createElement(Badge, {
      tone: statusMap[v][0],
      size: "sm",
      dot: true
    }, statusMap[v][1])
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "mo-clients"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-clients__toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-clients__search"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "fa-magnifying-glass",
    placeholder: "Rechercher un client, un dossier\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mo-clients__filter"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Tous les dossiers', 'À jour', 'À renouveler', 'Expirées'],
    defaultValue: "Tous les dossiers"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "fa-plus"
  }, "Nouveau client")), /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    rows: rows,
    onRowClick: () => {}
  }));
}
window.PlatformScreens = Object.assign(window.PlatformScreens || {}, {
  ClientsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/ClientsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/DashboardScreen.jsx
try { (() => {
/* DashboardScreen — "L'Atelier" pilotage view. Greeting header, today-at-a-glance
   stat tiles, a featured dark revenue card with serif numerals, quick actions,
   and a recent-sales list. */
const {
  StatCard,
  Card,
  Badge,
  Button
} = window.MyOptiqueDesignSystem_b73eb9;
const QUICK = [['fa-address-book', 'Nouveau client'], ['fa-file-invoice', 'Facture vierge'], ['fa-glasses', 'Catalogue'], ['fa-clock-rotate-left', 'Historique']];
const SALES = [['Benali', 'Yasmine', 'FAC-0042', '2 200,00', "il y a 2 h"], ['Tahiri', 'Omar', 'FAC-0041', '1 480,00', "il y a 5 h"], ['El Amrani', 'Salma', 'FAC-0040', '3 050,00', "hier"], ['Cherkaoui', 'Adil', 'FAC-0039', '890,00', "hier"]];
function DashboardScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mo-dash"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "mo-dash__greeting"
  }, "Bonjour, Hamza"), /*#__PURE__*/React.createElement("h2", {
    className: "mo-dash__h1"
  }, "L'Atelier."), /*#__PURE__*/React.createElement("p", {
    className: "mo-dash__eyebrow"
  }, "Espace de pilotage")), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__date-lab"
  }, "Aujourd'hui"), /*#__PURE__*/React.createElement("p", {
    className: "mo-dash__date-val"
  }, "mercredi 10 juin 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__stats"
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "fa-receipt",
    label: "Ventes aujourd'hui",
    value: "12"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "fa-coins",
    label: "CA aujourd'hui",
    value: "12 480",
    unit: "MAD"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "fa-rotate",
    label: "Renouvellements",
    value: "3",
    tone: "warning"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "fa-glasses",
    label: "Stock critique",
    value: "2",
    tone: "error"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__grid"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "featured",
    className: "mo-dash__revenue"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__rev-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__rev-lab"
  }, "Chiffre d'affaires"), /*#__PURE__*/React.createElement("p", {
    className: "mo-dash__rev-month"
  }, "Juin 2026")), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__rev-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-vault"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__rev-amount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metric-numeral"
  }, "47 499"), /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__rev-unit"
  }, "MAD")), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__rev-trend"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    size: "sm",
    icon: "fa-arrow-up-right"
  }, "12.4%"), /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__rev-vs"
  }, "vs mois dernier"))), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__volumes"
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "fa-users-viewfinder",
    label: "Registre clients",
    value: "328"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "fa-glasses",
    label: "La Collection",
    value: "186"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    padded: false,
    className: "mo-dash__quick-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__quick"
  }, QUICK.map(([icon, label]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    className: "mo-dash__quick-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon}`
  }), /*#__PURE__*/React.createElement("span", null, label))))))), /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    className: "mo-dash__sales"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__sales-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mo-dash__sales-title"
  }, "Derniers \xE9changes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    pill: true,
    iconRight: "fa-arrow-right"
  }, "Tout l'historique")), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__sales-list"
  }, SALES.map(([last, first, num, amount, when]) => /*#__PURE__*/React.createElement("div", {
    key: num,
    className: "mo-dash__sale"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__sale-avatar"
  }, first[0]), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__sale-who"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mo-dash__sale-name"
  }, last, " ", first), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__sale-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__sale-num"
  }, num), /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__sale-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__sale-when"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-regular fa-clock"
  }), " ", when))), /*#__PURE__*/React.createElement("div", {
    className: "mo-dash__sale-amount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metric-numeral",
    style: {
      fontSize: '18px'
    }
  }, amount), /*#__PURE__*/React.createElement("span", {
    className: "mo-dash__sale-unit"
  }, "MAD")))))));
}
window.PlatformScreens = Object.assign(window.PlatformScreens || {}, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/LoginScreen.jsx
try { (() => {
/* LoginScreen — the editorial "L'Accès." auth view. Underline inputs, a dark
   submit button that inverts to bronze, centered on paper. */
const {
  Input,
  Checkbox,
  Button
} = window.MyOptiqueDesignSystem_b73eb9;
function LoginScreen({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mo-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mo-login__head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mo-login__logo",
    src: "../../assets/socrate-optic-logo.png",
    alt: "Socrate Optic"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "mo-login__title"
  }, "L'Acc\xE8s."), /*#__PURE__*/React.createElement("p", {
    className: "mo-login__sub"
  }, "Veuillez vous identifier pour entrer.")), /*#__PURE__*/React.createElement("form", {
    className: "mo-login__form",
    onSubmit: e => {
      e.preventDefault();
      onEnter && onEnter();
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Courriel",
    variant: "underline",
    type: "email",
    placeholder: "adresse@email.com",
    defaultValue: "hamza@socrate-optic.ma"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Cl\xE9 d'acc\xE8s",
    variant: "underline",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "atelier2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mo-login__row"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "M\xE9moriser l'acc\xE8s",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    type: "submit",
    style: {
      width: '100%',
      height: '58px',
      letterSpacing: '0.3em'
    }
  }, "Entrer dans l'atelier"), /*#__PURE__*/React.createElement("a", {
    className: "mo-login__alt",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Premi\xE8re visite ? Initier un profil")));
}
window.PlatformScreens = Object.assign(window.PlatformScreens || {}, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/LoginScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrowserMockup = __ds_scope.BrowserMockup;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.SidebarNavItem = __ds_scope.SidebarNavItem;

})();
