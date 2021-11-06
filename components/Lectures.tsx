import { SectionTitle } from "@/components/SectionTitle";

export const Lectures = () => {
  return (
    <section id="lectures" className="mb-28">
      <SectionTitle title="Экскурсии и лекции в прямом эфире" />
      <p className="max-w-xl text-xl">
        С 1 июля вы можете присоединиться к нашим виртуальным мероприятиям —
        экскурсиям и лекциям для взрослых и детей, оплатив участие на сайте.
        Встречи будут проходить в прямом эфире на платформе Zoom; предусмотрен
        формат живого общения с возможностью задавать вопросы экскурсоводу
        (лектору).
      </p>
      <a
        href="/"
        className="text-xl text-blue-800 border-b mb-4 inline-block hover:border-transparent"
      >
        Подробнее
      </a>
      <p className="max-w-xl text-xl">
        Мы будем благодарны за любое{" "}
        <a
          href="/"
          className="text-xl text-blue-800 border-b hover:border-transparent"
        >
          пожертвование
        </a>
        . Все поступившие средства будут направлены на организацию
        онлайн-проектов для наших посетителей.
      </p>
    </section>
  );
};
