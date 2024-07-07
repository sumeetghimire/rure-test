import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

// Dummy Data for Testing
const food_list = [
  {
    _id: "1",
    name: "Burger",
    price: 5.99,
    image: "burger.jpg",
  },
  {
    _id: "2",
    name: "Pizza",
    price: 8.99,
    image: "pizza.jpg",
  },
  {
    _id: "3",
    name: "Salad",
    price: 4.99,
    image: "salad.jpg",
  },
  {
    _id: "4",
    name: "Pasta",
    price: 7.99,
    image: "pasta.jpg",
  },
];

const cartItems = {
  1: 2, // 2 Burgers
  2: 1, // 1 Pizza
  3: 3, // 3 Salads
  4: 0, // 0 Pasta (not in the cart)
};

const Cart = () => {
  const { removeItemFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const totalCartAmount = () => {
    let total = 0;
    food_list.forEach((item) => {
      total += item.price * (cartItems[item._id] || 0);
    });
    return total;
  };

  return (
    <div className="mt-24">
      <div className="w-full">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-sm">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="w-full h-px bg-gray-300 border-none" />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2 text-black">
                  <img
                    src={url + "/images/" + item.image}
                    alt=""
                    className="w-12"
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeItemFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="w-full h-px bg-gray-300 border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex justify-between gap-8 flex-wrap">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>{totalCartAmount()}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${totalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <b>Total</b>
              <b>${totalCartAmount() === 0 ? 0 : totalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="border-none text-white bg-tomato w-52 py-3 rounded"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-gray-600">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2 flex justify-between items-center bg-gray-200 rounded">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent border-none outline-none pl-2"
              />
              <button className="w-36 py-3 bg-black text-white rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
