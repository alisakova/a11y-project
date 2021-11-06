import { SectionTitle } from "@/components/SectionTitle";

export const Video = () => {
  return (
    <section id="video" className="mb-28">
      <SectionTitle title="Онлайн-трансляции" />
      <div className="padding-bottom-16-9 relative w-full">
        <iframe
          className="w-full absolute top-0 left-0"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6xir8DfGzxY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};
