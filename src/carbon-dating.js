const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (sampleActivity === 'undefined' ||  isNaN(parseFloat(sampleActivity)) ||
      parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity)<MODERN_ACTIVITY ) {
    return false;
  }
  let sample = parseFloat(sampleActivity);
  let k = 0.693/HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(sample/MODERN_ACTIVITY) / (0.693/HALF_LIFE_PERIOD));
};
