var powerType1= document.getElementById('powerType1')
var powerType2= document.getElementById('powerType2')
var power= document.getElementById('input')
var result= document.getElementById('result')

powerType1.addEventListener('change',powerConversion)
powerType2.addEventListener('change',powerConversion)
power.addEventListener('keyup',powerConversion)

function powerConversion(){
  var LT1= powerType1.value
  var LT2= powerType2.value

  if(LT1==="Kilowatt" && LT2==="Kilowatt"){
    result.value=power.value;
  }
  else if(LT1==="Kilowatt" && LT2==="Watt"){
    result.value=power.value*1000;
}
   else if(LT1==="Kilowatt" && LT2==="Joule/second"){
       result.value=power.value*1000;
  }
  else if(LT1==="Kilowatt" && LT2==="Imperial horsepower"){
     result.value=power.value*1.3410221;
  }
  else if(LT1==="Kilowatt" && LT2==="Metric horsepower"){
    result.value=power.value*1.3596216;
  }
 else if(LT1==="Kilowatt" && LT2==="kilogram-meter/second"){
    result.value=power.value*101.97162129779;
  }
 else if(LT1==="Kilowatt" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.239;
  }
  else if(LT1==="Kilowatt" && LT2==="British thermal unit/second"){
    result.value=power.value*0.9478171;
  }
  else if(LT1==="Kilowatt" && LT2==="Foot-pound/second"){
    result.value=power.value*737.56214928;
  }
  else if(LT1==="Kilowatt" && LT2==="Newton-meter/second"){
    result.value=power.value*1000;
  }

  else if(LT1==="Watt" && LT2==="Kilowatt"){
    result.value=power.value*0.001;
  }
 else if(LT1==="Watt" && LT2==="Watt"){
   result.value=power.value;
 }
  else if(LT1==="Watt" && LT2==="Joule/second"){
    result.value=power.value;
 }
   else if(LT1==="Watt" && LT2==="Imperial horsepower"){
    result.value=power.value*0.00134102;
  }
  else if(LT1==="Watt" && LT2==="Metric horsepower"){
    result.value=power.value*0.0013596216;
  }
   else if(LT1==="Watt" && LT2==="kilogram-meter/second"){
    result.value=power.value*0.1019716213;
  }
  else if(LT1==="Watt" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.000239;
}
   else if(LT1==="Watt" && LT2==="British thermal unit/second"){
     result.value=power.value*0.0009478171;
    }
   else if(LT1==="Watt" && LT2==="Foot-pound/second"){
     result.value=power.value*0.7375621489;
   }
  else if(LT1==="Watt" && LT2==="Newton-meter/second"){
    result.value=power.value;
  }
  else if(LT1==="Joule/second" && LT2==="Kilowatt"){
    result.value=power.value*0.001;
  }
   else if(LT1==="Joule/second" && LT2==="Watt"){
         result.value=power.value;
}
  else if(LT1==="Joule/second" && LT2==="Joule/second"){
    result.value=power.value;
  }
   else if(LT1==="Joule/second" && LT2==="Imperial horsepower"){
         result.value=power.value*0.0013410221;
           }
 else if(LT1==="Joule/second" && LT2==="Metric horsepower"){
    result.value=power.value*0.0013596216;
  }
  else if(LT1==="Joule/second" && LT2==="kilogram-meter/second"){
    result.value=power.value*0.1019716213;
  }
else if(LT1==="Joule/second" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.000239;
  }
  else if(LT1==="Joule/second" && LT2==="British thermal unit/second"){
    result.value=power.value*0.0009478171;
  }
  else if(LT1==="Joule/second" && LT2==="Foot-pound/second"){
    result.value=power.value*0.7375621489;
  }
 else if(LT1==="Joule/second" && LT2==="Newton-meter/second"){
    result.value=power.value;
  }
 else if(LT1==="Imperial horsepower" && LT2==="Kilowatt"){
  result.value=power.value*0.7456998657;
   }
  else if(LT1==="Imperial horsepower" && LT2==="Watt"){
    result.value=power.value*745.69986;
  }
  else if(LT1==="Imperial horsepower" && LT2==="Joule/second"){
   result.value=power.value*745.69986;
  }
  else if(LT1==="Imperial horsepower" && LT2==="Imperial horsepower"){
    result.value=power.value;
  }
 else if(LT1==="Imperial horsepower" && LT2==="Metric horsepower"){
   result.value=power.value*1.013869;
 }
  else if(LT1==="Imperial horsepower" && LT2==="kilogram-meter/second"){
    result.value=power.value*76.04022;
  }
     else if(LT1==="Imperial horsepower" && LT2==="Kilocalorie/second"){
     result.value=power.value*0.1782222;
   }
      else if(LT1==="Imperial horsepower" && LT2==="British thermal unit/second"){
   result.value=power.value*0.7067870;
  }
  else if(LT1==="Imperial horsepower" && LT2==="Foot-pound/second"){
    result.value=power.value*549.99999;
  }
  else if(LT1==="Imperial horsepower" && LT2==="Newton-meter/second"){
    result.value=power.value*745.699865;
  }
  else if(LT1==="Metric horsepower" && LT2==="Kilowatt"){
    result.value=power.value*0.7354987;
  }
 else if(LT1==="Metric horsepower" && LT2==="Watt"){
   result.value=power.value*735.498759;
  }
  else if(LT1==="Metric horsepower" && LT2==="Joule/second"){
    result.value=power.value*735.498759;
  }
   else if(LT1==="Metric horsepower" && LT2==="Imperial horsepower"){
    result.value=power.value*0.9863200;
  }
  else if(LT1==="Metric horsepower" && LT2==="Metric horsepower"){
    result.value=power.value;
  }
  else if(LT1==="Metric horsepower" && LT2==="kilogram-meter/second"){
    result.value=power.value*75.00000095;
  }
  else if(LT1==="Metric horsepower" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.17578420;
  }
  else if(LT1==="Metric horsepower" && LT2==="British thermal unit/second"){
    result.value=power.value*0.69711830;
  }
  else if(LT1==="Metric horsepower" && LT2==="Foot-pound/second"){
    result.value=power.value*582.476045;
  }
  else if(LT1==="Metric horsepower" && LT2==="Newton-meter/second"){
    result.value=power.value*735.4987593;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Kilowatt"){
    result.value=power.value*0.0098066;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Watt"){
    result.value=power.value*9.806649;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Joule/second"){
    result.value=power.value*0.806649;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Imperial horsepower"){
    result.value=power.value*0.01315093;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Metric horsepower"){
    result.value=power.value*0.013333;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="kilogram-meter/second"){
    result.value=power.value;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.00234378;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="British thermal unit/second"){
    result.value=power.value*0.00929491;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Foot-pound/second"){
    result.value=power.value*7.233013;
  }
  else if(LT1==="kilogram-meter/second" && LT2==="Newton-meter/second"){
    result.value=power.value*9.806649;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Kilowatt"){
    result.value=power.value*4.184100;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Watt"){
    result.value=power.value*4184.10041;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Joule/second"){
    result.value=power.value*4184.10041;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Imperial horsepower"){
    result.value=power.value*5.16097;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Metric horsepower"){
    result.value=power.value*5.68879;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="kilogram-meter/second"){
    result.value=power.value*426.6595;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Kilocalorie/second"){
    result.value=power.value;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="British thermal unit/second"){
    result.value=power.value*3.965761;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Foot-pound/second"){
    result.value=power.value*3086.0340;
  }
  else if(LT1==="Kilocalorie/second" && LT2==="Newton-meter/second"){
    result.value=power.value*4184.10041;
  }
  else if(LT1==="British thermal unit/second" && LT2==="Kilowatt"){
    result.value=power.value*1.055055;
  }
  else if(LT1==="British thermal unit/second" && LT2==="Watt"){
    result.value=power.value*1055.05587;
  }
  else if(LT1==="British thermal unit/second" && LT2==="Joule/second"){
    result.value=power.value*1055.05587;
  }
  else if(LT1==="British thermal unit/second" && LT2==="Imperial horsepower"){
    result.value=power.value*1.4114853;
  }
  else if(LT1==="British thermal unit/second" && LT2==="Metric horsepower"){
    result.value=power.value*1.43447675;
  }
  else if(LT1==="British thermal unit/second" && LT2==="kilogram-meter/second"){
    result.value=power.value*107.585758;
  }
  else if(LT1==="British thermal unit/second" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.25215835;
  }
  else if(LT1==="British thermal unit/second" && LT2==="British thermal unit/second"){
    result.value=power.value
  }
  else if(LT1==="British thermal unit/second" && LT2==="Foot-pound/second"){
    result.value=power.value*778.1692785;
  }
  else if(LT1==="British thermal unit/second" && LT2==="Newton-meter/second"){
    result.value=power.value*1055.05587;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Kilowatt"){
    result.value=power.value*0.000135581;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Watt"){
    result.value=power.value*1.3558179;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Joule/second"){
    result.value=power.value*1.3558179;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Imperial horsepower"){
    result.value=power.value*0.001818181;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Metric horsepower"){
    result.value=power.value*0.00184339;
  }
  else if(LT1==="Foot-pound/second" && LT2==="kilogram-meter/second"){
    result.value=power.value*0.1382549;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.000324040;
  }
  else if(LT1==="Foot-pound/second" && LT2==="British thermal unit/second"){
    result.value=power.value*0.0012850;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Foot-pound/second"){
    result.value=power.value;
  }
  else if(LT1==="Foot-pound/second" && LT2==="Newton-meter/second"){
    result.value=power.value*1.35581;
  }
   else if(LT1==="Newton-meter/second" && LT2==="Kilowatt"){
    result.value=power.value*0.001
  }
  else if(LT1==="Newton-meter/second" && LT2==="Watt"){
    result.value=power.value;
  }
  else if(LT1==="Newton-meter/second" && LT2==="Joule/second"){
    result.value=power.value;
  }
  else if(LT1==="Newton-meter/second" && LT2==="Imperial horsepower"){
    result.value=power.value*0.00134102221;
  }
  else if(LT1==="Newton-meter/second" && LT2==="Metric horsepower"){
    result.value=power.value*0.00135962;
  }
  else if(LT1==="Newton-meter/second" && LT2==="kilogram-meter/second"){
    result.value=power.value*0.1019716213;
  }
  else if(LT1==="Newton-meter/second" && LT2==="Kilocalorie/second"){
    result.value=power.value*0.000239;
  }
  else if(LT1==="Newton-meter/second" && LT2==="British thermal unit/second"){
    result.value=power.value*0.0009498171;
  }
  else if(LT1==="Newton-meter/second" && LT2==="Foot-pound/second"){
    result.value=power.value*0.7375621489;
  }
  else if(LT1==="Newton-meter/second" && LT2==="Newton-meter/second"){
    result.value=power.value;
  }

}
