const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const gun = document.getElementById('gun');

let score = 0;

// حرکت دادن تفنگ با ماوس
gameArea.addEventListener('mousemove', (e) => {
    gun.style.left = `${e.clientX - gameArea.offsetLeft}px`;
    gun.style.top = `${e.clientY - gameArea.offsetTop}px`;
});

// شلیک کردن با کلیک
gameArea.addEventListener('click', () => {
    const gunRect = gun.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    if (isHit(gunRect, targetRect)) {
        score++;
        moveTarget();
    }
});

// چک کردن برخورد
function isHit(gunRect, targetRect) {
    const distance = Math.hypot(
        gunRect.left - targetRect.left,
        gunRect.top - targetRect.top
    );
    return distance < 25; // فاصله کمتر از شعاع هدف
}

// حرکت دادن هدف به مکان جدید
function moveTarget() {
    const x = Math.random() * (gameArea.clientWidth - target.clientWidth);
    const y = Math.random() * (gameArea.clientHeight - target.clientHeight);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

moveTarget(); // شروع بازی با هدف در یک مکان تصادفی
