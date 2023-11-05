import { Router } from 'express'
import { comprobateLoggueUser , comprobateAdmin, comprobateUser , validateforAddproducts} from '../middlewares/user.middleware.js'

import UserController from '../controllers/user.controller.js'
import { validatePassword } from '../utils/utils.js'

let userController = new UserController()
const viewRouter = Router ()

viewRouter.get ('/login' , (req,res)=>{res.render ('login')})
viewRouter.get ('/register' , (req,res)=>{res.render ('register')})
viewRouter.get ('/loginError', (req,res)=>{res.render ('errors/loginError')})
viewRouter.get (`/homeClient`,comprobateAdmin , comprobateLoggueUser , (req,res)=>{res.render('homeAdmin')})
viewRouter.get (`/ingresarPedidos`  ,userController.showaddOrderform )


export default viewRouter