import React from "react";
import { Link } from "react-scroll";

import config from "../src/config/index.json";

const Main = () => {
  const { main } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 bg-primary">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-white dark:text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{main.title}</span>{" "}
          <span className={`block text-black dark:text-white xl:inline`}>
            {main.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-100 dark:text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {main.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-full shadow">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              key={main.primaryAction.text}
              to={main.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-black dark:text-white bg-white dark:bg-black hover:bg-white hover:border-primary hover:text-primary md:py-4 md:text-lg md:px-10 rounded-full`}
            >
              {main.primaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
