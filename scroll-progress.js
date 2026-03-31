(() => {
  const headings = Array.from(
    document.querySelectorAll('h1, h2, h3, .sl')
  ).filter((el) => el.offsetParent !== null);

  if (!headings.length) return;

  const toc = document.createElement('aside');
  toc.className = 'scroll-toc';
  toc.setAttribute('aria-label', 'Page sections');
  toc.innerHTML = `
    <div class="scroll-track"><div class="scroll-progress"></div></div>
    <div class="scroll-sections"></div>
  `;
  document.body.appendChild(toc);

  const progress = toc.querySelector('.scroll-progress');
  const sections = toc.querySelector('.scroll-sections');

  const maxScroll = () =>
    Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

  const fill = () => {
    const pct = Math.min(window.scrollY / maxScroll(), 1) * 100;
    progress.style.height = `${pct}%`;
  };

  const refreshSections = () => {
    sections.innerHTML = '';
    const docHeight = Math.max(document.documentElement.scrollHeight, 1);

    headings.forEach((heading, i) => {
      const marker = document.createElement('button');
      marker.className = 'scroll-section-marker';
      marker.type = 'button';
      marker.title = heading.textContent.trim() || `Section ${i + 1}`;
      marker.setAttribute('aria-label', marker.title);

      const topPct = (heading.offsetTop / docHeight) * 100;
      marker.style.top = `${Math.min(Math.max(topPct, 0), 100)}%`;

      marker.addEventListener('click', () => {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      sections.appendChild(marker);
    });
  };

  refreshSections();
  fill();
  window.addEventListener('scroll', fill, { passive: true });
  window.addEventListener('resize', () => {
    refreshSections();
    fill();
  });
})();
