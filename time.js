var timeType1 = document.querySelector('#timeType1');
var timeType2 = document.querySelector('#timeType2');
var time = document.querySelector('#input');
var result = document.getElementById('result');

timeType1.addEventListener('change', timeConversion);
timeType2.addEventListener('change', timeConversion);
time.addEventListener('input', timeConversion);

function timeConversion() {
    var tT1 = timeType1.value;
    var tT2 = timeType2.value; 

    if (tT1 === "Second" && tT2 === "Second") {
        result.value = time.value; 
    }
    else if (tT1 === "Second" && tT2 === "Minute") {
        result.value = time.value/60; 
    }
    else if (tT1 === "Second" && tT2 === "Hours")
    {
        result.value = time.value/3600; 
    }
    else if (tT1 === "Second" && tT2 === "Day") {
        result.value = time.value/86400; 
    }
    else if (tT1 === "Second" && tT2 === "Week"){
        result.value = time.value/604800; 
    }
   else if (tT1 === "Minute" && tT2 === "Second") {
        result.value = time.value*60; 
    }
    else if (tT1 === "Minute" && tT2 === "Minute") {
        result.value = time.value; 
    }
    else if (tT1 === "Minute" && tT2 === "Hours") {
        result.value = time.value/60; 
    }
    else if (tT1 === "Minute" && tT2 === "Day") {
        result.value = time.value/1440; 
    }
    else if (tT1 === "Minute" && tT2 === "Week") {
        result.value = time.value/10080; 
    }
    else if (tT1 === "Hours" && tT2 === "Second") {
        result.value = time.value*3600; 
    }
    else if (tT1 === "Hours" && tT2 === "Minute") {
        result.value = time.value*60; 
    }
    else if (tT1 === "Hours" && tT2 === "Hours") {
        result.value = time.value;
    }
    else if (tT1 === "Hours" && tT2 === "Day") {
        result.value = time.value/24; 
    }
    else if (tT1 === "Hours" && tT2 === "Week") {
        result.value = time.value/168; 
    }
    else if (tT1 === "Day" && tT2 === "Second") {
        result.value = time.value*86400; 
    }
    else if (tT1 === "Day" && tT2 === "Minute") {
        result.value = time.value*1440; 
    }
    else if (tT1 === "Day" && tT2 === "Hours") {
        result.value = time.value*24;
    }
    else if (tT1 === "Day" && tT2 === "Day") {
        result.value = time.value; 
    }
    else if (tT1 === "Day" && tT2 === "Week") {
        result.value = time.value/7; 
    }
    else if (tT1 === "Week" && tT2 === "Second") {
        result.value = time.value*604800; 
    }
    else if (tT1 === "Week" && tT2 === "Minute") {
        result.value = time.value*10080 
    }
    else if (tT1 === "Week" && tT2 === "Hours") {
        result.value = time.value*168;
    }
    else if (tT1 === "Week" && tT2 === "Day") {
        result.value = time.value*7; 
    }
    else if (tT1 === "Week" && tT2 === "Week") {
        result.value = time.value; 
    }
   
   
   




}
