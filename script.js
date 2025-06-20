function animarEscudo() {
  const escudo = document.querySelector('.escudo');
  const mensagem = document.getElementById('mensagem');
  escudo.classList.add('ativo');
  setTimeout(() => escudo.classList.remove('ativo'), 600);
  mensagem.style.display = 'block';
}

for (let i = 0; i < 15; i++) {
  const coração = document.createElement("div");
  coração.className = "coração";
  coração.innerText = "❤️";
  coração.style.left = Math.random() * 100 + "vw";
  coração.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(coração);
}
