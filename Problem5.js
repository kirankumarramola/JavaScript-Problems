function getRepeat(){
    let numbers = [16,23,23,56,67,89,44,23,44];
    let countElement = 0;
    let res = [];
    numbers.forEach(check);
    function check(num){
        let count = 0;
        for(let i = 0; i<numbers.length; i++){
            if(num == numbers[i])
            count++;
        }
        if(count>countElement){
            countElement = count;
            res = num;
        }
    }
    console.log(res);
    
}
getRepeat();