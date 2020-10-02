const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let resultArray = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) == 'string') {
        // if (members[i][0] !== ' ') {
          resultArray.push(members[i][0]);
        // }
      }
    }
    return resultArray.sort().join('').toUpperCase();
  }
  return false;
};
