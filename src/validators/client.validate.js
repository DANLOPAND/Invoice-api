import Joi from "joi";

const clientSchema = Joi.object({
  name: Joi.string().required().min(3).messages({
    "string.empty": `Name is required`,
    "string.min": `Name must have at least {#limit} characters`,
  }),
  contact: Joi.string().required().min(3).messages({
    "string.empty": `Contact is required`,
    "string.min": `Contact must have at least {#limit} characters`,
  }),
  phone: Joi.string().required().min(3).messages({
    "string.empty": `Phone is required`,
    "string.min": `Phone must have at least {#limit} characters`,
  }),
  email: Joi.string().email().required().min(3).messages({
    "string.empty": `Email is required`,
    "string.min": `Email must have at least {#limit} characters`,
  }),
});

const validateClient = (client) => {
  return clientSchema.validate(client, { abortEarly: false });
}

export default validateClient;
