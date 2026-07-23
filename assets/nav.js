// Mobile nav toggle — shared across pages
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav__toggle');
  if (toggle) {
    var links = document.getElementById('navLinks');
    if (links) links.classList.toggle('open');
  } else if (!e.target.closest('.nav__links')) {
    var open = document.querySelector('.nav__links.open');
    if (open) open.classList.remove('open');
  }
});
