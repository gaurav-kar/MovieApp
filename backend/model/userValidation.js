const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  });

  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };
