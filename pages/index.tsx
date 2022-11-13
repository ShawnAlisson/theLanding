import Header from "../components/Header";
import Main from "../components/Main";
import MainImage from "../components/MainImage";
import Features from "../components/Features";
import Download from "../components/Download";
import About from "../components/About";

import LazyShow from "../components/LazyShow";

export default function Home() {
  return (
    <div
      className={`bg-background dark:bg-background_dark grid gap-y-16 overflow-hidden`}
    >
      <div className={`  lg:flex bg-primary`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <Main />
          </div>
        </div>
        <div className="mt-24 mr-6">
          <MainImage />
        </div>
      </div>

      <LazyShow>
        <Features />
      </LazyShow>
      <LazyShow>
        <Download />
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
    </div>
  );
}
