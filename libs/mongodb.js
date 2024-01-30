import mongoose from "mongoose";


const url = 'mongodb://localhost:27017'
const connectMongoDB = async() => {
    try{
       await mongoose.connect(url,{
            dbName: "finhawkplus"
        })
        console.log("connected to mongodb")

    }catch(error)
    {
        console.group(error)
    }
}

export default connectMongoDB