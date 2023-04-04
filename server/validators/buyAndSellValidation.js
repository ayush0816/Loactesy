const Joi = require("joi");

const ValidateProperty = (userData) => {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    location: Joi.string().min(3).max(40).required(),
    address: Joi.string().min(3).max(40).required(),
    phone: Joi.number().integer().min(1000000000).max(9999999999),
    rooms: Joi.number().integer().min(1).max(1000).required(),
  });

  return Schema.validateAsync(userData);
};

module.exports = { ValidateProperty };
