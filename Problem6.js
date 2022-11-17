let num = [1,2,4,7,8,3,5,10];
function FillElements(x){
    num.fill(x);
    return num;
}
console.log(FillElements(11));

let n = [66,78,44,54,76];
function myFunction(x){
   for(let i=0;i<n.length;i++){
    n[i]=x;
   }
   return n;
}
//console.log(myFunction(99));
