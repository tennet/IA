
  // Gestisce la navigazione tra pagine (sezioni)
  const navLinks = document.querySelectorAll('nav#sidebar a');
  const sections = document.querySelectorAll('.content-section');
  const mainContent = document.getElementById('main-content');

  function showSection(id) {
    sections.forEach(sec => sec.classList.remove('active'));
    const section = document.getElementById('section-' + id);
    if (section) section.classList.add('active');
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id.toString()));
    window.scrollTo({top:0, left:0, behavior:"auto"});
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  // Gestione bottoni avanti/indietro
  mainContent.addEventListener('click', function(e){
    if (e.target.classList.contains('nav-btn')) {
      const next = e.target.dataset.next, prev = e.target.dataset.prev;
      if (next) showSection(next);
      if (prev) showSection(prev);
    }
  });

  // Responsive: attiva il menu hamburger su mobile (opzionale, se vuoi personalizzare)
  // <-- Da ampliare se vuoi aggiungere hamburger su schermi piccolissimi

window.loadSection = loadSection;