let str = "HelloWorld";
function deleteElement(ch){
    let s = ch;
    let res ="";
    for(let i=0; i<str.length; i++){
        if(str[i]!=s)
        res+=str[i];
    }
    return res;
}
console.log(deleteElement("W"));
console.log(str.replace("W","")); // using built in function