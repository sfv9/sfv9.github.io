/* @ds-bundle: {"format":3,"namespace":"SFV9DesignSystem_636214","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"66c2c806c650","components/core/Button.jsx":"6f01168830dd","components/core/Card.jsx":"ab4f1d16f5c4","components/core/Eyebrow.jsx":"4441cf351011","components/core/Input.jsx":"ce21b5bbbb48","components/core/Logo.jsx":"d6038764888d","components/core/Stat.jsx":"7f8e8e9ae380","ui_kits/apps/AppLauncher.jsx":"471fc0ba3574","ui_kits/apps/TimesheetApp.jsx":"bec84e8a0128","ui_kits/website/CTASection.jsx":"d5ddadd736b5","ui_kits/website/Hero.jsx":"0e10efe52248","ui_kits/website/Services.jsx":"dde37d404138","ui_kits/website/SiteFooter.jsx":"26a8cc29ae30","ui_kits/website/SiteHeader.jsx":"32f8deaca49f","ui_kits/website/StatStrip.jsx":"665fa9ddb27d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SFV9DesignSystem_636214 = window.SFV9DesignSystem_636214 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: {
    bg: 'var(--blue-50)',
    fg: 'var(--info-fg)'
  },
  coral: {
    bg: 'var(--coral-50)',
    fg: 'var(--coral-700)'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success-fg)'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: 'var(--warning-fg)'
  },
  danger: {
    bg: 'var(--danger-bg)',
    fg: 'var(--danger-fg)'
  },
  neutral: {
    bg: 'var(--ink-100)',
    fg: 'var(--ink-600)'
  },
  solid: {
    bg: 'var(--accent)',
    fg: '#fff'
  }
};

/**
 * Small status pill / label. Uppercase Space Grotesk, soft tinted ground.
 */
function Badge({
  tone = 'blue',
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      background: t.bg,
      color: t.fg,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 14
  },
  md: {
    padding: '14px 28px',
    fontSize: 16
  },
  lg: {
    padding: '16px 36px',
    fontSize: 18
  }
};

/**
 * SFV9 primary action button. Space Grotesk, lift-on-hover, brand-blue glow.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconRight,
  iconLeft,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sz = SIZES[size] || SIZES.md;
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: sz.fontSize,
    padding: sz.padding,
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-normal) var(--ease-out), background var(--dur-fast) var(--ease-std)',
    transform: !disabled && press ? 'translateY(0) scale(0.98)' : !disabled && hover ? 'var(--lift-sm)' : 'none',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      boxShadow: hover && !disabled ? 'var(--shadow-blue-lg)' : 'var(--shadow-blue)'
    },
    signal: {
      background: hover && !disabled ? 'var(--signal-hover)' : 'var(--signal)',
      color: '#fff',
      boxShadow: 'var(--shadow-coral)'
    },
    secondary: {
      background: hover && !disabled ? 'var(--blue-50)' : 'var(--paper)',
      color: 'var(--accent)',
      border: '2px solid var(--accent)',
      padding: `calc(${sz.padding.split(' ')[0]} - 2px) calc(${sz.padding.split(' ')[1]} - 2px)`
    },
    ghost: {
      background: hover && !disabled ? 'var(--ink-100)' : 'transparent',
      color: 'var(--text-strong)'
    }
  };
  const Tag = rest.href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  blue: 'var(--accent)',
  coral: 'var(--signal)',
  none: null
};

/**
 * Core container. White surface, soft shadow, 8px radius.
 * Optional top accent bar (blue/coral) and hover lift.
 */
