document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('nav-list');
  const sectionContainer = document.getElementById('section-container');
  const totalSections = 28;

  for (let i = 1; i <= totalSections; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = `${i}. Sezione`;
    a.dataset.section = i;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      loadSection(i);
    });
    li.appendChild(a);
    navList.appendChild(li);
  }

  window.loadSection = function(num) {
    fetch(`sections/section-${num}.html`)
      .then(res => res.text())
      .then(html => {
        sectionContainer.innerHTML = html;
        window.scrollTo(0, 0);
      })
      .catch(err => {
        sectionContainer.innerHTML = "<p>Errore nel caricamento della sezione.</p>";
        console.error("Errore nel caricamento:", err);
      });
  };

  loadSection(1);
});
