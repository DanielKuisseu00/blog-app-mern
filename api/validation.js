const { valid } = require("joi");
const joi = require("joi");

const validate = (data) => {
  const schema = joi.object({
    username: joi.string().min(4).required(),
    password: joi.string().min(4).required(),
  });

  return schema.validate(data);
};

module.exports = validate;
