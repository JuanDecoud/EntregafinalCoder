import mongoose from 'mongoose'

let userCollection = "users"

const userSchema = new mongoose.Schema({
    name : String ,
    lastName : String,
    country : String,
    city : String,
    address : String,
    userName : String ,
    password: String ,
    cartId : {
        type :String ,
        default: null
    },
    category : {
        type:String,
        default : "User"
    },
    status : {
        type:Boolean,
        default : true
    },
    lastConnection : {
        type:String,
        default : null
    }

})


const userModel = mongoose.model(userCollection,userSchema)

export default userModel