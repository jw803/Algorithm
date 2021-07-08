function squareRoot(targetNum, precision) {
    let low = 0;
    let high = targetNum;
    
    function match(precision) {
      const num = +((low + high) / 2).toFixed(precision);
      const num1 = Math.pow(num, 2);
      const num2 = Math.pow(num + Math.pow(0.1, precision), 2);
      if (num1 <= targetNum && num2 > targetNum) {
        return num;
      } else if (num2 <= targetNum) {
        low = num;
        return match(precision);
      } else {
        high = num;
        return match(precision);
      }
    }
  
    let result;
    for (let i = 0; i <= precision; i++) {
      result = match(i).toFixed(precision); //再次补充小数点
    }
    return result;
  }
  
  squareRoot(42, 6);