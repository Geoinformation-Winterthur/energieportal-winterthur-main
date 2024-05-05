
interface SliderSlideProps {
  children: React.ReactNode;
}

export const SliderSlide = ({ children }: SliderSlideProps) => {
  return <swiper-slide>{children}</swiper-slide>;
};
