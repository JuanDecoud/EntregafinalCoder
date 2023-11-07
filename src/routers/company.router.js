import { Router } from "express";
<<<<<<< HEAD
import { comprobateAdmin, comprobateLoggueUser } from "../middlewares/user.middleware.js";

import CompanyController from "../controllers/companyController.js";
const companyController = new CompanyController();
=======
>>>>>>> 388bfa6f01b1d18e20b5b0912cac9b76c566aebc

const companyRouter = Router()


<<<<<<< HEAD
companyRouter.post('/', comprobateAdmin, comprobateLoggueUser , companyController.addCompany);
=======

>>>>>>> 388bfa6f01b1d18e20b5b0912cac9b76c566aebc

export default companyRouter