/* ============================================
   GABRIEL REIS · PORTFÓLIO 2026 — MAIN JS
   ============================================ */

/* ===== NAV SCROLL STATE ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ===== HERO SPOTLIGHT & SPARKLES ===== */
const hero = document.getElementById('hero');

// Canvas para Partículas
const canvas = document.createElement('canvas');
canvas.id = 'sparkles-canvas';
canvas.style.position = 'absolute';
canvas.style.inset = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '1';
hero.appendChild(canvas);

const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
let isHovering = false;
let mouse = { x: 0, y: 0 };

function resize() {
  width = hero.clientWidth;
  height = hero.clientHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

class Sparkle {
  constructor(x, y) {
    this.x = x + (Math.random() - 0.5) * 160;
    this.y = y + (Math.random() - 0.5) * 160;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4 - 0.2;
    this.life = 0;
    this.maxLife = Math.random() * 0.6 + 0.4;
    this.decay = Math.random() * 0.01 + 0.01;
    this.fadingOut = false;
    this.color = Math.random() > 0.6 ? '#22D3EE' : '#FAFAFA';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (!this.fadingOut) {
      this.life += 0.05;
      if (this.life >= this.maxLife) this.fadingOut = true;
    } else {
      this.life -= this.decay;
    }
  }
  draw(ctx) {
    ctx.globalAlpha = Math.max(0, this.life);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }
}

function animateSparkles() {
  ctx.clearRect(0, 0, width, height);
  if (isHovering) {
    for (let i = 0; i < 2; i++) particles.push(new Sparkle(mouse.x, mouse.y));
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw(ctx);
    if (particles[i].life <= 0 && particles[i].fadingOut) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animateSparkles);
}
animateSparkles();

// Eventos de Mouse
hero.addEventListener('mousemove', (e) => {
  hero.classList.add('spotlight-on');
  const rect = hero.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;

  hero.style.setProperty('--mx', e.clientX + 'px');
  hero.style.setProperty('--my', e.clientY + 'px');

  isHovering = true;
});
hero.addEventListener('mouseleave', () => {
  hero.classList.remove('spotlight-on');
  isHovering = false;
});



/* ============================================
   PROJECTS DATA — Image / SaaS / IA / Design
   ============================================ */
const PROJECTS = [

  // ── IA ─────────────────────────────────────
  {
    id: 'banana-ai',
    title: 'Banana AI',
    category: 'ia',
    categoryLabel: 'IA',
    description: 'Assistente inteligente de nutrição. Análise calórica, log de refeições e planos alimentares personalizados com IA.',
    media: [
      { thumb: 'Projects/IA Systems/Banana AI.png', src: 'Projects/IA Systems/Banana AI.png' },
    ],
    tags: ['IA Generativa', 'Nutrição', 'SaaS'],
  },
  {
    id: 'fy-beginner',
    title: 'Fy Beginner',
    category: 'ia',
    categoryLabel: 'IA',
    description: 'Assistente financeiro com IA para iniciantes. Organiza finanças, explica conceitos e ajuda a tomar melhores decisões.',
    media: [
      { thumb: 'Projects/IA Systems/Fy Beginner.png', src: 'Projects/IA Systems/Fy Beginner.png' },
    ],
    tags: ['IA Generativa', 'Finanças', 'Chat'],
  },

  // ── SaaS ───────────────────────────────────
  {
    id: 'fynance-hub',
    title: 'Fynance Hub',
    category: 'saas',
    categoryLabel: 'SaaS',
    cover: 'Projects/New Fynance/46.png',
    description: 'Plataforma financeira SaaS com múltiplos assistentes IA especializados em finanças pessoais e investimentos.',
    media: [
      { thumb: 'Projects/New Fynance/43.png', src: 'Projects/New Fynance/43.png' },
      { thumb: 'Projects/New Fynance/44.png', src: 'Projects/New Fynance/44.png' },
      { thumb: 'Projects/New Fynance/46.png', src: 'Projects/New Fynance/46.png' },
      { thumb: 'Projects/New Fynance/47.png', src: 'Projects/New Fynance/47.png' },
      { thumb: 'Projects/New Fynance/48.png', src: 'Projects/New Fynance/48.png' },
      { thumb: 'Projects/New Fynance/50.png', src: 'Projects/New Fynance/50.png' },
      { thumb: 'Projects/New Fynance/51.png', src: 'Projects/New Fynance/51.png' },
      { thumb: 'Projects/New Fynance/53.png', src: 'Projects/New Fynance/53.png' },
      { thumb: 'Projects/New Fynance/54.png', src: 'Projects/New Fynance/54.png' },
      { thumb: 'Projects/New Fynance/55.png', src: 'Projects/New Fynance/55.png' },
      { thumb: 'Projects/New Fynance/56.png', src: 'Projects/New Fynance/56.png' },
      { thumb: 'Projects/New Fynance/57.png', src: 'Projects/New Fynance/57.png' },
      { thumb: 'Projects/New Fynance/star wars.png', src: 'Projects/New Fynance/star wars.png' },
    ],
    tags: ['SaaS', 'Finanças', 'Branding'],
  },

  // ── Design ─────────────────────────────────
  {
    id: 'fynance-rebrand',
    title: 'Fynance Rebrand',
    category: 'design',
    categoryLabel: 'Design',
    description: 'Rebrand completo da identidade visual Fynance — nova identidade, paleta de marca e direção criativa.',
    media: [
      { thumb: 'Projects/Old Fynance/feito.png', src: 'Projects/Old Fynance/feito.png' },
      { thumb: 'Projects/Old Fynance/12.png', src: 'Projects/Old Fynance/12.png' },
      { thumb: 'Projects/Old Fynance/36.png', src: 'Projects/Old Fynance/36.png' },
      { thumb: 'Projects/Old Fynance/carrossel.png', src: 'Projects/Old Fynance/carrossel.png' },
      { thumb: 'Projects/Old Fynance/feito (5).png', src: 'Projects/Old Fynance/feito (5).png' },
    ],
    tags: ['Branding', 'Identidade Visual', 'Motion'],
  },
  {
    id: 'kalled',
    title: 'Kalled Pistões',
    category: 'design',
    categoryLabel: 'Design',
    description: 'Identidade visual, mascote 3D e conteúdo digital para marca automotiva premium.',
    media: [
      { thumb: 'Projects/Kalled/19.png', src: 'Projects/Kalled/19.png' },
      { thumb: 'Projects/Kalled/20.png', src: 'Projects/Kalled/20.png' },
      { thumb: 'Projects/Kalled/29.png', src: 'Projects/Kalled/29.png' },
      { thumb: 'Projects/Kalled/40.png', src: 'Projects/Kalled/40.png' },
    ],
    tags: ['Branding', 'IA Generativa', '3D'],
  },
];

/* ============================================
   VIDEO PROJECTS DATA
   ============================================ */
const VIDEO_PROJECTS = [
  {
    id: 'fynance-videos',
    title: 'Fynance Vídeos',
    categoryLabel: 'Vídeo IA',
    description: 'Série de vídeos produzidos com IA para o ecossistema Fynance Hub — motion, narração e edição.',
    media: [
      { thumb: 'Projects/New Fynance/Thumbs/Thumb Video 1.png', src: 'Projects/New Fynance/01.mp4' },
      { thumb: 'Projects/New Fynance/Thumbs/Thumb Video 2.png', src: 'Projects/New Fynance/02.mp4' },
      { thumb: 'Projects/New Fynance/Thumbs/Thumb Video 3.png', src: 'Projects/New Fynance/03.mp4' },
      { thumb: 'Projects/New Fynance/47.png', src: 'Projects/New Fynance/04.mp4' },
      { thumb: 'Projects/New Fynance/48.png', src: 'Projects/New Fynance/05.mp4' },
      { thumb: 'Projects/New Fynance/50.png', src: 'Projects/New Fynance/06.mp4' },
      { thumb: 'Projects/New Fynance/51.png', src: 'Projects/New Fynance/07.mp4' },
      { thumb: 'Projects/New Fynance/53.png', src: 'Projects/New Fynance/08.mp4' },
      { thumb: 'Projects/New Fynance/54.png', src: 'Projects/New Fynance/09.mp4' },
    ],
    tags: ['Vídeo IA', 'Motion', 'Fynance'],
  },
  {
    id: 'lirani-fitness',
    title: 'Lirani — Fitness',
    categoryLabel: 'Vídeo IA',
    description: 'Vídeos curtos de treino e fitness produzidos com IA — roteiro, avatar 3D, narração e edição.',
    media: [
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/01 - Abdômen — Abdominal Todo Dia Não Define/01.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/01 - Abdômen — Abdominal Todo Dia Não Define/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/02 - Braços que Não Crescem/02.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/02 - Braços que Não Crescem/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/03 - Aquecimento/03.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/03 - Aquecimento/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/05 - Suas Pernas Não Crescem_/05.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/05 - Suas Pernas Não Crescem_/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/06 - Descanso Entre Séries/06.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/06 - Descanso Entre Séries/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/07 - Progressão de Carga/07.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/07 - Progressão de Carga/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/08 - Glúteos/08.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/08 - Glúteos/vid 08.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/09 - Treino em Casa Funciona_/09.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/09 - Treino em Casa Funciona_/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Esposa/10 - Recomposição Corporal/10.png', src: 'Projects/Lirani/01 - Vídeos Finais/Esposa/10 - Recomposição Corporal/vid.mp4' },
    ],
    tags: ['Vídeo IA', 'Fitness', 'Reels'],
  },
  {
    id: 'lirani-clinica',
    title: 'Lirani — Clínica',
    categoryLabel: 'Vídeo IA',
    description: 'Vídeos educativos sobre peptídeos e compostos para clínica de saúde e estética, gerados com IA.',
    media: [
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/01 -GHK-Cu/Whisk_2b17cf6d92b42a892624cb2a017edd00dr (1).png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/01 -GHK-Cu/Vid 1.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/02 — KPV/Whisk_69afc8104e4d4abaddd45bba6965da29dr.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/02 — KPV/vid 2.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/03 — Retatrutida/Whisk_69173aef83fe7368b0f4cdfec4477395dr.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/03 — Retatrutida/vid 3.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/04 — Tirzepatida/Whisk_7e7c0a6b2360d9eaf984098124cde056dr.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/04 — Tirzepatida/vid 04.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/05 — GH Frag/Whisk_74aae7df11bc7cb8ad4453d71f5d4aa9dr.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/05 — GH Frag/vid 05.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/06 — AOD-9604/Whisk_f9e8c4310cca2a6ada54f932835d4886dr.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/06 — AOD-9604/06.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/07 — SEMA-X + SELAN-K/Whisk_c1a6b7d9b50b52eb78848ca4112132ecdr.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/07 — SEMA-X + SELAN-K/vid 07.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/08 - SLU-PP-332/Gemini_Generated_Image_9mseiy9mseiy9mse.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/08 - SLU-PP-332/vid 08.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/09 - TB-500/Whisk_f1f20f1ea10f1e58fe34ccb55e1b3716dr.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/09 - TB-500/vid.mp4' },
      { thumb: 'Projects/Lirani/01 - Vídeos Finais/Lirani/10 -  IGF-1 LR3/01.png', src: 'Projects/Lirani/01 - Vídeos Finais/Lirani/10 -  IGF-1 LR3/vid.mp4' },
    ],
    tags: ['Vídeo IA', 'Saúde', 'Reels'],
  },
  {
    id: 'pessoais',
    title: 'Projetos Pessoais',
    categoryLabel: 'Vídeo IA',
    description: 'Vídeos criativos pessoais gerados com IA — experimentos de motion, narrativa e edição.',
    media: [
      { thumb: 'Projects/Pessoais/Thumbs/Thumb 1.png', src: 'Projects/Pessoais/01.mp4' },
      { thumb: 'Projects/Pessoais/Thumbs/Thumb 2.png', src: 'Projects/Pessoais/02.mp4' },
      { thumb: 'Projects/Pessoais/Thumbs/Thumb 3.png', src: 'Projects/Pessoais/03.mp4' },
      { thumb: null, src: 'Projects/Pessoais/04.mp4' },
      { thumb: null, src: 'Projects/Pessoais/05.mp4' },
    ],
    tags: ['Vídeo IA', 'Criativo', 'Personal'],
  },
];

/* ===== HELPER ===== */
function isVideo(src) {
  return /\.(mp4|webm)$/i.test(src);
}

/* ============================================
   SLIDESHOW — ANIMATED PROJECT LIST
   ============================================ */
const grid = document.getElementById('project-grid');

/* Split a string into animated character spans */
function splitText(text) {
  return [...text].map((ch, i) => {
    if (ch === ' ') return '<span class="char-space"> </span>';
    const d = (i * 0.028).toFixed(3);
    return `<span class="char" style="--d:${d}s"><span class="char-a">${ch}</span><span class="char-b">${ch}</span></span>`;
  }).join('');
}

let ssActiveIndex = 0;
let ssCurrentList = [];

function renderSlideshow(filter) {
  const list = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  ssCurrentList = list;
  ssActiveIndex = 0;

  if (!list.length) {
    grid.innerHTML = '<p style="color:var(--g2);padding:40px 0">Nenhum projeto encontrado.</p>';
    return;
  }

  /* ── Build HTML ── */
  const leftItems = list.map((p, i) => {
    const countTxt = `${p.media.length} ${p.media.every(m => isVideo(m.src)) ? 'vídeos' : 'imagens'}`;
    const num = String(i + 1).padStart(2, '0');
    return `
      <div class="ss-item${i === 0 ? ' active' : ''}" data-index="${i}" tabindex="0" role="button" aria-label="Ver projeto ${p.title}">
        <span class="ss-num">${num}</span>
        <div class="ss-content">
          <span class="ss-cat">${p.categoryLabel}</span>
          <div class="ss-title">${splitText(p.title)}</div>
          <div class="ss-tags">
            ${p.tags.map(t => `<span class="ss-tag">${t}</span>`).join('')}
            <span class="ss-tag">${countTxt}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  const frames = list.map((p, i) => {
    const thumbSrc = p.cover || p.media[0]?.thumb || null;
    const imgHTML = thumbSrc
      ? `<img src="${thumbSrc}" alt="${p.title}" loading="lazy">`
      : `<div class="ss-frame-ph"><svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>`;
    return `
      <div class="ss-frame${i === 0 ? ' active' : ''}" data-index="${i}">
        ${imgHTML}
      </div>`;
  }).join('');

  const firstP = list[0];
  const firstCount = `${firstP.media.length} ${firstP.media.every(m => isVideo(m.src)) ? 'vídeos' : 'imagens'}`;

  grid.innerHTML = `
    <div class="slideshow">
      <div class="ss-left">${leftItems}</div>
      <div class="ss-right">
        <div class="ss-img-wrap">
          ${frames}
          <div class="ss-img-overlay">
            <span class="ss-badge" id="ss-badge">${firstCount}</span>
            <button class="ss-img-cta" id="ss-open-btn">Ver galeria →</button>
          </div>
        </div>
        <div class="ss-caption">
          <p class="ss-desc" id="ss-desc">${firstP.description}</p>
        </div>
      </div>
    </div>`;

  attachSlideshowEvents();
}

function attachSlideshowEvents() {
  const items = grid.querySelectorAll('.ss-item');
  const frames = grid.querySelectorAll('.ss-frame');
  const descEl = document.getElementById('ss-desc');
  const badgeEl = document.getElementById('ss-badge');
  const openBtn = document.getElementById('ss-open-btn');

  function activate(index) {
    if (index === ssActiveIndex && grid.querySelector('.ss-item.active')) return;
    items[ssActiveIndex]?.classList.remove('active');
    frames[ssActiveIndex]?.classList.remove('active');

    ssActiveIndex = index;
    items[index].classList.add('active');
    frames[index].classList.add('active');

    const p = ssCurrentList[index];
    const countTxt = `${p.media.length} ${p.media.every(m => isVideo(m.src)) ? 'vídeos' : 'imagens'}`;
    if (descEl) descEl.textContent = p.description;
    if (badgeEl) badgeEl.textContent = countTxt;
  }

  items.forEach((item, i) => {
    item.addEventListener('mouseenter', () => activate(i));
    item.addEventListener('click', () => openLightbox(ssCurrentList[i]));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(ssCurrentList[i]); }
    });
  });

  const ssImgWrap = grid.querySelector('.ss-img-wrap');
  ssImgWrap?.addEventListener('click', () => openLightbox(ssCurrentList[ssActiveIndex]));
  openBtn?.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(ssCurrentList[ssActiveIndex]); });
}

renderSlideshow('all');

/* ============================================
   FILTER BUTTONS
   ============================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderSlideshow(btn.dataset.filter);
  });
});

/* ============================================
   RENDER VIDEO DISPLAY CARDS
   ============================================ */
const videoGrid = document.getElementById('video-grid');

function buildVideoItem(project) {
  const item = document.createElement('div');
  item.className = 'vitem';
  item.tabIndex = 0;
  item.ariaLabel = `Projeto de vídeo: ${project.title}`;

  // Build stacked cards: show up to 3 thumbnails (back→front order)
  const count = Math.min(3, project.media.length);
  let vstackHTML = '<div class="vstack">';

  // Add back cards first (they appear beneath in the grid-area stack)
  for (let i = count - 1; i >= 0; i--) {
    const thumb = project.media[i].thumb;
    const thumbContent = thumb
      ? `<img src="${thumb}" alt="" loading="lazy">`
      : `<div class="v-ph"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>`;

    // Add play button only on front card (i === 0)
    const play = i === 0
      ? `<div class="vcard-play"><svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>`
      : '';

    vstackHTML += `<div class="vcard">${thumbContent}${play}</div>`;
  }
  vstackHTML += '</div>';

  const tagsHTML = project.tags?.length
    ? `<div class="vitem-tags">${project.tags.map(t => `<span class="vitem-tag">${t}</span>`).join('')}</div>`
    : '';

  item.innerHTML = `
    ${vstackHTML}
    <div class="vitem-body">
      <span class="vitem-cat">${project.categoryLabel}</span>
      <h3 class="vitem-title">${project.title}</h3>
      ${tagsHTML}
      <p class="vitem-desc">${project.description}</p>
      <span class="vitem-count">${project.media.length} vídeos</span>
    </div>
  `;

  const open = () => openLightbox(project);
  item.addEventListener('click', open);
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });

  return item;
}

VIDEO_PROJECTS.forEach(p => videoGrid.appendChild(buildVideoItem(p)));

/* ============================================
   LIGHTBOX — images + videos
   ============================================ */
let lbMedia = [];
let lbIndex = 0;

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbVideoEl = document.getElementById('lb-video');
const lbCounter = document.getElementById('lb-counter');
const lbPrev = document.getElementById('lb-prev');
const lbNext = document.getElementById('lb-next');
const lbClose = document.getElementById('lb-close');

function openLightbox(project) {
  lbMedia = project.media;
  lbIndex = 0;
  refreshLb();
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
  lbVideoEl.pause();
  lbVideoEl.removeAttribute('src');
  lbVideoEl.load();
}

function refreshLb() {
  const item = lbMedia[lbIndex];
  const isVid = isVideo(item.src);
  const single = lbMedia.length <= 1;

  lbCounter.textContent = `${lbIndex + 1} / ${lbMedia.length}`;
  lbPrev.style.visibility = single ? 'hidden' : 'visible';
  lbNext.style.visibility = single ? 'hidden' : 'visible';

  if (isVid) {
    lbImg.style.display = 'none';
    lbVideoEl.style.display = 'block';
    lbVideoEl.src = item.src;
    lbVideoEl.load();
    lbVideoEl.play().catch(() => { });
  } else {
    lbImg.style.display = 'block';
    lbVideoEl.style.display = 'none';
    lbVideoEl.pause();
    lbVideoEl.removeAttribute('src');
    lbImg.src = item.src;
    lbImg.alt = `Imagem ${lbIndex + 1} de ${lbMedia.length}`;
  }
}

function prevItem() {
  lbVideoEl.pause();
  lbIndex = (lbIndex - 1 + lbMedia.length) % lbMedia.length;
  refreshLb();
}
function nextItem() {
  lbVideoEl.pause();
  lbIndex = (lbIndex + 1) % lbMedia.length;
  refreshLb();
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', e => { e.stopPropagation(); prevItem(); });
lbNext.addEventListener('click', e => { e.stopPropagation(); nextItem(); });
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevItem();
  if (e.key === 'ArrowRight') nextItem();
});

// Touch swipe
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
lightbox.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) diff > 0 ? nextItem() : prevItem();
}, { passive: true });
