import express from "express";
import * as AuthController from "../controller/AuthController.js";
import Authvarification from "../middleware/Authvarification.js";
import * as OfficerDetailsController from "../controller/OfficerDetailsController.js";

const router = express.Router();

router.post('/Registration', AuthController.Registration);
router.post('/VerifyLogin',AuthController.VerifyLogin);

router.post('/officer',Authvarification,OfficerDetailsController.officer)
router.get('/officerDetails',Authvarification,OfficerDetailsController.officerDetails)
router.post('/details',Authvarification,OfficerDetailsController.details)

export default router;