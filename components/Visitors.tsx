import { Button } from "@/components/Button";
import { EventsSlider } from "@/components/EventsSlider";

export const Visitors = () => {
  return (
    <section id="visitors" className="mb-28">
      <EventsSlider />
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
