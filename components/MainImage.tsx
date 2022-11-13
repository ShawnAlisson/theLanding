import React from "react";

import config from "../src/config/index.json";

const MainImage = () => {
  const { main } = config;
  return (
    <div>
      <img
        className="w-full h-64 object-contain sm:h-80 md:h-80 lg:h-80  "
        src={main.img}
        alt=""
      />
    </div>
  );
};
export default MainImage;
