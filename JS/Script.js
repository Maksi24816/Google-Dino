const DinoStop = document.getElementById("DinoStop");
const Hill = document.getElementsByClassName("Hill");
const Cloud = document.getElementsByClassName("Cloud");

const Box = document.querySelector(".Box");
const Bottons = document.querySelector(".Bottons");

if (window.innerWidth > 600){
    NumBox = (window.innerWidth - 600)/2;
    Box.style.left = NumBox + "px";
    Bottons.style.left = NumBox + "px";
} else {
    Box.style.left = 0 + "px";
    Bottons.style.left = 0 + "px";
    Bottons.style.display = "block";
}

NumTop = (window.innerHeight - 150)/2;
Box.style.top = NumTop + "px";
Bottons.style.top = NumTop + 175 + "px";

const Audio1 = new Audio("Audio/MP1.mp3");
const Audio2 = new Audio("Audio/MP2.mp3");
const Audio3 = new Audio("Audio/MP3.mp3");

let StartLet = false;
let End = 0;

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

        const Body1 = document.getElementById("Body1");
        const Body2 = document.getElementById("Body2");
        Body1.style.display = "block";
        Body2.style.display = "block";
    
        Dino_Box.style.visibility = "visible";
        Dino_Box_B.style.visibility = "hidden";

        const GameOver = document.getElementById("GameOver");
        GameOver.style.visibility = "hidden";
    
        End = 0;
    
        Interval ();
    }
}