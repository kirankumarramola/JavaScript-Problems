let d = new Date();
function PrintDate(){
    console.log("Date : "+d.getDate());
    console.log("Day : "+Day());
    console.log("Month : "+d.getMonth());
    console.log("Year : "+d.getFullYear());
}
function Day(){
    let day = d.getDay();
    switch(day){
        case 0 : return "Sunday";
        case 1 : return "Monday";
        case 2 : return "Tuesday";
        case 3 : return "Wednesday";
        case 4 : return "Thursday";
        case 5 : return "Friday";
        case 6 : return "Saturday";
    }
}
PrintDate();
