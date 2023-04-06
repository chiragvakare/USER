import { verify } from "crypto";
import express from "express";

const router = express.Router();

//add product in favourite
router.get("/addLike",verify);

//remove product from favourite
router.get("/removeLike",verify);

//if product already exist in favroute list
router.get("/existLike",verify);


export default router;