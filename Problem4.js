let arr = ["kiran","srinesh","sai","chandramouli"];
let long = "";
arr.forEach(getLongest);
function getLongest(str){
    if(str.length>long.length)
    long = str;
}
console.log(long);