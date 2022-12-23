import { Router } from "express";
import { getInvoices,findInvoice, createInvoice } from "../controller/invoice.controller.js";

const router = Router();

router.get("/Invoices", getInvoices);
router.get("/Invoices/:id", findInvoice);
router.post("/Invoices", createInvoice);

export default router;