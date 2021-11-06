import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button";
import SwiperCore, { A11y, Navigation } from "swiper";
import { useRef } from "react";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, A11y]);

export const EventsSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Swiper
      tabIndex={0}
      id="events-slider"
      aria-roledescription="carousel"
      role="group"
      aria-label="Ближайшие события музея - Не очень доступный слайдер"
      className="mb-10"
      navigation={{
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.update();
      }}
      loop
      effect="slide"
      slidesPerView={1}
    >
      <button
        ref={navigationPrevRef}
        className="swiper-button-prev"
        aria-label="Предыдущий слайд"
        aria-controls="events-slider"
      />
      <button
        ref={navigationNextRef}
        className="swiper-button-next"
        aria-label="Следующий слайд"
        aria-controls="events-slider"
      />
      <SwiperSlide aria-roledescription="slide" aria-label="1 из 2">
        <div className="relative h-[600px]">
          <img
            src="/slider-img.jpg"
            className="w-full object-cover h-full object-left"
            // eslint-disable-next-line max-len
            alt="от Дюрера до Матисса, избранные рисунки из собрания ГМИИ им. А.С. Пушкина. 10 июля - 1 ноября. Главное здание"
          />
          <Button
            link="/"
            text="Купить билет"
            ariaLabel="Купить билет на выставку от Дюрера до матисса"
            className="absolute left-10 bottom-10"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide aria-roledescription="slide" aria-label="2 из 2">
        <div className="relative h-[600px]">
          <img
            src="/slider-img-2.jpeg"
            className="w-full object-cover h-full object-left"
            // eslint-disable-next-line max-len
            alt="Свободное искусство. Итальянский футуризм из коллекции Джанни Маттиоли. 19 октяьря 2021 - 16 января 2022"
          />
          <Button
            link="/"
            text="Купить билет"
            ariaLabel="Купить билет на выставку Свободное искусство"
            className="absolute left-10 bottom-10"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
