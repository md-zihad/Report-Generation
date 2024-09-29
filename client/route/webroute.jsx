import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignupPage from "../src/pages/SignUp.jsx";
import ValidationHelper from "../utility/ValidationUtility.jsx";
import Login from "../src/pages/Login.jsx";
import Officer from "../src/pages/Officer.jsx";

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
                </Routes>
            </BrowserRouter>
        )
    }
};

export default Webroute;