import {GetReportServices} from "../service/ReportService.js";


export const getReport = async (req, res) => {
    let result = await GetReportServices(req);
    if (result['status'] === "success") {
        
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="test.pdf"',
        });

        
        return res.status(200).send(result.data); 
    } else {
        return res.status(401).json(result); 
    }
};
