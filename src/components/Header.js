import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // let btnName = "Login";
    const onlineStatus = useOnlineStatus();
    const [btnNameReact , setBtnNameReact] = useState ("Login");

    return (
        <div className="flex justify-between bg-pink-200">
            <div className="logo-container">
                <img className="w-32" src= {LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4" >
                    <li className="px-4">
                        Online status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" 
                    onClick={() =>{
                        btnNameReact === 'Login' ?
                        setBtnNameReact("Logout"):
                        setBtnNameReact ("Login");
                        console.log (btnNameReact);
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;