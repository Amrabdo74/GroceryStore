import {  Route, Routes } from "react-router-dom";
import Homeslid from "./components/Homeslid";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ProductDetailes from "./components/ProductDetailes";
import HomeShop from "./components/HomeShop";
import Footer from "./components/Footer";
import FAQs from "./components/FAQs";
import Teams from "./components/Teams";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {

  return (
<>
<Navbar/>
<Routes>
<Route path="/" element={<><Homeslid/><HomeShop/></>}/>
<Route path="/Shop" element={<Shop/>}/>
<Route path="/Shop/:productId" element={<ProductDetailes/>}/>
<Route path="/FAQs" element={<FAQs/>}/>
<Route path="/Terms" element={<Teams/>}/>
<Route path="/Blog" element={<Blog/>}/>
<Route path="/Contact" element={<Contact/>}/>
</Routes>
<Footer/>

</>
  );
}

export default App;
 