/* eslint-disable no-console */
import { Request, Response } from "express";
import sCode from "../../statusCode/statusCode";
import { createUserService } from "./user.service";



 export const UserController = async (req: Request, res : Response) => {
    try {
        const user  = await createUserService(req.body); 

        res.status(sCode.CREATED).json({ message: "User created successfully",user }) ;

    } catch (error) {
        
        console.error("Error creating user:", error);
       
    }
}

 
 