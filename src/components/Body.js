import RestaurantCard from "./RestaurantCard";
import resDataList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    let [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const[searchText, setSearchText] = useState("");

    useEffect(()=>{ fetchData(); },[]);

    const fetchData = async () =>{
      const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");

      const json = await data.json();
      const restaurantData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setFilteredRestaurant(restaurantData);
      setListOfRestaurant(restaurantData);
    }



    return listOfRestaurant.length ===0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }} />
                <button onClick={()=>{
                 const filteredrestro = listOfRestaurant.filter((res)=>{
                    return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
                  });
                  setFilteredRestaurant(filteredrestro);
                }}>Search</button>
              </div>
                <button className="filter-btn" onClick={()=>{ 
                   const fliteredList = listOfRestaurant.filter(res => res?.info?.avgRating>4.5);
                    setListOfRestaurant(fliteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="restro-container">
             {filteredRestaurant.map((restaurant) => {
  const element = (
    <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>    <RestaurantCard
      resObj={restaurant?.info}
    /></Link>

  );

  return element;
})}
            </div>
        </div>
    )
}

export default Body;