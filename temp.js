var tempType1 = document.querySelector('#tempType1');
var tempType2 = document.querySelector('#tempType2');
var temp = document.querySelector('#input');
var result = document.getElementById('result');

tempType1.addEventListener('change', tempConversion);
tempType2.addEventListener('change', tempConversion);
temp.addEventListener('input', tempConversion);

function tempConversion() {
    var tT1 = tempType1.value;
    var tT2 = tempType2.value; 

    if (tT1 === "Degree Celsius" && tT2 === "Degree Celsius") {
        result.value = temp.value; 
    }
    else if (tT1 === "Degree Celsius" && tT2 === "Degree Fahrenheit") {
        result.value = (temp.value*9/5)+32; 
    }
    else if (tT1 === "Degree Celsius" && tT2 === "Kelvin") {
        result.value = temp.value*1+273.15; 
    }
    else if (tT1 === "Degree Fahrenheit" && tT2 === "Degree Celsius") {
        result.value = (temp.value-32)*5/9; 
    }
    else if (tT1 === "Degree Fahrenheit" && tT2 === "Degree Fahrenheit") {
        result.value = temp.value; 
    }
    else if (tT1 === "Degree Fahrenheit" && tT2 === "Kelvin") {
        result.value = (temp.value-32)*5/9+273.15; 
    }
    else if (tT1 === "Kelvin" && tT2 === "Degree Celsius") {
        result.value = temp.value-273.15; 
    }
    else if (tT1 === "Kelvin" && tT2 === "Degree Fahrenheit") {
        result.value = (temp.value-273.15)*9/5+32; 
    }
    else if (tT1 === "Kelvin" && tT2 === "Kelvin") {
        result.value = temp.value; 
    }

}
