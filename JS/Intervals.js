let RunningSpeed = 10;
let RestartTimeGame = false;
let R_K, R, MaxRK;
let ElementoffsetLeft;
let Num_Space = 0;

let Space;
let CloudNum = 0;
let StopCounter = 0;
let RemoveCounter = 0;
let FiveR, FiveR2 = 0;
let PteroAct = true;
let Pter = 0;

let MaxCounterNum = 0;
let CounterNum = 1;

let Counter, Run, Game, SetJump, UpdateTimeGame;
const CounterClass = document.querySelector(".Counter");
let BodyTB = 1;

const Dino_Box = document.querySelector(".Dino_Box");
const Dino_Box_B = document.querySelector(".Dino_Box_B");
const Dino = document.querySelector(".Dino_Box");
const Kaktyz = document.getElementsByClassName("Kaktyz");
const None = document.getElementsByClassName("None");

let KaktyzWidth = Kaktyz[Num_Space].clientWidth;
let JumpAct = false;
let GetUp = false;

let Num = 1;
let RunLet = 0;
let NumKaktyz = 0;

function Interval (){
    Counter = setInterval(function (){
        const Counter_Text = document.getElementById("Counter");
        CounterNum++;
        
        if (StopCounter == 0){
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
        } else {
            RemoveCounter ++;
            if (RemoveCounter == 20){
                RemoveCounter = 0;
                StopCounter = 0;

                CounterClass.style.animation = "none";
            }
        }

        if (CounterNum % 100){} else {
            StopCounter = 1;

            Audio2.play();

            CounterClass.style.animation = "Color .66s ease 0s infinite";
        }

    }, 100)

    Game = setInterval(function (){
        const Stones_Box = document.getElementById("Stones_Box");
        
        ElementoffsetLeft = Stones_Box.offsetLeft;
        Stones_Box.style.left = ElementoffsetLeft - 3 +"px";

        if (Stones_Box.offsetLeft < -600){
            Stones_Box.style.left = 0 + "px";
        }
        
        for (let y = 0; y < 3; y++){
            ElementoffsetLeft = Hill[y].offsetLeft;
            Hill[y].style.left = ElementoffsetLeft - 3 +"px";
    
            if (Hill[y].offsetLeft < -40){
                Space = 0;

                for(let y = 0; y < 3; y++){
                    if (Hill[y].offsetLeft > Space){
                        Space = Hill[y].offsetLeft + Hill[y].clientWidth;
                    }
                }
                
                R = Math.random() * 10;
                R = Math.ceil(R);
    
                Space = Space + 300 + (R * 100);
                Hill[y].style.left = Space + "px";

            }
        }

        for (let y = 0; y < 3; y++){
            ElementoffsetLeft = Cloud[y].offsetLeft;
            Cloud[y].style.left = ElementoffsetLeft - 1 +"px";
    
            if (Cloud[y].offsetLeft < -40){
                Space = 0;

                NumCloud = 0;
                function R_Cloud (){
                    R = Math.random() * 3;
                    R = Math.ceil(R);
                    NumCloud ++;

                    if (NumCloud == 3){
                        Space = -10 + (20 * R);
                        Cloud[y].style.top = Space + "px";
                        CloudNum = R;
                    } else {
                        if (CloudNum != R){
                            Space = -10 + (20 * R);
                            Cloud[y].style.top = Space + "px";
                            CloudNum = R;
                        } else {
                            R = Math.random() * 3;
                            R_Cloud ()
                        }
                    }
                }R_Cloud();

                for(let y = 0; y < 3; y++){
                    if (Cloud[y].offsetLeft > Space){
                        Space = Cloud[y].offsetLeft + Cloud[y].clientWidth;
                    }
                }
                
                R = Math.random() * 10;
                R = Math.ceil(R);
    
                Space = Space + 50 + (R * 15);
                Cloud[y].style.left = Space + "px";

            }
        }

        for (let y = 0; y < 3; y++){
            ElementoffsetLeft = Kaktyz[y].offsetLeft;
            Kaktyz[y].style.left = ElementoffsetLeft - 3 +"px";
    
            if (Kaktyz[y].offsetLeft < -40){
                Space = 0;
                MaxRK = 0;

                for(let y = 0; y < 3; y++){
                    if (Kaktyz[y].offsetLeft > Space){
                        Space = Kaktyz[y].offsetLeft + Kaktyz[y].clientWidth;
                    }
                }

                if (CounterNum > 100) {
                    Kaktyz[y].classList.remove("Kaktyz")
                    function R_K_Fun (){
                        if (CounterNum > 500){
                            MaxRK = 5;
                        } else {
                            MaxRK = (CounterNum / 150);
                        };
                        R_K = Math.random() * (3 + MaxRK);
                        R_K = Math.floor(R_K);

                        if (None[R_K].classList.contains('Kaktyz')){
                            R_K_Fun();
                        } else {
                            None[R_K].classList.add('Kaktyz');
                        }
                    }R_K_Fun();
                }

                const Five = document.getElementById("5");
                if (R_K == 5){

                    FiveR = Math.random() * 3;
                    FiveR = Math.ceil(FiveR);
                    
                    Five.style.bottom = (20 * FiveR) + "px";

                    FiveR2 = Math.random() * 3;
                    FiveR2 = Math.ceil(FiveR2);

                    if (FiveR2 == 2){
                        let R2 = setInterval(function(){
                            ElementoffsetLeft = Five.offsetLeft;
                            Five.style.left = ElementoffsetLeft - 1 +"px";

                            if (Five.style.left < 40){
                                clearInterval(R2);
                            }
                        }, (RunningSpeed + 5)*8)
                    } else if (FiveR2 == 3){
                        let R2 = setInterval(function(){
                            ElementoffsetLeft = Five.offsetLeft;
                            Five.style.left = ElementoffsetLeft + 1 +"px";

                            if (Five.style.left < 40){
                                clearInterval(R2);
                            }
                        }, (RunningSpeed + 5)*8)
                    }

                    R = Math.random() * 15;
                    R = Math.ceil(R);
                } else {
                    R = Math.random() * 15;
                    R = Math.ceil(R);
                }

    
                Space = Space + 150 + (R * 20);

                if (CounterNum > 100) {
                    None[R_K].style.left = Space + "px";
                } else {
                    Kaktyz[y].style.left = Space + "px";
                }

                Space = 11111;
                Num_Space = 0;
                for(let y = 0; y < 3; y++){
                    if (Kaktyz[y].offsetLeft < Space){
                        Space = Kaktyz[y].offsetLeft;
                        Num_Space = y;
                    }
                }
            }
        }
        const DinoWidth = Dino.clientWidth;
        const DinoHeight = Dino.clientHeight;
        if ((Dino.offsetLeft + DinoWidth - 20) > Kaktyz[Num_Space].offsetLeft && (Dino.offsetLeft + DinoWidth - 20) < (Kaktyz[Num_Space].offsetLeft + KaktyzWidth)){
            let KaktyzHeight = Kaktyz[Num_Space].clientHeight;
            if ((Dino.offsetTop + DinoHeight - 5) < Kaktyz[Num_Space].offsetTop || (Dino.offsetTop + DinoHeight - 5) > (Kaktyz[Num_Space].offsetTop + KaktyzHeight + 20)){
    
            } else {
                End = 1;

                Dino_Box.style.visibility = "visible";
                Dino_Box_B.style.visibility = "hidden";
                BodyTB = 1;

                Body1.style.display = "none";
                Body2.style.display = "none";


                GameOver.style.visibility = "visible";

                Audio3.play();

                clearInterval(Game);
                clearInterval(Run);
                clearInterval(Counter);

                const Max_Counter_Text = document.getElementById("Max_Counter");
                if (MaxCounterNum < CounterNum){
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
        if (RunningSpeed > 5){
            if (Number.isInteger(CounterNum / 50)){
                CounterNum++;
                RunningSpeed --;
                RestartTimeGame = true;

                clearInterval(Game);
                clearInterval(Run);
                clearInterval(Counter);
            }
        }
    }, RunningSpeed + 5)

    Run = setInterval(function (){
        if (RunLet == 0){
            if (BodyTB == 1){
                if (Num == 1){
                    Body2.style.zIndex = 0;
                    Num = 2;
                } else if (Num == 2){
                    if (End == 0){
                        Body2.style.zIndex = 2;
                        Num = 1;
                    };
                }
            } else {
                if (Num == 1){
                    const BodyB2 = document.getElementById("BodyB2");
                    BodyB2.style.zIndex = 0;
                    Num = 2;
                } else if (Num == 2){
                    if (End == 0){
                        BodyB2.style.zIndex = 2;
                        Num = 1;
                    };
                }
            }
        }
        if (PteroAct == true){
            Pter++;
            const Ptero1 = document.getElementById("Ptero1");
            const Ptero2 = document.getElementById("Ptero2");
            if (Pter == 3){
                Ptero1.style.display = "block";
                Ptero2.style.display = "none";
            } else if (Pter == 6){
                Pter = 0;
                Ptero1.style.display = "none";
                Ptero2.style.display = "block";
            }

        }
    }, 50 + (RunningSpeed * 5))

    UpdateTimeGame =  setInterval(function() {
        if (RestartTimeGame == true){
            RestartTimeGame = false;
            Interval ();
        };
    }, 10)
};

function Jump (){
    Audio1.play();
    if (BodyTB == 1){
        JumpAct = true;
        RunLet = 1;
        let Top = Dino.offsetTop;
        let Num = 0;
        let Tsykl = 65;
        let Tsykl2 = Tsykl + 15;
        let Tsykl21 = Tsykl * 2 + 1;
        let Tsykl22 = Tsykl21 + 30;
        let SetJumpUp = setInterval(function (){
            Top-=1;
            Dino.style.top = Top + "px";
            
            if (Num == Tsykl && keyDown == 1){
                clearInterval(SetJumpUp);
                SetJumpPress = setInterval(function (){
                    Top+=1;
                    Dino.style.top = Top + "px";
                    if (GetUp == true && Dino.offsetTop > 76){
                        Dino.style.top = 79 + "px";
                        RunLet = 0;
                        keyDown = 0;
                        JumpAct = false;
                        GetUp = false;
                        clearInterval(SetJumpPress);
                    }
                    if (Num == Tsykl21){
                        RunLet = 0;
                        keyDown = 0;
                        JumpAct = false;
                        clearInterval(SetJumpPress);
                    }
                    Num++;
                }, RunningSpeed * 0.066)
            } else if (Num == Tsykl2){
                clearInterval(SetJumpUp);
                SetJumpPress = setInterval(function (){
                    Top+=1;
                    Dino.style.top = Top + "px";
                    if (GetUp == true && Dino.offsetTop > 74){
                        Dino.style.top = 79 + "px";
                        RunLet = 0;
                        keyDown = 0;
                        JumpAct = false;
                        GetUp = false;
                        clearInterval(SetJumpPress);
                    }
                    if (Num == Tsykl22){
                        RunLet = 0;
                        keyDown = 0;
                        JumpAct = false;
                        clearInterval(SetJumpPress);
                    }
                    Num++;
                }, RunningSpeed * 0.066)

            }
            Num++;
        }, RunningSpeed * 0.125)
    }
};