document.addEventListener("DOMContentLoaded", () => {
    console.log("Starting game");
    let ball = document.getElementById("ball");
    let table = document.getElementById("ping-pong-table");
    let paddle = document.getElementById("paddle");
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

    let paddley = 0;
    paddle.style.top = `${paddley}px`;

    document.addEventListener("keydown", (event) => {
        if(event.keyCode == 38 && paddley > 0){
            //up arrow 
            paddley -= 10;
        }else if(event.keyCode == 40 && paddley < table.offsetHeight - paddle.offsetHeight){
            //down arrow
            paddley += 10;
        }
        paddle.style.top = `${paddley}px`;
    })

    document.addEventListener("mousemove", (event) => {
       let mousePoint = event.clientY - table.offsetTop - paddle.offsetHeight / 2;
       paddley = mousePoint;
       if(paddley < 0 || paddley > table.offsetHeight - paddle.offsetHeight) 
       return;
       paddle.style.top = `${paddley}px`;
    })

    console.log(paddle);

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

        if(ballx < paddle.offsetLeft + paddle.offsetWidth && bally > paddley && bally + ball.offsetHeight < paddley + paddle.offsetHeight){
            console.log("collision");
            dx *= -1;
        }
    }

    function loop(){
        gameBall();
        requestAnimationFrame(loop);
    }
    loop();
})