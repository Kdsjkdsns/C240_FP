document.addEventListener('DOMContentLoaded', () => {
  initNavTabs();
  initSidebarNav();
  initSearch();
  initDemoScroll();
  initStartCheck();
  initPdfDemo();
  animateCounters();
});

function initNavTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function initSidebarNav() {
  const buttons = document.querySelectorAll('.sidebar-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.sidebar === 'exit') return;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initSearch() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const feedback = document.getElementById('search-feedback');
  const featureCards = document.querySelectorAll('.feature-card');

  if (!form || !input || !feedback) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    runSearch();
  });

  input.addEventListener('input', runSearch);

  function runSearch() {
    const query = input.value.trim().toLowerCase();
    let matches = 0;

    featureCards.forEach((card) => {
      const topic = card.dataset.topic || '';
      const isMatch = query.length > 0 && topic.includes(query);
      card.classList.toggle('is-match', isMatch);
      if (isMatch) matches += 1;
    });

    if (query.length === 0) {
      feedback.textContent = '';
    } else if (matches > 0) {
      feedback.textContent = `Found ${matches} matching feature${matches > 1 ? 's' : ''} for "${query}".`;
    } else {
      feedback.textContent = `No matching feature found for "${query}". Try asking VeriFox directly in the chat bubble.`;
    }
  }
}

function initDemoScroll() {
  const demoBtn = document.getElementById('demo-btn');
  const target = document.getElementById('example-result');
  if (!demoBtn || !target) return;

  demoBtn.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initStartCheck() {
  const startBtn = document.getElementById('start-check-btn');
  const note = document.getElementById('start-check-note');
  if (!startBtn || !note) return;

  startBtn.addEventListener('click', () => {
    note.hidden = false;
  });
}

function initPdfDemo() {
  const pdfBtn = document.getElementById('pdf-report-btn');
  const feedback = document.getElementById('pdf-feedback');
  if (!pdfBtn || !feedback) return;

  pdfBtn.addEventListener('click', () => {
    feedback.hidden = false;
  });
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count-to]');
  const duration = 900;

  counters.forEach((el) => {
    const target = parseInt(el.dataset.countTo, 10) || 0;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  });
}
