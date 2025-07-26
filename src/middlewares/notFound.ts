import { Request, Response } from "express";
import sCode from "../utils/statusCode";


export const notFound = (req: Request, res: Response) => {
  res.status(sCode.NOT_FOUND).json({
    success: false,
    message: `🔍 Route not found: ${req.originalUrl}`,
  });
};
