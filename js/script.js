const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefaul();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active){
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abir menu');
  }
  
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

document.addEventListener('DOMContentLoaded', function() {
  
  var lista = document.getElementById('links');

  var itens = lista.getElementsByClassName('cards');

  for (var i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', function() {
      var url = this.getAttribute('data-url');

      window.open(url, '_blank');
    });
  }
});