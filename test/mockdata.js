const { sampledata } = require("../users");

module.exports.userAboveGivenAge = function() {
  return {
    age: 25,
  };
};

module.exports.userBelowGivenAge = function() {
  return {
    age: 19,
  };
};

module.exports.userWithDOBEqual25 = function() {
  return {
    dob: "12/26/1994",
  };
};

module.exports.userWithDOBEqual19 = function() {
  return {
    dob: "12/26/2000",
  };
};

module.exports.userWithAgeGreaterThan21 = function() {
  return [
    {
      ...sampledata,
      dob: "12/26/1994",
    },
  ];
};

module.exports.userWithAgeLessThan21 = function() {
  return [
    {
      ...sampledata,
      dob: "12/26/2000",
    },
  ];
};
