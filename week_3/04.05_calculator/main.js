var temp = '';
var valLeft = '';
var valRight = '';
var action = '@';

function calculate(value) {
  var result = 0.0;
  if (value === '0') temp += "0";
  else if (value === '1') temp += "1";
  else if (value === '2') temp += "2";
  else if (value === '3') temp += "3";
  else if (value === '4') temp += "4";
  else if (value === '5') temp += "5";
  else if (value === '6') temp += "6";
  else if (value === '7') temp += "7";
  else if (value === '8') temp += "8";
  else if (value === '9') temp += "9";

  else if (value === "plus") {
    valLeft = temp;
    action = '+';
    temp = "";
    return;
  }
  else if (value === "minus") {
    valLeft = temp;
    action = '-';
    temp = "";
    return;
  }
  else if (value === "times") {
    valLeft = temp;
    action = '*';
    temp = "";
    return;
  }
  else if (value === "divide") {
    valLeft = temp;
    action = '/';
    temp = "";
    return;
  }
  else if (value === "equals") {
    valRight = temp;
    if(valLeft == ':(') valLeft = '0';
    var x = Number(valLeft);
    var y = Number(valRight);
  
    switch (action) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      case '@':
        break;
    }

    temp = result.toString();
    if(valRight == '0' && action == '/') temp = ':(';
  }

  else if (value === "dot") temp += ".";
  else if (value === "C") {
    temp = "";
    valLeft = "";
    valRight = "";
    action = '@';
  }
  else if (value === "CE") temp = "";
  else if (value === "del") {temp = temp.substring(0, temp.length - 1);
  
  }
 
  console.log(`Left: ${valLeft}, Right: ${valRight}, Temp: ${temp}, Operator: ${action}`);
  document.getElementById('upper-field').value = valLeft;
  document.getElementById('lower-field').value = temp;
}
