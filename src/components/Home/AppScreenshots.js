import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow } from "swiper/core";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

const AppScreenshots = () => {
  return (
    <>
      <div className="screenshots-area">
        <div className="">
          {/* <div className="section-title">
            <span className="sub-title">APP SCREENS</span>
            <h2>Beautifully Crafted All App Screenshots</h2>
          </div> */}

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/images/banner/banner_principal_web_7.jpg"
                alt="screenshots"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/banner/banner_principal_web_6.jpg"
                alt="screenshots"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/banner/banner_principal_web_4.jpg"
                alt="screenshots"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/banner/banner_principal_web_1.jpg"
                alt="screenshots"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                src="/images/banner/banner_principal_web_5.jpg"
                alt="screenshots"
              />
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <img
                src="/images/banner/banner_principal_web_6.jpg"
                alt="screenshots"
              />
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <img
                src="/images/banner/banner_principal_web_7.jpg"
                alt="screenshots"
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppScreenshots;
