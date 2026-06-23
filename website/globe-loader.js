/* SFV9 intro globe loader — one-shot overlay that plays the globe→logo
   animation once, then fades out to reveal the page underneath.
   Requires d3 + topojson-client loaded first. */
(function () {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- inject styles ----
  const style = document.createElement('style');
  style.textContent = `
    #sfv9-loader{position:fixed;inset:0;z-index:9999;background:#F8F9FA;
      display:flex;align-items:center;justify-content:center;
      opacity:1;transition:opacity .6s cubic-bezier(.16,1,.3,1);}
    #sfv9-loader.done{opacity:0;}
    #sfv9-loader .loader{position:relative;width:200px;height:200px;perspective:720px;}
    #sfv9-loader #globe{position:absolute;inset:0;width:200px;height:200px;z-index:2;
      transform-origin:50% 50%;will-change:transform,opacity;}
    #sfv9-loader .whirl{position:absolute;top:50%;left:50%;width:252px;height:252px;
      margin:-126px 0 0 -126px;z-index:1;border-radius:50%;
      background:conic-gradient(from 0deg,
        rgba(37,99,235,0) 0deg,rgba(37,99,235,0) 55deg,rgba(37,99,235,.55) 150deg,
        rgba(96,151,250,.7) 200deg,rgba(232,93,109,.65) 250deg,
        rgba(232,93,109,0) 320deg,rgba(37,99,235,0) 360deg);
      -webkit-mask:radial-gradient(closest-side,transparent 73%,#000 78%,#000 90%,transparent 96%);
              mask:radial-gradient(closest-side,transparent 73%,#000 78%,#000 90%,transparent 96%);
      filter:blur(1.5px);will-change:transform,opacity;}
    #sfv9-loader .comet-orbit{position:absolute;top:50%;left:50%;width:0;height:0;z-index:3;will-change:transform;}
    #sfv9-loader .arrow{position:absolute;left:-15px;top:-122px;width:30px;height:30px;
      transform-origin:50% 50%;
      filter:drop-shadow(0 0 7px rgba(37,99,235,.8)) drop-shadow(0 2px 4px rgba(15,15,15,.25));}
    #sfv9-loader .arrow svg{display:block;width:100%;height:100%;}
    #sfv9-loader #logo{position:absolute;top:50%;left:50%;width:168px;height:auto;
      margin:-100px 0 0 -84px;transform-origin:50% 50%;transform-style:preserve-3d;
      backface-visibility:hidden;z-index:5;opacity:0;will-change:transform,opacity,filter;pointer-events:none;}
  `;
  document.head.appendChild(style);

  // ---- inject markup ----
  const overlay = document.createElement('div');
  overlay.id = 'sfv9-loader';
  overlay.setAttribute('role', 'img');
  overlay.setAttribute('aria-label', 'Loading');
  overlay.innerHTML = `
    <div class="loader">
      <div class="whirl" id="sfv9-whirl"></div>
      <div class="comet-orbit" id="sfv9-cometOrbit"><div class="arrow" id="sfv9-arrow"><svg viewBox="0 0 24 24"><path d="M12 1.5 L21 21 L12 16 L3 21 Z" fill="#2563EB"/></svg></div></div>
      <canvas id="globe" width="400" height="400"></canvas>
      <img id="logo" src="assets/logo-mark.png" alt="">
    </div>`;
  document.body.appendChild(overlay);

  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    overlay.classList.add('done');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    setTimeout(() => overlay.remove(), 900);
  }
  let dismissed = false;
  // hard safety: never let the loader block the page
  setTimeout(dismiss, 7000);

  // reduced-motion: skip the animation entirely
  if (reduce || typeof d3 === 'undefined') { dismiss(); return; }

  const SIZE = 200;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = overlay.querySelector('#globe');
  canvas.width = SIZE * dpr;
  canvas.height = SIZE * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const whirlEl = overlay.querySelector('#sfv9-whirl');
  const cometEl = overlay.querySelector('#sfv9-cometOrbit');
  const arrowEl = overlay.querySelector('#sfv9-arrow');
  const logoEl = overlay.querySelector('#logo');
  const ARROW_ANGLE = 45;
  const ARROW_R = 107;
  const ARROW_TARGET_X = 60;
  const ARROW_TARGET_Y = -75;

  const projection = d3.geoOrthographic()
    .scale(SIZE / 2 - 3).translate([SIZE / 2, SIZE / 2]).clipAngle(90);
  const path = d3.geoPath(projection, ctx);
  const graticule = d3.geoGraticule10();

  const ocean = ctx.createRadialGradient(
    SIZE * 0.40, SIZE * 0.36, SIZE * 0.12, SIZE * 0.50, SIZE * 0.50, SIZE * 0.55);
  ocean.addColorStop(0, '#FFFFFF');
  ocean.addColorStop(1, '#E7EEFB');

  const ALLIES = new Set([
    'united states of america','canada','united kingdom','france','germany',
    'italy','spain','netherlands','belgium','luxembourg','portugal','norway',
    'denmark','iceland','poland','czechia','czech republic','slovakia','hungary',
    'romania','bulgaria','greece','turkey','türkiye','slovenia','croatia',
    'estonia','latvia','lithuania','albania','montenegro','north macedonia',
    'macedonia','finland','sweden','australia','new zealand','japan',
    'south korea','korea','republic of korea','israel'
  ]);
  const isAlly = (f) => ALLIES.has(String(f.properties && f.properties.name || '').toLowerCase());

  let landAllies = [], landOther = [], ready = false;

  function draw() {
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.beginPath(); path({ type: 'Sphere' }); ctx.fillStyle = ocean; ctx.fill();
    ctx.beginPath(); path(graticule); ctx.lineWidth = 0.5; ctx.strokeStyle = 'rgba(37,99,235,0.07)'; ctx.stroke();
    if (ready) {
      ctx.beginPath(); for (const f of landOther) path(f);
      ctx.fillStyle = '#DBE0E6'; ctx.fill(); ctx.lineWidth = 0.4; ctx.strokeStyle = '#F4F6F8'; ctx.stroke();
      ctx.beginPath(); for (const f of landAllies) path(f);
      ctx.fillStyle = '#DBE0E6'; ctx.fill(); ctx.lineWidth = 0.4; ctx.strokeStyle = '#F4F6F8'; ctx.stroke();
    }
    ctx.beginPath(); path({ type: 'Sphere' }); ctx.lineWidth = 1; ctx.strokeStyle = '#C9D2DD'; ctx.stroke();
  }

  // ---- one-shot timeline ----
  const SPIN_END = 2400, FINALE_END = 3350, FADE_START = 3950;
  const easeInOut = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const easeIn = (t) => t*t*t;
  const clamp01 = (t) => Math.max(0, Math.min(1, t));

  const US_LON = 98.5, US_LAT = -38, TURNS = 2;
  let lon = US_LON, whirl = 0, last = performance.now();
  const start = performance.now();

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const t = now - start;

    let whirlSpeed = 55;
    if (t > SPIN_END && t <= FINALE_END) {
      whirlSpeed = 55 + 240 * easeIn((t - SPIN_END) / (FINALE_END - SPIN_END));
    }
    whirl = (whirl + whirlSpeed * dt) % 360;

    const q = clamp01(t / FINALE_END);
    lon = US_LON + TURNS * 360 * (0.25 * q + 0.75 * easeIn(q));
    projection.rotate([lon, US_LAT, 0]);
    draw();

    let globeScale = 1, globeOpacity = 1;
    let logoScale = 0.3, logoOpacity = 0, logoRotY = -135, logoRotX = 22;
    let whirlScale = 1, whirlOpacity = 1;

    if (t <= SPIN_END) {
      whirlOpacity = easeOut(clamp01(t / 600));
    } else if (t <= FINALE_END) {
      const p = (t - SPIN_END) / (FINALE_END - SPIN_END);
      const e = easeInOut(p), eo = easeOut(p);
      globeScale = 1 - 0.78 * easeIn(p);
      globeOpacity = 1 - easeIn(clamp01((p - 0.25) / 0.5));
      logoOpacity = easeOut(clamp01((p - 0.12) / 0.5));
      logoScale = 0.3 + 0.7 * eo;
      logoRotY = -135 * (1 - eo);
      logoRotX = 22 * (1 - eo);
      whirlScale = 1 + 0.18 * e;
      whirlOpacity = 1 - easeIn(clamp01((p - 0.4) / 0.6));
    } else {
      globeOpacity = 0; globeScale = 0.22;
      logoOpacity = 1; logoScale = 1; logoRotY = 0; logoRotX = 0;
      whirlOpacity = 0;
    }

    canvas.style.opacity = globeOpacity;
    canvas.style.transform = `scale(${globeScale})`;
    logoEl.style.opacity = logoOpacity;
    logoEl.style.transform = `rotateX(${logoRotX}deg) rotateY(${logoRotY}deg) scale(${logoScale})`;
    const tilt = Math.min(1, (Math.abs(logoRotY) + Math.abs(logoRotX)) / 90);
    logoEl.style.filter = tilt > 0.02
      ? `drop-shadow(${-logoRotY * 0.12}px ${8 + logoRotX * 0.3}px ${10 + 14 * tilt}px rgba(15,15,15,${0.10 + 0.22 * tilt}))`
      : 'none';
    whirlEl.style.opacity = whirlOpacity;
    whirlEl.style.transform = `rotate(${whirl}deg) scale(${whirlScale})`;

    const orbitRad = (whirl + 150) * Math.PI / 180;
    let ax = ARROW_R * Math.sin(orbitRad);
    let ay = -ARROW_R * Math.cos(orbitRad);
    let arrowOpacity, arrowScale = 1;
    if (t <= SPIN_END) {
      arrowOpacity = easeOut(clamp01(t / 600));
    } else if (t <= FINALE_END) {
      const p = (t - SPIN_END) / (FINALE_END - SPIN_END);
      const m = easeInOut(clamp01(p / 0.8));
      ax += (ARROW_TARGET_X - ax) * m;
      ay += (ARROW_TARGET_Y - ay) * m;
      arrowScale = 1 - 0.30 * m;
      arrowOpacity = 1 - easeIn(clamp01((p - 0.62) / 0.38));
    } else {
      arrowOpacity = 0;
    }
    cometEl.style.opacity = arrowOpacity;
    cometEl.style.transform = `translate(${ax}px, ${ay + ARROW_R}px)`;
    arrowEl.style.transform = `rotate(${ARROW_ANGLE}deg) scale(${arrowScale})`;

    if (t >= FADE_START) { dismiss(); return; }
    requestAnimationFrame(frame);
  }

  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(r => r.json())
    .then(world => {
      const feats = topojson.feature(world, world.objects.countries).features;
      landAllies = feats.filter(isAlly);
      landOther = feats.filter(f => !isAlly(f));
      ready = true;
    })
    .catch(() => { ready = false; });

  requestAnimationFrame(frame);
})();
