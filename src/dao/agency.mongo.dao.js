import agencyModel from './models/agencyMaritime.js'

export default  class AgencyDao {
    getAll = async ()=> {
        try {
            let result = await agencyModel.find().lean()
            return result ;
        } catch (error) {
            console.log(error)
            return null
        }
    }
    getById = async (id)=> {
       try {
        let result = await agencyModel.findById(id).lean()
        return result

       } catch (error) {
            console.log(error)
            return null
       }
    }
    create = async (data)=> {
        try {
            let result = await agencyModel.create(data)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    update = async (id,data) => {
        try {
            let result = await agencyModel.findByIdAndUpdate(id,data,{returnDocument :'after'})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    delete = async (id) => {
        try {
            let result = await agencyModel.findByIdAndDelete(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}