var sum = function(num1, num2) {
  return num1 + num2;
}

var multiple = function(num1, num2) {
  return num1 * num2;
}

var minus = function(num1, num2) {
  return num1 - num2;
}

var divide = function(num1, num2) {
  return num1 / num2;
}

var decimal = function(num1) {
  return num1.toFixed(2)
}

var power = function(num1, num2) {
  return Math.pow(num1, num2);
}

var factorial = function(num1) {
  if (num1 === 1 || num1 === 0) {
    return 1
  }
  return num1 * factorial(num1 - 1)
}

var percent = function(num1) {
  return decimal(num1).toFixed(2)+"%"
}

var splitInputIntoValueArr = function(input) {
  return input.split(" ");
}

var calculate = function(valArr) {
  var result = []
  for (var i in valArr) {
    if (valArr[i] !== "+" && valArr[i] !== "*" && valArr[i] !== "-" && valArr[i] !== "/") {
      result.push(parseInt(valArr[i]));
    } else {
      var operator = valArr[i];
      if (operator === "!" || operator === "%") {
        var val1 = result.pop();
        var val2 = result.pop();
        switch (operator) {
          case "!":
            result.push(factorial(val1));
            break;
          case "%":
            result.push(percent(val1));
            break;
          default:
            result.push(sum(val1, val2));
            break;
        }
      } else {
        var val2 = result.pop();
        var val1 = result.pop();
        switch (operator) {
          case "+":
            result.push(sum(val1, val2));
            break;
          case "*":
            result.push(multiple(val1, val2));
            break;
          case "-":
            result.push(minus(val1, val2));
            break;
          case "/":
            result.push(divide(val1, val2));
            break;
          default:
            result.push(sum(val1, val2));
            break;
        }
      }
    }
  }
  return result;
}

module.exports = {
  calculate,
  splitInputIntoValueArr,
  sum,
  multiple,
  divide,
  minus,
  decimal,
  power,
  factorial,
  percent
}