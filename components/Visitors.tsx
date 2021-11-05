import { Button } from "@/components/Button";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation]);

export const Visitors = () => {
  return (
    <section id="visitors" className="mb-28">
      <Swiper
        role="group"
        aria-label="Слайдер"
        className="mb-10"
        navigation
        loop
        effect="slide"
        slidesPerView={1}
      >
        <SwiperSlide>
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
        <SwiperSlide>
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
      <nav aria-label="Разделы сайта" className="-mb-4">
        <Button
          link="/"
          text="Купить билет"
          className="mr-10 inline-block mb-4"
        />
        <Button
          link="/"
          text="Стать другом"
          className="mr-10 inline-block mb-4"
        />
        <Button link="/" text="Онлайн-магазин" className="inline-block mb-4" />
      </nav>
    </section>
  );
};
