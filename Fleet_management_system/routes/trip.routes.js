import express from "express";
import {
  createTrip,
  deleteTrip,
  updateTrip,
  getTrip,
} from "../controllers/trip.controller.js";
const router = express.Router();

router.post("/create", createTrip);
router.delete("/delete/:tripId", deleteTrip);
router.patch("/update/:tripId", updateTrip);
router.get("/:tripId", getTrip);

export default router;
