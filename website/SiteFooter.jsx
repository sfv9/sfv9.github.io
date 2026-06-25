/* global React, SFV9DesignSystem_636214 */
const { Logo } = window.SFV9DesignSystem_636214;

const COLS = [
  { h: 'Services', links: [
    { label: 'Positioning', href: '#services' },
    { label: 'Partnership Development', href: '#services' },
    { label: 'Sales Enablement', href: '#services' },
  ] },
  { h: 'Company', links: [
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: 'mailto:info@sfv9.com' },
  ] },
];

function SiteFooter() {
  const m = window.useIsMobile();
  const linkStyle = { display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-dark-dim)', textDecoration: 'none', marginBottom: 12 };
  return (
    <footer style={{
      background: 'var(--gradient-ink)', color: 'var(--text-on-dark)',
      padding: m ? '44px 24px' : '56px 60px',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : '2fr 1fr 1fr 1.2fr', gap: m ? 28 : 48,
      }}>
        <div style={{ gridColumn: m ? '1 / -1' : 'auto' }}>
          <Logo size={28} variant="light" lightSrc="assets/logo-mark-light.png" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-dark-dim)', margin: '16px 0 0', lineHeight: 1.6, maxWidth: 260 }}>
            GTM strategy consulting for venture-backed companies building federal verticals.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.h}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', margin: '0 0 16px', color: '#fff' }}>{c.h}</h4>
            {c.links.map((l) => (
              <a key={l.label} href={l.href} style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-on-dark-dim)')}
              >{l.label}</a>
            ))}
          </div>
        ))}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', margin: '0 0 16px', color: '#fff' }}>Get in touch</h4>
          <a href="mailto:info@sfv9.com" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-on-dark-dim)', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-on-dark-dim)')}
          >info@sfv9.com</a>
        </div>
      </div>

      <div style={{
        marginTop: m ? 32 : 44, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-dark-dim)',
      }}>
        <span>&copy; 2026 SFV9 LLC. All rights reserved.</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <span>Federal go-to-market strategy</span>
          <a href="/chinese/" title="漢字配對 · Mandarin practice"
            style={{ color: 'var(--text-on-dark-dim)', textDecoration: 'none', transition: 'color var(--dur-fast)' }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-on-dark-dim)')}
          >中文</a>
        </span>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
