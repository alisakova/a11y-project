import { SectionTitle } from "@/components/SectionTitle";

export const Video = () => {
  return (
    <section id="video" className="mb-28">
      <SectionTitle title="Онлайн-трансляции" />
      <div className="padding-bottom-16-9 relative w-full">
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src="https://www.youtube.com/embed/6xir8DfGzxY"
          title="Выставка 'Бывают странные сближенья...'"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};
