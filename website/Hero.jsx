/* global React, SFV9DesignSystem_636214 */
const { Button, Card, Eyebrow } = window.SFV9DesignSystem_636214;

function Hero({ onContact }) {
  const m = window.useIsMobile();
  return (
    <section style={{
      display: 'grid', gridTemplateColumns: m ? '1fr' : '1.1fr 0.9fr',
      gap: m ? 40 : 60, alignItems: 'center',
      padding: m ? '48px 20px' : '90px 60px',
      background: 'linear-gradient(160deg, #FFFFFF 0%, #F8F9FA 100%)',
    }}>
      <div>
        <Eyebrow>Federal GTM Strategy</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
          fontSize: m ? 34 : 56, lineHeight: 1.08, letterSpacing: '-0.5px',
          margin: '14px 0 0', color: 'var(--text-strong)',
        }}>
          Win the federal market{' '}
          <span style={{
            background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text',
            backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>without the guesswork.</span>
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: m ? 16 : 18, lineHeight: 1.6,
          color: 'var(--text-body)', margin: '24px 0 36px', maxWidth: 520,
        }}>
          Proven go-to-market playbooks for venture-backed companies standing up
          federal verticals. Twenty years of experience, on retainer.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Button iconRight="→" onClick={onContact}>Start a conversation</Button>
          <Button variant="secondary" href="#services">View services</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Card accent="coral" hover style={{ marginLeft: m ? 0 : 32 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, margin: 0, color: 'var(--text-strong)' }}>Proven Playbooks</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', margin: '8px 0 0', lineHeight: 1.55 }}>Run plays that have already won — no guesswork, no wasted cycles reinventing the federal motion.</p>
        </Card>
        <Card accent="blue" hover style={{ marginRight: m ? 0 : 32 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, margin: 0, color: 'var(--text-strong)' }}>Competitive Intelligence</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', margin: '8px 0 0', lineHeight: 1.55 }}>Deep market and agency analysis for informed positioning decisions.</p>
        </Card>
        <Card accent="coral" hover style={{ marginLeft: m ? 0 : 32 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, margin: 0, color: 'var(--text-strong)' }}>Partnership Development</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', margin: '8px 0 0', lineHeight: 1.55 }}>Strategic entry points and prime contractor relationships.</p>
        </Card>
      </div>
    </section>
  );
}
window.Hero = Hero;
