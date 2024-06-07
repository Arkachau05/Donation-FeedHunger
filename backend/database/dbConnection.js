import mongoose from "mongoose";
export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_ID,{
        dbName:"Volunteering-Project"
    }).then(()=>{
        console.log("Connected to database")
    }).catch(error=>{
        console.log("Some Error Occured while connecting to database");
    })
}
