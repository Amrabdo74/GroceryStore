import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./cssFiles/productDetails.css";
import {
  addTocart,
  decreseQuantity,
  getFromlocaStore,
  increseQuantity,
} from "../rtk/slices/cartSlice";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function ProductDetailes() {
  let { productId } = useParams();
  const [product, setProducts] = useState([]);
  //const product = products[productId];
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const item = cart.find((item) => item.id === product.id);
  const quantityInitem = item ? item.quantity : 0;
  if (cart.length >= 1) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    fetch("https://amrabdo74.github.io/render-json-server-main-master/db.json")
      .then((res) => res.json())
      .then((data) => {
        const prodectDetail = data.item[productId - 1];
        //const prodectClone = { ...prodectDetail, quantity: 0 };
        setProducts(prodectDetail);
      });
    if (cart.length >= 1) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
    dispatch(getFromlocaStore(cartLocalstorge));
  }, []);
  return (
    <>
      <div
        className="prodectDetail "
        key={product.id}
      >
        <div className="img-content">
          <img src={product.image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h5 className="span-text"> ${product.price}</h5>
          <p className="span-par"> {product.description}</p>

          {quantityInitem === 0 ? (
            <button
              style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
              className="btn btn-primary "
              onClick={() => {
                const prodectClone = { ...product, quantity: +1 };
                setProducts(prodectClone);

                dispatch(addTocart(product));
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
                });

                Toast.fire({
                  icon: "success",
                  title: product.name,
                });
              }}
            >
              Add
            </button>
          ) : (
            <div className="d-flex cartqun ">
              <button onClick={() => dispatch(decreseQuantity(item))}>-</button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  dispatch(increseQuantity(item));
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default ProductDetailes;
