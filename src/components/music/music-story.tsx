import Image from "next/image";

// Third-party imports
import CountUp from "react-countup";

// Local imports
import { Paragraph } from "../paragraph";
import { Title } from "../title";

export const MusicStory = () => {
  return (
    <section className="wrapper">
      {/* Our talent */}
      <div className="grid grid-cols-12 items-center gap-8 p-6">
        <div className="col-span-full space-y-4 md:col-span-8">
          <Title
            size="lg"
            weight="normal"
          >
            Our talent
          </Title>

          <Paragraph size="lg">
            Oladeji Taiwo Olusola Jamil (born May 21, 1993) better known by his
            stage name 2TTEE is a Nigerian Afro/Hip-hop recording artist, record
            producer, photomodel and entrepreneur. The Ibadan city raised artist
            is also an entrepreneur through his company, Telepse -a talent
            management, media marketing and brand consulting firm.
          </Paragraph>

          <Paragraph size="lg">
            His musical career began in 2010 with his debut single -Sexy Lady
            which received good airplay in Ibadan City. He later moved to Lagos
            in 2011 to pursue his music career and education. The artiste holds
            a B.Sc. Degree in Geography, University of Lagos, 2016.
          </Paragraph>

          <Paragraph size="lg">
            In 2012, as a rapper, he was among the 32 finalists of I&apos;ve Got
            Talent, a talent hunt reality television show which was aired to
            millions nation wide and international for a 7 Million naira
            winners&apos; prize through voting.
          </Paragraph>

          <Paragraph size="lg">
            2TTEE already released a debut EP album titled Handsome Ransome
            (2012) with a follow up EP album -TomTom (2013). His tour in Lagos
            city and Tomtom music video (2014), made him even more known with an
            expanded fan base. 2TTEE released his second music video -Yung Nas
            in 2015.
          </Paragraph>
        </div>

        <div className="col-span-full space-y-4 md:col-span-4">
          <Image
            src="/Telepse_digital_marketing_agency_lagos_nigeria_banner_2.jpg"
            alt="Telepse_digital_marketing_agency_lagos_nigeria_banner_2"
            width={500}
            height={500}
            className="col-span-4 h-[240px] w-[300px] rounded-2xl border-4 border-black object-cover sm:h-96 sm:w-full"
          />

          <div className="flex flex-col items-center justify-center">
            <Title>
              <CountUp
                start={0}
                end={10}
                duration={5}
                enableScrollSpy
                scrollSpyDelay={500}
              />
              +
            </Title>

            <Paragraph className="uppercase">years experience</Paragraph>
          </div>
        </div>
      </div>

      {/* We are more than a digital agency */}
      <div className="grid grid-cols-12 items-center gap-8 p-6">
        <div className="col-span-full md:col-span-4">
          <Image
            src="/Telepse_digital_marketing_agency_lagos_nigeria_banner_3.jpg"
            alt="Telepse_digital_marketing_agency_lagos_nigeria_banner_3"
            width={500}
            height={500}
            className="col-span-4 h-[240px] w-[320px] rounded-2xl border-4 border-black object-cover sm:h-96 sm:w-full"
          />
        </div>

        <div className="col-span-full space-y-2 md:col-span-8">
          <Title
            size="lg"
            weight="normal"
          >
            We&apos;re more than just a digital agency
          </Title>
          <Paragraph size="lg">
            We focus on our clients&apos; success. This is through digital
            marketing services especially with tailored strategy because it is
            one of the least understood aspect for great marketing and we see
            opportunities. It is exciting to expose everyone to our team of
            proffesionals who are readily enabled to support.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
