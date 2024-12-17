//Define all the functions here 
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from  "../jwt/generateToken.js";

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
  
    await newUser.save();
    
    if(newUser)
    {
       createTokenAndSaveCookie(newUser._id, res);
       res.status(201).json({message: "User Registered Successfully", newUser});
    }  
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Server Error"});
  }
};

export const login = async (req, res) => {
    

  try {

    const {email, password} = req.body;
    const user = await User.findOne({email});
    if( !user)
    {
      return res.status(404).json({message:"Invalid User or password"});

    };  
    const isMatch = await bcrypt.compare(password, user.password);
    if( !isMatch)
    {
       return res.status(404).json({message:"Invalid User or Password"}, user);
    };

    createTokenAndSaveCookie(user._id, res);
    res.status(201).json( {message: "User Logged in Successfully", user})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Server Error"});

  } ;
};