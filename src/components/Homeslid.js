import { useEffect } from "react";
import "./cssFiles/Homeslid.css";
import { useDispatch, useSelector } from "react-redux";
import { getFromlocaStore } from "../rtk/slices/cartSlice";
function Homeslid() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (cart.length >= 1) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  useEffect(() => {
    // dispatch(clearCart())
    const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
    dispatch(getFromlocaStore(cartLocalstorge));
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <h1>Products Delivered In 90 Minutes</h1>
          <p>Get Your Products Delivered At Your Doorsteps All Day Everyday</p>
        </div>
      </div>
    </>
  );
}
export default Homeslid;
