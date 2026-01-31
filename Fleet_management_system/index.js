import express from 'express';
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import vechicleRoutes from "./routes/vehicle.routes.js";
import tripRoutes from "./routes/trip.routes.js";

const app=express()
app.use(express.json());

app.use("/users", userRoutes);
app.use("/vehicles", vechicleRoutes);
app.use("/trips", tripRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})