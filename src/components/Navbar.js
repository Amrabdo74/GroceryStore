import "./cssFiles/Navbar.css";
import logo from "../assets/images/grocery-store-low-resolution-color-logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { openCat } from "../rtk/slices/cartNav";
import { useState } from "react";
function Navbar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg auto" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="90"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={true}
            aria-label="Toggle navigation"
            onClick={()=>setExpanded(false)}
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className={`collapse navbar-collapse ${expanded ? 'hide':'show'} ` } id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0" >
              <li className="nav-item "  onClick={()=>setExpanded(true)} >
                
                <Link className="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={()=>setExpanded(true)}>
                <Link className="nav-link active" to="/Shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item" onClick={()=>setExpanded(true)}>
                <Link className="nav-link active" to="/FAQs">
                  FAQs
                </Link>
              </li>
              <li className="nav-item" onClick={()=>setExpanded(true)}>
                <Link className="nav-link active" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item" onClick={()=>setExpanded(true)}>
                <Link className="nav-link active" to="/Terms">
                Terms
                </Link>
              </li>
              
              <li className="nav-item" onClick={()=>setExpanded(true)}>
                <Link className="nav-link active" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
            <button className="nav-link active cart cart-car p-2"  onClick={()=>dispatch(openCat(true))} >
              <HiOutlineShoppingCart />
              <span className="cart-num">{cart &&cart.length}</span>
            </button>
              <Cart   />
    </>
  );
}
export default Navbar;
