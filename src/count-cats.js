const CustomError = require("../extensions/custom-error");

module.exports = function countCats( backyard ) {
  let num = 0;
  let val = '^^';

  // for ( let i = 0; i < backyard.length; i++) {
  //   for ( let j = 0; j < i; j++) {
  //     if ( backyard[i][j] === '^^') {
  //       num++;
  //     }
  //   }
  // }

  // for (let i = 0; i < backyard.length; i++) {
  //   if (Array.isArray(backyard[i])) {
  //     countCats(backyard[i]);
  //   }
  //   if (backyard[i] === val) {
  //     num++;
  //   }
  // }
  // return num;

  return backyard.flat(Infinity).includes(val);
};
