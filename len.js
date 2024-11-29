var LengthType1= document.getElementById('LengthType1')
var LengthType2= document.getElementById('LengthType2')
var Length= document.getElementById('input')
var result= document.getElementById('result')

LengthType1.addEventListener('change',LengthConversion)
LengthType2.addEventListener('change',LengthConversion)
Length.addEventListener('keyup',LengthConversion)

function LengthConversion(){
  var LT1= LengthType1.value
  var LT2= LengthType2.value

  
  if(LT1==="Millimeter" && LT2==="Millimeter"){
    result.value=Length.value;
  }
  else if(LT1==="Millimeter" && LT2==="Centimeter"){
    result.value=Length.value/10;
  }
  else if(LT1==="Millimeter" && LT2==="Decimeter"){
    result.value=Length.value/100;
  }
  else if(LT1==="Millimeter" && LT2==="Meter"){
    result.value=Length.value/1000;
  }
  else if(LT1==="Millimeter" && LT2==="Kilometer"){
    result.value=Length.value/1000000;
  }
  else if(LT1==="Millimeter" && LT2==="Inch"){
    result.value=Length.value/25.4;
  }
  else if(LT1==="Millimeter" && LT2==="Foot"){
    result.value=Length.value/304.79;
  }
  else if(LT1==="Millimeter" && LT2==="Yard"){
    result.value=Length.value/914.39;
  }
  else if(LT1==="Millimeter" && LT2==="Mile"){
    result.value=Length.value/1609269.3916961;
  }
  else if(LT1==="Centimeter" && LT2==="Millimeter"){
    result.value=Length.value*10;
  }
  else if(LT1==="Centimeter" && LT2==="Centimeter"){
    result.value=Length.value;
  }
  else if(LT1==="Centimeter" && LT2==="Decimeter"){
    result.value=Length.value/10;
  }
  else if(LT1==="Centimeter" && LT2==="Meter"){
    result.value=Length.value/100;
  }
  else if(LT1==="Centimeter" && LT2==="Kilometer"){
    result.value=Length.value/100000;
  }
  else if(LT1==="Centimeter" && LT2==="Inch"){
    result.value=Length.value/2.54;
  }
  else if(LT1==="Centimeter" && LT2==="Foot"){
    result.value=Length.value/30.479;
  }
  else if(LT1==="Centimeter" && LT2==="Yard"){
    result.value=Length.value/91.439;
  }
  else if(LT1==="Centimeter" && LT2==="Mile"){
    result.value=Length.value/160926.93916961;
  }
  else if(LT1==="Decimeter" && LT2==="Millimeter"){
    result.value=Length.value*100;
  }
  else if(LT1==="Decimeter" && LT2==="Centimeter"){
    result.value=Length.value*10;
  }
  else if(LT1==="Decimeter" && LT2==="Decimeter"){
    result.value=Length.value;
  }
  else if(LT1==="Decimeter" && LT2==="Meter"){
    result.value=Length.value/10;
  }
  else if(LT1==="Decimeter" && LT2==="Kilometer"){
    result.value=Length.value/10000;
  }
  else if(LT1==="Decimeter" && LT2==="Inch"){
    result.value=Length.value*3.937;
  }
  else if(LT1==="Decimeter" && LT2==="Foot"){
    result.value=Length.value/3.04799;
  }
  else if(LT1==="Decimeter" && LT2==="Yard"){
    result.value=Length.value/9.1439;
  }
  else if(LT1==="Decimeter" && LT2==="Mile"){
    result.value=Length.value/16092.693916961;
  }
  else if(LT1==="Meter" && LT2==="Millimeter"){
    result.value=Length.value*1000;
  }
  else if(LT1==="Meter" && LT2==="Centimeter"){
    result.value=Length.value*100;
  }
  else if(LT1==="Meter" && LT2==="Decimeter"){
    result.value=Length.value*10;
  }
  else if(LT1==="Meter" && LT2==="Meter"){
    result.value=Length.value;
  }
  else if(LT1==="Meter" && LT2==="Kilometer"){
    result.value=Length.value/1000;
  }
  else if(LT1==="Meter" && LT2==="Inch"){
    result.value=Length.value*39.37;
  }
  else if(LT1==="Meter" && LT2==="Foot"){
    result.value=Length.value*3.2808;
  }
  else if(LT1==="Meter" && LT2==="Yard"){
    result.value=Length.value*1.0936133;
  }
  else if(LT1==="Meter" && LT2==="Mile"){
    result.value=Length.value/1609.2693916961;
  }
  else if(LT1==="Kilometer" && LT2==="Millimeter"){
    result.value=Length.value*1000000;
  }
  else if(LT1==="Kilometer" && LT2==="Centimeter"){
    result.value=Length.value*100000;
  }
  else if(LT1==="Kilometer" && LT2==="Decimeter"){
    result.value=Length.value*10000;
  }
  else if(LT1==="Kilometer" && LT2==="Meter"){
    result.value=Length.value*1000;
  }
  else if(LT1==="Kilometer" && LT2==="Kilometer"){
    result.value=Length.value;
  }
  else if(LT1==="Kilometer" && LT2==="Inch"){
    result.value=Length.value*39370.0787;
  }
  else if(LT1==="Kilometer" && LT2==="Foot"){
    result.value=Length.value*3280.8399;
  }
  else if(LT1==="Kilometer" && LT2==="Yard"){
    result.value=Length.value*1093.6133;
  }
  else if(LT1==="Kilometer" && LT2==="Mile"){
    result.value=Length.value/1.6092693916961;
  }
  else if(LT1==="Inch" && LT2==="Millimeter"){
    result.value=Length.value*25.4;
  }
  else if(LT1==="Inch" && LT2==="Centimeter"){
    result.value=Length.value*2.54;
  }
  else if(LT1==="Inch" && LT2==="Decimeter"){
    result.value=Length.value/3.937;
  }
  else if(LT1==="Inch" && LT2==="Meter"){
    result.value=Length.value/39.37;
  }
  else if(LT1==="Inch" && LT2==="Kilometer"){
    result.value=Length.value/39370.0787;
  }
  else if(LT1==="Inch" && LT2==="Inch"){
    result.value=Length.value;
  }
  else if(LT1==="Inch" && LT2==="Foot"){
    result.value=Length.value/11.9999;
  }
  else if(LT1==="Inch" && LT2==="Yard"){
    result.value=Length.value/35.99;
  }
  else if(LT1==="Inch" && LT2==="Mile"){
    result.value=Length.value/63357.0626;
  }
  else if(LT1==="Foot" && LT2==="Millimeter"){
    result.value=Length.value*304.79999;
  }
  else if(LT1==="Foot" && LT2==="Centimeter"){
    result.value=Length.value*30.479999;
  }
  else if(LT1==="Foot" && LT2==="Decimeter"){
    result.value=Length.value*3.0479999;
  }
  else if(LT1==="Foot" && LT2==="Meter"){
    result.value=Length.value/3.2808399;
  }
  else if(LT1==="Foot" && LT2==="Kilometer"){
    result.value=Length.value/3280.8399;
  }
  else if(LT1==="Foot" && LT2==="Inch"){
    result.value=Length.value*11.9999;
  }
  else if(LT1==="Foot" && LT2==="Foot"){
    result.value=Length.value;
  }
  else if(LT1==="Foot" && LT2==="Yard"){
    result.value=Length.value/2.99999;
  }
  else if(LT1==="Foot" && LT2==="Mile"){
    result.value=Length.value/5279.75523;
  }
  else if(LT1==="Yard" && LT2==="Millimeter"){
    result.value=Length.value*914.399998;
  }
  else if(LT1==="Yard" && LT2==="Centimeter"){
    result.value=Length.value*91.439999;
  }
  else if(LT1==="Yard" && LT2==="Decimeter"){
    result.value=Length.value*9.1439999;
  }
  else if(LT1==="Yard" && LT2==="Meter"){
    result.value=Length.value/1.0936133;
  }
  else if(LT1==="Yard" && LT2==="Kilometer"){
    result.value=Length.value/1093.6133;
  }
  else if(LT1==="Yard" && LT2==="Inch"){
    result.value=Length.value*35.999999;
  }
  else if(LT1==="Yard" && LT2==="Foot"){
    result.value=Length.value*2.999999;
  }
  else if(LT1==="Yard" && LT2==="Yard"){
    result.value=Length.value;
  }
  else if(LT1==="Yard" && LT2==="Mile"){
    result.value=Length.value/1759.91841;
  }
  else if(LT1==="Mile" && LT2==="Millimeter"){
    result.value=Length.value*1609269.3916961;
  }
  else if(LT1==="Mile" && LT2==="Centimeter"){
    result.value=Length.value*160926.93916961;
  }
  else if(LT1==="Mile" && LT2==="Decimeter"){
    result.value=Length.value*16092.693916961;
  }
  else if(LT1==="Mile" && LT2==="Meter"){
    result.value=Length.value*1609.26939169;
  }
  else if(LT1==="Mile" && LT2==="Kilometer"){
    result.value=Length.value*1.6092693916;
  }
  else if(LT1==="Mile" && LT2==="Inch"){
    result.value=Length.value*63357.0626;
  }
  else if(LT1==="Mile" && LT2==="Foot"){
    result.value=Length.value*5279.75523;
  }
  else if(LT1==="Mile" && LT2==="Yard"){
    result.value=Length.value*1759.91841;
  }
  else if(LT1==="Mile" && LT2==="Mile"){
    result.value=Length.value;
  }
  
}


