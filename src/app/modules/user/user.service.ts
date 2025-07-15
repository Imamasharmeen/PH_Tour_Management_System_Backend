import { iUser } from "./user.interface";
import { User } from "./user.model";

export const createUserService = async (payload: Partial<iUser>) =>{
    const { email, password, ...rest } = payload;
    const user = await User.create({email, password, ...rest}) 
     return user; 
}