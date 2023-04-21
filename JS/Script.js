const Dino = document.querySelector(".Dino_Box");
const Block = document.querySelector(".Block");
const Body1 = document.getElementById("Body1");
const Body2 = document.getElementById("Body2");
const Kaktyz = document.getElementsByClassName("Kaktyz");
const GameOver = document.getElementById("GameOver");
const Counter_Text = document.getElementById("Counter");
const Max_Counter_Text = document.getElementById("Max_Counter");
let End = 0;
let Num = 1;
let RunLet = 0;
let NumKaktyz = 0;

let MaxCounterNum = 0;
let CounterNum = 0;

let Counter, Run, Game;

document.getElementById("Start_Box").addEventListener("click", function (){
    Interval();
    document.getElementById("Start_Box").style.display = "none";
});

function Interval (){
    Run = setInterval(function (){
        if (RunLet == 0){
            if (Num == 1){
                Body2.style.zIndex = 0;
                Num = 2;
            } else if (Num == 2){
                if (End == 0){
                    Body2.style.zIndex = 2;
                    Num = 1;
                };
            }
        }
    }, 92)
    Counter = setInterval(function (){
        CounterNum++;
        if (CounterNum < 10){
            Counter_Text.innerText = "0000" + CounterNum;
        } else if (CounterNum < 100){
            Counter_Text.innerText = "000" + CounterNum;
        } else if (CounterNum < 1000){
            Counter_Text.innerText = "00" + CounterNum;
        } else if (CounterNum < 10000){
            Counter_Text.innerText = "0" + CounterNum;
        } else {
            Counter_Text.innerText = CounterNum;
        };
    }, 100)
    
    
    Game = setInterval(function (){
        for (let y = 0; y < 4; y++){
            let ElementoffsetLeft = Kaktyz[y].offsetLeft;
            Kaktyz[y].style.left = ElementoffsetLeft - 1 +"px";
    
            let Num = 0;
            if (Kaktyz[y].offsetLeft < -40){
                let Space = 0;
    
                for(let y = 0; y < 4; y++){
                    if (Kaktyz[y].offsetLeft > Space){
                        Space = Kaktyz[y].offsetLeft;
                    }
                }
    
                let R = Math.random() * 15;
                R = Math.ceil(R);
    
                Space = Space + 150 + (R * 20);
                Kaktyz[y].style.left = Space + "px";
    
                if (NumKaktyz == 3){
                    NumKaktyz = 0;
                } else {
                    NumKaktyz++;
                }
            }
        }
        const KaktyzWidth = Kaktyz[0].clientWidth;
        const KaktyzHeight = Kaktyz[0].clientHeight;
    
        const DinoWidth = Dino.clientWidth;
        const DinoHeight = Dino.clientHeight;
    
        if ((Dino.offsetLeft + DinoWidth - 20) > Kaktyz[NumKaktyz].offsetLeft && (Dino.offsetLeft + DinoWidth - 20) < (Kaktyz[NumKaktyz].offsetLeft + KaktyzWidth)){
            if ((Dino.offsetTop + DinoHeight - 5) < Kaktyz[NumKaktyz].offsetTop || (Dino.offsetTop + DinoHeight - 5) > (Kaktyz[NumKaktyz].offsetTop + KaktyzHeight)){
    
            } else {
                End = 1;
                
                Body1.style.display = "none";
                Body2.style.display = "none";
                Block.style.zIndex = 5;
                GameOver.style.visibility = "visible";
    
                clearInterval(Game);
                clearInterval(Run);
                clearInterval(Counter);
    
                if (MaxCounterNum < CounterNum){
                    console.log(MaxCounterNum + " " + CounterNum);
                    MaxCounterNum = CounterNum;
                    if (MaxCounterNum < 10){
                        Max_Counter_Text.innerText = "0000" + MaxCounterNum;
                    } else if (MaxCounterNum < 100){
                        Max_Counter_Text.innerText = "000" + MaxCounterNum;
                    } else if (MaxCounterNum < 1000){
                        Max_Counter_Text.innerText = "00" + MaxCounterNum;
                    } else if (MaxCounterNum < 10000){
                        Max_Counter_Text.innerText = "0" + MaxCounterNum;
                    } else {
                        Max_Counter_Text.innerText = MaxCounterNum;
                    };
                }
            }
        }
    }, 3)
}

document.querySelector(".Box").addEventListener("click", function (){
    Block.style.zIndex = 5;
    RunLet = 1;
    let Top = Dino.offsetTop;
    let Num = 0;

    let SetInt = setInterval(function (){
        if (Num <= 65){
            Top-=1;
            Dino.style.top = Top + "px";
        } else {
            Top+=1;
            Dino.style.top = Top + "px";
            if (Num == 131){
                if (End == 0){
                    Block.style.zIndex = 1;
                };
                RunLet = 0;
                clearInterval(SetInt);
            }
        }
        Num++;
    }, 1.2)
});

Block.addEventListener("click", function (){
    if (End == 1){
        CounterNum = 0;
        NumKaktyz = 0;
        Kaktyz[0].style.left = "800px";
        Kaktyz[1].style.left = "1100px";
        Kaktyz[2].style.left = "1350px";
        Kaktyz[3].style.left = "1550px";
    
        Body1.style.display = "block";
        Body2.style.display = "block";
    
        Block.style.zIndex = 1;
        GameOver.style.visibility = "hidden";
    
        End = 0;
    
        Interval ();
    }
});
