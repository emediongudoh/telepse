import { Title } from "../title";

export const TelepseYoutube = () => {
  return (
    <section className="section wrapper w-full">
      <Title
        align="center"
        size="lg"
      >
        Subscribe to Telepse TV
      </Title>

      <iframe
        className="h-[500px] w-full"
        src="https://www.youtube.com/embed/videoseries?list=PLZ1Rs2Gpz92w1djlEy7KMDRzpDHNMBp2c"
        title="YouTube channel uploads"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
};
