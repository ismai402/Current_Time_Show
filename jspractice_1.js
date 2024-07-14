
var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes; // add a leading zero to minutes if needed

var timeString = hours + ':' + minutes + ' ' + ampm;
document.write("Current Time: " + timeString + "<br>");

