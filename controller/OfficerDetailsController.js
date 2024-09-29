import {DetailsServices, OfficerDetailsServices, OfficerServices} from "../service/OfficerDetailsServices.js";

export const officer = async (req,res) =>{
    let result = await OfficerServices(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const officerDetails = async (req,res) =>{
    let result = await OfficerDetailsServices(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}

export const details = async (req,res) =>{
    let result = await DetailsServices(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}