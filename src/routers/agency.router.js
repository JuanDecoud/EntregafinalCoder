import { Router } from "express";
import { comprobateAdmin, comprobateLoggueUser } from "../middlewares/user.middleware.js";

import AgencyController from "../controllers/agencyController.js";

let agencyController = new AgencyController()
const agencyRouter = Router ()

agencyRouter.post('/addAgency',comprobateAdmin,comprobateLoggueUser,agencyController.addAgency)


export default agencyRouter