import { Router } from 'express'
import { comprobateLoggueUser , comprobateAdmin, comprobateUser , validateforAddproducts} from '../middlewares/user.middleware.js'
import AgencyController from '../controllers/agencyController.js'
import ContactController from '../controllers/contactController.js'
import UserController from '../controllers/user.controller.js'
import { validatePassword } from '../utils/utils.js'

let userController = new UserController()
let contactController = new ContactController()
let agencyController = new AgencyController()
const viewRouter = Router ()

viewRouter.get ('/login' , (req,res)=>{res.render ('login')})
viewRouter.get ('/register' , (req,res)=>{res.render ('register')})
viewRouter.get ('/loginError', (req,res)=>{res.render ('errors/loginError')})
viewRouter.get (`/homeClient`,comprobateAdmin , comprobateLoggueUser , (req,res)=>{res.render('homeAdmin')})
viewRouter.get (`/ingresarPedidos`  ,userController.showaddOrderform )
viewRouter.get ('/addContact',comprobateLoggueUser,comprobateAdmin,contactController.showcontactForm )
viewRouter.get ('/addAgency',comprobateLoggueUser,comprobateAdmin,agencyController.showAgencyForm )


export default viewRouter