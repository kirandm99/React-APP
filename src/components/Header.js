import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [reactBtnName, setReactBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between p-2 bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex p-4 m-4 align-middle">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to={"/"}> Home </Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/about"}> About US </Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/contact"}> Contact US </Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/grocery"}> Grocery </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            {" "}
            <Link to={"/cart"}> Cart - {cartItems.length + " Items"} </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              reactBtnName === "Login"
                ? setReactBtnName("LogOut")
                : setReactBtnName("Login");
            }}
          >
            {reactBtnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
