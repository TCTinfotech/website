document.addEventListener('DOMContentLoaded', function () {
  const o = document.querySelectorAll('.faq-item');
  o.forEach((e) => {
    const a = e.querySelector('.faq-question');
    const t = e.querySelector('.faq-answer');
    const n = e.querySelector('.faq-icon svg');
    if (!a) return;
    a.addEventListener('click', function () {
      const r = t.style.maxHeight && t.style.maxHeight !== '0px';
      o.forEach((s) => {
        const c = s.querySelector('.faq-answer');
        const l = s.querySelector('.faq-icon svg');
        if (s !== e) {
          if (c) c.style.maxHeight = '0px';
          if (l) l.style.transform = 'rotate(0deg)';
          s.classList.remove('faq-open');
        }
      });
      if (r) {
        if (t) t.style.maxHeight = '0px';
        if (n) n.style.transform = 'rotate(0deg)';
        e.classList.remove('faq-open');
      } else {
        if (t) t.style.maxHeight = t.scrollHeight + 'px';
        if (n) n.style.transform = 'rotate(45deg)';
        e.classList.add('faq-open');
      }
    });
  });
});
