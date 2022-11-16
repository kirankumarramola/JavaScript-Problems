let d = new Date();
let date = d.getDate();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();

console.log("Current Date ");
console.log("Date : "+date+"  Day : "+Day(day)+"  Month : "+Month(month)+"  Year : "+year);

let preMonth = new Date();
preMonth.setFullYear(year,month-1,date)
console.log("Previous Month")
console.log("Date : "+preMonth.getDate()+"  Day : "+Day(preMonth.getDay())+"  Month : "+Month(preMonth.getMonth())+"  Year : "+preMonth.getFullYear());

let preYear = new Date();
preYear.setFullYear(year-1,month,date)
console.log("Previous Year")
console.log("Date : "+preYear.getDate()+"  Day : "+Day(preYear.getDay())+"  Month : "+Month(preYear.getMonth())+"  Year : "+preYear.getFullYear());

let nextMonth = new Date();
nextMonth.setFullYear(year,month+1,date)
console.log("Next Month")
console.log("Date : "+nextMonth.getDate()+"  Day : "+Day(nextMonth.getDay())+"  Month : "+Month(nextMonth.getMonth())+"  Year : "+nextMonth.getFullYear());

function Day(x){
    let day = x;
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
function Month(x){
    let month = x;
    switch(month){
        case 0 : return "January";
        case 1 : return "Febuary";
        case 2 : return "March";
        case 3 : return "April";
        case 4 : return "May";
        case 5 : return "June";
        case 6 : return "July";
        case 7 : return "August";
        case 8 : return "September";
        case 9 : return "October";
        case 10 : return "November";
        case 11 : return "December";
    }
}