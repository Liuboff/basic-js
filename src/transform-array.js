const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (!Array.isArray(arr)){
    throw new Error('arr is not an Array!');
  }

  let disnext = '--discard-next';
  let disprev = '--discard-prev';
  let doublenext = '--double-next';
  let doubleprev = '--double-prev';

  let newArr = arr.slice();

  for (let i=0; i<newArr.length; i++){
    if (newArr[i] === disnext && i === length-1){
      newArr.splice(newArr[i+1], 1);
    } else if (newArr[i] === disprev && i !== 0){
      newArr.splice(newArr[i-1], 1);
    } else if (newArr[i] === doublenext && i === length-1){
      newArr[i+1] = newArr[i+1]*2;
    } else if (newArr[i] === doubleprev && i !== 0){
      newArr[i-1] = newArr[i-1]*2;
    }
  }
  return newArr;
};
