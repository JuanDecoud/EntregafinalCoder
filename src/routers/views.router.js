import { Router } from 'express'
import { comprobateLoggueUser , comprobateAdmin, comprobateUser} from '../middlewares/user.middleware.js'
import CartController from '../controllers/cart.controller.js'
import ProductController from '../controllers/products.controllers.js'
import UserController from '../controllers/user.controller.js'


let cartController = new CartController()
let productController = new ProductController ()
let userController = new UserController ()

const viewRouter = Router ()

viewRouter.get('/products/details' ,comprobateLoggueUser,productController.showPorductDetail)
viewRouter.get ('/login' , (req,res)=>{res.render ('login')})
viewRouter.get ('/register' , (req,res)=>{res.render ('register')})
viewRouter.get ('/loginError', (req,res)=>{res.render ('errors/loginError')})
viewRouter.get('/addProduct',comprobateLoggueUser ,comprobateAdmin,(req,res)=>{res.render('addProducts')})
viewRouter.get('/userCart',comprobateLoggueUser , comprobateUser,cartController.showUserCart )
viewRouter.get('/products' , comprobateLoggueUser , productController.showHomeProducts )
viewRouter.get('/realtimeproducts' , async(req,res) =>{res.render('realTimeProductos')})
viewRouter.get ('/cartModify', comprobateLoggueUser,comprobateUser,cartController.showCarttoModify)
viewRouter.get ('/userManager', userController.userManager )










export default viewRouter