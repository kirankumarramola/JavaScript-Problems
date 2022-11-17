let arr1 = [1,2,3,4,5];
let arr2 = [4,5,6,7,8];
let array = arr1.concat(arr2);
let res = new Set(array);
//console.log(res); 

function removeDup(){
    let a1 = [10,20,30,40,50];
    let a2 = [40,50,60,70,80];
    let arr = a1.concat(a2);
    let unique = [];
    arr.forEach((n)=>{ 
        if(!unique.includes(n)) 
        unique.push(n)});
    return unique;                       
}
console.log(removeDup());

