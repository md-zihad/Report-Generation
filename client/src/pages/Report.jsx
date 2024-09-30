import axios from "axios";
import {BASE_URL} from "../../../config.js";


const Report = () => {
    const handleDownload = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/getReport`, {
                responseType: 'blob',
                withCredentials: true,
            });
            const url = window.URL.createObjectURL(new Blob([response.data],{type:'text/pdf'}));

            console.log(url)
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'officer_report.pdf');

            // Append to the body and trigger the download
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error downloading the report:', error);
            alert('Error downloading the report. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Download Officer Report</h1>
            <button onClick={handleDownload}>Download Report</button>
        </div>
    );
};

export default Report;