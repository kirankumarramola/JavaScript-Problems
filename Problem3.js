//let time = 13;
let time = new Date().getHours();
function checkTime(){
    if(time>12)
    return time-12 +" PM";
    else 
    return time + " AM"
}
console.log(checkTime());
