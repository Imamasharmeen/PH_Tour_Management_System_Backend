import { iUser } from "./user.interface";
import { User } from "./user.model";

export const createUserService = async (payload: Partial<iUser>) =>{
    const { email, password, ...rest } = payload;
    const user = await User.create({email, password, ...rest}) 
     return user; 
}

export const getAllUsersService = async () => {
  const users = await User.find();
  const totalUser = await User.countDocuments();
  return {
    data: users,
    meta: { total_data: totalUser },
  };
};