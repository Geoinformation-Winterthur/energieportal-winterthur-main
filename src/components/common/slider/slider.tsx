import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";
import { Icon } from "../icon/icon";
import "./slider.scss";

interface SliderProps {
  children: React.ReactNode[];
}

export const Slider = ({ children }: SliderProps) => {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const pagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    register();

    const params: SwiperOptions = {
      observeSlideChildren: true,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        type: "fraction",
        el: pagRef.current,
      },
      navigation: {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },
    };

    Object.assign(swiperRef?.current, params);
    swiperRef?.current?.initialize();
  }, []);

  return (
    <>
      <div className={"swiper-container"}>
        <swiper-container init="false" ref={swiperRef}>
          {children}
        </swiper-container>
      </div>
      <div className="swiper__buttons">
        <button className="swiper-button-prev" ref={prevRef}>
          <Icon icon="arrow-left" size={20} />
        </button>
        <div ref={pagRef}></div>
        <button className="swiper-button-next" ref={nextRef}>
          <Icon icon="arrow-right" size={20} />
        </button>
      </div>
    </>
  );
};
