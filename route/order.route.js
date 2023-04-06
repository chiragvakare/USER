import { verify } from "crypto";
import express from "express";

const router = express.Router();

//save order
router.post("/save",verify,orderSave);

//show user order
router.get("/myorder",verify,orderList);

export default router;
