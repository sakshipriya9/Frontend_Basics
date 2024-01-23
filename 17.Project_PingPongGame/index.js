document.addEventListener("DOMContentLoaded", () => {

    let table = document.getElementById("ping-pong-table")
    let ball = document.getElementById("ball");
    let paddle = document.getElementById("paddle");


    let ballX = 50;
    let ballY = 50;

    let dx = 2;
    let dy = 2;

    ball.style.left= `${ballX}px`;
    ball.style.top = `${ballY}px`;
    setInterval(function exec() {

        ballX += dx;
        ballY += dy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        // if(ballX > 700-20 || ballX <= 0) dx *= -1;
        // if(ballY > 400-20 || ballY <= 0) dy *= -1;

        if(ballX > table.offsetWidth - ball.offsetWidth ||ballX <= 0) dx *= -1;
        if(ballY > table.offsetHeight - ball.offsetHeight ||ballY <= 0) dy *= -1;

    }, 1);

    let paddleY = 0;
    let dpy = 5;
    document.addEventListener("keydown", (event) => {
        if(event.keyCode == 38 && paddleY > 0){
            paddleY += (-1)*dpy;
        }else if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight){
            paddleY += dpy;
        }
        paddle.style.top = `${paddleY}px`;
    })
});