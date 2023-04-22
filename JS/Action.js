
//-----Key-----//

let keyDown = 0;
window.addEventListener("keydown", (event) =>{
    if (event.code == "Space" || event.code == "ArrowUp" || event.code == "KeyW"){
        if (End == 1){
            Restart();
        } else if (StartLet == false){
            Start();
        } else if (RunLet == 0) {
            Jump ();
        }
    }
});

window.addEventListener("keyup", (event) =>{
    if (event.code == "Space" || event.code == "ArrowUp" || event.code == "KeyW"){
        keyDown = 1;
    }

});

window.addEventListener("keydown", (event) =>{
    if (End == 0) {
        if (event.code == "ArrowDown" || event.code == "KeyS"){
            Dino_Box.style.visibility = "hidden";
            Dino_Box_B.style.visibility = "visible";
            BodyTB = 2;
        }
    }
});

window.addEventListener("keyup", (event) =>{
    if (End == 0){
        if (event.code == "ArrowDown" || event.code == "KeyS"){
            Dino_Box.style.visibility = "visible";
            Dino_Box_B.style.visibility = "hidden";
            BodyTB = 1;
        }
    }

});

//-----Click-----//

window.addEventListener("mouseup", (event) =>{
    keyDown = 1;
});
window.addEventListener("mousedown",  (event) =>{
    if (End == 1){
        Restart();
    } else if (StartLet == false){
        Start();
    } else if (RunLet == 0) {
        Jump ();
    }
});

document.getElementById("Start_Box").addEventListener("click", Start);
Block.addEventListener("click", Restart);