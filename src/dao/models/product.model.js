import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productCollection = "products"

const productSchema = new mongoose.Schema({
    name : String ,
    container: String,
    description : String,
    brand : String,
    price: Number ,
    liters: Number,
    code: {
        type : String ,
        index : true
    },
    stock: Number ,
    status: Boolean,
    category: String,
    linkThubnail : String,
    owner : mongoose.Schema.Types.ObjectId
})

productSchema.plugin(mongoosePaginate)


 const productModel = mongoose.model (productCollection ,productSchema)

 export default productModel