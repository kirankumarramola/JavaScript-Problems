let str = "HelloWorld";
let s = "HELLO";
function deleteElement(ch){
    let s = ch;
    let res ="";
    for(let i=0; i<str.length; i++){
        if(str[i]!=s)
        res+=str[i];
    }
    return res;
}
console.log(deleteElement("W")); // using user defined function


console.log(str.replace("W","")); // using built in function - replace() method


console.log(remove("O")); // using subString() method
function remove(x){
    let i =s.indexOf(x);
    return s.substring(i,0);
}
 
console.log(remove1("E")); // using slice() method
function remove1(x){
    let i = s.indexOf(x);
    return s.slice(0,i) + "" + s.slice(i+1); 
}


