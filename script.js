const check = document.getElementById('check');
const light = document.getElementById('light');
const portfolio = document.getElementById('portfolio');
const nome = document.getElementById('nome');
const h1s = document.querySelectorAll('h1#title');
const h2s = document.getElementById('destaq');

check.addEventListener('click', toggleTema);

function toggleTema() {
  if (light.classList.contains('light-theme')) {
    light.classList.remove('light-theme');
    light.classList.add('dark-theme');
    portfolio.style.color = '#d8dbe0';
    nome.style.color = '#d8dbe0';
    for (let i = 0; i < h1s.length; i++) {
      h1s[i].style.color = '#d8dbe0';
    }
    h2s.style.color ='#d8dbe0'
  } else {
    light.classList.remove('dark-theme');
    light.classList.add('light-theme');
    portfolio.style.color = '#13131f';
    nome.style.color = '#13131f';
    for (let i = 0; i < h1s.length; i++) {
      h1s[i].style.color = '#13131f';
    }
    h2s.style.color ='#13131f'
  }
}






setTimeout(function() {
    document.querySelector('.myname').classList.add('show');
  }, 1800);
  
  setTimeout(function() {
    document.querySelector('.dev').classList.add('mostrar');
  }, 3600);
  
// Selecione o elemento que deve ser animado
const allSkills = document.querySelector('.allskills');

// Função que adiciona a classe .visible quando o elemento estiver visível na tela
function checkScroll() {
  let elementTop = allSkills.getBoundingClientRect().top;
  let elementBottom = allSkills.getBoundingClientRect().bottom;

  // Verifique se o elemento está na tela
  if (elementTop <= window.innerHeight && elementBottom >= 0) {
    allSkills.classList.add('visible');
    // Remova o evento de rolagem após a animação ser acionada uma vez
    window.removeEventListener('scroll', checkScroll);
  }
}
window.addEventListener('scroll', checkScroll);


const imgs = document.querySelectorAll('#principal');
const h1 = document.querySelectorAll('.destaques h1');
const habilidades = document.querySelectorAll('.tecnologias img');

const borda = document.querySelectorAll('.borda');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('mouseover', () => {
    h1.forEach((text) => {
      text.style.opacity = '0';
    });
    habilidades.forEach((icons) => {
      icons.style.opacity = '0'
    })

    borda.forEach((bord) => {
      bord.style.display = 'none'
    })
  });

  imgs[i].addEventListener('mouseout', () => {
    h1.forEach((text) => {
      text.style.opacity = '1';
    });
    habilidades.forEach((icons) => {
      icons.style.opacity = '1'
    })

    borda.forEach((bord) => {
      bord.style.display = 'block'
    })
  });
}


