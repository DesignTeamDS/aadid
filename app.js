/* AADID \u2014 comportamento partilhado do prot\u00f3tipo (fonte leg\u00edvel).
   O ficheiro publicado app.js \u00e9 gerado a partir deste (caracteres especiais em \u escapes).
   No WordPress: header/footer v\u00eam do Theme Builder; atividades, not\u00edcias, documentos e parceiros de CPT/Posts + Loop Grid. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ico = {
    arr: '<span class="arr" aria-hidden="true">\u2192</span>',
    dl: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 11v6m0 0-2.5-2.5M12 17l2.5-2.5"/></svg>',
    burger: '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 1h18M1 7h18M1 13h12"/></svg>',
    chev: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>',
    fb: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z"/></svg>',
    ig: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
    li: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.8H3.6V20h2.9zM5 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5 4m15.4 9.6c0-3-1.6-4.9-4.2-4.9-1.6 0-2.6.9-3 1.6V8.8H10.3V20h2.9v-5.9c0-1.5.6-2.6 2-2.6s1.9 1.1 1.9 2.6V20h2.9z"/></svg>'
  };

  /* ---------- Navega\u00e7\u00e3o ---------- */
  const SOBRE = [
    ['historia', 'Hist\u00f3ria', 'historia.html'],
    ['missao', 'Miss\u00e3o, Vis\u00e3o e Valores', 'historia.html#missao'],
    ['objetivos', 'Objetivos', 'historia.html#objetivos'],
    ['orgaos-sociais', '\u00d3rg\u00e3os Sociais', 'orgaos-sociais.html'],
    ['planos', 'Planos de Atividades', 'planos-de-atividades.html'],
    ['relatorios', 'Relat\u00f3rios de Contas', 'relatorios-de-contas.html'],
    ['estatutos', 'Estatutos', 'estatutos.html'],
    ['organigrama', 'Organigrama', 'organigrama.html']
  ];
  const NAV = [
    ['sobre-nos', 'Sobre n\u00f3s', null, SOBRE],
    ['o-que-fazemos', 'O que fazemos', 'o-que-fazemos.html'],
    ['evolucao', 'A Evolu\u00e7\u00e3o', 'evolucao.html'],
    ['noticias', 'Not\u00edcias', 'noticias.html'],
    ['parceiros', 'Parceiros', 'parceiros.html'],
    ['contactos', 'Contactos', 'contactos.html']
  ];
  const SOCIAL = [
    ['Facebook', 'https://www.facebook.com/AADID-917259318326247/', ico.fb],
    ['Instagram', '#', ico.ig],
    ['LinkedIn', '#', ico.li]
  ];

  const hdrSlot = $('#site-header');
  const page = hdrSlot ? hdrSlot.dataset.page : '';
  const section = hdrSlot ? (hdrSlot.dataset.section || page) : '';
  if (hdrSlot) {
    hdrSlot.className = 'hdr';
    const item = ([k, t, h, sub]) => {
      const cur = k === section ? ' aria-current="page"' : '';
      if (!sub) return `<li><a class="nav__link" href="${h}"${cur}>${t}</a></li>`;
      return `<li class="has-sub">
        <button class="nav__link nav__btn${k === section ? ' is-current' : ''}" type="button" aria-expanded="false" aria-controls="sub-${k}">${t}${ico.chev}</button>
        <ul class="sub" id="sub-${k}">${sub.map(([sk, st, sh]) => `<li><a href="${sh}"${sk === page ? ' aria-current="page"' : ''}>${st}</a></li>`).join('')}</ul>
      </li>`;
    };
    hdrSlot.innerHTML = `
      <div class="wrap"><div class="hdr__in">
        <a class="logo" href="index.html" aria-label="AADID, p\u00e1gina inicial"><img src="img/logo-aadid-marca.png" alt="AADID" width="185" height="53"></a>
        <nav class="nav" id="nav" aria-label="Principal"><ul class="nav__list">${NAV.map(item).join('')}<li class="nav__cta"><a class="btn" href="como-ajudar.html"${section === 'como-ajudar' ? ' aria-current="page"' : ''}>Como ajudar ${ico.arr}</a></li></ul></nav>
        <div class="hdr__cta"><a class="btn" href="como-ajudar.html"${section === 'como-ajudar' ? ' aria-current="page"' : ''}>Como ajudar ${ico.arr}</a></div>
        <button class="burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu">${ico.burger}</button>
      </div></div>`;
    const burger = $('#burger'), nav = $('#nav');
    const onScroll = () => hdrSlot.classList.toggle('is-scrolled', scrollY > 40);
    addEventListener('scroll', onScroll, {passive: true}); onScroll();
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    $$('.nav__btn').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      const li = b.closest('.has-sub'), open = !li.classList.contains('is-open');
      li.classList.toggle('is-open', open); b.setAttribute('aria-expanded', open);
    }));
    document.addEventListener('click', e => { if (!e.target.closest('.has-sub')) $$('.has-sub.is-open').forEach(li => { li.classList.remove('is-open'); li.querySelector('.nav__btn').setAttribute('aria-expanded', false); }); });
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      $$('.has-sub.is-open').forEach(li => { li.classList.remove('is-open'); li.querySelector('.nav__btn').setAttribute('aria-expanded', false); });
      if (nav.classList.contains('is-open')) { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', false); burger.focus(); }
    });
  }

  /* ---------- Sub-navega\u00e7\u00e3o "Sobre n\u00f3s" ---------- */
  const subSlot = $('#subnav');
  if (subSlot) {
    subSlot.className = 'subnav';
    subSlot.setAttribute('aria-label', 'Sobre n\u00f3s');
    subSlot.innerHTML = `<div class="subnav__track">${SOBRE.map(([k, t, h]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</div>`;
    const cur = $('[aria-current="page"]', subSlot);
    if (cur) subSlot.firstElementChild.scrollLeft = cur.offsetLeft - 16;
  }

  /* ---------- Footer ---------- */
  const ftrSlot = $('#site-footer');
  if (ftrSlot) {
    ftrSlot.className = 'ftr';
    ftrSlot.innerHTML = `
      <div class="wrap">
        <div class="ftr__grid">
          <div class="ftr__brand">
            <a class="logo" href="index.html" style="display:inline-flex"><img src="img/logo-aadid-marca.png" alt="AADID" width="185" height="53" style="height:56px;width:auto"></a>
            <p>Associa\u00e7\u00e3o dos Amigos das Defici\u00eancias Intelectuais e Desenvolvimentais. Apoio a pessoas com DID e \u00e0s suas fam\u00edlias, no Porto.</p>
            <ul class="social" aria-label="Redes sociais">${SOCIAL.map(([n, h, i]) => `<li><a href="${h}" aria-label="AADID no ${n}"${h !== '#' ? ' target="_blank" rel="noopener"' : ''}>${i}</a></li>`).join('')}</ul>
          </div>
          <div><h4>Contactos</h4><ul>
            <li class="ftr__tel">913 636 573<small>Chamada para rede m\u00f3vel nacional</small></li>
            <li class="ftr__tel">226 184 772<small>Chamada para rede fixa nacional</small></li>
            <li><a href="mailto:geral@aadid.pt">geral@aadid.pt</a></li>
          </ul></div>
          <div><h4>Visite-nos</h4><ul>
            <li>Rua Dom Agostinho de Jesus e Sousa<br>4000-015 Porto</li>
            <li>Segunda a sexta<br>08:30 \u00e0s 17:30</li>
          </ul></div>
          <div><h4>Navega\u00e7\u00e3o</h4><ul>
            ${NAV.map(([, t, h]) => `<li><a href="${h || 'historia.html'}">${h ? t : 'Hist\u00f3ria'}</a></li>`).join('')}
            <li><a href="como-ajudar.html">Como ajudar</a></li>
          </ul></div>
        </div>
        <div class="ftr__bottom">
          <span>\u00a9 2026 AADID. Todos os direitos reservados.</span>
          <nav aria-label="Legal"><a href="politica-de-privacidade.html">Pol\u00edtica de Privacidade e Cookies</a><a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener">Livro de Reclama\u00e7\u00f5es</a></nav>
        </div>
      </div>`;
  }

  /* ---------- Atividades (CPT "Atividade" + Loop Grid) ---------- */
  const ACTS = [
    {t:'Nata\u00e7\u00e3o adaptada', k:'mov', img:'natacao', wide:1, d:'Desenvolve a condi\u00e7\u00e3o f\u00edsica e cardiovascular, a coordena\u00e7\u00e3o motora e a mobilidade. Contribui para o bem-estar geral.'},
    {t:'Culin\u00e1ria', k:'ofi', img:'culinaria', d:'Fazer a lista de compras, ir comprar os ingredientes e confecionar a receita. Lazer e realiza\u00e7\u00e3o pessoal.'},
    {t:'Golfe adaptado', k:'mov', c:'var(--amarelo)', ic:'golf', d:'Condi\u00e7\u00e3o f\u00edsica e psicomotora, est\u00edmulo cognitivo, equil\u00edbrio e integra\u00e7\u00e3o social.'},
    {t:'Musicoterapia', k:'com', img:'musicoterapia', d:'A m\u00fasica estimula a capacidade comunicativa e criativa, em contexto de reabilita\u00e7\u00e3o e bem-estar.'},
    {t:'Express\u00e3o pl\u00e1stica', k:'ofi', img:'expressao-plastica', d:'Explora a \u00e1rea sensorial, a orienta\u00e7\u00e3o espacial e a concentra\u00e7\u00e3o. Trabalha a motricidade fina e grossa e d\u00e1 asas \u00e0 criatividade.'},
    {t:'Cinoterapia', k:'com', img:'cinoterapia', wide:1, d:'O contacto com c\u00e3es contribui para o bem-estar ps\u00edquico e facilita a intera\u00e7\u00e3o.'},
    {t:'Sa\u00eddas \u00e0 comunidade', k:'com', c:'var(--azul)', fc:'#fff', ic:'pin', d:'Museus, cinema, lojas, parques e monumentos. Treino de regras sociais, essencial para a inclus\u00e3o.'},
    {t:'Jardinagem', k:'ofi', img:'jardinagem', d:'O contacto com a natureza apura os sentidos e traz bem-estar e calma.'},
    {t:'T\u00eaxteis', k:'ofi', img:'texteis', d:'Concentra\u00e7\u00e3o, coordena\u00e7\u00e3o oculomotora e motricidade fina. Cada trabalho conclu\u00eddo aumenta a autoestima.'},
    {t:'Atividade f\u00edsica', k:'mov', img:'desporto', d:'Sa\u00fade f\u00edsica e psicol\u00f3gica, mobilidade, equil\u00edbrio e autonomia.'},
    {t:'Terapia ocupacional', k:'mov', wide:1, c:'var(--rosa)', fc:'#fff', ic:'hand', d:'Compet\u00eancias para viver de forma mais aut\u00f3noma e funcional, em problemas f\u00edsicos, sensoriais ou cognitivos.'},
    {t:'Fisioterapia', k:'mov', wide:1, c:'#fff', ic:'body', d:'Desenvolver, manter e recuperar o m\u00e1ximo de movimento e capacidade funcional ao longo da vida.'}
  ];
  const KIND = {mov:'Movimento', ofi:'Oficina', com:'Bem-estar'};
  const SVG = {
    golf:'<circle cx="17" cy="5" r="2"/><path d="M12 21V9l-5 6M12 9l6 4"/><path d="M5 21h14"/>',
    pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    hand:'<path d="M8 13V5a2 2 0 1 1 4 0v6M12 10V4a2 2 0 1 1 4 0v7M16 9a2 2 0 1 1 4 0v5a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4L4 15a2 2 0 0 1 3.4-2"/>',
    body:'<circle cx="12" cy="4" r="2"/><path d="M12 7v6l-4 8M12 13l4 8M6 10h12"/>'
  };
  const actCard = (a, i, wideOK) => a.img
    ? `<article class="acard acard--img${a.wide && wideOK ? ' acard--wide' : ''} rv" style="--d:${i % 3}" data-k="${a.k}" data-wide="${a.wide ? 1 : 0}"><img src="img/${a.img}.jpg" alt="" loading="lazy"><span class="acard__kind">${KIND[a.k]}</span><div class="acard__body"><h3>${a.t}</h3><p>${a.d}</p></div></article>`
    : `<article class="acard acard--txt${a.wide && wideOK ? ' acard--wide' : ''} rv" style="--d:${i % 3};--c:${a.c};${a.fc ? '--fc:' + a.fc : ''}${a.c === '#fff' ? ';border:1px solid var(--linha)' : ''}" data-k="${a.k}" data-wide="${a.wide ? 1 : 0}"><span class="acard__ico" aria-hidden="true"${a.c === '#fff' ? ' style="background:var(--agua-2)"' : ''}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${SVG[a.ic]}</svg></span><div class="acard__body"><h3>${a.t}</h3><p>${a.d}</p></div></article>`;
  $$('[data-acts]').forEach(g => {
    const prev = g.dataset.acts === 'preview';
    const list = prev ? [ACTS[0], ACTS[1], ACTS[3], ACTS[4], ACTS[7], ACTS[6]] : ACTS;
    g.innerHTML = list.map((a, i) => actCard(a, i, !prev)).join('');
  });
  const fbtns = $$('.filters[data-for="acts"] button');
  fbtns.forEach(b => b.addEventListener('click', () => {
    fbtns.forEach(x => x.setAttribute('aria-pressed', x === b));
    $$('[data-acts] .acard').forEach(c => {
      const show = b.dataset.f === 'all' || c.dataset.k === b.dataset.f;
      c.classList.toggle('is-hidden', !show);
      c.classList.toggle('acard--wide', show && b.dataset.f === 'all' && c.dataset.wide === '1');
      if (show && !reduce) { c.classList.remove('in'); void c.offsetWidth; c.classList.add('in'); }
    });
  }));

  /* ---------- Not\u00edcias (Posts; categorias Not\u00edcias e Eventos) ---------- */
  const POSTS = [
    {s:'escritura-lar-residencial', cat:'Not\u00edcias', date:'2026-02-05', img:'futuro-lar', t:'Escritura do terreno para o Lar Residencial assinada', x:'A C\u00e2mara Municipal do Porto cedeu \u00e0 AADID um terreno na Prelada. A escritura foi assinada a 5 de fevereiro de 2026.'},
    {s:'#', cat:'Not\u00edcias', img:'missao-pai-filho', t:'Relat\u00f3rio e Contas 2025 dispon\u00edvel', x:'O relat\u00f3rio de atividades e as contas do exerc\u00edcio de 2025 j\u00e1 podem ser consultados na sec\u00e7\u00e3o de transpar\u00eancia.', href:'relatorios-de-contas.html'},
    {s:'#', cat:'Not\u00edcias', img:'juntos', t:'Consigne 1% do seu IRS \u00e0 AADID', x:'Sem qualquer custo para si: basta indicar o NIF 510 347 282 no Quadro 11 da declara\u00e7\u00e3o.', href:'como-ajudar.html#irs'},
    {s:'#', cat:'Eventos', img:'riso', t:'Jantar Solid\u00e1rio e Feira de Natal da AADID', x:'Jantar e feira de Natal para angaria\u00e7\u00e3o de fundos.'},
    {s:'#', cat:'Eventos', img:'texteis', t:'Arca de Natal da C\u00e2mara Municipal do Porto', x:'Fotografias e destaques do evento.'},
    {s:'#', cat:'Eventos', img:'jardinagem', t:'CRIDEM, Funda\u00e7\u00e3o Manuel Ant\u00f3nio da Mota', x:'Fotografias e destaques do evento.'},
    {s:'#', cat:'Eventos', img:'hero-familia', t:'Encontro com a Cerciag, em \u00c1gueda', x:'Fotografias e destaques do evento.'},
    {s:'#', cat:'Eventos', img:'natacao', t:'ADADA: Associa\u00e7\u00e3o de Desporto Adaptado do Porto', x:'Fotografias e destaques do evento.'},
    {s:'#', cat:'Eventos', img:'desporto', t:'Corta-mato do Agrupamento de Escolas Aur\u00e9lia de Sousa', x:'Fotografias e destaques do evento.'}
  ];
  const fmtDate = d => d ? new Date(d + 'T12:00:00').toLocaleDateString('pt-PT', {day: 'numeric', month: 'long', year: 'numeric'}) : '';
  const postHref = p => p.href || (p.s === '#' ? 'noticia.html' : 'noticia.html');
  const postCard = (p, i, feat) => `<a class="pcard-n${feat ? ' pcard-n--feat' : ''} rv" style="--d:${i % 3}" href="${postHref(p)}" data-cat="${p.cat}">
      <figure class="ph"><img src="img/${p.img}.jpg" alt="" loading="lazy"></figure>
      <div class="pcard-n__body">
        <div class="meta"><span class="cat cat--${p.cat === 'Eventos' ? 'ev' : 'nt'}">${p.cat}</span>${p.date ? `<time datetime="${p.date}">${fmtDate(p.date)}</time>` : ''}</div>
        <h3>${p.t}</h3><p>${p.x}</p>
        <span class="link">Ler ${p.cat === 'Eventos' ? 'mais' : 'not\u00edcia'} ${ico.arr}</span>
      </div></a>`;
  $$('[data-posts]').forEach(g => {
    const mode = g.dataset.posts;
    if (mode === 'home') g.innerHTML = POSTS.slice(0, 3).map((p, i) => postCard(p, i)).join('');
    else if (mode === 'related') g.innerHTML = POSTS.slice(1, 4).map((p, i) => postCard(p, i)).join('');
    else {
      g.innerHTML = POSTS.map((p, i) => postCard(p, i, i === 0)).join('');
      // Pagina\u00e7\u00e3o: destaque + 7 enchem 3 linhas certas; o resto aparece com "Carregar mais"
      $$('.pcard-n', g).forEach((c, i) => { if (i >= 8) { c.hidden = true; c.dataset.more = '1'; } });
      const more = $('#loadMore');
      if (more) more.addEventListener('click', () => {
        $$('[data-more]', g).forEach(c => { c.hidden = false; delete c.dataset.more; });
        more.hidden = true;
      });
    }
  });
  const pf = $$('.filters[data-for="posts"] button');
  pf.forEach(b => b.addEventListener('click', () => {
    pf.forEach(x => x.setAttribute('aria-pressed', x === b));
    const f = b.dataset.f;
    const more = $('#loadMore'); if (more) more.hidden = true;
    $$('[data-posts="all"] .pcard-n').forEach((c, i) => {
      const show = f === 'all' || c.dataset.cat === f;
      c.hidden = !show; delete c.dataset.more;
      c.classList.toggle('pcard-n--feat', show && f === 'all' && i === 0);
    });
    const count = $('#postCount'); if (count) count.textContent = $$('[data-posts="all"] .pcard-n:not([hidden])').length;
  }));

  /* ---------- Documentos (CPT "Documento": ano, tipo, ficheiro) ---------- */
  const MB = b => (b / 1048576).toLocaleString('pt-PT', {maximumFractionDigits: 1, minimumFractionDigits: b < 1048576 ? 1 : 0}).replace(/^0,0$/, '0,1') + ' MB';
  const DOCS = {
    relatorios: [
      [2025, 'Relat\u00f3rio e Contas 2025', 'relatorio-contas-2025.pdf', 1326954, 24],
      [2024, 'Relat\u00f3rio e Contas 2024', 'relatorio-contas-2024.pdf', 1870688, 25],
      [2023, 'Relat\u00f3rio e Contas 2023', 'relatorio-contas-2023.pdf', 1797280, 24, 'Inclui parecer do Conselho Fiscal'],
      [2022, 'Relat\u00f3rio e Contas 2022', 'relatorio-contas-2022.pdf', 1790075, 24],
      [2021, 'Relat\u00f3rio e Contas 2021', 'relatorio-contas-2021.pdf', 1644583, 22],
      [2020, 'Relat\u00f3rio e Contas 2020', 'relatorio-contas-2020.pdf', 1667158, 24],
      [2019, 'Relat\u00f3rio e Contas 2019', 'relatorio-contas-2019.pdf', 1874944, 24],
      [2018, 'Relat\u00f3rio e Contas 2018', 'relatorio-contas-2018.pdf', 1968609, 27],
      [2017, 'Relat\u00f3rio e Contas 2017', 'relatorio-contas-2017.pdf', 1843440, 27],
      [2016, 'Relat\u00f3rio e Contas 2016', 'relatorio-contas-2016.pdf', 1785930, 25],
      [2015, 'Relat\u00f3rio e Contas 2015', 'relatorio-contas-2015.pdf', 1608387, 22],
      [2014, 'Relat\u00f3rio e Contas 2014', 'relatorio-contas-2014.pdf', 193536, 16],
      [2013, 'Relat\u00f3rio e Contas 2013', 'relatorio-contas-2013.pdf', 176934, 15]
    ],
    planos: [
      [2025, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2025', 'plano-acao-orcamento-2025.pdf', 215092, 8],
      [2024, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2024', 'plano-acao-orcamento-2024.pdf', 558225, 9],
      [2023, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2023', 'plano-acao-orcamento-2023.pdf', 456068, 6],
      [2022, 'Plano de A\u00e7\u00e3o 2022', 'plano-acao-2022.pdf', 704156, 8],
      [2021, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2021', 'plano-acao-orcamento-2021.pdf', 527407, 7],
      [2020, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2020', 'plano-acao-orcamento-2020.pdf', 469111, 6],
      [2019, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2019', 'plano-acao-orcamento-2019.pdf', 490832, 6],
      [2018, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2018', 'plano-acao-orcamento-2018.pdf', 486867, 6],
      [2018, 'Or\u00e7amento Retificativo 2018', 'orcamento-retificativo-2018.pdf', 113506, 2],
      [2017, 'Plano de Atividades e Or\u00e7amento 2017', 'plano-acao-2017.pdf', 69424, 6],
      [2016, 'Plano de A\u00e7\u00e3o 2016', 'plano-acao-2016.pdf', 535287, 9],
      [2016, 'Plano de A\u00e7\u00e3o e Or\u00e7amento 2016', 'plano-acao-orcamento-2016.pdf', 124419, 6],
      [2015, 'Plano de Atividades 2015', 'plano-atividades-2015.pdf', 904980, 13],
      [2015, 'Or\u00e7amento Retificativo 2015', 'orcamento-retificativo-2015.pdf', 94733, 2],
      [2015, 'Or\u00e7amento Retificativo 2015 (vers\u00e3o final)', 'orcamento-retificativo-final-2015.pdf', 10687, 1]
    ],
    institucionais: [
      [null, 'Regulamento Interno do CACI', 'regulamento-interno-caci.pdf', 276001, 21],
      [null, 'Manual de Procedimentos Internos (RGPD)', 'manual-procedimentos-rgpd.pdf', 250544, 9],
      [null, 'Ficha de inscri\u00e7\u00e3o de associado', 'ficha-de-inscricao.pdf', 61139, 1]
    ],
    orgaos: [
      [2017, 'Composi\u00e7\u00e3o da Lista A, quadri\u00e9nio 2017\u20132020', 'orgaos-sociais-composicao-lista-a.pdf', 58119, 2]
    ]
  };
  const docRow = ([y, t, f, b, p, extra], i) => `<li class="doc rv" style="--d:${Math.min(i, 4)}">
      ${y ? `<span class="doc__year">${y}</span>` : `<span class="doc__ico" aria-hidden="true">${ico.dl}</span>`}
      <div class="doc__info"><h3>${t}</h3><span>PDF \u00b7 ${p} ${p === 1 ? 'p\u00e1gina' : 'p\u00e1ginas'} \u00b7 ${MB(b)}${extra ? ' \u00b7 ' + extra : ''}</span></div>
      <a class="btn btn--ghost doc__btn" href="docs/${f}" target="_blank" rel="noopener" aria-label="Abrir ${t} (PDF, ${MB(b)})">${ico.dl}<span>Abrir PDF</span></a>
    </li>`;
  $$('[data-docs]').forEach(ul => {
    const set = DOCS[ul.dataset.docs] || [];
    ul.innerHTML = set.map(docRow).join('');
  });
  // Filtro por per\u00edodo
  $$('.yearbar[data-for]').forEach(bar => {
    const ul = document.getElementById(bar.dataset.for);
    const groups = [['all', 'Todos'], ['2020-2029', '2020\u20132025'], ['2016-2019', '2016\u20132019'], ['2013-2015', '2013\u20132015']];
    bar.innerHTML = groups.map(([v, t], i) => `<button type="button" data-g="${v}" aria-pressed="${i === 0}">${t}</button>`).join('');
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $$('button', bar).forEach(x => x.setAttribute('aria-pressed', x === b));
      const [lo, hi] = b.dataset.g === 'all' ? [0, 9999] : b.dataset.g.split('-').map(Number);
      $$('.doc', ul).forEach(li => { const y = +li.querySelector('.doc__year').textContent; li.hidden = y < lo || y > hi; });
    });
  });

  /* ---------- Parceiros ---------- */
  const PARTNERS = [
    ['camaramunicipalporto.png', 'C\u00e2mara Municipal do Porto'],
    ['jfbonfim.png', 'Junta de Freguesia do Bonfim'],
    ['logo-1316.png', 'Freguesia do Bonfim'],
    ['cpcdi.png', 'CPCDi'],
    ['cifad.png', 'CIFAD'],
    ['lasa.png', 'LASA'],
    ['sinalmais.png', 'Sinal+'],
    ['passo_positivo.png', 'Passo Positivo'],
    ['fernandes__irmao.png', 'Fernandes & Irm\u00e3o'],
    ['filinto-mota.png', 'Filinto Mota'],
    ['pcsanus.png', 'PCSanus'],
    ['cin.png', 'CIN'],
    ['azu.png', 'AZU'],
    ['pluricosmetica.png', 'Pluricosm\u00e9tica'],
    ['incentives.png', 'Incentives'],
    ['porto_chapter.png', 'Porto Chapter'],
    ['cobalto_design.png', 'Cobalto Design']
  ];
  $$('[data-partners]').forEach(g => {
    const list = g.dataset.partners === 'home' ? PARTNERS.slice(0, 8) : PARTNERS;
    g.innerHTML = list.map(([f, n], i) => `<li class="logo-tile rv" style="--d:${i % 4}"><img src="img/parceiros/${f}" alt="${n}" loading="lazy"${f === 'logo-1316.png' ? ' class="is-crest"' : ''}></li>`).join('');
  });

  /* ---------- Reveal on scroll (conte\u00fado vis\u00edvel em repouso) ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), {rootMargin: '0px 0px 8% 0px'});
    $$('.rv').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) io.observe(el); });
  }

  /* ---------- Parallax (Motion Effects \u203a Vertical Scroll) ---------- */
  const par = $$('[data-speed]');
  if (!reduce && par.length) {
    let ticking = false;
    const run = () => {
      par.forEach(el => {
        const r = el.getBoundingClientRect(), mid = r.top + r.height / 2 - innerHeight / 2;
        let y = -mid * parseFloat(el.dataset.speed);
        // Imagens dentro de moldura: nunca deslocar mais do que a sobra
        if (el.tagName === 'IMG') { const room = Math.max(0, (el.offsetHeight - el.parentElement.clientHeight) / 2); y = Math.max(-room, Math.min(room, y)); }
        el.style.translate = `0 ${y.toFixed(1)}px`;
      });
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(run); ticking = true; } }, {passive: true});
    addEventListener('resize', run, {passive: true});
    run();
  }

  /* ---------- Mouse track ---------- */
  const tr = $$('[data-track]');
  if (!reduce && tr.length && matchMedia('(hover:hover)').matches) {
    addEventListener('mousemove', e => {
      const x = (e.clientX / innerWidth - .5) * -14, y = (e.clientY / innerHeight - .5) * -14;
      tr.forEach(el => el.style.translate = `${x}px ${y}px`);
    }, {passive: true});
  }

  /* ---------- Contador (widget Counter) ---------- */
  $$('[data-count]').forEach(el => {
    if (reduce) return;
    const end = +el.dataset.count, t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });

  /* ---------- Copiar IBAN / MB WAY / NIF ---------- */
  $$('[data-copy]').forEach(b => b.addEventListener('click', () => {
    const label = b.textContent;
    const done = () => { b.textContent = 'Copiado'; b.classList.add('ok'); setTimeout(() => { b.textContent = label; b.classList.remove('ok'); }, 1800); };
    const sel = () => {
      const code = b.parentElement.querySelector('code, .nif'); if (!code) return;
      const r = document.createRange(); r.selectNodeContents(code);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    };
    try { navigator.clipboard.writeText(b.dataset.copy).then(done, sel); } catch (e) { sel(); }
  }));

  /* ---------- Valida\u00e7\u00e3o de formul\u00e1rios (ficha de inscri\u00e7\u00e3o e contactos) ---------- */
  const MSG = {
    nome: 'Escreva o seu nome.', apelido: 'Escreva o seu apelido.', nascimento: 'Use o formato DD/MM/AAAA.', nif: 'O NIF tem 9 d\u00edgitos.',
    email: 'Escreva um email v\u00e1lido, por exemplo nome@exemplo.pt.', telefone: 'Escreva um n\u00famero de telefone.', morada: 'Escreva a sua morada.',
    codigo_postal: 'Use o formato 0000-000.', localidade: 'Escreva a localidade.', assunto: 'Escolha um assunto.', mensagem: 'Escreva a sua mensagem.'
  };
  const check = inp => {
    const f = inp.closest('.field'); if (!f) return true;
    const ok = inp.checkValidity();
    f.classList.toggle('is-bad', !ok);
    let e = f.querySelector('.err');
    if (!ok) {
      if (!e) { e = document.createElement('small'); e.className = 'err'; e.id = inp.id + '-err'; f.appendChild(e); }
      e.textContent = MSG[inp.name] || 'Preencha este campo.';
      inp.setAttribute('aria-describedby', e.id); inp.setAttribute('aria-invalid', 'true');
    } else if (e) { e.remove(); inp.removeAttribute('aria-invalid'); inp.removeAttribute('aria-describedby'); }
    return ok;
  };
  const wireForm = (form, extra) => {
    $$('.field input, .field select, .field textarea', form).forEach(i => i.addEventListener('blur', () => { if (i.value) check(i); }));
    form.addEventListener('submit', ev => {
      ev.preventDefault();
      const err = $('.ferr', form);
      const bad = $$('.field input, .field select, .field textarea', form).filter(i => !check(i));
      const problems = [];
      if (bad.length) problems.push(bad.length === 1 ? 'H\u00e1 1 campo por corrigir.' : `H\u00e1 ${bad.length} campos por corrigir.`);
      if (extra) extra(problems);
      const rgpd = $('.consent input', form);
      if (rgpd && !rgpd.checked) problems.push('Aceite o tratamento de dados para enviar.');
      if (problems.length) { err.textContent = problems.join(' '); err.hidden = false; (bad[0] || err).focus?.(); return; }
      err.hidden = true;
      $$('fieldset, .fgrid, .consent, [type="submit"]', form).forEach(el => el.hidden = true);
      const ok = $('.fok', form); ok.hidden = false; ok.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'center'});
    });
  };

  const ficha = $('#ficha');
  if (ficha) {
    const eur = n => n.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' \u20ac';
    const num = s => { const v = parseFloat(String(s).replace(/\s/g, '').replace(',', '.')); return isFinite(v) && v > 0 ? v : 0; };
    const don = $('#f-don');
    const INSCRICAO = 10; // taxa obrigat\u00f3ria, sempre inclu\u00edda no total
    const calc = () => {
      const sel = $('[data-q]:checked', ficha);
      const q = sel ? parseFloat(sel.value) : 0;
      const d = num(don.value);
      $('#t-quota-label').textContent = sel ? (sel.id === 'q-mensal' ? 'Primeira quota mensal' : 'Quota anual') : 'Primeira quota';
      $('#t-quotas').textContent = eur(q); $('#t-don').textContent = eur(d); $('#t-total').textContent = eur(INSCRICAO + q + d);
      $('#t-next').textContent = sel ? `Depois, paga ${eur(q)} ${sel.dataset.per}.` : 'Escolha a modalidade para ver o valor das quotas seguintes.';
    };
    ficha.addEventListener('input', calc); ficha.addEventListener('change', calc); calc();
    const cp = $('#f-cp');
    cp.addEventListener('input', () => { const d = cp.value.replace(/\D/g, '').slice(0, 7); cp.value = d.length > 4 ? d.slice(0, 4) + '-' + d.slice(4) : d; });
    const nasc = $('#f-nasc');
    nasc.addEventListener('input', () => { const d = nasc.value.replace(/\D/g, '').slice(0, 8); nasc.value = [d.slice(0, 2), d.slice(2, 4), d.slice(4)].filter(Boolean).join('/'); });
    const nif = $('#f-nif');
    nif.addEventListener('input', () => { nif.value = nif.value.replace(/\D/g, '').slice(0, 9); });
    wireForm(ficha, p => {
      if (!$('[name="quota"]:checked', ficha)) p.push('Escolha a quota mensal ou anual.');
      if (!$('[name="pagamento"]:checked', ficha)) p.push('Escolha um meio de pagamento.');
    });
  }
  const contacto = $('#contacto');
  if (contacto) {
    wireForm(contacto);
    const msg = $('#c-msg'), cnt = $('#c-count');
    if (msg && cnt) msg.addEventListener('input', () => { cnt.textContent = `${msg.value.length} / ${msg.maxLength}`; });
  }

  /* ---------- Partilhar (single post) ---------- */
  $$('[data-share]').forEach(b => b.addEventListener('click', () => {
    const label = b.textContent;
    try { navigator.clipboard.writeText(location.href).then(() => { b.textContent = 'Link copiado'; setTimeout(() => b.textContent = label, 1800); }); } catch (e) {}
  }));

})();
