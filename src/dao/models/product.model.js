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
    owner :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users'
    } 
})

productSchema.plugin(mongoosePaginate)


productSchema.pre('findOne',  function() {
    this.populate(`owner`)
})



 const productModel = mongoose.model (productCollection ,productSchema)

 export default productModel