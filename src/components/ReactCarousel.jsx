import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const works = [
  { src: "/images/ANOTHER-SKY-in-NZ.jpg", title: "WORK1" },
  { src: "/images/comigsoon.jpg", title: "WORK2" },
  { src: "/images/comigsoon.jpg", title: "WORK3" },
  { src: "/images/comigsoon.jpg", title: "WORK4" },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      {/* <h2 className="carousel-title">Works</h2> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        loopAdditionalSlides={1}
        pagination={{ clickable: true }} // ✅ ページネーション有効
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {works.map((work, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={work.src} alt={work.title} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
