
function createBalls() {
    for (let i = 0; i < 50; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.animationDuration = `${Math.random() * 3 + 2}s`;
        ball.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(ball);

        ball.addEventListener('animationend', () => {
            ball.remove();
        });
    }
}

setInterval(createBalls, 1000);
createBalls();
