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
  let elementTop = allSkills.getBoundingClientRect().top + 100;
  let elementBottom = allSkills.getBoundingClientRect().bottom;

  // Verifique se o elemento está na tela
  if (elementTop <= window.innerHeight && elementBottom >= 0) {
    allSkills.classList.add('visible');
    // Remova o evento de rolagem após a animação ser acionada uma vez
    window.removeEventListener('scroll', checkScroll);
  }
}
window.addEventListener('scroll', checkScroll);


const h1 = document.querySelectorAll('.destaque-img h1');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const icone1 = document.getElementById('iconimg1')
const icone2 = document.getElementById('iconimg2')
const icone3 = document.getElementById('iconimg3')
const borda = document.querySelectorAll('.destaque-img .borda');

img1.addEventListener('mouseover', () => {
  h1[0].style.opacity = '0';
  icone1.style.display = 'none'
  borda[0].style.display = 'none';
});

img1.addEventListener('mouseout', () => {
  h1[0].style.opacity = '1';
  icone1.style.display = 'flex'
  borda[0].style.display = 'block';
});

img2.addEventListener('mouseover', () => {
  h1[1].style.opacity = '0';
  icone2.style.display = 'none'
  borda[1].style.display = 'none';
});

img2.addEventListener('mouseout', () => {
  h1[1].style.opacity = '1';
  icone2.style.display = 'flex'
  borda[1].style.display = 'block';
});

img3.addEventListener('mouseover', () => {
  h1[2].style.opacity = '0';
  icone3.style.display = 'none'
  borda[2].style.display = 'none';
});

img3.addEventListener('mouseout', () => {
  h1[2].style.opacity = '1';
  icone3.style.display = 'flex'
  borda[2].style.display = 'block';
});

