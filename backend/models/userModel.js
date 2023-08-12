import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    unique:true,
    required: true,
  },
  password:{
    type:String,
    required:true
  },
  conpassword:{
    type:String,
    required:true
  },
  image:{
    type:String
  }
});

const userModel=mongoose.model("UsersSignupInfo",userSchema);
export default userModel;