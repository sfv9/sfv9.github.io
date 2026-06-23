/* global React, SFV9DesignSystem_636214 */
const { Card, Eyebrow } = window.SFV9DesignSystem_636214;

const STEPS = [
  { n: '01', accent: 'blue', title: 'Map the terrain', body: 'We map your federal landscape — the agencies, programs, budgets, and buyers that actually matter for your category.' },
  { n: '02', accent: 'coral', title: 'Sharpen positioning', body: 'We craft differentiated messaging that lands with federal buyers and mission stakeholders — not generic gov-speak.' },
  { n: '03', accent: 'blue', title: 'Mobilize the motion', body: 'We broker prime and partner relationships and enable your team to run the plays that have already won.' },
];

function Approach() {
  const m = window.useIsMobile();
  return (
    <section id="approach" style={{ padding: m ? '56px 20px' : '90px 60px', background: 'var(--paper)' }}>
      <div style={{ textAlign: 'center', marginBottom: m ? 40 : 56 }}>
        <Eyebrow>How we work</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: m ? 30 : 42, letterSpacing: '-0.5px', margin: '12px 0 0', color: 'var(--text-strong)' }}>
          A proven approach, on retainer
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: m ? 16 : 18, color: 'var(--text-body)', maxWidth: 600, margin: '16px auto 0', lineHeight: 1.6 }}>
          Twenty years of federal GTM distilled into a repeatable motion we run alongside your team.
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
