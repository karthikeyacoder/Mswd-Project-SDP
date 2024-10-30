import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://2300032330:Karthikeya2005@cluster0.mhmvj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


