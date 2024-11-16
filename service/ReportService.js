import {PrismaClient} from "@prisma/client";
import puppeteer from "puppeteer";
let prisma = new PrismaClient();
const GetReportServices = async (req) => {
    try {
        const officerInformation = await prisma.details.findMany();
        console.log("Officer Information:", officerInformation);


        if (officerInformation.length > 1000) {
            return {status: "success", data: "data is too big !"};
        }
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        let rows = officerInformation.map(officer => `
            <tr>
                <td>${officer.father}</td>
               
            </tr>
        `).join('');

        const reportContent = `
            <html>
            <head>
                <title>Officer Report</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #ddd; padding: 8px; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h1>Officer Information Report</h1>
                <table>
                    <tr>
                        <th>father</th>
                        
                    </tr>
                    ${rows}
                </table>
            </body>
            </html>
        `;

        
    
        await page.setContent(reportContent);
        const pdfBuffer = await page.pdf({ format: 'A4' ,printBackground: true});
        await browser.close();
        
        console.log("PDF Buffer Size:", pdfBuffer.length);
        console.log("Report Content:", reportContent);
        return {status: "success", data: pdfBuffer};
    }catch(e){
        console.error("Error in DetailsService:", e);
        return { status: "fail", data: e.message };
    }

    console.log("Generated HTML Content:", reportContent);

};




export {GetReportServices}