import {useEffect, useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../../config.js";
import toast from "react-hot-toast";

const Officer = () => {
    const [officerDetails, setOfficerDetails] = useState({ name: '', cif: '' });
    let [officerInfo, setOfficerInfo] = useState([]);

    useEffect(()=>{
        (async ()=>{
            let res = await axios.get(`${BASE_URL}/api/v1/officerDetails`,{withCredentials:true})
            console.log(res.data.data)
            if(res.data['status'] === 'success'){
                setOfficerInfo(res.data.data)
            }
        })()
    },[])
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', officerDetails.name);
            formData.append('cif', officerDetails.cif);

            const res = await axios.post(`${BASE_URL}/api/v1/officer`, formData, {
                withCredentials: true,
            });

            if (res.data['status'] === "success") {
                toast.success("Submitted successfully ");
            }else{
                toast.error("Submission failed ");
            }
        } catch (e) {
            toast.error("Something went wrong");
            console.error(e);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleClick}>
                <div className="row">
                    <div className="col-md-4">
                        <label>Name: </label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                setOfficerDetails({ ...officerDetails, name: e.target.value });
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <label>CIF: </label>
                        <input
                            name="cif"
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                setOfficerDetails({ ...officerDetails, cif: e.target.value });
                            }}
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label></label>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>
            {
                officerInfo?.length > 0 && (
                    officerInfo.map((item, idx) => {
                        return (
                            <div key={idx} className="row">
                                {item.name}
                                {item.cif}
                            </div>
                        )
                    })
                )
            }
        </div>
    );
};

export default Officer;
