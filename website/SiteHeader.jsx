/* global React, SFV9DesignSystem_636214 */
const { Logo, Button } = window.SFV9DesignSystem_636214;

const NAV = ['Services', 'Approach', 'Apps'];

function SiteHeader({ onContact }) {
  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 60px', background: 'var(--paper)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <Logo size={32} src="assets/logo-mark.png" />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        {NAV.map((n) => (
          <a key={n} href={'#' + n.toLowerCase()} style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)',
            textDecoration: 'none', transition: 'color var(--dur-fast)',
          }}
          onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >{n}</a>
        ))}
        <Button size="sm" onClick={onContact}>Get Started</Button>
      </nav>
    </header>
  );
}
window.SiteHeader = SiteHeader;
