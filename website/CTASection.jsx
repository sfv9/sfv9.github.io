/* global React, SFV9DesignSystem_636214 */
const { Button, Eyebrow } = window.SFV9DesignSystem_636214;

function CTASection({ onContact }) {
  const m = window.useIsMobile();
  return (
    <section style={{
      margin: m ? '40px 20px 64px' : '60px 60px 90px',
      padding: m ? '48px 24px' : '72px 48px', textAlign: 'center',
      borderRadius: 'var(--radius-xl)', background: 'var(--blue-50)',
      border: '1px solid var(--blue-100)',
    }}>
      <Eyebrow>Work with SFV9</Eyebrow>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: m ? 26 : 40,
        letterSpacing: '-0.5px', margin: '12px 0 16px', color: 'var(--text-strong)',
      }}>Build your federal strategy</h2>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: m ? 16 : 18, color: 'var(--text-body)',
        maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.6,
      }}>
        Strategic intelligence, competitive positioning, and sales enablement —
        customized to your federal market goals.
      </p>
      <Button size="lg" iconRight="→" onClick={onContact}>Start a conversation</Button>
    </section>
  );
}
window.CTASection = CTASection;
