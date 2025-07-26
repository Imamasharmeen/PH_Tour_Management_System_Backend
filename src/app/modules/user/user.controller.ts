/* eslint-disable no-console */
import { Request, Response} from "express";
import sCode from "../../../utils/statusCode";
import { createUserService, getAllUsersService } from "./user.service";
import { catchAsync } from "../../../utils/catchAsync";



export const createUserController = catchAsync(async(req: Request, res : Response) => {
        const user  = await createUserService(req.body); 
        res.status(sCode.CREATED).json({ 
            message: "User created successfully", 
            user 
        })
    }
)

export const getAllUsersController = catchAsync(async(req: Request, res : Response) => {
        const users  = await getAllUsersService(); 
        res.status(sCode.CREATED).json({ 
            success: true,
            message: "User created successfully", 
            data: users 
        })
    }
)

        


 
 