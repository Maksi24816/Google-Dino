if (window.innerWidth > 600){
    NumBox = (window.innerWidth - 600)/2;
    document.querySelector(".Box").style.left = NumBox + "px";
} else {
    document.querySelector(".Box").style.left = 0 + "px";
}

document.querySelector(".Bottons").style.top = document.querySelector(".Box").innerh + "px";

const Audio1 = new Audio("Audio/MP1.mp3");
const Audio2 = new Audio("Audio/MP2.mp3");
const Audio3 = new Audio("Audio/MP3.mp3");

const Stones_Box = document.getElementById("Stones_Box");
const Hill = document.getElementsByClassName("Hill");
const Cloud = document.getElementsByClassName("Cloud");
const Dino = document.querySelector(".Dino_Box");
const Body1 = document.getElementById("Body1");
const Body2 = document.getElementById("Body2");
const BodyB2 = document.getElementById("BodyB2");
const Kaktyz = document.getElementsByClassName("Kaktyz");
const None = document.getElementsByClassName("None");
const GameOver = document.getElementById("GameOver");
const Counter_Text = document.getElementById("Counter");
const Max_Counter_Text = document.getElementById("Max_Counter");
const Dino_Box = document.querySelector(".Dino_Box");
const Dino_Box_B = document.querySelector(".Dino_Box_B");
const DinoStop = document.getElementById("DinoStop");

const CounterClass = document.querySelector(".Counter");

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
        Num_Space = 0;

        Kaktyz[0].style.left = "800px";
        Kaktyz[1].style.left = "1100px";
        Kaktyz[2].style.left = "1350px";

        Cloud[0].style.left = "850px";
        Cloud[1].style.left = "740px";
        Cloud[2].style.left = "960px";
        Cloud[3].style.left = "1360px";

        Hill[0].style.left = "900px";
        Hill[1].style.left = "1500px";
        Hill[2].style.left = "2850px";
    
        for (let y = 0; y < 8;y++){
            if (None[y].classList.contains('Kaktyz')){
                None[y].classList.remove('Kaktyz');
            }
        }

        None[0].classList.add("Kaktyz")
        None[1].classList.add("Kaktyz")
        None[2].classList.add("Kaktyz")

        Body1.style.display = "block";
        Body2.style.display = "block";
    
        Dino_Box.style.visibility = "visible";
        Dino_Box_B.style.visibility = "hidden";

        GameOver.style.visibility = "hidden";
    
        End = 0;
    
        Interval ();
    }
}