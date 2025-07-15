import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/modules/user/user.route";

// Create an Express application
 const app = express() 

// Middleware 
app.use(cors())
app.use(express.json()) 
app.use("/api/v1/user", userRoutes)

// Routes
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})
export default app;

