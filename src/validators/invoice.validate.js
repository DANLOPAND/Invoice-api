import Joi from "joi";

const invoiceSchema = Joi.object({
    idClient: Joi.string().required().min(3).messages({
        "string.empty": `Client is required`,
        "string.min": `Client must have at least {#limit} characters`,
    }),
    date: Joi.date().required().messages({
        "string.empty": `Date is required`,
    }), 
    subTotal: Joi.string().required().messages({
        "string.empty": `Subtotal is required`,
        "string.min": `Subtotal must have at least {#limit} characters`,
    }),
    discount: Joi.number().required().messages({
        "string.empty": `Discount is required`,
        "string.min": `Discount must have at least {#limit} characters`,
    }),
    total: Joi.string().required().messages({
        "string.empty": `Subtotal is required`,
        "string.min": `Subtotal must have at least {#limit} characters`,
    }),
});

const validateInvoice = (invoiceDetails) => {
    return invoiceSchema.validate(invoiceDetails, { abortEarly: false });
}

export default validateInvoice;

