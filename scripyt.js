
const perfil = document.querySelector('.perfil');
const banner = document.querySelector('.banner');

// Adiciona efeito de hover no perfil
perfil.addEventListener('mouseover', () => {
  perfil.style.transform = 'scale(1.1)';
  perfil.style.transition = 'all 0.3s ease';
});

perfil.addEventListener('mouseout', () => {
  perfil.style.transform = 'scale(1)';
});

// Adiciona clique para mudar cor do banner
banner.addEventListener('click', () => {
  banner.style.backgroundColor = banner.style.backgroundColor === 'rgba(0,0,0,0.6)' ? '#3498db' : 'rgba(0,0,0,0.6)';
});




