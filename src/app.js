
import initializePassport from "./config/passport.config.js";
import api from './config/app.config.js';
import mongooseConnect from './config/mongodb.config.js';

initializePassport()
api.initializeAPP()
mongooseConnect()



