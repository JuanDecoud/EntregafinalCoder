import  express  from 'express';
import productRouter from '../routers/products.router.js'
import cartsRouter from '../routers/carts.router.js'
import viewRouter from '../routers/views.router.js'
import messengerRouter from '../routers/messengerRouter.js'
import userRouter from '../routers/user.router.js';
import handlebars from 'express-handlebars'
import methodOverride from 'method-override'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import passport from "passport";
import compression from 'express-compression';
import errorHandler from '../middlewares/errors.middleware.js'
import variables from './env.varibles.js';
import { Server } from 'socket.io';

///-------------------------------------------------------
const app = express ();
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://juanjodecoud:JJjuanjitus22@cluster0.bpez36c.mongodb.net',
        dbName: 'SegundaPreEntrega',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }),
    secret: 'juanSecret',
    resave: false,
    saveUninitialized: true
}))
app.use(errorHandler)
app.use(compression({brotli : {enable: true,zlib : {}}}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))
app.use(methodOverride('_method'))
/// routers------------------------------------------------
app.use ('/products' , productRouter)
app.use ('/carts' , cartsRouter)
app.use ('/views' , viewRouter)
app.use('/messenger', messengerRouter)
app.use('/user', userRouter)
/// engine-------------------------------------------------
app.engine('handlebars' , handlebars.engine())
app.set('views','./src/views')
app.set('view engine' ,'handlebars')
// session & passport
app.use(passport.initialize())
app.use(passport.session())

const initializeAPP = ()=>{
    const serverHttp=app.listen (variables.port,()=>{console.log(`server up on port ${variables.port}`)})
    const io = new Server(serverHttp)
    app.set('socketio', io);
}

export default {initializeAPP,app}