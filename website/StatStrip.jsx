/* global React, SFV9DesignSystem_636214 */
const { Stat } = window.SFV9DesignSystem_636214;

const STATS = [
  { value: '20+', label: 'Years Federal Experience', tone: 'blue' },
  { value: '$3B+', label: 'Pipeline Influenced', tone: 'coral' },
  { value: '50+', label: 'Federal Agencies Mapped', tone: 'blue' },
  { value: '$500M+', label: 'Contracts Won', tone: 'coral' },
];

function StatStrip() {
  const m = window.useIsMobile();
  return (
    <section style={{ padding: m ? '0 20px' : '0 60px', margin: '0 0 0' }}>
      <div style={{
        background: 'var(--gradient-ink)', borderRadius: 'var(--radius-xl)',
        padding: m ? '32px 24px' : '56px 48px', display: 'grid',
        gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: m ? 28 : 32, boxShadow: 'var(--shadow-xl)', transform: 'translateY(-40px)',
      }}>
        {STATS.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} tone={s.tone}
            style={{ color: 'var(--text-on-dark)' }} />
        ))}
      </div>
    </section>
  );
}
window.StatStrip = StatStrip;
