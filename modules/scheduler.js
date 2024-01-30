import { Schema, model, models } from "mongoose";

const schedulerSchema = new Schema({
    userid:{type:Schema.Types.ObjectId,ref:'User'},
    stockid:{type:Schema.Types.ObjectId,ref:'Stock'},
    type:{ type : String, required : true },
    rate:{ type : Number , required : true },
    pred_rate_con:{ type : Number , required : true }
},{
    timestamps: true
})

const Scheduler = models.Scheduler || model("Scheduler",schedulerSchema)
export default Scheduler