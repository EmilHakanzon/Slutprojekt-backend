import { Router } from "express";
import teamRoutes from "./teamRoute.js";

// skapar en router för alla routes
const r = Router();
r.use("/teams", teamRoutes);
export default r;
