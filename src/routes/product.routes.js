import { Router } from "express";
import { getProducts, findProduct, createProduct} from "../controller/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", findProduct);
router.post("/products", createProduct);


export default router;