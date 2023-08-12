import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userLogin from "./routes/userRoutes.js"

const app=express();
app.use(cors());
app.use(express.json({limit:"10mb"}))
dotenv.config();

const PORT=process.env.PORT ||5000;
const MONGO_URL=process.env.MONGO_URL

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/",(req,res)=>{
    res.send("Server is running well")
})

app.use("/api/user",userLogin);


// app.post("/signup",(req,res)=>{
//     console.log(req.body);
// })


// app.listen(PORT,()=>console.log(`Server is very good Gg:  + ${PORT}`))