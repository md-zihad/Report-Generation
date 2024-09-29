import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../../config.js";
import toast from "react-hot-toast";

const Details = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({ officerId: id, age: '', father: '', mother: '', address: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("details : ",details);
        try{
            let res = await axios.post(`${BASE_URL}/api/v1/details`,{details},{withCredentials:true})

            if(res.data['status'] === "success"){
                toast.success("Submitted successfully ");
            }else{
                toast.error("Submission failed ");
            }
        }catch(e){
            toast.error("Something went wrong");
            console.error(e);
        }

    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="flex justify-content-center">Please Fill Those Information</h1>
                <div className="col-12">
                    <label>Age: </label>
                    <input
                        name="age"
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                            setDetails({...details, age: e.target.value});
                        }}
                    />
                    <label>Father: </label>
                    <input
                        name="father"
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                            setDetails({...details, father: e.target.value});
                        }}
                    />
                    <label>Mother: </label>
                    <input
                        name="mother"
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                            setDetails({...details, mother: e.target.value});
                        }}
                    />
                    <label>Address: </label>
                    <input
                        name="address"
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                            setDetails({...details, address: e.target.value});
                        }}
                    />
                    <div className="col-md-4 mt-4">
                        <button onClick={handleSubmit} className="btn btn-success">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
