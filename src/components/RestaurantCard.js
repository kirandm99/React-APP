import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    props?.resObj;
  // const{resObj} = props;
  // const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resObj?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} Minutes</h4>
    </div>
  );
};

//higher order component it takes restaurantCard as input and returns a new component
export const withLabelPromted = (RestaurantCard) => {
  //it return a new component component means simple function
  return (props) => {
    //that component returns piece of JSX
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          {" "}
          Promoted{" "}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
