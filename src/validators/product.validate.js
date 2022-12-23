import Joi from "joi";

const productSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required().min(3).messages({
        "string.empty": `Name is required`,
        "string.min": `Name must have at least {#limit} characters`,
    }),
    description: Joi.string().messages({
    }),
    price: Joi.number().required().min(1).messages({
        "string.empty": `Price is required`,
        "string.min": `Price must have at least {#limit} characters`,
    }),
});

const validateProduct = (product) => {
    return productSchema.validate(product, { abortEarly: false });
};

export default validateProduct;
