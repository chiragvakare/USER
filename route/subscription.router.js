import express from "express";

const router = express.Router();

//view subscription plans
router.get("/viewSubscription",viewSubscriptionPlan);

//add subscription plan
router.post("/adSubscription",verify,addSubscription);

export default router;
