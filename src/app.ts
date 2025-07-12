import express, { Request, Response } from "express";
import cors from "cors";

// Create an Express application
 const app = express() 

// Middleware 
app.use(cors())
app.use(express.json()) 

// Routes
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})
export default app;

