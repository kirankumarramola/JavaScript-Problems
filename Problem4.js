let arr = ["kiran","srinesh","sai","chandramouli"];
let long = "";
function findLong(){
arr.forEach(getLongest);
function getLongest(str){
    if(str.length>long.length)
    long = str;
}
    return long;
}
//console.log(findLong());


function findLong2(){
    let res = arr.sort(function(a, b) { return b.length - a.length; });
    return res.shift(); // or res[0]
  }
console.log(findLong2()); 