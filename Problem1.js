function check(num){
    if(num<13)
    return 13-num;
    else
    return (num-13)*2;
}

console.log(check(10));

function getDiff(x){
    switch(x<13){
        case true : return 13-x;
        case false : return Math.abs(13-x)*2;
    }
}
//console.log(getDiff(17));