let RunningSpeed = 10;
let RestartTimeGame = false;

function Interval (){
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
    }, 50 + (RunningSpeed * 5))
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
            Kaktyz[y].style.left = ElementoffsetLeft - 3 +"px";
    
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
                
                Dino_Box.style.visibility = "visible";
                Dino_Box_B.style.visibility = "hidden";
                BodyTB = 1;

                Body1.style.display = "none";
                Body2.style.display = "none";

                Block.style.zIndex = 5;
                GameOver.style.visibility = "visible";
    
                clearInterval(Game);
                clearInterval(Run);
                clearInterval(Counter);
    
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

    UpdateTimeGame =  setInterval(function() {
        if (RestartTimeGame == true){
            RestartTimeGame = false;
            Interval ();
        };
    }, 10)
};

function Jump (){
    if (BodyTB == 1){
        Block.style.zIndex = 5;
        RunLet = 1;
        let Top = Dino.offsetTop;
        let Num = 0;
        let Tsykl = 60;
        let Tsykl2 = Tsykl + 15;
        let Tsykl21 = Tsykl * 2 + 1;
        let Tsykl22 = Tsykl21 + 30;
        SetJumpUp = setInterval(function (){
            Top-=1;
            Dino.style.top = Top + "px";
            
            if (Num == Tsykl && keyDown == 1){
                clearInterval(SetJumpUp);
                SetJumpPress = setInterval(function (){
                    Top+=1;
                    Dino.style.top = Top + "px";
                    if (Num == Tsykl21){
                        if (End == 0){
                            Block.style.zIndex = 1;
                        };
                        RunLet = 0;
                        keyDown = 0;
                        clearInterval(SetJumpPress);
                    }
                    Num++;
                }, RunningSpeed * 0.1)
            } else if (Num == Tsykl2){
                clearInterval(SetJumpUp);
                SetJumpPress = setInterval(function (){
                    Top+=1;
                    Dino.style.top = Top + "px";
                    if (Num == Tsykl22){
                        if (End == 0){
                            Block.style.zIndex = 1;
                        };
                        RunLet = 0;
                        keyDown = 0;
                        clearInterval(SetJumpPress);
                    }
                    Num++;
                }, RunningSpeed * 0.1)

            }
            Num++;
        }, RunningSpeed * 0.1)
    }
};
