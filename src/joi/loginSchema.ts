import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  level: Joi.number().required(),
  classe: Joi.string().required(),
});

export default loginSchema;