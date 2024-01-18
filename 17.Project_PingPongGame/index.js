document.addEventListener("DOMContentLoaded", () => {
    console.log("Starting game");
    let ball = document.getElementById("ball");
    let table = document.getElementById("ping-pong-table");
    let ballx = 100; //x coordinate of the ball
    let bally = 300; //y coordinate of the ball
    // setInterval(function f() {

    //     ballx += 1;
    //     if(ballx > 300){
    //         ballx = 0;
    //     }
    //     ball.style.left = `${ballx}px`;
    // }, 1);

    let dx = 2; //+1 -> it will move the ballx by 1px to right, -1 -> move ballx by 1px to left
    let dy = 2; //+1 -> it will move the bally by 1px to right, -1 -> move bally by 1px to left

    function gameBall(){
        ballx += dx;
        bally += dy;

        ball.style.top = `${bally}px`;
        ball.style.left = `${ballx}px`;

        if(bally < 0 || bally + ball.offsetHeight > table.offsetHeight){
            dy *= -1;
        }

        if(ballx < 0 || ballx + ball.offsetWidth > table.offsetWidth){
            dx *= -1;
        }
    }

    function loop(){
        gameBall();
        requestAnimationFrame(loop);
    }
    loop();
})