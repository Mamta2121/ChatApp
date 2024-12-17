//Schema
import mongoose from "mongoose";

//Storing user infomation in the form of object
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase:true, },
  password: { type: String, required: true },
  //confirmPassword: { type: String, required: true }, //no need to store it, only used for validation during user registration
}, {
    timestamps: true, //createdAt and UpdatedAt
});

const User = mongoose.model("User", userSchema);

export default User;
