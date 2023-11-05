import contactModel  from './models/contact.js'

export default  class ContactDao {
    getAll = async ()=> {
        try {
            let result = await contactModel.find().lean()
            return result ;
        } catch (error) {
            console.log(error)
            return null
        }
    }
    getById = async (id)=> {
       try {
        let result = await contactModel.findById(id).lean()
        return result

       } catch (error) {
            console.log(error)
            return null
       }
    }
    create = async (data)=> {
        try {
            let result = await contactModel.create(data)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    update = async (id,data) => {
        try {
            let result = await contactModel.findByIdAndUpdate(id,data,{returnDocument :'after'})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    delete = async (id) => {
        try {
            let result = await contactModel.findByIdAndDelete(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}