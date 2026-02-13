"use client";

import { useEffect, useRef, useState } from "react";

const LOVE_MESSAGE = "I love you Sneha 💖";
const LOVE_EMOJIS = ["💖", "💕", "💘", "💝", "😘", "🥰", "🌸", "✨"];

export default function HomePage() {
  const [yesScale, setYesScale] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);
  const [emojiBursts, setEmojiBursts] = useState([]);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const noBtnRef = useRef(null);
  const cardRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setFloatingHearts((prev) => {
        const next = [
          ...prev,
          {
            id: crypto.randomUUID(),
            left: `${Math.random() * 100}vw`,
            size: `${0.8 + Math.random() * 1.3}rem`,
            duration: `${3 + Math.random() * 4}s`,
            emoji: ["💗", "💖", "💕", "💘"][Math.floor(Math.random() * 4)],
          },
        ];
        return next.slice(-30);
      });
    }, 450);

    return () => clearInterval(timer);
  }, []);

  function moveNoButton() {
    const noBtn = noBtnRef.current;
    const card = cardRef.current;
    if (!noBtn || !card) return;

    const cardRect = card.getBoundingClientRect();
    const noRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - noRect.width - 10;
    const maxY = cardRect.height - noRect.height - 10;

    const randomX = Math.max(0, Math.random() * maxX - cardRect.width / 4);
    const randomY = Math.max(0, Math.random() * maxY - cardRect.height / 4);

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    setYesScale((prev) => Number((prev + 0.08).toFixed(2)));
  }

  function burstConfetti() {
    setFloatingHearts((prev) => {
      const extra = Array.from({ length: 120 }, (_, i) => ({
        id: `burst-${Date.now()}-${i}`,
        left: `${Math.random() * 100}vw`,
        size: `${0.7 + Math.random() * 1.4}rem`,
        duration: `${1.8 + Math.random() * 1.6}s`,
        emoji: ["🎉", "💖", "✨", "💗"][Math.floor(Math.random() * 4)],
      }));
      return [...prev, ...extra].slice(-180);
    });
  }

  function showLoveCelebration() {
    setShowCelebration(true);
    const count = 36;
    const created = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count;
      const distance = 180 + Math.random() * 180;
      return {
        id: `love-${Date.now()}-${i}`,
        emoji: LOVE_EMOJIS[Math.floor(Math.random() * LOVE_EMOJIS.length)],
        dx: `${Math.cos(angle) * distance}px`,
        dy: `${Math.sin(angle) * distance}px`,
        delay: `${Math.random() * 0.6}s`,
      };
    });
    setEmojiBursts(created);
  }

  async function onYesClick() {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      }
    } catch {
      // ignore autoplay limitations
    }

    burstConfetti();
    showLoveCelebration();
  }

  return (
    <>
      <div id="hearts-container" aria-hidden="true">
        {floatingHearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{ left: heart.left, bottom: "-20px", fontSize: heart.size, animationDuration: heart.duration }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      <main ref={cardRef} className={`card ${showCelebration ? "hidden" : ""}`}>
        <h1>Will You Be My Valentine?</h1>
        <p className="subtitle">You only need to click one button… 🌸</p>

        <div className="button-row">
          <button id="yes-btn" className="btn btn-yes" style={{ transform: `scale(${yesScale})` }} onClick={onYesClick}>
            Yes 💖
          </button>
          <button
            id="no-btn"
            ref={noBtnRef}
            className="btn btn-no"
            onMouseEnter={moveNoButton}
            onTouchStart={(event) => {
              event.preventDefault();
              moveNoButton();
            }}
            onClick={(event) => {
              event.preventDefault();
              moveNoButton();
            }}
          >
            No ❌
          </button>
        </div>
      </main>

      <section className={`love-celebration ${showCelebration ? "show" : ""}`} aria-live="polite" aria-hidden={!showCelebration}>
        <div className="love-message">{LOVE_MESSAGE}</div>
        <div className="emoji-burst" aria-hidden="true">
          {emojiBursts.map((pop) => (
            <span
              key={pop.id}
              className="emoji-love"
              style={{ left: "50%", top: "50%", "--dx": pop.dx, "--dy": pop.dy, animationDelay: pop.delay }}
            >
              {pop.emoji}
            </span>
          ))}
        </div>
      </section>

      <audio ref={audioRef} src="/click-sound.mp3" preload="auto" />
    </>
  );
}
