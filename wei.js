var WeightType1 = document.getElementById('WeightType1')
var WeightType2 = document.getElementById('WeightType2')
var Weight = document.getElementById('input')
var result = document.getElementById('result')

WeightType1.addEventListener('change',WeightConversion)
WeightType2.addEventListener('change',WeightConversion)
Weight.addEventListener('keyup',WeightConversion)

function WeightConversion(){
  var Wt1=WeightType1.value
  var Wt2=WeightType2.value
  
  if(Wt1==="Milligram" && Wt2==="Milligram"){
     result.value=Weight.value;
  }
  else if(Wt1==="Milligram" && Wt2==="Gram"){
    result.value=Weight.value/1000;
 }
 else if(Wt1==="Milligram" && Wt2==="Kilogram"){
    result.value=Weight.value/1000000;
 }
 else if(Wt1==="Milligram" && Wt2==="Quintal"){
    result.value=Weight.value/100000000;
 }
 else if(Wt1==="Milligram" && Wt2==="Tonne"){
    result.value=Weight.value/1000000000;
 }
 else if(Wt1==="Milligram" && Wt2==="Pound"){
    result.value=Weight.value/453592.374495299;
 }
 else if(Wt1==="Gram" && Wt2==="Milligram"){
    result.value=Weight.value*1000;
 }
 else if(Wt1==="Gram" && Wt2==="Gram"){
   result.value=Weight.value;
}
else if(Wt1==="Gram" && Wt2==="Kilogram"){
   result.value=Weight.value/1000;
}
else if(Wt1==="Gram" && Wt2==="Quintal"){
   result.value=Weight.value/100000;
}
else if(Wt1==="Gram" && Wt2==="Tonne"){
   result.value=Weight.value/1000000;
}
else if(Wt1==="Gram" && Wt2==="Pound"){
    result.value=Weight.value/453.592374495299;
 }
 else if(Wt1==="Kilogram" && Wt2==="Milligram"){
    result.value=Weight.value*1000000;
 }
 else if(Wt1==="Kilogram" && Wt2==="Gram"){
   result.value=Weight.value*1000;
}
else if(Wt1==="Kilogram" && Wt2==="Kilogram"){
   result.value=Weight.value;
}
else if(Wt1==="Kilogram" && Wt2==="Quintal"){
   result.value=Weight.value/100;
}
else if(Wt1==="Kilogram" && Wt2==="Tonne"){
   result.value=Weight.value/1000;
}
else if(Wt1==="Kilogram" && Wt2==="Pound"){
    result.value=Weight.value*2.2046226;
 }
 else if(Wt1==="Quintal" && Wt2==="Milligram"){
    result.value=Weight.value*100000000;
 }
 else if(Wt1==="Quintal" && Wt2==="Gram"){
   result.value=Weight.value*100000;
}
else if(Wt1==="Quintal" && Wt2==="Kilogram"){
   result.value=Weight.value*100;
}
else if(Wt1==="Quintal" && Wt2==="Quintal"){
   result.value=Weight.value;
}
else if(Wt1==="Quintal" && Wt2==="Tonne"){
   result.value=Weight.value/10;
}
else if(Wt1==="Quintal" && Wt2==="Pound"){
    result.value=Weight.value*220.46226;
 }
 else if(Wt1==="Tonne" && Wt2==="Milligram"){
    result.value=Weight.value*1000000000;
 }
 else if(Wt1==="Tonne" && Wt2==="Gram"){
   result.value=Weight.value*1000000;
}
else if(Wt1==="Tonne" && Wt2==="Kilogram"){
   result.value=Weight.value*1000;
}
else if(Wt1==="Tonne" && Wt2==="Quintal"){
   result.value=Weight.value*10;
}
else if(Wt1==="Tonne" && Wt2==="Tonne"){
   result.value=Weight.value;
}
else if(Wt1==="Tonne" && Wt2==="Pound"){
    result.value=Weight.value*2204.6226;
 }
 else if(Wt1==="Pound" && Wt2==="Milligram"){
    result.value=Weight.value*453592.374495299;
 }
 else if(Wt1==="Pound" && Wt2==="Gram"){
   result.value=Weight.value*453.592374495299;
}
else if(Wt1==="Pound" && Wt2==="Kilogram"){
   result.value=Weight.value/2.2046226;
}
else if(Wt1==="Pound" && Wt2==="Quintal"){
   result.value=Weight.value/220.46226;
}
else if(Wt1==="Pound" && Wt2==="Tonne"){
   result.value=Weight.value/2204.6226;
}
else if(Wt1==="Pound" && Wt2==="Pound"){
    result.value=Weight.value;
 }
 
 

 



}
