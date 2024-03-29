import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type : String , required : true },
    email: { type : String , unique : true, required : true },
    password: String
},{
    timestamps: true
})
const User = mongoose.models.User|| mongoose.model("User",userSchema)
export default User