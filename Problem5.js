const numbers = [2,6,7,9,10,6,1,2,2];
let countElement = 0;
let res = 0;
numbers.forEach(check);
function check(n){
    let count = 0;
    for(let i=0;i<numbers.length;i++){
        if(n==numbers[i])
        count++;
    }
    if(count>countElement){
        count = countElement;
        res = n;
    }
}
console.log(res);