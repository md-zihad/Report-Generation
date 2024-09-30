import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignupPage from "../src/pages/SignUp.jsx";
import ValidationHelper from "../utility/ValidationUtility.jsx";
import Login from "../src/pages/Login.jsx";
import Officer from "../src/pages/Officer.jsx";
import Details from "../src/pages/Details.jsx";
import Report from "../src/pages/Report.jsx";

const Webroute = () => {
    if(!ValidationHelper.isLogin()){
        return(
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                </Routes>
            </BrowserRouter>
        );

    }else{
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Officer/>}/>
                    <Route path="/details/:id" element={<Details/>}/>
                    <Route path="/report" element={<Report/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
};

export default Webroute;