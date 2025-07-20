import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constant";
import { useParams } from "react-router";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API_URL + resId);

        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />;

    const{name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <p>{cuisines.join(', ') } - {costForTwoMessage}</p>
            <ul>{
                itemCards.map((item) => ( <li key={item?.card?.info?.id}>{item?.card?.info?.name} -{"Rs."} {item?.card?.info?.price}</li> ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;