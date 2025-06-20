function animarEscudo() {
  const escudo = document.querySelector('.escudo.real');
  const mensagem = document.getElementById('mensagem');
  escudo.classList.add('ativo');
  setTimeout(() => escudo.classList.remove('ativo'), 600);
  mensagem.style.display = 'block';
}

for (let i = 0; i < 15; i++) {
  const c = document.createElement("div");
  c.className = "coração";
  c.innerText = "❤️";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(c);
}
