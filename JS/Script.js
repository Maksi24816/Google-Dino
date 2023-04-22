const Dino = document.querySelector(".Dino_Box");
const Block = document.querySelector(".Block");
const Body1 = document.getElementById("Body1");
const Body2 = document.getElementById("Body2");
const BodyB2 = document.getElementById("BodyB2");
const Kaktyz = document.getElementsByClassName("Kaktyz");
const GameOver = document.getElementById("GameOver");
const Counter_Text = document.getElementById("Counter");
const Max_Counter_Text = document.getElementById("Max_Counter");
const Dino_Box = document.querySelector(".Dino_Box");
const Dino_Box_B = document.querySelector(".Dino_Box_B");
const DinoStop = document.getElementById("DinoStop");
let StartLet = false;
let End = 0;
let Num = 1;
let RunLet = 0;
let NumKaktyz = 0;

let MaxCounterNum = 0;
let CounterNum = 1;

let Counter, Run, Game, SetJump, UpdateTimeGame;

let BodyTB = 1;

function Start () {
    StartLet = true;
    Interval();
    document.getElementById("Start_Box").style.display = "none";
}

function Restart(){
    if (End == 1){
        CounterNum = 0;
        NumKaktyz = 0;
        RunningSpeed = 11;
        Kaktyz[0].style.left = "800px";
        Kaktyz[1].style.left = "1100px";
        Kaktyz[2].style.left = "1350px";
        Kaktyz[3].style.left = "1550px";
    
        Body1.style.display = "block";
        Body2.style.display = "block";
    
        Dino_Box.style.visibility = "visible";
        Dino_Box_B.style.visibility = "hidden";

        Block.style.zIndex = 1;
        GameOver.style.visibility = "hidden";
    
        End = 0;
    
        Interval ();
    }
}
