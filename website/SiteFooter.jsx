/* global React, SFV9DesignSystem_636214 */
const { Logo } = window.SFV9DesignSystem_636214;

const COLS = [
  { h: 'Services', links: ['Positioning', 'Partnership Development', 'Sales Enablement'] },
  { h: 'Company', links: ['Apps', 'Contact'] },
];

function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--gradient-ink)', color: 'var(--text-on-dark)',
      padding: '56px 60px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: 48,
    }}>
      <div>
        <Logo size={28} variant="light" lightSrc="assets/logo-mark-light.png" />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-dark-dim)', margin: '16px 0 0', lineHeight: 1.6, maxWidth: 260 }}>
          GTM strategy consulting for venture-backed companies building federal verticals.
        </p>
      </div>
      {COLS.map((c) => (
        <div key={c.h}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', margin: '0 0 16px', color: '#fff' }}>{c.h}</h4>
          {c.links.map((l) => (
            <a key={l} href="#" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-dark-dim)', textDecoration: 'none', marginBottom: 12 }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-on-dark-dim)')}
            >{l}</a>
          ))}
        </div>
      ))}
      <div>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', margin: '0 0 16px', color: '#fff' }}>Get in touch</h4>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-on-dark-dim)', margin: 0 }}>info@sfv9.com</p>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
