// This script ensures user does not enter a date that is in the future

var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1; //January is 0!
var year = today.getFullYear();

if (day < 10) {  day = '0' + day; }

if (month < 10) { month = '0' + month; } 
    
today = year + '-' + month + '-' + day;

console.log(today);

document.getElementById("dob").setAttribute('max', today);