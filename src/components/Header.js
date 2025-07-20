import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [reactBtnName, setReactBtnName] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li> <Link to={'/'}> Home </Link> </li>
                    <li> <Link to={'/about'}> About US </Link></li>
                    <li> <Link to={'/contact'}> Contact US </Link></li>
                    <li> <Link to={'/'}> Cart </Link></li>
                    <button className="login" onClick={()=>{
                        reactBtnName === "Login" ? setReactBtnName("LogOut") :setReactBtnName("Login");
                    }}>{reactBtnName}</button>
                </ul>
            </div>

        </div>
    )
}


export default Header;