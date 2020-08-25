const chai = require("chai");
const assert = chai.assert;

const {
  userWithDOBEqual19,
  userWithDOBEqual25,
  userBelowGivenAge,
  userAboveGivenAge,
  userWithAgeLessThan21,
  userWithAgeGreaterThan21,
} = require("./mockdata");
const { UserAge, checkAge, DetailsOfUsersAboveGivenAge } = require("../index");

describe("it should return users with age greater than given age(21)", function() {
  it("should return true if the age is greater than 21", function() {
    assert.equal(checkAge(userAboveGivenAge().age), true);
  });
  it("should return false if the age is less than 21", function() {
    assert.equal(checkAge(userBelowGivenAge().age), false);
  });
});

describe("should return valid age for give date", function() {
  it("should return age 25 if the valid date is passed", function() {
    assert.equal(UserAge(userWithDOBEqual25().dob), 25);
  });
  it("should return age 19 if the valid date is passed", function() {
    assert.equal(UserAge(userWithDOBEqual19().dob), 19);
  });
});

describe("return the users with age greater than 21", function() {
  it("should return users with age greater than 21", function() {
    assert.deepEqual(
      DetailsOfUsersAboveGivenAge(userWithAgeGreaterThan21()),
      userWithAgeGreaterThan21()
    );
  });

  it("should return an empty array if the user dob is lesser than 21", function() {
    assert.deepEqual(DetailsOfUsersAboveGivenAge(userWithAgeLessThan21()), []);
  });
});
