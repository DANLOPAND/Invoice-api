import Joi from "joi";

const invoiceDetailsSchema = Joi.object({
    idProduct: Joi.number().integer().required().messages({
        "string.empty": `Product is required`,  
        "string.min": `Product must have at least {#limit} characters`,
    }),
    quantity: Joi.number().integer().required().messages({
        "string.empty": `Quantity is required`,
        "string.min": `Quantity must have at least {#limit} characters`,
    }),
});

const validateInvoiceDetails = (invoiceDetails) => {
    return invoiceDetailsSchema.validate(invoiceDetails, { abortEarly: false });
}

export default validateInvoiceDetails;