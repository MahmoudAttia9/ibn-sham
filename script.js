/* ══════════════════════════════════════════════════════
   ابن شام — script.js
   Navigation · Scroll reveal · Active category tracking
   ══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Scroll Reveal ── */
  const sections = document.querySelectorAll('.menu-section');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  sections.forEach(s => revealObserver.observe(s));

  /* ── 2. Active Nav Item on Scroll ── */
  const navItems = document.querySelectorAll('.cat-nav__item');
  const navInner = document.getElementById('cat-nav-inner');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(btn => {
          const isActive = btn.dataset.target === id;
          btn.classList.toggle('active', isActive);
          if (isActive) {
            // Scroll nav to keep active button visible
            btn.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-50px 0px -50px 0px' });

  sections.forEach(s => activeObserver.observe(s));

  /* ── 3. Nav Click → Smooth Scroll ── */
  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 4. Cover → Menu Scroll ── */
  const cta = document.querySelector('.cover__cta');
  if (cta) {
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── 5. Price number shimmer on first view ── */
  const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'none';
        entry.target.offsetHeight; // reflow
        entry.target.style.animation = 'priceReveal 0.4s ease-out both';
        priceObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 1.0 });

  document.querySelectorAll('.item-row__price, .smash-size__price').forEach(el => {
    priceObserver.observe(el);
  });

});

/* Inject keyframe for price reveal */
const style = document.createElement('style');
style.textContent = `
  @keyframes priceReveal {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

/* ── 6. Loader Hide ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.classList.add('hidden');
  }, 500); // Small delay to enjoy the luxury feel
});

/* ── 7. Search Functionality ── */
const searchInput = document.getElementById('menuSearch');
if (searchInput) {
  searchInput.addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    const rows = document.querySelectorAll('.multi-table__row, .item-row');
    
    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      if (text.includes(term)) {
        row.style.display = '';
        // Add a subtle highlight animation when showing
        row.style.animation = 'priceReveal 0.3s ease-out both';
      } else {
        row.style.display = 'none';
      }
    });

    // Hide empty sections
    const sectionsObj = document.querySelectorAll('.menu-section');
    sectionsObj.forEach(sec => {
      const visibleRows = sec.querySelectorAll('.multi-table__row[style=""], .item-row[style=""], .multi-table__row:not([style*="display: none"]), .item-row:not([style*="display: none"])');
      const header = sec.querySelector('.section-header');
      const tableHead = sec.querySelector('.multi-table__head');
      
      if (visibleRows.length === 0 && term !== '') {
        if(header) header.style.display = 'none';
        if(tableHead) tableHead.style.display = 'none';
        sec.style.display = 'none';
      } else {
        if(header) header.style.display = 'flex';
        if(tableHead) tableHead.style.display = 'grid';
        sec.style.display = 'block';
      }
    });
  });
}

/* ── 8. Scroll to Top Button ── */
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    // Show button after scrolling down 500px
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
