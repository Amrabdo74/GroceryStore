import "./cssFiles/Terms.css";
import imgeSol from "../assets/images/salon.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import { useEffect } from "react";
import { getFromlocaStore } from "../rtk/slices/cartSlice";
function Blog() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    if (cart.length >= 1) {
    localStorage.setItem('cart', JSON.stringify(cart));
      
    }
    useEffect(() => {
      dispatch(fetchProdects());
      const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
        dispatch(getFromlocaStore(cartLocalstorge));
   
    }, []);
  return (
    <>
      <div className="blog-section position-relative mb-5 bg-secondary   ">
        <h2 className=" text-light position-absolute top-50 start-50 translate-middle ">
          Blog
        </h2>
      </div>
      <div className="container bolgRow">
        <div className="row">
          <div className="col-lg-8 col-sm-12 ">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21111331/Blog.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">July 16, 2020</span>
                </p>
                <h2>How retail shopping has changed during covid-19</h2>
                <p>
                  Nothing more clearly underscores how quickly the planet of
                  retail can change than our current struggle with COVID-19. The
                  coronavirus pandemic has made business continuity a monumental
                  challenge for all retailers, including fashion brands who
                  traditionally have relied on giving customers an opportunity
                  to ascertain, feel and check out on the clothes they’re
                  buying. Mrs. Darling first heard of Peter when she was tidying
                  up her children’s minds. It is the nightly custom of every
                  good mother after her children are asleep to rummage in their
                  minds and put things straight for next morning, repacking into
                  their proper places the many articles that have wandered
                  during the day. If you could keep awake (but of course you
                  can’t) you would see your own mother doing this, and you would
                  find it very interesting to watch her. It is quite like
                  tidying up drawers. You would see her on her knees, I expect,
                  lingering humorously over some of your contents, wondering
                  where on earth you had picked this thing up, making
                  discoveries sweet and not so sweet, pressing this to her cheek
                  as if it were as nice as a kitten, and hurriedly stowing that
                  out of sight. When you wake in the morning, the naughtiness
                  and evil passions with which you went to bed have been folded
                  up small and placed at the bottom of your mind and on the top,
                  beautifully aired, are spread out your prettier thoughts,
                  ready for you to put on. Total store growth continued to
                  hamper in brick & mortar, while online sales accelerated last
                  week. Grocery and Household care rose up to be within the
                  top-five departments. Beverages and Salty Snacks accounted for
                  many of the Grocery growth both online and offline. For the
                  primary time since COVID started, Alcohol lost its top-five
                  department status.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/22142452/Blog4-1.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">July 16, 2020</span>
                </p>
                <h2>How people are shopping during covid-19</h2>
                <p>
                  Total store growth continued to hamper in brick & mortar,
                  while online sales accelerated last week. Grocery and
                  Household care rose up to be within the top-five departments.
                  Beverages and Salty Snacks accounted for many of the Grocery
                  growth both online and offline. For the primary time since
                  COVID started, Alcohol lost its top-five department status.
                  .Ice skating most likely created in Scandinavia as right on
                  time as 1000 BCE, the main skates being produced using shank
                  or rib bones of elk, bulls, reindeer, and different creatures.
                  It isn’t known when the metal sprinter was presented, however
                  early Dutch prints delineate skates with metal cutting edges.
                  Until the center of the nineteenth century the metal segment
                  of the skate was secured to a wooden base or footplate and the
                  entire of the skate was attached to the foot with cowhide
                  straps or lashes. A significant improvement originated from
                  the United States in 1850 when E.W. Bushnell of Philadelphia
                  presented the all-steel skate, which supplanted the bulky
                  wooden footplate. The principle advancements in the figure
                  skate after 1900 were the option of the toe pick, a gathering
                  of sawlike teeth situated at the toe of the sharp edge, which
                  empowered skaters to acquire better buy in the ice while doing
                  certain bounces, and the development of the “shut toe” cutting
                  edge of one-piece steel, which added solidarity to the skate
                  and allowed an a lot lighter-weight edge.As an entertainment
                  skating has been consistently rehearsed on the waterways of
                  the Netherlands since the Middle Ages by the two guys and
                  females. Skating on the solidified lakes and fens was
                  mainstream in England in the seventeenth century, and the
                  primary skating club was framed in Edinburgh, Scotland, in
                  1742. During the 1740s British servicemen acquainted ice
                  skating with North America. It was likewise mainstream at the
                  French court around 1776; Marie-Antoinette was among the
                  skaters. Napoleon Bonaparte skated at Auxerre in 1781. The
                  advancement of refrigerated ice arenas began the change of ice
                  skating from an occasional side interest to a significant game
                  and amusement. The primary arena with falsely solidified ice,
                  a private one, the Glaciarium, was opened in London in 1876.
                  The primary misleadingly solidified arena in the United States
                  was introduced in the old Madison Square Garden in New York
                  City in 1879. During the time an ever increasing number of
                  open arenas with misleadingly delivered ice showed up. The
                  capacity to make sheets of ice inside enormous fields offered
                  ascend to both skating sports and ice appears, which turned
                  into a famous family amusement in the twentieth century. It
                  additionally took into consideration ice skating to spread to
                  areas with warm atmospheres.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                  <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21114132/Blog2.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">July 16, 2020</span>
                </p>
                <h2>Keeping your stock full during a pandemic</h2>
                <p>
                  Total store growth continued to hamper in brick & mortar,
                  while online sales accelerated last week. Grocery and
                  Household care rose up to be within the top-five departments.
                  Beverages and Salty Snacks accounted for many of the Grocery
                  growth both online and offline. For the primary time since
                  COVID started, Alcohol lost its top-five department status.
                  .Ice skating most likely created in Scandinavia as right on
                  time as 1000 BCE, the main skates being produced using shank
                  or rib bones of elk, bulls, reindeer, and different creatures.
                  It isn’t known when the metal sprinter was presented, however
                  early Dutch prints delineate skates with metal cutting edges.
                  Until the center of the nineteenth century the metal segment
                  of the skate was secured to a wooden base or footplate and the
                  entire of the skate was attached to the foot with cowhide
                  straps or lashes. A significant improvement originated from
                  the United States in 1850 when E.W. Bushnell of Philadelphia
                  presented the all-steel skate, which supplanted the bulky
                  wooden footplate. The principle advancements in the figure
                  skate after 1900 were the option of the toe pick, a gathering
                  of sawlike teeth situated at the toe of the sharp edge, which
                  empowered skaters to acquire better buy in the ice while doing
                  certain bounces, and the development of the “shut toe” cutting
                  edge of one-piece steel, which added solidarity to the skate
                  and allowed an a lot lighter-weight edge.As an entertainment
                  skating has been consistently rehearsed on the waterways of
                  the Netherlands since the Middle Ages by the two guys and
                  females. Skating on the solidified lakes and fens was
                  mainstream in England in the seventeenth century, and the
                  primary skating club was framed in Edinburgh, Scotland, in
                  1742. During the 1740s British servicemen acquainted ice
                  skating with North America. It was likewise mainstream at the
                  French court around 1776; Marie-Antoinette was among the
                  skaters. Napoleon Bonaparte skated at Auxerre in 1781. The
                  advancement of refrigerated ice arenas began the change of ice
                  skating from an occasional side interest to a significant game
                  and amusement. The primary arena with falsely solidified ice,
                  a private one, the Glaciarium, was opened in London in 1876.
                  The primary misleadingly solidified arena in the United States
                  was introduced in the old Madison Square Garden in New York
                  City in 1879. During the time an ever increasing number of
                  open arenas with misleadingly delivered ice showed up. The
                  capacity to make sheets of ice inside enormous fields offered
                  ascend to both skating sports and ice appears, which turned
                  into a famous family amusement in the twentieth century. It
                  additionally took into consideration ice skating to spread to
                  areas with warm atmospheres.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                  <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21114553/Blog1.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">July 16, 2020</span>
                </p>
                <h2>Staying safe while buying grocery</h2>
                <p>
                  Total store growth continued to hamper in brick & mortar,
                  while online sales accelerated last week. Grocery and
                  Household care rose up to be within the top-five departments.
                  Beverages and Salty Snacks accounted for many of the Grocery
                  growth both online and offline. For the primary time since
                  COVID started, Alcohol lost its top-five department status.
                  .Ice skating most likely created in Scandinavia as right on
                  time as 1000 BCE, the main skates being produced using shank
                  or rib bones of elk, bulls, reindeer, and different creatures.
                  It isn’t known when the metal sprinter was presented, however
                  early Dutch prints delineate skates with metal cutting edges.
                  Until the center of the nineteenth century the metal segment
                  of the skate was secured to a wooden base or footplate and the
                  entire of the skate was attached to the foot with cowhide
                  straps or lashes. A significant improvement originated from
                  the United States in 1850 when E.W. Bushnell of Philadelphia
                  presented the all-steel skate, which supplanted the bulky
                  wooden footplate. The principle advancements in the figure
                  skate after 1900 were the option of the toe pick, a gathering
                  of sawlike teeth situated at the toe of the sharp edge, which
                  empowered skaters to acquire better buy in the ice while doing
                  certain bounces, and the development of the “shut toe” cutting
                  edge of one-piece steel, which added solidarity to the skate
                  and allowed an a lot lighter-weight edge.As an entertainment
                  skating has been consistently rehearsed on the waterways of
                  the Netherlands since the Middle Ages by the two guys and
                  females. Skating on the solidified lakes and fens was
                  mainstream in England in the seventeenth century, and the
                  primary skating club was framed in Edinburgh, Scotland, in
                  1742. During the 1740s British servicemen acquainted ice
                  skating with North America. It was likewise mainstream at the
                  French court around 1776; Marie-Antoinette was among the
                  skaters. Napoleon Bonaparte skated at Auxerre in 1781. The
                  advancement of refrigerated ice arenas began the change of ice
                  skating from an occasional side interest to a significant game
                  and amusement. The primary arena with falsely solidified ice,
                  a private one, the Glaciarium, was opened in London in 1876.
                  The primary misleadingly solidified arena in the United States
                  was introduced in the old Madison Square Garden in New York
                  City in 1879. During the time an ever increasing number of
                  open arenas with misleadingly delivered ice showed up. The
                  capacity to make sheets of ice inside enormous fields offered
                  ascend to both skating sports and ice appears, which turned
                  into a famous family amusement in the twentieth century. It
                  additionally took into consideration ice skating to spread to
                  areas with warm atmospheres.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-5">
            <div className="list-group  " id="list-tab" role="tablist">
              <div className="p-5 imgeSol shadow mb-5 ">
                <img src={imgeSol} className="img-responsive " alt="imge" />
              </div>
              <div className="Recent ">
                {" "}
                <h4>Recent posts</h4>
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="list-home"
                >
                  How retail shopping has changed during covid-19
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                >
                  How people are shopping during covid-19
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-bs-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="list-messages"
                >
                  Keeping your stock full during a pandemic
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-bs-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="list-settings"
                >
                  Staying safe while buying grocery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
