const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const heartsContainer = document.getElementById('hearts-container');
const confettiCanvas = document.getElementById('confetti-canvas');
const clickSound = new Audio('click-sound.mp3');

// Customize this message to whatever you want.
const loveMessage = 'Yay! You just made my day. Happy Valentine\'s Day! 💘';

let yesScale = 1;

function moveNoButton() {
  const area = document.getElementById('buttons-area');
  const maxX = Math.max(0, area.clientWidth - noBtn.offsetWidth);
  const maxY = Math.max(0, area.clientHeight + 120 - noBtn.offsetHeight);
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY - 40;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  yesScale = Math.min(2.2, yesScale + 0.08);
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (event) => {
  event.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener('click', async () => {
  clickSound.currentTime = 0;
  try {
    await clickSound.play();
  } catch (error) {
    console.warn('Audio playback blocked until user gesture.', error);
  }

  launchConfetti();
  alert(loveMessage);
});

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = '-24px';
  heart.style.animationDuration = `${4 + Math.random() * 5}s`;
  heart.style.opacity = `${0.4 + Math.random() * 0.6}`;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}

setInterval(spawnHeart, 500);

function launchConfetti() {
  const ctx = confettiCanvas.getContext('2d');
  const pieces = Array.from({ length: 170 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * 0.3,
    r: 4 + Math.random() * 5,
    vx: -2 + Math.random() * 4,
    vy: 2 + Math.random() * 4,
    color: ['#ff5ca8', '#ffd166', '#7bdff2', '#b2f7ef', '#f7aef8'][Math.floor(Math.random() * 5)],
    tilt: Math.random() * Math.PI,
    tiltSpeed: 0.05 + Math.random() * 0.1,
  }));

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const start = performance.now();
  const duration = 1900;

  function render(now) {
    const elapsed = now - start;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    pieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.tilt += piece.tiltSpeed;

      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.tilt);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.r / 2, -piece.r / 2, piece.r, piece.r * 1.6);
      ctx.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  requestAnimationFrame(render);
}

window.addEventListener('resize', () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
