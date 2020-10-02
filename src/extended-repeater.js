const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  if(!options) {
    return str.toString();
  }
  const newStr = str + '';
  const {repeatTimes = 0, separator = '+', addition ='', additionRepeatTimes = 0, additionSeparator = '|'} = options;
  const newAddition = addition + '';
  let resultAdditional = '';
  let resultStr = '';

  if(additionRepeatTimes === 0 || additionRepeatTimes === 1) {
    resultAdditional += newAddition;
  }else if(additionRepeatTimes > 1) {
    for(let i = 0; i < additionRepeatTimes; i++) {
      if((i + 1) !== additionRepeatTimes) {
        resultAdditional += newAddition + additionSeparator
      }else if ((i + 1) === additionRepeatTimes) {
        resultAdditional += newAddition
      }
    }
  }

  if (repeatTimes === 0 || repeatTimes === 1) {
    resultStr += newStr + resultAdditional;
  }else if(repeatTimes > 1) {
    for (let i = 0; i < repeatTimes; i++) {
      if((i + 1) !== repeatTimes) {
        resultStr += newStr + resultAdditional + separator;
      }else if((i + 1) === repeatTimes) {
        resultStr += newStr + resultAdditional;
      }
    }
  }
  return resultStr;
};
  