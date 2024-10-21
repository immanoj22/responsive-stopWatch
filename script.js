let miliseconds=0;
let seconds=0;
let minutes=0;
let hour=0;
let gostart=document.getElementById("goingtostart").addEventListener('click', start);
let gostop=document.getElementById("goingtostop").addEventListener('click', stop);
let Reset=document.getElementById("reset").addEventListener('click', reset);
function stopwatch(){
    miliseconds=miliseconds+1;
    if(miliseconds==100){
        seconds+=1;
        miliseconds=0;
    }
    if(seconds==60){
        minutes+=1;
        seconds=0;
    }
    if(minutes==60){
        hour+=1;
        minutes=0;
    }
    if(hour==24){
        hour=1;
    }

}
let time;
function start(){
   time=setInterval(stopwatch,10);
}
function stop(){
    clearInterval(time);
}
function reset(){
    miliseconds=0;
    seconds=0;
    minutes=0;
    hour=0;
}
let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let milis=document.getElementById("mili");
function dis(){
    milis.textContent=miliseconds.toString().padStart(2,0);
    sec.textContent=seconds.toString().padStart(2,0);
    min.textContent=minutes.toString().padStart(2,0);
    hr.textContent=hour.toString().padStart(2,0);
}

setInterval(dis,10)