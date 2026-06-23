/* global React, SFV9DesignSystem_636214 */
const { Eyebrow, Badge } = window.SFV9DesignSystem_636214;

const MARKETS = [
  { label: 'Five Eyes', tone: 'blue' },
  { label: 'NATO', tone: 'coral' },
  { label: 'AUKUS', tone: 'blue' },
  { label: 'Japan', tone: 'coral' },
  { label: 'SE Asia', tone: 'blue' },
  { label: 'Taiwan', tone: 'coral' },
];

function AlliedMarkets() {
  const m = window.useIsMobile();
  return (
    <section id="markets" style={{ padding: m ? '56px 20px 64px' : '80px 60px 90px', background: 'var(--paper)', textAlign: 'center' }}>
      <Eyebrow>Allied markets</Eyebrow>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: m ? 28 : 42,
        letterSpacing: '-0.5px', margin: '12px 0 0', color: 'var(--text-strong)',
      }}>Federal doesn't stop at the Beltway</h2>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: m ? 16 : 18, color: 'var(--text-body)',
        maxWidth: 620, margin: '18px auto 36px', lineHeight: 1.6,
      }}>
        Two decades selling into and working across allied governments. When your mission
        crosses borders, you'll know how each buyer actually buys.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 640, margin: '0 auto' }}>
        {MARKETS.map((mk) => (
          <Badge key={mk.label} tone={mk.tone} style={{ fontSize: 13, padding: '8px 14px' }}>{mk.label}</Badge>
        ))}
      </div>
    </section>
  );
}
window.AlliedMarkets = AlliedMarkets;
