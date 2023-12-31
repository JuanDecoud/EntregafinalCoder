import  express  from 'express';

import viewRouter from '../routers/views.router.js'
import contactRouter from '../routers/contact.router.js';
import agencyRouter from '../routers/agency.router.js'
import companyRouter from '../routers/company.router.js'
<<<<<<< HEAD
import cors from 'cors'
=======
>>>>>>> 388bfa6f01b1d18e20b5b0912cac9b76c566aebc

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
app.use ('/views' , viewRouter)
app.use('/user', userRouter)
app.use('/contact', contactRouter)
app.use('/agency', agencyRouter)
app.use('/company', companyRouter)
/// engine-------------------------------------------------
app.engine('handlebars' , handlebars.engine())
app.set('views','./src/views')
app.set('view engine' ,'handlebars')
// session & passport
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

const initializeAPP = ()=>{
    const serverHttp=app.listen (variables.port,()=>{console.log(`server up on port ${variables.port}`)})
    const io = new Server(serverHttp)
    app.set('socketio', io);
}

export default {initializeAPP,app}