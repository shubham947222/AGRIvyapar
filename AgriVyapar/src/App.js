import "./App.css";

// import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProducts from "./components/StarProducts.js";
// import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
// import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";

// import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";

import Footer from "./components/Footer.js";

import NavOption from "./components/NavOption.js";
import data from "./data/data.json";

function App() {
  return (
    <Router>
      {/* <PreNavbar /> */}
      <Navbar />
      <NavOption
        miPhones={data.miPhones}
        redmiPhone={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        hone={data.home}
        accessories={data.accessories}
        audio={data.audio}
      />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProducts starProduct={data.starProduct} />
      {/* <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Route exact path="/music">
        <HotAccessories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>
      <Route exact path="/smartDevice">
        <HotAccessories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>

      <Route exact path="/home">
        <HotAccessories
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route>

      <Route exact path="/lifestyle">
        <HotAccessories
          lifeStyle={data.hotAccessories.lifeStyle}
          lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>

      <Route exact path="/mobileAccessories">
        <HotAccessories
          mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route> */}
      <Heading text="Best Sellers" />
      <ProductReviews productReviews={data.productReviews} />

      {/* <Heading text="VIDEOS" /> */}
      {/* <Videos videos={data.videos} /> */}
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
