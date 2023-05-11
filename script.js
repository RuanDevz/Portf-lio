const check = document.getElementById('check');
const light = document.getElementById('light');
const portfolio = document.getElementById('portfolio');
const nome = document.getElementById('nome');
const h1s = document.querySelectorAll('h1#title');
const h2s = document.getElementById('destaq');
const destaques = document.querySelector('animation')

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
    portfolio.style.color = '#d8dbe0';
    nome.style.color = '#13131f';
    for (let i = 0; i < h1s.length; i++) {
      h1s[i].style.color = '#13131f';
    }
    h2s.style.color ='#13131f'
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById('menu');
  const nav = document.getElementById('lista');
  const links = nav.getElementsByTagName('a');
  const body = document.getElementsByTagName('body')[0];

  menu.addEventListener('click', () => {
    if(nav.style.display == 'none' || nav.style.display === ''){
      menu.classList.remove('fa-bars')
      menu.classList.add('fa-xmark')
      nav.style.display = 'flex'
      body.classList.add('no-scroll');
    } else {
      menu.classList.remove('fa-xmark')
      menu.classList.add('fa-bars')
      nav.style.display = 'none'
      body.classList.remove('no-scroll');
    }
  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      nav.style.display = 'none';
      menu.classList.remove('fa-xmark');
      menu.classList.add('fa-bars');
    });
  }
});

var menuAberto = false;
var toggleMenu = function() {
  menuAberto = !menuAberto;
  document.body.style.overflow = menuAberto ? 'hidden' : 'auto';
};


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
const showinfo = document.querySelectorAll('.vermais');

img1.addEventListener('mouseover', () => {
  h1[0].style.display = 'none';
  icone1.style.display = 'none';
  borda[0].style.display = 'none';
  showinfo[0].style.display = 'flex';
  showinfo[0].style.width = '365px';
});

img1.addEventListener('mouseout', () => {
  h1[0].style.display = 'block';
  icone1.style.display = 'flex';
  borda[0].style.display = 'block';
  showinfo[0].style.width = '330px';
  setTimeout(() => {
    showinfo[0].style.animation = 'sumindo 1s';
    setTimeout(() => {
      showinfo[0].style.display = 'none';
      showinfo[0].style.animation = '';
    }, 1000);
  }, 3000);
});

img2.addEventListener('mouseover', () => {
  h1[1].style.display = 'none'
  icone2.style.display = 'none';
  borda[1].style.display = 'none';
  showinfo[1].style.display = 'flex';
  showinfo[1].style.width = '365px';
});

img2.addEventListener('mouseout', () => {
  h1[1].style.display = 'block';
  icone2.style.display = 'flex';
  borda[1].style.display = 'block';
  showinfo[1].style.width = '330px';
  setTimeout(() => {
    showinfo[1].style.animation = 'sumindo 1s';
    setTimeout(() => {
      showinfo[1].style.display = 'none';
      showinfo[1].style.animation = '';
    }, 1000);
  }, 3000);
});

img3.addEventListener('mouseover', () => {
  h1[2].style.display = 'none';
  icone3.style.display = 'none';
  borda[2].style.display = 'none';
  showinfo[2].style.display = 'flex';
  showinfo[2].style.width = '365px';
});

img3.addEventListener('mouseout', () => {
  h1[2].style.display = 'block';
  icone3.style.display = 'flex';
  borda[2].style.display = 'block';
  showinfo[2].style.width = '330px';
  setTimeout(() => {
    showinfo[2].style.animation = 'sumindo 1s';
    setTimeout(() => {
      showinfo[2].style.display = 'none';
      showinfo[2].style.animation = '';
    }, 1000);
  }, 3000);
});

const target = document.querySelectorAll('[data-anime]')
const animate = 'animate'

function animescroll(){
  const windowtop = window.pageYOffset + (window.innerHeight *3) / 4;
  target.forEach(element => {
    if((windowtop) > element.offsetTop){
      element.classList.add(animate);
    }
  });
}



window.addEventListener('scroll', function(){
  animescroll();
})


const findafriendinformacoes = document.querySelector('#findafriendinformacoes');
const vertigoinformacoes = document.querySelector('#vertigoinformacoes');
const kanbaninformacoes = document.querySelector('#kanbaninformacoes');
const findafriendbutton = document.getElementsByClassName('findafriendbutton')[0];
const findafriendtitulo = document.getElementById('findafriend-title');
const sobrefindafriend = document.getElementById('findafriend-sobre');
const vertigobutton = document.getElementsByClassName('vertigobutton')[0];
const vertigotitulo = document.getElementById('vertigo-title');
const sobrevertigo = document.getElementById('vertigo-sobre');
const kanbantitulo = document.getElementById('kanban-title');
const sobrekanban = document.getElementById('kanban-sobre');
const kanbanbutton = document.getElementsByClassName('kanbanbutton')[0];

findafriendbutton.addEventListener('click', () => {
  if (findafriendinformacoes.style.display === 'none') {
    findafriendinformacoes.style.display = 'block';
    findafriendtitulo.textContent = 'FindaFriend';
    sobrefindafriend.textContent = 'Este projeto foi feito junto com a Rockseat, com o fim de ajudar a pessoas encontrarem os seus Pets, foi o meu primeiro projeto Front-end Completo, desenvolvendo des da parte inicial até as interações internas';
  } else {
    findafriendinformacoes.style.display = 'none';
  }
});

vertigobutton.addEventListener('click', () => {
  if (vertigoinformacoes.style.display === 'none') {
    vertigoinformacoes.style.display = 'block';
    vertigotitulo.textContent = 'Vertigo';
    sobrevertigo.textContent = 'Projeto que eu fiz junto a Rockseat, onde consegui aprimorar minhas habilidades ao desenvolver uma tela de login e aonde aprendi sobre validações de dados em Javascript';
  } else {
    vertigoinformacoes.style.display = 'none';
  }
});

kanbanbutton.addEventListener('click', () =>{
  if(kanbaninformacoes.style.display == 'none'){
    kanbaninformacoes.style.display = 'block';
    kanbantitulo.textContent = 'Kanban';
    sobrekanban.textContent = 'Este projeto eu fiz junto a Rocketseat com o intuito de fazer um Kanban, onde consigo listar o que eu vou fazer, o que eu estou fazendo e o que eu já fiz.';
  }else{
    kanbaninformacoes.style.display = 'none';
  }
})


const menuinfo = document.querySelectorAll('#menu-info');

menuinfo.forEach(xmenu =>{
  xmenu.addEventListener('click', () =>{
    if(findafriendinformacoes.style.display == 'block'){
      findafriendinformacoes.style.display = 'none';
    }
    if(vertigoinformacoes.style.display == 'block'){
      vertigoinformacoes.style.display = 'none';
    }
    if(kanbaninformacoes.style.display == 'block'){
      kanbaninformacoes.style.display = 'none';
    }
  })
})



