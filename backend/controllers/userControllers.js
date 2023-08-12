import userModel from "../models/userModel.js";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, conpassword, image } = req.body;
  const user = new userModel({
    firstName,
    lastName,
    email,
    password,
    conpassword,
    image,
  });

  try {
    await user.save();
    res.status(200).json("Created successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};


export const login = async (req, res) => {
  const { email,password} = req.body;


  try {
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add email and password");
    }

  const user=await userModel.findOne({email:email});
  if (!user) {
    res.status(400);
    throw new Error("Not found user. Do signup");
  }
  
    if (user.password === password) {
    const data={
      _id:user._id,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      image:user.image
    }
    console.log(data);
    res.status(200).json(data);
   
  }else{
    console.log("Incorrect password");
    res.status(404).send({ message: "Password not matched" }); 
  }

  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
