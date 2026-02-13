const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const heartsContainer = document.getElementById("hearts-container");
const clickSound = document.getElementById("click-sound");
const celebration = document.getElementById("love-celebration");
const emojiBurst = document.getElementById("emoji-burst");
const card = document.querySelector(".card");

const LOVE_MESSAGE = "I love you Sneha 💖";
let yesScale = 1;

function moveNoButton() {
  const cardRect = card.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - noRect.width - 10;
  const maxY = cardRect.height - noRect.height - 10;

  const randomX = Math.max(0, Math.random() * maxX - cardRect.width / 4);
  const randomY = Math.max(0, Math.random() * maxY - cardRect.height / 4);

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  yesScale += 0.08;
  yesBtn.style.transform = `scale(${yesScale.toFixed(2)})`;
}

function burstConfetti() {
  const total = 120;
  for (let i = 0; i < total; i += 1) {
    const piece = document.createElement("span");
    piece.textContent = ["🎉", "💖", "✨", "💗"][Math.floor(Math.random() * 4)];
    piece.className = "heart";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.bottom = "-20px";
    piece.style.animationDuration = `${1.8 + Math.random() * 1.6}s`;
    piece.style.fontSize = `${0.7 + Math.random() * 1.4}rem`;
    heartsContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 3400);
  }
}

function spawnHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["💗", "💖", "💕", "💘"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.bottom = "-20px";
  heart.style.fontSize = `${0.8 + Math.random() * 1.3}rem`;
  heart.style.animationDuration = `${3 + Math.random() * 4}s`;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7200);
}

function showLoveCelebration() {
  celebration.querySelector(".love-message").textContent = LOVE_MESSAGE;
  card.classList.add("hidden");
  celebration.classList.add("show");
  celebration.setAttribute("aria-hidden", "false");

  const emojis = ["💖", "💕", "💘", "💝", "😘", "🥰", "🌸", "✨"];
  const count = 36;

  for (let i = 0; i < count; i += 1) {
    const pop = document.createElement("span");
    const angle = (Math.PI * 2 * i) / count;
    const distance = 180 + Math.random() * 180;

    pop.className = "emoji-love";
    pop.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    pop.style.left = "50%";
    pop.style.top = "50%";
    pop.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    pop.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    pop.style.animationDelay = `${Math.random() * 0.6}s`;

    emojiBurst.appendChild(pop);
    setTimeout(() => pop.remove(), 3600);
  }
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", async () => {
  try {
    clickSound.currentTime = 0;
    await clickSound.play();
  } catch (_) {
    // Autoplay might be blocked; continue the celebration anyway.
  }

  burstConfetti();
  showLoveCelebration();
});

setInterval(spawnHeart, 450);
