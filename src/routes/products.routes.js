import { Router } from "express";
import { list, create, find } from "../controller/products.controller.js";

const router = Router();

router.get("/products", list);
router.post("/products", create);
router.get("/products/:id", find);

export default router;