import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { globalErrorHandler } from "./errors/globalErrorHandler";
import { notFound } from "./middlewares/notFound";

// Create an Express application
 const app = express() 

// Middleware 
app.use(cors())
app.use(express.json()) 


// Main route
app.use("/api/v1", router)

// Routes
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})

app.use(notFound);
app.use(globalErrorHandler)
export default app;

