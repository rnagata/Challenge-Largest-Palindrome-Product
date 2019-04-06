/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  let palFactor1;
  let palFactor2;
  // do your work here
  if (digits === 2){
    factor_0 = 99;
    factor_1 = 99;
  }
  if (digits === 3){
    factor_0 = 999;
    factor_1 = 999;
  }
  while(factor_0 >= 10){
    while(factor_1 >= 10){
      let product = (factor_0 * factor_1).toString();
      let productReverse = product.split('').reverse().join('');
      if (product === productReverse){
        if (parseInt(product) > palindromeNumber){
          palFactor1 = factor_0;
          palFactor2 = factor_1;
          palindromeNumber = parseInt(product);
        }
      }
      factor_1--;
    }
    if (digits === 2){
      factor_1 = 99;
    }
    if (digits === 3){
      factor_1 = 999;
    }
    factor_0--;
  }
  factor_0 = palFactor1;
  factor_1 = palFactor2;
  



  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};