import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="ServicesSlider"
    >
      <SwiperSlide>
        <div className="rounded-xl bg-white p-4 py-7 h-full relative group hover:bg-primary transition duration-300 flex flex-col items-start">
          <img
            src="https://trademarkchase.com/img/icons/services/1.png"
            alt="icons"
            width="64"
            height="64"
            className="object-contain mb-5"
            loading="lazy"
          />
          <h3 className="text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold mb-2">
            Trademark Registration
          </h3>
          <p className="text-base max-h-[150px] overflow-y-auto group-hover:text-[#61430F] text-[#565656] transition-all">
            Ensure your brand is protected with trademark registration.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl bg-white p-4 py-7 h-full relative group hover:bg-primary transition duration-300 flex flex-col items-start">
          <img
            src="https://trademarkchase.com/img/icons/services/1.png"
            alt="icons"
            width="64"
            height="64"
            className="object-contain mb-5"
            loading="lazy"
          />
          <h3 className="text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold mb-2">
            Trademark Registration
          </h3>
          <p className="text-base max-h-[150px] overflow-y-auto group-hover:text-[#61430F] text-[#565656] transition-all">
            Ensure your brand is protected with trademark registration.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl bg-white p-4 py-7 h-full relative group hover:bg-primary transition duration-300 flex flex-col items-start">
          <img
            src="https://trademarkchase.com/img/icons/services/1.png"
            alt="icons"
            width="64"
            height="64"
            className="object-contain mb-5"
            loading="lazy"
          />
          <h3 className="text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold mb-2">
            Trademark Registration
          </h3>
          <p className="text-base max-h-[150px] overflow-y-auto group-hover:text-[#61430F] text-[#565656] transition-all">
            Ensure your brand is protected with trademark registration.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl bg-white p-4 py-7 h-full relative group hover:bg-primary transition duration-300 flex flex-col items-start">
          <img
            src="https://trademarkchase.com/img/icons/services/1.png"
            alt="icons"
            width="64"
            height="64"
            className="object-contain mb-5"
            loading="lazy"
          />
          <h3 className="text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold mb-2">
            Trademark Registration
          </h3>
          <p className="text-base max-h-[150px] overflow-y-auto group-hover:text-[#61430F] text-[#565656] transition-all">
            Ensure your brand is protected with trademark registration.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl bg-white p-4 py-7 h-full relative group hover:bg-primary transition duration-300 flex flex-col items-start">
          <img
            src="https://trademarkchase.com/img/icons/services/1.png"
            alt="icons"
            width="64"
            height="64"
            className="object-contain mb-5"
            loading="lazy"
          />
          <h3 className="text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold mb-2">
            Trademark Registration
          </h3>
          <p className="text-base max-h-[150px] overflow-y-auto group-hover:text-[#61430F] text-[#565656] transition-all">
            Ensure your brand is protected with trademark registration.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl bg-white p-4 py-7 h-full relative group hover:bg-primary transition duration-300 flex flex-col items-start">
          <img
            src="https://trademarkchase.com/img/icons/services/1.png"
            alt="icons"
            width="64"
            height="64"
            className="object-contain mb-5"
            loading="lazy"
          />
          <h3 className="text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold mb-2">
            Trademark Registration
          </h3>
          <p className="text-base max-h-[150px] overflow-y-auto group-hover:text-[#61430F] text-[#565656] transition-all">
            Ensure your brand is protected with trademark registration.
          </p>
        </div>
      </SwiperSlide>
      {/* Add other slides here */}
    </Swiper>
  );
}
