import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
     const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold"> Cart </h1>
            <div className="w-6/12 m-auto">
                <button className="bg-black text-white p-2 m-2 rounded-lg shadow-lg" onClick={ handleClearCart }>Clear Cart</button>
                { cartItems.length === 0 && (<h1 className="text-2xl">Cart is Empty. Add Items to the Cart.</h1>) }
                <ItemList items={cartItems} />
            </div>
        </div>
    );
}

export default Cart;