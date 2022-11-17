let d = new Date();

let date=d.toDateString();
console.log("Current Date : "+date);
console.log();



let preMonth = new Date().setMonth(d.getMonth()-1) ;
let preMonthData = new Date(preMonth).toDateString();
console.log("Previous Month : "+preMonthData);
console.log();



let preYear = new Date().setFullYear(d.getFullYear()-1);
let preYearData = new Date(preYear).toDateString();
console.log("Previous Year : "+preYearData);
console.log();



let nextMonth = new Date().setMonth(d.getMonth()+1);
let nextMonthData = new Date(nextMonth).toDateString();
console.log("Next Month : "+nextMonthData);
console.log();
