document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.querySelector('.envelope');
  const flap = document.querySelector('.flap');
  const letter = document.querySelector('.letter');
  const heartsContainer = document.querySelector('.hearts');
  const responseDiv = document.getElementById('response');
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');

  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    letter.classList.add('show');
    generateHearts();
  });

  yesButton.addEventListener('click', () => {
    showResponse('¡Sos el amor de mi vida! ❤️');
  });

  noButton.addEventListener('click', () => {
    showResponse('puto 💔');
  });

  function showResponse(message) {
    responseDiv.textContent = message;
    responseDiv.classList.remove('hidden');
    responseDiv.classList.add('visible');
  }

  function generateHearts() {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      heartsContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }
  }
});
