import { Schema, model, models } from "mongoose";

const stockSchema = new Schema({
    name:{ type : String, required : true },
    rate:{ type : Number , required : true },
    pred_rate_con:{ type : Number , required : true }
},{
    timestamps: true
})

const Stock = models.Stock || model("Stock",stockSchema)
export default Stock