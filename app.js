let pc = document.querySelector('.photo-pc');
let me = document.querySelector('.photo-me');
let span = document.querySelector('.span');
let checkUser,checkPc,userScore = 0,pcScore = 0;
let user = document.querySelector(".me-score");
let comp = document.querySelector(".pc-score");
function set(action){
    switch(action){
        case 'rock':
            me.style.background = "url('./rock.jpg')";
            me.style.backgroundSize = 'cover';
            me.style.backgroundPositionX = 'center';
            checkUser = 'rock';
            break;
        case 'paper':
            me.style.background = "url('./paper.jpg')";
            me.style.backgroundSize = '200px';
            me.style.backgroundPositionX = 'center';
            me.style.backgroundPositionY = 'center';
            checkUser = 'paper';
            break;
        case 'scissor':
            me.style.background = "url('./scissor.jpg')";
            me.style.backgroundSize = '260px';
            me.style.backgroundPositionX = 'center';
            me.style.backgroundPositionY = 'center';
            checkUser = 'scissor';
            break;
        }       
        setPc();
        displayResult();
        user.innerHTML = userScore > 0 ? userScore : 0;
        comp.innerHTML = pcScore > 0 ? pcScore : 0;
}
function displayResult(){
    if(checkPc == checkUser){
        span.innerHTML = 'Draw';  
    }else if(checkPc == 'rock' && checkUser == 'paper'){
        span.innerHTML = 'You Win';  
        userScore++;
    }else if(checkPc == 'paper' && checkUser == 'rock'){
        span.innerHTML = 'You Lose';  
        pcScore++;
    }else if(checkPc == 'paper' && checkUser == 'scissor'){
        span.innerHTML = 'You Win';  
        userScore++;
    }else if(checkPc == 'scissor' && checkUser == 'rock'){
        span.innerHTML = 'You Win';  
        userScore++;
    }else if(checkPc == 'scissor' && checkUser == 'paper'){
        span.innerHTML = 'You Lose';
        pcScore++;
    }else if(checkPc == 'rock' && checkUser == 'scissor'){
        span.innerHTML = 'You Lose';
        pcScore++;
    }
}
function setPc(){
    let random = Math.floor(Math.random()*10);
    switch(true){
        case random<=3:
            pc.style.background = "url('./rock.jpg')";
            pc.style.backgroundSize = 'cover';
            pc.style.backgroundPositionX = 'center';
            checkPc = 'rock';
            break;
        case random<=6:
            pc.style.background = "url('./paper.jpg')";
            pc.style.backgroundSize = '200px';
            pc.style.backgroundPositionX = 'center';
            checkPc = 'paper';
            break;
        case random<=9:
            pc.style.background = "url('./scissor.jpg')";
            pc.style.backgroundSize = '260px';
            pc.style.backgroundPositionX = 'center';
            pc.style.backgroundPositionY = 'center';
            checkPc = 'scissor';
            break;    
    }
}