import {PrismaClient} from "@prisma/client";
import path from "path";

let prisma = new PrismaClient();


const OfficerServices = async (req) => {
    try {
        const {name,cif} = req.body
        const officerCreation = await prisma.officer.create({
            data: {
                userId: parseInt(req.headers.user_id),
                cif: parseInt(cif),
                name: name,
            }
        })
        return {status: "success", data: officerCreation};

        }catch(e){
            console.error("Error in DetailsService:", e);
            return { status: "fail", data: e.message };
        }
};

const OfficerDetailsServices = async (req) => {
    try {
        const officerInformation = await prisma.officer.findMany()
        return {status: "success", data: officerInformation};

    }catch(e){
        console.error("Error in DetailsService:", e);
        return { status: "fail", data: e.message };
    }
};

export {OfficerServices,OfficerDetailsServices};