const { valid } = require("joi");
const joi = require("joi");

const validate = (data) => {
  const schema = joi.object({
    username: joi.string().min(4).required(),
    password: joi.string().min(4).required(),
  });

  return schema.validate(data);
};

exports.validate = validate;

const validateBlog = (data) => {
  const schema = joi.object({
    title: joi.string().min(4).required(),
    subtitle: joi.string().min(4).required(),
    content: joi.string().min(4).required(),
  });

  return schema.validate(data);
};

exports.validateBlog = validateBlog;
