import UserDTO from '../dto/user.dto.js'
import services from '../services/index.js'
import Services from '../services/index.js'
import Email from '../utils/emailService.js'
import uploader from '../utils/multer.product.js'
import paginateEstile from '../utils/paginate.js'
import AccountType from '../config/accountStatus.js'

let emailService = new Email ();


export default class productControllers {

    cpUpload = (req, res, next) => {
        uploader.single('file')
        (req,res, ()=>{next()})
      }

    addProduct = async (req,res) => {
        if (!req.file)res.status (400).json ({message : 'Please, upload product image'})
        const {name,description ,brand ,container,price,code,stock , category , liters} = req.body
        if (!name || !description ||!container ||!brand || !price || !code || !stock || !category || !liters)res.status(400).send ("All fields are required")
        else {
            try {
                let validate = await Services.productService.findbyAttribute("code",code)
                
                if (validate.length ===0){
                    let newProduct = {name,container,description,brand,price,liters,code,stock,status :true,category ,linkThubnail:'/'+req.file.filename,owner:req.session.passport.user}
                    await Services.productService.create (newProduct)
                    let products = await Services.productService.getAll()
                    let io = req.app.get('socketio')
                    io.emit('updateProducts' , products)
                    res.status(200).json ({mesage : `Sucess : product added successfully`} )
                }
                else {
                    res.status(406).json({message : `Product already exists`})
                }
            }
            catch (err){
                res.status(404).json({status: 'error' , error : err.message})
            }   
        }  
    }

    showProducts = async (req , res)=>{

        let limit = parseInt(req.query.limit)|| 10
        let page = parseInt(req.query.page) || 1
        let filter = req.query.filter 
        let sort = req.query.sort 
     
        let filterOptions= {limit : limit , page : page  , lean :true}
        if (sort !=undefined){
         let optSort = {sort : {price : sort}}
         filterOptions={...filterOptions , ...optSort}
        } 
        if(filter === undefined) filter = {}
        else filter = {category : filter}
     
        try{
             let result = await Services.productService.paginate(filter, filterOptions)
             let io = req.app.get('socketio')
             io.emit('updateProducts' , result)
             res.status(200).send({ message: "Success" ,result :result})
     
        }catch(err){
             res.json ({status : "error" , message : err.message })
        }
     
     }

     updateProducts = async (req,res)=>{
        let id = req.params.pid
        let update = req.body
    
        try {
            let result = await Services.productService.update(id,update)
            if (result.matchedCount === 0) res.status(404).send ("This product not exist")
            else {
                let products = await Services.productService.getAll().lean()
                let io = req.app.get('socketio')
                io.emit('updateProducts' , products)
                res.status(200).send("Success : Product update")
            }
        }catch (err){
            res.json ({status:'error' , message: err.message })
        }
      
    }

    deleteProduct = async (req,res)=>{
        
        let id = req.params.pid
       try {
            let result =await Services.productService.getById(id)
            if (result.owner.category===AccountType.premium){ emailService.premiumProductnotification(result.name , result.owner.userName)}
            await Services.productService.delete(id)
            res.status(200).send ("Sucess: Product Deleted")
       }catch (err){
            res.json ({status:'error' , message: err.message })
       }
    }

    showHomeProducts = async (req,res)=> {
        let user = null
        user = await services.userService.getById(req.session.passport.user)
        if(user.category === AccountType.normal){
            try{
                let page = req.query.page || 1
                let cartId = user.cartId|| null
                let filterOptions= {limit : 3 , page : page  , lean :true }
                let products = await services.productService.paginate({}, filterOptions)
                let array = paginateEstile(products.totalPages)
                products.array = array 

               /// esto lo hago para agregar el valor del carrito y poder mandarlo por post para conservarlo y poder seguir 
               /// agregando productos
               products.docs.forEach(element => {
                    element.cartId= cartId
                });

                products.nextLink = products.hasNextPage?`/views/products?page=${products.nextPage}` : " "
                products.prevLink = products.hasPrevPage? `/views/products?page=${products.prevPage}` : " "             
                res.render ('home' , {products ,user , array} )
            }catch (err){
                res.json ({status : "error" , message : err.message })
            }

        }
        else if (user.category ===AccountType.admin ) {
            try{
                let page = req.query.page || 1
                let cartId = user.cartId|| null
                let filterOptions= {limit : 3 , page : page  , lean :true }
                let products = await services.productService.paginate({}, filterOptions)
               /// esto lo hago para agregar el valor del carrito y poder mandarlo por post para conservarlo y poder seguir 
               /// agregando productos
               products.docs.forEach(element => {
                    element.cartId= cartId
                });
                let array = paginateEstile(products.totalPages)
                products.array = array 
                products.nextLink = products.hasNextPage?`/views/products?page=${products.nextPage}` : " "
                products.prevLink = products.hasPrevPage? `/views/products?page=${products.prevPage}` : " "
                res.render ('adminHome' , {products ,user ,array} )
            }catch (err){
                res.json ({status : "error" , message : err.message })
            }
        }
        else {
            try{
                let page = req.query.page || 1
                let cartId = user.cartId|| null
                let filterOptions= {limit : 4 , page : page  , lean :true , populate :"owner" }
                let products = await services.productService.paginate({}, filterOptions)

               /// esto lo hago para agregar el valor del carrito y poder mandarlo por post para conservarlo y poder seguir 
               /// agregando productos
               products.docs.forEach(element => {
                    element.cartId= cartId
                });
                let array = paginateEstile(products.totalPages)
                products.array = array 
                products.docs.forEach(element => {
                    if(element.owner.category !=user.category && element.owner.userName !=user.userName ){
                        element.noselfProduct = true
                        
                    }
                });

                products.nextLink = products.hasNextPage?`/views/products?page=${products.nextPage}` : " "
                products.prevLink = products.hasPrevPage? `/views/products?page=${products.prevPage}` : " "
                res.render ('homePremium' , {products ,user ,array} )
            }catch (err){
                res.json ({status : "error" , message : err.message })
            }
        }

    }

    showPremiumProduct = async (req, res) => {
        try{
            let page = req.query.page || 1
            let filterOptions= {limit : 6 , page : page  , lean :true, populate :"owner"  }
            let products = await services.productService.paginate({}, filterOptions)
            let user = await services.userService.getById(req.session.passport.user)

            products.docs.forEach(element => {
                if(element.owner.category ===user.category && element.owner.userName ===user.userName ){
                    element.premiumStatus = true
                }
            });
            
            products.nextLink = products.hasNextPage?`/views/products?page=${products.nextPage}` : " "
            products.prevLink = products.hasPrevPage? `/views/products?page=${products.prevPage}` : " "
            res.render ('myProductspremium' , {products } )
        }catch (err){
            res.json ({status : "error" , message : err.message })
        }
    }

    showPorductDetail = async(req,res)=>{
       
        try{
            let userDto = new UserDTO ( await services.userService.getById(req.session.passport.user))
            let productId = req.query.productId
            let cartId = userDto.cartId
            let product = await services.productService.getById(productId)
            if(cartId)product.cartId=cartId
            if(product)res.render('productsDetails' , product)
            else res.status(400).json ({status: error , message : "product dosnt exist"})
    
        }catch (err){
            res.json ({status : "error" , message : err.message })
        }
    }

}




    
