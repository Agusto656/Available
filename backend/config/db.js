import mongoose from "mongoose";

export const connectDB =async()=>{
   await mongoose.connect('mongodb+srv://ashleyowen351:Ashley00Owen11@cluster0.p7nd3.mongodb.net/food-del').then(()=>console.log("DB Connected")); 
}