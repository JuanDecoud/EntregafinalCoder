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
    tradeRepresentative : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        default : null
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
    },

    companies : {
       type : [
            {
                company : {
                    _id : false,
                    type : mongoose.Types.ObjectId,
                    ref : "company"
                }
            }
           
       ],
       default : [] 
    }
})


const userModel = mongoose.model(userCollection,userSchema)

export default userModel