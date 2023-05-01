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

// Adicione o evento de rolagem
window.addEventListener('scroll', checkScroll);
