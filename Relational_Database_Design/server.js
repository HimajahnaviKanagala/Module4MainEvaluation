import express from "express";
import dotenv from "dotenv";
import customerRoutes from "./routes/customers.routes.js";
import orderRoutes from "./routes/orders.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
