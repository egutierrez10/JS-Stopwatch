let sec = 0;
let min = 0;
let hour = 0;
let interval;
let clicked = 0;
function prettyTime(text){
    if(text < 10){
        return "0" + text;
    }
    else{
        return text;
    }
}
function start(){
    document.getElementById('start').innerHTML = "Stop";
    clicked++;
    if(clicked % 2 == 0){
        clearInterval(interval);
        clicked = 0;
        document.getElementById('start').innerHTML = "Start";
        return;
    }
    interval = setInterval(function(){
        sec++;
        if(sec == 60){
            sec = 0;
            min = min + 1;
        }
        if(min == 60){
            min = 0;
            hour += 1;
        }
        document.getElementById('time').innerHTML = prettyTime(hour) + ":" + prettyTime(min) + ":" + prettyTime(sec);
    },1000);
}
function reset(){
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById('start').innerHTML = "Start";
    document.getElementById('time').innerHTML = prettyTime(hour) + ":" + prettyTime(min) + ":" + prettyTime(sec);
    clearInterval(interval);
}