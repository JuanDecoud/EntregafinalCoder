import mongoose from 'mongoose'; 

const companyCollection = "company"

const companySchema = new mongoose.Schema({
    name : String ,
    cuit : String ,
    ships : {
        type : [
             {
                ship : {
                    _id : false ,
                    type : mongoose.Schema.Types.ObjectId ,
                    ref:'ship'
                }
            }
        ],
        default : []
    }
})

const companyModel =  mongoose.model(companyCollection,companySchema)

export default companyModel