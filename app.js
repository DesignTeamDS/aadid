/* AADID \u2014 comportamento partilhado do prot\u00f3tipo.
   No WordPress: header/footer v\u00eam do Theme Builder; atividades, eventos e documentos de CPT + Loop Grid. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ico = {
    arr: '<span class="arr" aria-hidden="true">\u2192</span>',
    dl: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/></svg>',
    burger: '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 1h18M1 7h18M1 13h12"/></svg>'
  };

  /* ---------- Header ---------- */
  const NAV = [
    ['sobre-nos', 'Sobre n\u00f3s', 'sobre-nos.html'],
    ['valencias', 'Val\u00eancias', 'valencias.html'],
    ['atividades', 'Atividades', 'atividades.html'],
    ['eventos', 'Eventos', 'eventos.html'],
    ['parceiros', 'Parceiros', 'sobre-nos.html#parceiros'],
    ['documentos', 'Documentos', 'documentos.html']
  ];
  const hdrSlot = document.getElementById('site-header');
  const page = hdrSlot ? hdrSlot.dataset.page : '';
  if (hdrSlot) {
    hdrSlot.className = 'hdr';
    hdrSlot.innerHTML = `
      <div class="wrap"><div class="hdr__in">
        <a class="logo" href="index.html" aria-label="AADID, p\u00e1gina inicial"><img src="img/logo-aadid-marca.png" alt="AADID" width="185" height="53"></a>
        <nav class="nav" id="nav" aria-label="Principal">
          ${NAV.map(([k, t, h]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ''}>${t}</a>`).join('')}
        </nav>
        <div class="hdr__cta">
          <a class="btn btn--ghost" href="como-ajudar.html#irs">Consignar IRS</a>
          <a class="btn" href="como-ajudar.html"${page === 'como-ajudar' ? ' aria-current="page"' : ''}>Como ajudar ${ico.arr}</a>
        </div>
        <button class="burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu">${ico.burger}</button>
      </div></div>
      <div class="wrap"><p class="note"><b>Header (Theme Builder \u203a Header, todas as p\u00e1ginas).</b> Container Boxed com fundo branco 86% + <code>backdrop-filter</code> em CSS custom. Sticky: Motion Effects \u203a Sticky = Top, Effects Offset 80px \u2192 classe <code>elementor-sticky--effects</code> reduz o logo e adiciona sombra. Item ativo: estilo "Active" do widget Nav Menu. Mobile: Nav Menu em Dropdown.</p></div>`;
    const hdr = hdrSlot, burger = hdr.querySelector('#burger'), nav = hdr.querySelector('#nav');
    const onScroll = () => hdr.classList.toggle('is-scrolled', scrollY > 40);
    addEventListener('scroll', onScroll, {passive: true}); onScroll();
    burger.addEventListener('click', () => burger.setAttribute('aria-expanded', nav.classList.toggle('is-open')));
  }

  /* ---------- Footer ---------- */
  const ftrSlot = document.getElementById('site-footer');
  if (ftrSlot) {
    ftrSlot.className = 'ftr';
    ftrSlot.innerHTML = `
      <div class="wrap">
        <div class="ftr__grid">
          <div class="ftr__brand">
            <a class="logo" href="index.html" style="display:inline-block"><img src="img/logo-aadid-marca.png" alt="AADID" width="185" height="53" style="height:56px;width:auto"></a>
            <p>Associa\u00e7\u00e3o dos Amigos das Defici\u00eancias Intelectuais e Desenvolvimentais. Apoio a pessoas com DID e \u00e0s suas fam\u00edlias, no Porto.</p>
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
          <div><h4>Associa\u00e7\u00e3o</h4><ul>
            ${NAV.map(([, t, h]) => `<li><a href="${h}">${t}</a></li>`).join('')}
            <li><a href="como-ajudar.html">Como ajudar</a></li>
          </ul></div>
        </div>
        <div class="ftr__bottom">
          <span>\u00a9 2026 AADID. Todos os direitos reservados.</span>
          <nav aria-label="Legal"><a href="#">Pol\u00edtica de Privacidade</a><a href="https://www.livroreclamacoes.pt/">Livro de Reclama\u00e7\u00f5es</a></nav>
        </div>
        <p class="note"><b>Footer (Theme Builder \u203a Footer).</b> Fundo verde-\u00e1gua m\u00e9dio, cantos superiores 36px. 4 colunas \u2192 2 em tablet \u2192 1 em mobile. Telefones com a men\u00e7\u00e3o legal do custo da chamada.</p>
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
    {t:'Terapia ocupacional', k:'mov', c:'var(--rosa)', fc:'#fff', ic:'hand', d:'Compet\u00eancias para viver de forma mais aut\u00f3noma e funcional, em problemas f\u00edsicos, sensoriais ou cognitivos.'},
    {t:'Fisioterapia', k:'mov', c:'#fff', ic:'body', d:'Desenvolver, manter e recuperar o m\u00e1ximo de movimento e capacidade funcional ao longo da vida.'}
  ];
  const KIND = {mov:'Movimento', ofi:'Oficina', com:'Bem-estar'};
  const SVG = {
    golf:'<circle cx="17" cy="5" r="2"/><path d="M12 21V9l-5 6M12 9l6 4"/><path d="M5 21h14"/>',
    pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    hand:'<path d="M8 13V5a2 2 0 1 1 4 0v6M12 10V4a2 2 0 1 1 4 0v7M16 9a2 2 0 1 1 4 0v5a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4L4 15a2 2 0 0 1 3.4-2"/>',
    body:'<circle cx="12" cy="4" r="2"/><path d="M12 7v6l-4 8M12 13l4 8M6 10h12"/>'
  };
  const actCard = (a, i, wideOK) => a.img
    ? `<article class="acard acard--img${a.wide && wideOK ? ' acard--wide' : ''} rv" style="--d:${i % 3}" data-k="${a.k}"><img src="img/${a.img}.jpg" alt="" loading="lazy"><span class="acard__kind">${KIND[a.k]}</span><div class="acard__body"><h3>${a.t}</h3><p>${a.d}</p></div></article>`
    : `<article class="acard acard--txt rv" style="--d:${i % 3};--c:${a.c};${a.fc ? '--fc:' + a.fc : ''}${a.c === '#fff' ? ';border:1px solid var(--linha)' : ''}" data-k="${a.k}"><span class="acard__ico" aria-hidden="true"${a.c === '#fff' ? ' style="background:var(--agua-2)"' : ''}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${SVG[a.ic]}</svg></span><div class="acard__body"><h3>${a.t}</h3><p>${a.d}</p></div></article>`;
  document.querySelectorAll('[data-acts]').forEach(g => {
    const n = g.dataset.acts === 'preview' ? 6 : ACTS.length;
    const list = g.dataset.acts === 'preview' ? [ACTS[0], ACTS[1], ACTS[3], ACTS[4], ACTS[7], ACTS[6]] : ACTS;
    g.innerHTML = list.slice(0, n).map((a, i) => actCard(a, i, g.dataset.acts !== 'preview')).join('');
  });
  const fbtns = document.querySelectorAll('.filters button');
  fbtns.forEach(b => b.addEventListener('click', () => {
    fbtns.forEach(x => x.setAttribute('aria-pressed', x === b));
    document.querySelectorAll('[data-acts] .acard').forEach(c => {
      const show = b.dataset.f === 'all' || c.dataset.k === b.dataset.f;
      c.classList.toggle('is-hidden', !show);
      c.classList.toggle('acard--wide', show && b.dataset.f === 'all' && ACTS.find(a => a.t === c.querySelector('h3').textContent).wide === 1);
      if (show && !reduce) { c.classList.remove('in'); void c.offsetWidth; c.classList.add('in'); }
    });
  }));

  /* ---------- Eventos (Posts, categoria Eventos) ---------- */
  const EVENTS = [
    {t:'Jantar Solid\u00e1rio e Feira de Natal da AADID', k:'Angaria\u00e7\u00e3o', img:'juntos', d:'Jantar e feira de Natal para angaria\u00e7\u00e3o de fundos.'},
    {t:'Arca de Natal da C\u00e2mara Municipal do Porto', k:'Natal', img:'texteis'},
    {t:'CRIDEM, Funda\u00e7\u00e3o Manuel Ant\u00f3nio da Mota', k:'Parceria', img:'riso'},
    {t:'Cerciag \u00c1gueda', k:'Encontro', img:'jardinagem'},
    {t:'ADADA, Associa\u00e7\u00e3o de Desporto Adaptado do Porto', k:'Desporto', img:'natacao'},
    {t:'Corta-mato do Agrupamento de Escolas Aur\u00e9lia de Sousa', k:'Desporto', img:'desporto'}
  ];
  document.querySelectorAll('[data-events="list"]').forEach(ul => {
    ul.innerHTML = EVENTS.slice(0, 4).map((e, i) => `<li class="rv" style="--d:${i}"><a href="eventos.html"><span class="k">${e.k}</span><h3>${e.t}</h3><span class="go" aria-hidden="true">\u2192</span></a></li>`).join('');
  });
  document.querySelectorAll('[data-events="grid"]').forEach(g => {
    g.innerHTML = EVENTS.map((e, i) => `<a class="ecard${i === 0 ? ' ecard--feat' : ''} rv" style="--d:${i % 3}" href="#"><figure class="ph"><img src="img/${e.img}.jpg" alt="" loading="lazy"></figure><div class="ecard__body"><span class="k">${e.k}</span><h3>${e.t}</h3>${e.d ? `<p class="muted">${e.d}</p>` : ''}<div class="ecard__foot"><span>Ver galeria</span><span class="go" aria-hidden="true">\u2192</span></div></div></a>`).join('');
  });

  /* ---------- Documentos (CPT "Documento" + Loop Grid) ---------- */
  const tbody = document.getElementById('dbody');
  if (tbody) {
    const years = [2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013];
    const dl = (t, s) => `<a class="dl" href="#">${ico.dl}${t}${s ? ` <small>${s}</small>` : ''}</a>`;
    const plano = y => y >= 2018 ? dl('Plano de A\u00e7\u00e3o e Or\u00e7amento') : y >= 2016 ? dl('Plano de Atividades e Or\u00e7amento') : y === 2015 ? dl('Plano de Atividades') : '<span class="muted">\u2014</span>';
    const extra = y => (y === 2018 || y === 2015) ? '<br>' + dl('Or\u00e7amento Retificativo') : '';
    const rows = years.map(y => `<tr data-y="${y}"><td>${y}</td><td>${dl('Relat\u00f3rio e Contas', 'PDF')}</td><td>${plano(y)}${extra(y)}</td></tr>`).join('');
    tbody.innerHTML = rows;
    const bar = document.getElementById('yearbar');
    if (bar) {
      const groups = [['all', 'Todos'], ['2020', '2020\u20132025'], ['2016', '2016\u20132019'], ['2013', '2013\u20132015']];
      bar.innerHTML = groups.map(([v, t], i) => `<button type="button" data-g="${v}" aria-pressed="${i === 0}">${t}</button>`).join('');
      bar.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        bar.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
        const g = b.dataset.g, lo = +g, hi = g === '2020' ? 2025 : g === '2016' ? 2019 : 2015;
        tbody.querySelectorAll('tr').forEach(tr => { const y = +tr.dataset.y; tr.hidden = g !== 'all' && (y < lo || y > hi); });
      });
    }
  }

  /* ---------- Reveal on scroll (conte\u00fado vis\u00edvel em repouso) ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), {rootMargin: '0px 0px 8% 0px'});
    document.querySelectorAll('.rv').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) io.observe(el); });
  }

  /* ---------- Parallax (Motion Effects \u203a Vertical Scroll) ---------- */
  const par = [...document.querySelectorAll('[data-speed]')];
  if (!reduce && par.length) {
    let ticking = false;
    const run = () => {
      par.forEach(el => {
        const r = el.getBoundingClientRect(), mid = r.top + r.height / 2 - innerHeight / 2;
        let y = -mid * parseFloat(el.dataset.speed);
        // Imagens dentro de moldura: nunca deslocar mais do que a sobra, para n\u00e3o abrir faixas vazias
        if (el.tagName === 'IMG') { const room = Math.max(0, (el.offsetHeight - el.parentElement.clientHeight) / 2); y = Math.max(-room, Math.min(room, y)); }
        el.style.translate = `0 ${y.toFixed(1)}px`;
      });
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(run); ticking = true; } }, {passive: true});
    run();
  }

  /* ---------- Mouse track ---------- */
  const tr = document.querySelectorAll('[data-track]');
  if (!reduce && tr.length && matchMedia('(hover:hover)').matches) {
    addEventListener('mousemove', e => {
      const x = (e.clientX / innerWidth - .5) * -14, y = (e.clientY / innerHeight - .5) * -14;
      tr.forEach(el => el.style.translate = `${x}px ${y}px`);
    }, {passive: true});
  }

  /* ---------- Contador (widget Counter) ---------- */
  document.querySelectorAll('[data-count]').forEach(el => {
    if (reduce) return;
    const end = +el.dataset.count, t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });

  /* ---------- Copiar IBAN / MB WAY / NIF ---------- */
  document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => {
    const label = b.textContent;
    const done = () => { b.textContent = 'Copiado'; b.classList.add('ok'); setTimeout(() => { b.textContent = label; b.classList.remove('ok'); }, 1800); };
    const sel = () => {
      const code = b.parentElement.querySelector('code, .nif'); if (!code) return;
      const r = document.createRange(); r.selectNodeContents(code);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    };
    try { navigator.clipboard.writeText(b.dataset.copy).then(done, sel); } catch (e) { sel(); }
  }));

  /* ---------- Notas Elementor (lembradas entre p\u00e1ginas) ---------- */
  const tg = document.createElement('button');
  tg.className = 'toggle'; tg.type = 'button'; tg.innerHTML = '<i></i>Notas Elementor';
  document.body.appendChild(tg);
  const setNotes = on => { document.body.classList.toggle('notes', on); tg.setAttribute('aria-pressed', on); };
  let saved = false; try { saved = localStorage.getItem('aadid-notes') === '1'; } catch (e) {}
  setNotes(saved);
  tg.addEventListener('click', () => {
    const on = !document.body.classList.contains('notes'); setNotes(on);
    try { localStorage.setItem('aadid-notes', on ? '1' : '0'); } catch (e) {}
  });
})();

