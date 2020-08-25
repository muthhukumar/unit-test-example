const { users } = require("./users");
const moment = require("moment");

const ageLimit = 21;

module.exports.getAllUsersWhoseAgeAboveGivenAge = async function() {
  let allUsers;
  try {
    allUsers = await this.getUsers();
  } catch (err) {
    return { error: err.message };
  }
  const usersAboveGivenAge = this.DetailsOfUsersAboveGivenAge(allUsers);
  return usersAboveGivenAge;
};

module.exports.DetailsOfUsersAboveGivenAge = (allUsers) => {
  let users = [];

  allUsers.forEach((user) => {
    const age = this.UserAge(user.dob);
    const isUserAgeAboveGivenAge = this.checkAge(age);
    if (isUserAgeAboveGivenAge) return users.push(user);
  });

  return users;
};

module.exports.getUsers = async function getUsers() {
  return users;
};

module.exports.UserAge = function(dob) {
  const userDOB = moment(new Date(dob).getTime());
  const todayDate = moment(new Date());
  return todayDate.diff(userDOB, "years");
};

module.exports.checkAge = (age) => {
  return age > ageLimit;
};

console.log(this.DetailsOfUsersAboveGivenAge(users));
