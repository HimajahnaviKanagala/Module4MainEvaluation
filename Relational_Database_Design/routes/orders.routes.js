import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  updateOrder,
} from "../controllers/orders.controller.js";

const router = express.Router();

router.post("/add-order", createOrder);
router.get("/get-my-orders/:customerId", getOrder);
router.put("/update-order/:orderId", updateOrder);
router.delete("/delete-order/:orderId", deleteOrder);

export default router;
