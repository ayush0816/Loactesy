const Joi = require("joi");

const ValidateProperty = (userData) => {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    location: Joi.string().min(3).max(40).required(),
    address: Joi.string().min(3).max(40).required(),
    rooms: Joi.number().integer().min(1).max(1000).required(),
    price: Joi.number().integer(),
  });

  return Schema.validateAsync(userData);
};

module.exports = { ValidateProperty };
