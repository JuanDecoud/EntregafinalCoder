import services from '../services/index.js'

export default class CompanyController {

    showAddForm = (req,res)=>{
        res.render('adminViews/altadeEmpresa')
    }

}