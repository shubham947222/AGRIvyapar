import React from "react";
import "../styles/HotAccessories.css";
import HotItemCard from "../components/HotItemCard.js";
import "../styles/HotAccessories.css";
const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
          className="HotAccessories"
        />
      </div>

      {/* ...2nd.... */}
      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
              index={index}
            />
          ))}
        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
              index={index}
            />
          ))}
        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
              index={index}
            />
          ))}
        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
              index={index}
            />
          ))}
        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
              index={index}
            />
          ))}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

export default HotAccessories;