function Card({
  accent = 'none',
  hover = false,
  padding = 'var(--space-5)',
  children,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const bar = ACCENTS[accent];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover && h ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      borderTop: bar ? `var(--bw-accent) solid ${bar}` : undefined,
      padding,
      transition: 'transform var(--dur-normal) var(--ease-out), box-shadow var(--dur-normal) var(--ease-out)',
      transform: hover && h ? 'var(--lift)' : 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase section label / kicker. Coral by default.
 */
function Eyebrow({
  tone = 'coral',
  children,
  style = {},
  ...rest
}) {
  const color = tone === 'blue' ? 'var(--accent)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--signal)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label. Blue focus ring, 6px radius.
 */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      padding: '11px 14px',
      background: 'var(--paper)',
      border: `1px solid ${error ? 'var(--danger-fg)' : focus ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: error ? 'var(--danger-fg)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SFV9 brand lockup — pin mark + wordmark. Light variant for dark grounds.
 */
function Logo({
  size = 32,
  variant = 'dark',
  wordmark = true,
  src,
  lightSrc,
  style = {},
  ...rest
}) {
  const markSrc = variant === 'light' ? lightSrc || 'assets/logo-mark-light.png' : src || 'assets/logo-mark.png';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.32,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "SFV9",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  }), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.62,
      letterSpacing: '-0.5px',
      color: variant === 'light' ? '#fff' : 'var(--text-strong)'
    }
  }, "SFV9"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big-number statistic. Space Grotesk numeral in blue (or coral),
 * uppercase label beneath. Used in stat strips.
 */
function Stat({
  value,
  label,
  tone = 'blue',
  align = 'center',
  style = {},
  ...rest
}) {
  const color = tone === 'coral' ? 'var(--signal)' : 'var(--accent)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 44,
      lineHeight: 1,
      color,
      letterSpacing: '-0.5px'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--text-muted)',
      marginTop: 12
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apps/AppLauncher.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Logo,
  Badge,
  Card
} = window.SFV9DesignSystem_636214;
const APPS = [{
  name: 'Timesheet',
  status: 'active',
  accent: 'blue',
  desc: 'Log retainer hours by client & engagement'
}, {
  name: 'Automated Outreach',
  status: 'active',
  accent: 'coral',
  desc: 'Sequenced federal prospect campaigns'
}, {
  name: 'Options Income Tracker',
  status: 'active',
  accent: 'blue',
  desc: 'Track covered-call & cash-secured puts'
}, {
  name: 'Spanish Learning',
  status: 'active',
  accent: 'coral',
  desc: 'Daily drills & spaced repetition'
}, {
  name: 'FRIS',
  status: 'soon',
  accent: 'blue',
  desc: 'Federal Readiness Intelligence System'
}];
function AppLauncher({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      margin: '0 auto',
      padding: '48px 24px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    src: "../../assets/logo-mark.png"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '-0.3px',
      margin: '0 0 8px'
    }
  }, "Apps"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Your personal app suite")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, APPS.map(a => {
    const disabled = a.status === 'soon';
    return /*#__PURE__*/React.createElement(Card, {
      key: a.name,
      accent: a.accent,
      hover: !disabled,
      onClick: () => !disabled && onOpen(a.name),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.65 : 1
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 17,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, a.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, a.desc)), /*#__PURE__*/React.createElement(Badge, {
      tone: disabled ? 'warning' : 'success',
      dot: !disabled
    }, disabled ? 'Coming Soon' : 'Active'));
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid var(--border-subtle)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      margin: '0 0 6px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--accent)',
      textDecoration: 'none'
    }
  }, "Back to SFV9")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)',
      margin: 0
    }
  }, "\xA9 SFV9 LLC")));
}
window.AppLauncher = AppLauncher;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apps/AppLauncher.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apps/TimesheetApp.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Logo,
  Button,
  Card,
  Badge,
  Stat
} = window.SFV9DesignSystem_636214;
const ROWS = [{
  client: 'Acme Defense',
  task: 'Competitive intel — Army',
  hrs: '3.5',
  date: 'Jun 16'
}, {
  client: 'Nova Systems',
  task: 'Prime intro: Booz',
  hrs: '1.0',
  date: 'Jun 16'
}, {
  client: 'Acme Defense',
  task: 'Battle card revision',
  hrs: '2.0',
  date: 'Jun 15'
}, {
  client: 'Helix AI',
  task: 'GSA MAS positioning',
  hrs: '2.5',
  date: 'Jun 14'
}];
function TimesheetApp({
  onBack
}) {
  const [running, setRunning] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--ground)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 28px',
      background: 'var(--paper)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u2190 Apps"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16
    }
  }, "Timesheet")), /*#__PURE__*/React.createElement(Logo, {
    size: 26,
    src: "../../assets/logo-mark.png",
    wordmark: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '32px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    align: "left",
    value: "18.5",
    label: "Hours this week"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    align: "left",
    value: "1.5",
    label: "Hours of 20 left",
    tone: "coral"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    align: "left",
    value: "3",
    label: "Active clients"
  }))), /*#__PURE__*/React.createElement(Card, {
    accent: running ? 'coral' : 'blue',
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, running ? '00:14:32' : '00:00:00'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Acme Defense \xB7 Competitive intel")), /*#__PURE__*/React.createElement(Button, {
    variant: running ? 'signal' : 'primary',
    onClick: () => setRunning(!running)
  }, running ? 'Stop' : 'Start timer')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--text-faint)',
      marginBottom: 12
    }
  }, "Recent entries"), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-2)"
  }, ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr auto auto',
      alignItems: 'center',
      gap: 16,
      padding: '14px 16px',
      borderBottom: i < ROWS.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r.client), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, r.task), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, r.hrs, " h"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, r.date))))));
}
window.TimesheetApp = TimesheetApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apps/TimesheetApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTASection.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Button,
  Eyebrow
} = window.SFV9DesignSystem_636214;
function CTASection({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '60px 60px 90px',
      padding: '72px 48px',
      textAlign: 'center',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--blue-50)',
      border: '1px solid var(--blue-100)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "20-hour monthly retainer"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.5px',
      margin: '12px 0 16px',
      color: 'var(--text-strong)'
    }
  }, "Build your federal strategy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'var(--text-body)',
      maxWidth: 600,
      margin: '0 auto 36px',
      lineHeight: 1.6
    }
  }, "Strategic intelligence, competitive positioning, and sales enablement \u2014 customized to your federal market goals."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "\u2192",
    onClick: onContact
  }, "Start a conversation"));
}
window.CTASection = CTASection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Button,
  Card,
  Eyebrow
} = window.SFV9DesignSystem_636214;
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 60,
      alignItems: 'center',
      padding: '90px 60px',
      background: 'linear-gradient(160deg, #FFFFFF 0%, #F8F9FA 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Federal GTM Strategy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 56,
      lineHeight: 1.08,
      letterSpacing: '-0.5px',
      margin: '14px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Win the federal market", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "without the guesswork.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '24px 0 36px',
      maxWidth: 520
    }
  }, "Evidence-based go-to-market for seed-to-Series-B companies standing up a federal practice. Twenty years of experience, on retainer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "\u2192",
    onClick: onContact
  }, "Start a conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#services"
  }, "View services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "blue",
    hover: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Competitive Intelligence"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '8px 0 0',
      lineHeight: 1.55
    }
  }, "Deep market and agency analysis for informed positioning decisions.")), /*#__PURE__*/React.createElement(Card, {
    accent: "coral",
    hover: true,
    style: {
      marginLeft: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Partnership Development"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '8px 0 0',
      lineHeight: 1.55
    }
  }, "Strategic entry points and prime contractor relationships."))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Card,
  Eyebrow
} = window.SFV9DesignSystem_636214;
const SERVICES = [{
  accent: 'blue',
  icon: '⌖',
  title: 'Positioning',
  body: 'Craft differentiated value and messaging that resonates with federal buyers and mission stakeholders.'
}, {
  accent: 'coral',
  icon: '⇄',
  title: 'Partnership Development',
  body: 'Identify and broker strategic relationships with primes, integrators, and key federal stakeholders.'
}, {
  accent: 'blue',
  icon: '◎',
  title: 'Sales Enablement',
  body: 'Battle cards, win/loss analysis, competitive intelligence, and team enablement for federal deals.'
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: '90px 60px',
      background: 'var(--ground)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 42,
      letterSpacing: '-0.5px',
      margin: '12px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Federal GTM, end to end")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28,
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    accent: s.accent,
    hover: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: s.accent === 'coral' ? 'var(--signal)' : 'var(--accent)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      marginBottom: 18,
      boxShadow: s.accent === 'coral' ? 'var(--shadow-coral)' : 'var(--shadow-blue)'
    }
  }, s.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 600,
      margin: '0 0 10px',
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.6
    }
  }, s.body)))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Logo
} = window.SFV9DesignSystem_636214;
const COLS = [{
  h: 'Services',
  links: ['Positioning', 'Partnership Development', 'Sales Enablement']
}, {
  h: 'Company',
  links: ['Apps', 'Contact']
}];
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gradient-ink)',
      color: 'var(--text-on-dark)',
      padding: '56px 60px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.2fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: 28,
    variant: "light",
    lightSrc: "../../assets/logo-mark-light.png"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-on-dark-dim)',
      margin: '16px 0 0',
      lineHeight: 1.6,
      maxWidth: 260
    }
  }, "Federal GTM strategy consulting for companies building in federal markets.")), COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      margin: '0 0 16px',
      color: '#fff'
    }
  }, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-on-dark-dim)',
      textDecoration: 'none',
      marginBottom: 12
    },
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = 'var(--text-on-dark-dim)'
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      margin: '0 0 16px',
      color: '#fff'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-on-dark-dim)',
      margin: '0 0 8px'
    }
  }, "info@sfv9.com"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-on-dark-dim)',
      margin: 0
    }
  }, "St. Petersburg, FL")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Logo,
  Button
} = window.SFV9DesignSystem_636214;
const NAV = ['Services', 'Approach', 'Apps'];
function SiteHeader({
  onContact
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      background: 'var(--paper)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 32,
    src: "../../assets/logo-mark.png"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: '#' + n.toLowerCase(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast)'
    },
    onMouseEnter: e => e.target.style.color = 'var(--accent)',
    onMouseLeave: e => e.target.style.color = 'var(--text-muted)'
  }, n)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onContact
  }, "Get Started")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatStrip.jsx
try { (() => {
/* global React, SFV9DesignSystem_636214 */
const {
  Stat
} = window.SFV9DesignSystem_636214;
const STATS = [{
  value: '20+',
  label: 'Years Federal Experience',
  tone: 'blue'
}, {
  value: '$500M+',
  label: 'Pipeline Influenced',
  tone: 'coral'
}, {
  value: '50+',
  label: 'Federal Agencies Mapped',
  tone: 'blue'
}, {
  value: '95%',
  label: 'Client Satisfaction',
  tone: 'coral'
}];
function StatStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 60px',
      margin: '0 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-ink)',
      borderRadius: 'var(--radius-xl)',
      padding: '56px 48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32,
      boxShadow: 'var(--shadow-xl)',
      transform: 'translateY(-40px)'
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement(Stat, {
    key: s.label,
    value: s.value,
    label: s.label,
    tone: s.tone,
    style: {
      color: 'var(--text-on-dark)'
    }
  }))));
}
window.StatStrip = StatStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatStrip.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

})();
