import mongoose from 'mongoose'; 

const companyCollection = "company"

const companySchema = new mongoose.Schema({
    name : String ,
    cuit : String ,
    ships : {
        type : [
            {
                _id : false ,
                ship : mongoose.Schema.Types.ObjectId ,
                ref : "ship"
            }
        ],
        default : []
    }

})