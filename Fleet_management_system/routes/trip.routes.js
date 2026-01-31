import express from "express";
import { createTrip, deleteTrip } from "../controllers/trip.controller.js";
const router=express.Router();

router.post("/create", createTrip);
router.delete("/delete/:tripId", deleteTrip);

export default router;