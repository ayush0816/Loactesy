const joi = require("joi");
const ValidateSignup = (userData) => {
  const Schema = joi.object({
    name: joi.string().min(3).max(20),
    username: joi.string().email().required(),
    password: joi.string().required().min(5),
    phone: joi.number().integer().min(1000000000).max(9999999999),
    address: joi.string().required().min(5).max(1000),
  });

  return Schema.validateAsync(userData);
};

const ValidateSignin = (userData) => {
  const Schema = joi.object({
    username: joi.string().email().required(),
    password: joi.string().required().min(5),
  });

  return Schema.validateAsync(userData);
};
module.exports = { ValidateSignin, ValidateSignup };
