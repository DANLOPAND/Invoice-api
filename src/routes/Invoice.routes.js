import { Router } from "express";
import { getInvoices,findInvoice, createInvoice, findInvoiceDetails } from "../controller/invoice.controller.js";

const router = Router();

router.get("/Invoices", getInvoices);
router.get("/Invoices/:id", findInvoice);
router.get("/Invoices/details/:id/", findInvoiceDetails)
router.post("/Invoices", createInvoice);

export default router;