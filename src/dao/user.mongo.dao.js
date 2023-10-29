import userModel from './models/user.model.js';
import moment from 'moment';

export default  class UserDao {
    getAll = async ()=> {
        try {
            let result = await userModel.find().lean()
            return result ;
        } catch (error) {
            console.log(error)
            return null
        }
    }
    getById = async (id)=> {
       try {
        let result = await userModel.findById(id).lean()
        return result

       } catch (error) {
            console.log(error)
            return null
       }
    }
    create = async (data)=> {
        try {
            let result = await userModel.create(data)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    update = async (id,data) => {
        try {
            let result = await userModel.findByIdAndUpdate(id,data,{returnDocument :'after'})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    delete = async (id) => {
        try {
            let result = await userModel.findByIdAndDelete(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    verificateInactivity =  (user)=>{
        let days = 0 ;
        let result = moment(user.lastConnection ,`DD/MM/YYYY` ).fromNow()
        return result
    }

    deleteforInactivity = async ()=>{
        try {
           let users= await userModel.find().lean()
           users.forEach( async user => {
                let result = this.verificateInactivity(user)
                if (result === "2 days ago" && user.category != 'Admin') await userModel.deleteOne({_id : user._id})
           });

        } catch (error) {
            console.log(error)
            return null
        }
        
    }
    
    findbyuserName = async (value)=>{
        
        try {
            let user = await userModel.findOne({ userName: value })
            return user ;
            
        } catch (error) {
            console.log(error)
            return null
        }
    }
    paginate = async (filter , filterOptions)=>await this.dao.paginate(filter ,filterOptions)
}