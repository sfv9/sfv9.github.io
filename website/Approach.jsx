/* global React, SFV9DesignSystem_636214 */
const { Card, Eyebrow } = window.SFV9DesignSystem_636214;

const STEPS = [
  { n: '01', accent: 'blue', title: 'Configured to your business', body: 'FRIS builds a revenue brain around your company — your capabilities, contract vehicles, and win themes — so every recommendation fits how you actually sell.' },
  { n: '02', accent: 'coral', title: 'A proven research playbook', body: 'Start pursuing opportunities from day one. Battle-tested research and qualification plays mean no ramp-up — just the next move.' },
  { n: '03', accent: 'blue', title: 'Opportunities pushed to you', body: 'The right pursuits land in your inbox pre-emptively — matched, scored, and briefed — before your competitors are even looking.' },
];

function Approach() {
  const m = window.useIsMobile();
  return (
    <section id="approach" style={{ padding: m ? '56px 20px' : '90px 60px', background: 'var(--paper)' }}>
      <div style={{ textAlign: 'center', marginBottom: m ? 40 : 56 }}>
        <Eyebrow>Powered by FRIS</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: m ? 30 : 42, letterSpacing: '-0.5px', margin: '12px 0 0', color: 'var(--text-strong)' }}>
          A custom federal revenue engine
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: m ? 16 : 18, color: 'var(--text-body)', maxWidth: 620, margin: '16px auto 0', lineHeight: 1.6 }}>
          Every retainer runs on FRIS — a federal revenue intelligence platform configured to your business — so you're going after real opportunities from day one.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 28, maxWidth: 1100, margin: '0 auto' }}>
        {STEPS.map((s) => (
          <Card key={s.n} accent={s.accent} hover padding="var(--space-6)">
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: s.accent === 'coral' ? 'var(--signal)' : 'var(--accent)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, marginBottom: 18,
              boxShadow: s.accent === 'coral' ? 'var(--shadow-coral)' : 'var(--shadow-blue)',
            }}>{s.n}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, margin: '0 0 10px', color: 'var(--text-strong)' }}>{s.title}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{s.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
window.Approach = Approach;
