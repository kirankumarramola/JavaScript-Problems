let time = 24;
//let time = new Date().getHours();
function checkTime(){
    if(time>12)
    return time-12 +" PM";
    else 
    return time + " AM"
}
//console.log(checkTime());

function check(time){
        if(time>12 && time<24)
        return time-12 + "PM";
        else if(time==24)
        return time-12 + " AM";
        else if(time==12)
        return time + " PM";
        else
        return time + " AM";
}
console.log(check(24));