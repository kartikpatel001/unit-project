var speedType1 = document.getElementById('speedType1');
var speedType2 = document.getElementById('speedType2');
var speed = document.getElementById('input');
var result = document.getElementById('result');

speedType1.addEventListener('change', speedConversion);
speedType2.addEventListener('change', speedConversion);
speed.addEventListener('input', speedConversion);

function speedConversion() {
    var sT1 = speedType1.value;
    var sT2 = speedType2.value;
    
    if (sT1 === "Meter/Second" && sT2 === "Meter/Second") {
        result.value = speed.value; 
    }
    else if (sT1 === "Meter/Second" && sT2 === "Kilometer/Hour") {
        result.value = speed.value*3.6; 
    }
    else if (sT1 === "Meter/Second" && sT2 === "Inch/Second")
    {
        result.value = speed.value*39.370079; 
    }
    else if (sT1 === "Meter/Second" && sT2 === "Kilometer/Second") {
        result.value = speed.value/1000; 
    }
    else if (sT1 === "Meter/Second" && sT2 === "Mile/Hour"){
        result.value = speed.value*2.236936; 
    }
    else if (sT1 === "Kilometer/Hour" && sT2 === "Meter/Second") {
        result.value = speed.value/3.6; 
    }
    else if (sT1 === "Kilometer/Hour" && sT2 === "Kilometer/Hour") {
        result.value = speed.value; 
    }
    else if (sT1 === "Kilometer/Hour" && sT2 === "Inch/Second")
    {
        result.value = speed.value*10.936133055; 
    }    else if (sT1 === "Kilometer/Hour" && sT2 === "Kilometer/Second") {
        result.value = speed.value/3600; 
    }
    else if (sT1 === "Kilometer/Hour" && sT2 === "Mile/Hour"){
        result.value = speed.value/1.60934421011598; 
    }
    else if (sT1 === "Inch/Second" && sT2 === "Meter/Second") {
        result.value = speed.value/39.370079; 
    }
    else if (sT1 === "Inch/Second" && sT2 === "Kilometer/Hour") {
        result.value = speed.value/10.936133055; 
    }
    else if (sT1 === "Inch/Second" && sT2 === "Inch/Second")
    {
        result.value = speed.value; 
    }
    else if (sT1 === "Inch/Second" && sT2 === "Kilometer/Second") {
        result.value = speed.value/39370.079; 
    }
    else if (sT1 === "Inch/Second" && sT2 === "Mile/Hour"){
        result.value = speed.value/17.600002414; 
    }
    else if (sT1 === "Kilometer/Second" && sT2 === "Meter/Second") {
        result.value = speed.value*1000; 
    }
    else if (sT1 === "Kilometer/Second" && sT2 === "Kilometer/Hour") {
        result.value = speed.value*3600; 
    }
    else if (sT1 === "Kilometer/Second" && sT2 === "Inch/Second")
    {
        result.value = speed.value*39370.079; 
    }
    else if (sT1 === "Kilometer/Second" && sT2 === "Kilometer/Second") {
        result.value = speed.value; 
    }
    else if (sT1 === "Kilometer/Second" && sT2 === "Mile/Hour"){
        result.value = speed.value*2236.936; 
    }
    else if (sT1 === "Mile/Hour" && sT2 === "Meter/Second") {
        result.value = speed.value/2.236936; 
    }
    else if (sT1 === "Mile/Hour" && sT2 === "Kilometer/Hour") {
        result.value = speed.value*1.60934421011598; 
    }
    else if (sT1 === "Mile/Hour" && sT2 === "Inch/Second")
    {
        result.value = speed.value*17.600002414; 
    }
    else if (sT1 === "Mile/Hour" && sT2 === "Kilometer/Second") {
        result.value = speed.value/2236.936; 
    }
    else if (sT1 === "Mile/Hour" && sT2 === "Mile/Hour"){
        result.value = speed.value; 
    }
  
  
  
  
  



}