/* ---------- Ficha de inscri\u00e7\u00e3o: totais e valida\u00e7\u00e3o ---------- */
(() => {
  const form = document.getElementById('ficha');
  if (!form) return;
  const eur = n => n.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' \u20ac';
  const num = s => { const v = parseFloat(String(s).replace(/\s/g, '').replace(',', '.')); return isFinite(v) && v > 0 ? v : 0; };
  const don = document.getElementById('f-don');
  const calc = () => {
    const q = [...form.querySelectorAll('[data-q]:checked')].reduce((s, i) => s + parseFloat(i.value), 0);
    const d = num(don.value);
    document.getElementById('t-quotas').textContent = eur(q);
    document.getElementById('t-don').textContent = eur(d);
    document.getElementById('t-total').textContent = eur(q + d);
  };
  form.addEventListener('input', calc); form.addEventListener('change', calc); calc();

  // Formata\u00e7\u00e3o enquanto escreve
  const cp = document.getElementById('f-cp');
  cp.addEventListener('input', () => { const d = cp.value.replace(/\D/g, '').slice(0, 7); cp.value = d.length > 4 ? d.slice(0, 4) + '-' + d.slice(4) : d; });
  const nasc = document.getElementById('f-nasc');
  nasc.addEventListener('input', () => { const d = nasc.value.replace(/\D/g, '').slice(0, 8); nasc.value = [d.slice(0, 2), d.slice(2, 4), d.slice(4)].filter(Boolean).join('/'); });
  const nif = document.getElementById('f-nif');
  nif.addEventListener('input', () => { nif.value = nif.value.replace(/\D/g, '').slice(0, 9); });

  const MSG = {
    'f-nome': 'Escreva o seu nome.', 'f-apelido': 'Escreva o seu apelido.',
    'f-nasc': 'Use o formato DD/MM/AAAA.', 'f-nif': 'O NIF tem 9 d\u00edgitos.',
    'f-email': 'Escreva um email v\u00e1lido, por exemplo nome@exemplo.pt.', 'f-tel': 'Escreva um n\u00famero de telefone.',
    'f-morada': 'Escreva a sua morada.', 'f-cp': 'Use o formato 0000-000.', 'f-loc': 'Escreva a localidade.'
  };
  const check = inp => {
    const f = inp.closest('.field'); if (!f) return true;
    const ok = inp.checkValidity();
    f.classList.toggle('is-bad', !ok);
    let e = f.querySelector('.err');
    if (!ok) { if (!e) { e = document.createElement('small'); e.className = 'err'; e.id = inp.id + '-err'; f.appendChild(e); } e.textContent = MSG[inp.id] || 'Preencha este campo.'; inp.setAttribute('aria-describedby', e.id); inp.setAttribute('aria-invalid', 'true'); }
    else if (e) { e.remove(); inp.removeAttribute('aria-invalid'); inp.removeAttribute('aria-describedby'); }
    return ok;
  };
  form.querySelectorAll('.field input').forEach(i => i.addEventListener('blur', () => { if (i.value) check(i); }));

  form.addEventListener('submit', ev => {
    ev.preventDefault();
    const err = document.getElementById('ferr');
    const bad = [...form.querySelectorAll('.field input')].filter(i => !check(i));
    const problems = [];
    if (bad.length) problems.push(bad.length === 1 ? 'H\u00e1 1 campo por corrigir.' : `H\u00e1 ${bad.length} campos por corrigir.`);
    if (!form.querySelector('[name="pagamento"]:checked')) problems.push('Escolha um meio de pagamento.');
    if (!document.getElementById('f-rgpd').checked) problems.push('Aceite o tratamento de dados para enviar a ficha.');
    if (problems.length) { err.textContent = problems.join(' '); err.hidden = false; (bad[0] || err).focus?.(); return; }
    err.hidden = true;
    form.querySelectorAll('fieldset, .consent, [type="submit"]').forEach(el => el.hidden = true);
    const ok = document.getElementById('fok'); ok.hidden = false; ok.scrollIntoView({behavior: 'smooth', block: 'center'});
  });
})();
