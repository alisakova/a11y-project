import { Button } from "@/components/Button";

export const Visitors = () => {
  return (
    <div id="visitors" className="mb-28">
      <div className="relative h-96 lg:h-[600px] mb-10">
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
      <nav aria-label="Полезные ссылки" className="-mb-4">
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
    </div>
  );
};
