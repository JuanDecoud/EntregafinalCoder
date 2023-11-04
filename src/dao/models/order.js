import mongoose from 'mongoose';

let orderCollection = "order"

const orderSchema = new mongoose.Schema({
    liters : Number,
    schedule : String ,
    date : String ,
    port :String,
    ship : mongoose.Schema.Types.ObjectId,
    swDeclaration : Number ,
    type : {
        type : {
            default : "order"
        }
    }

})

const orderModel = mongoose.model(orderCollection, orderSchema)
export default orderModel ;