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

  for(let i = 0; i < digits; i++){
    factor_0 = parseInt(factor_0.toString() + '9');
    factor_1 = parseInt(factor_0.toString() + '9');
  }

  while(factor_0 >= 10){
    while(factor_1 >= 10){
      let productString = (factor_0 * factor_1).toString();
      let reverseString = productString.split('').reverse().join('');

      if (productString === reverseString){
        let productNum = parseInt(productString);

        if (productNum > palindromeNumber){
          palFactor1 = factor_0;
          palFactor2 = factor_1;
          palindromeNumber = productNum;
        }
      }
      factor_1--;
    }

    for (let i = 0; i < digits; i++){
      factor_1 = parseInt(factor_1.toString() + '9');
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