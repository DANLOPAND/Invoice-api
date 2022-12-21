import { Router } from "express";
import { list, create, find } from "../controller/clients.controller.js";

const router = Router();

router.get("/clients", list);
router.post("/clients", create);
router.get("/clients/:id", find);

export default router;