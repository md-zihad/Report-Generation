import axios from "axios";
import {BASE_URL} from "../../../config.js";


const Report = () => {
    const handleDownload = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/getReport`, {
                responseType: 'blob',
                withCredentials: true,
            });
            const url = window.URL.createObjectURL(new Blob([response.data],{type:'application/pdf'}));

            const a = document.createElement('a');
            a.href = url;
            a.download = 'report.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
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