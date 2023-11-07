import services from '../services/index.js'

export default class CompanyController {

    showAddForm = (req,res)=>{
        res.render('adminViews/altadeEmpresa')
    }


    addCompany =async (req,res)=>{
        let shipsArray = []
        let data = req.body
        let ships = JSON.parse(data.ships)
      
        for (let i = 0; i < ships.length; i++) {
            let result = await services.shipServices.create(ships[i])
            shipsArray.push(result._id);
        }

        let newCompany = {
            name : data.name,
            cuit : data.cuit ,
            ships : []
        }
        
        shipsArray.forEach(element => {
            newCompany.ships.push(element)
        });
        
       await services.companyService.create(newCompany)
        res.redirect('/views/login')
    }
}