/* global React, SFV9DesignSystem_636214 */
const { Card, Eyebrow } = window.SFV9DesignSystem_636214;

const SERVICES = [
  { accent: 'blue', icon: '⌖', title: 'Positioning', body: 'Craft differentiated value and messaging that resonates with federal buyers and mission stakeholders.' },
  { accent: 'coral', icon: '⇄', title: 'Partnership Development', body: 'Identify and broker strategic relationships with primes, integrators, and key federal stakeholders.' },
  { accent: 'blue', icon: '◎', title: 'Sales Enablement', body: 'Battle cards, win/loss analysis, competitive intelligence, and team enablement for federal deals.' },
];

function Services() {
  return (
    <section id="services" style={{ padding: '90px 60px', background: 'var(--ground)' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow>What we do</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 42, letterSpacing: '-0.5px', margin: '12px 0 0', color: 'var(--text-strong)' }}>
          Federal GTM, end to end
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, maxWidth: 1100, margin: '0 auto' }}>
        {SERVICES.map((s) => (
          <Card key={s.title} accent={s.accent} hover padding="var(--space-6)">
            <div style={{
              width: 48, height: 48, borderRadius: 'var(--radius-md)',
              background: s.accent === 'coral' ? 'var(--signal)' : 'var(--accent)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, marginBottom: 18,
              boxShadow: s.accent === 'coral' ? 'var(--shadow-coral)' : 'var(--shadow-blue)',
            }}>{s.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, margin: '0 0 10px', color: 'var(--text-strong)' }}>{s.title}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{s.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
window.Services = Services;
