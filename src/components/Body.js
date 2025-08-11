import RestaurantCard, { withLabelPromted } from "./RestaurantCard";
import resDataList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  const PromotedRestaurantCard = withLabelPromted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredRestaurant(restaurantData);
    setListOfRestaurant(restaurantData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex align-middle">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredrestro = listOfRestaurant.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredrestro);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4">
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              const fliteredList = listOfRestaurant.filter(
                (res) => res?.info?.avgRating >= 4.6
              );
              setFilteredRestaurant(fliteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="m-4 p-4">
          <label>User Name : </label>
          <input
            type="text"
            className="border border-solid border-black px-4 py-2 m-4"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          const element = (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {/* {restaurant?.info?.promoted ? <PromotedRestaurantCard resObj={restaurant?.info} /> :  
          <RestaurantCard resObj={restaurant?.info} />
    } */}
              {restaurant?.info?.avgRating >= 4.6 ? (
                <PromotedRestaurantCard resObj={restaurant?.info} />
              ) : (
                <RestaurantCard resObj={restaurant?.info} />
              )}
            </Link>
          );

          return element;
        })}
      </div>
    </div>
  );
};

export default Body;
