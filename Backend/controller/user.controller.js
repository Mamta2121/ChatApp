//Define all the functions here 
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {

  try {
    
    const {name, email, password, confirmPassword} = req.body;
    
    if (password != confirmPassword) {
       return res.status(400).json({message: "Passwords do not match"});
    };
    
    const user = await User.findOne({email});
    if(user)
    {
      return res.status(400).json({message: "Email already exists"});
    };
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User(
      {
        name,
        email,
        password:hashedPassword,
      }
    );
  
    await newUser.save().then( ()=> {
      res.status(201).json( { message: "User Registered Successfully"});
    });
  } catch (error) {
    console.log(error);
  }
};