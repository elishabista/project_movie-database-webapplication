import React, { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/scrollbar";

export interface CarouselProps extends Omit<SwiperProps, "navigation"> {
  navigation?: boolean;
  showButton?: boolean;
}

const Carousel: FC<CarouselProps> & { Slide: FC<SwiperSlideProps> } = (props) => {
  const {
    navigation = true,
    pagination = false,
    modules = [],
    children,
    showButton = true,
    ...restProps
  } = props;


  return (
    <Swiper
      navigation={{ enabled: navigation, prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
      pagination={pagination ?? { clickable: true }}
      modules={[Navigation, Pagination, Autoplay, A11y, ...modules]}
      loop
      {...restProps}
    >
      {children}
      {showButton ? (
        <>
          <div role="button" className={`swiper-button-prev left-0 `} />
          <div role="button" className={`swiper-button-next right-0 `} />
        </>
      ) : null}
    </Swiper>
  );
};

Carousel.Slide = SwiperSlide;

export default Carousel;

