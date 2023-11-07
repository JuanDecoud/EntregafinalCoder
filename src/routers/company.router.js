import { Router } from "express";
import { comprobateAdmin, comprobateLoggueUser } from "../middlewares/user.middleware.js";

import CompanyController from "../controllers/companyController.js";
const companyController = new CompanyController();

const companyRouter = Router()


companyRouter.post('/', comprobateAdmin, comprobateLoggueUser , companyController.addCompany);

export default companyRouter