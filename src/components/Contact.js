import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import { getFromlocaStore } from "../rtk/slices/cartSlice";
import "./cssFiles/Terms.css";
function Contact() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  if (cart.length >= 1) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  useEffect(() => {
    dispatch(fetchProdects());
    const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
    dispatch(getFromlocaStore(cartLocalstorge));
  }, []);
  return (
    <>
      <div className=" contact position-relative mb-5 ">
        <h3 className=" text-light position-absolute top-50 start-50 translate-middle ">
        Contact Us
        </h3>
      </div>
      <h2 className="text-center">Contact Us</h2>
        <div className="pargraf">     <p className="text-center  m-auto mt-4  text-light-emphasis w-50  ">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p></div>
      <div className="container mt-5">
        <form>
          <div className="form-group mb-5">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control placeholder-wave"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="exampleFormControlInput2">Subject</label>
            <input
              type="email"
              className="form-control placeholder-wave"
              id="exampleFormControlInput2"
              placeholder="Your problem"

            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="exampleFormControlTextarea1">
            Your message

            </label>
            <textarea
            placeholder="Leave a message here ...."
              className="form-control placeholder-wave "
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
        <button className="btn btn-dark ">Send</button>
      </div>
    </>
  );
}
export default Contact;
