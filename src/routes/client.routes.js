import { Router } from "express";
import { getClients,findClient, createClient } from "../controller/client.controller.js";

const router = Router();

router.get("/clients", getClients);
router.get("/clients/:id", findClient);
router.post("/clients", createClient);

export default router;