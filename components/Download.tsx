import React from "react";

import config from "../src/config/index.json";
import Divider from "./Divider";

const Download = () => {
  const { download } = config;
  const [firstItem, secondItem] = download.items;

  return (
    <section className={`dark:bg-gray-800 py-8`} id="download">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {download.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={
                index % 2 ? "text-primary" : "text-border dark:text-white"
              }
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 dark:text-white font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600 dark:text-white`}>
              {firstItem?.description}
            </p>
            <div className="rounded-full shadow">
              <a
                href="https://github.com/ShawnAlisson/Portefeuille/releases/download/1.0.0/Portefeuille.1.0.dmg"
                className={`w-92 h-12 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-background dark:text-black bg-primary hover:bg-white hover:border-primary hover:text-primary md:py-4 md:text-lg md:px-10 rounded-full mt-5 place-content-center`}
              >
                Download for macOS
              </a>
            </div>
          </div>

          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>

        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 dark:text-white font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>

              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
              <div className="rounded-full shadow">
                <a
                  href="https://github.com/ShawnAlisson/Portefeuille"
                  className={`w-92 h-12 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium  dark:text-black text-background bg-primary hover:bg-white hover:border-primary hover:text-primary md:py-4 md:text-lg md:px-10 rounded-full mt-5  `}
                >
                  Download for iOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
