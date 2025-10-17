import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define the service type
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServicesSlider: React.FC = () => {
  // Initialize Swiper modules
  useEffect(() => {
    // Ensure modules are available
    if (typeof window !== 'undefined') {
      Swiper.use([Navigation, Pagination, Autoplay]);
    }
  }, []);

  // Service data
  const services: Service[] = [
    {
      id: 1,
      title: "Trademark Registration",
      description: "Ensure your brand is protected with trademark registration. Whether you want to trademark my name, secure a logo, or protect your brand identity, our team handles the filing process with precision, giving you exclusive rights and peace of mind.",
      icon: "https://trademarkchase.com/img/icons/services/1.png"
    },
    {
      id: 2,
      title: "Trademark Renewal",
      description: "Maintain your trademark's validity with timely renewals. Our team ensures continuous protection of your intellectual property.",
      icon: "https://trademarkchase.com/img/icons/services/2.png"
    },
    {
      id: 3,
      title: "Copyright Registration",
      description: "Legally safeguard your creative works with copyright registration, granting exclusive rights across various media platforms.",
      icon: "https://trademarkchase.com/img/icons/services/3.png"
    },
    {
      id: 4,
      title: "Comprehensive Trademark Search",
      description: "Our expert team leverages advanced technology and deep industry insight to perform a comprehensive search, uncover potential conflicts, and deliver a detailed report of the findings.",
      icon: "https://trademarkchase.com/img/icons/services/3.png"
    },
    {
      id: 5,
      title: "Amazon Brand Registry",
      description: "Amazon Brand Registry empowers brand owners to register their trademarks and protect their intellectual property while strengthening their brand presence.",
      icon: "https://trademarkchase.com/img/icons/services/3.png"
    },
    {
      id: 6,
      title: "International Trademark Registration",
      description: "Secure exclusive rights to your brand in multiple countries, protecting against infringement and ensuring global recognition and legal coverage.",
      icon: "https://trademarkchase.com/img/icons/services/3.png"
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="ServicesSlider"
    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          <div className="rounded-xl bg-white p-4 py-7 h-full text-white relative group hover:bg-primary transition duration-300 flex flex-col items-start">
            <img
              loading="lazy"
              src={service.icon}
              alt={`${service.title} icon`}
              width="64"
              height="64"
              className="object-contain mb-5"
            />
            <h3 className="text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-base overflow-auto max-h-[150px] group-hover:text-[#61430F] text-[#565656] transition-all">
              {service.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesSlider;