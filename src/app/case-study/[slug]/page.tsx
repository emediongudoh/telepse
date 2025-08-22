import { notFound } from "next/navigation";
import Image from "next/image";

// Local imports
import { SlickTitle } from "@/components/slick-title";
import { CaseStudyResultCard } from "@/components/case-study/case-study-result-card";
import { SvgPattern } from "@/components/svg-pattern";
import { PageBlock } from "@/components/page-block";
import { getCaseStudy } from "@/lib/case-studies";
import { SlideContainer } from "@/components/case-study/slide-container";
import { Title } from "@/components/title";
import { Paragraph } from "@/components/paragraph";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

type ResultObject = {
  label: string;
  value: number;
};

export const revalidate = 3600;

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) return notFound();

  const {
    main_image,
    slides,
    logo,
    client,
    who_is,
    challenge,
    what_we_did,
    results_strings,
    results_objects,
  } = caseStudy;

  const resultBlobs = [
    { svg: "/blobs/blob-haikei.svg", color: "#000" },
    { svg: "/blobs/blob-haikei.svg", color: "#000" },
    { svg: "/blobs/blob-haikei.svg", color: "#000" },
    { svg: "/blobs/blob-haikei.svg", color: "#000" },
  ];

  return (
    <section className="flex flex-col gap-8">
      {slides?.length > 0 ? (
        <SlideContainer slides={slides} />
      ) : (
        <Image
          src={main_image.asset.url}
          alt={client}
          width={1000}
          height={1000}
          className="h-96 w-full object-cover"
        />
      )}

      <div className="tiny--wrapper section">
        <div className="mt-8 flex items-center justify-center">
          <div className="flex size-24 items-center justify-center rounded-full border-4 border-black p-2">
            <Image
              src={logo.asset.url}
              alt={`${client}'s logo`}
              width={100}
              height={100}
              className="size-24 rounded-full object-contain"
            />
          </div>
        </div>

        {/* Who is? */}
        <SlickTitle title={`Who is ${client}?`} />
        <p
          className="text-center text-lg leading-loose sm:text-xl"
          dangerouslySetInnerHTML={{ __html: who_is }}
        />

        {/* Challenge */}
        <div className="section bg-secondary-gray relative mt-8">
          <SvgPattern fill="#FFF" />

          <Title
            align="center"
            size="lg"
            weight="normal"
          >
            Challenge
          </Title>
          <Paragraph
            align="center"
            size="lg"
          >
            {challenge}
          </Paragraph>
        </div>

        {/* What we did */}
        <div className="section relative mt-8">
          <Title
            align="center"
            size="lg"
            weight="normal"
          >
            What we did
          </Title>
          <div className="space-y-4">
            {what_we_did.map((item: string, index: number) => (
              <div
                key={index}
                className="relative flex flex-col border-l-8 border-black bg-cover bg-scroll bg-center bg-no-repeat p-4 text-lg leading-loose sm:p-8"
                style={{
                  backgroundImage: `url(/home-bg-1.jpg)`,
                }}
              >
                <div className="bg-cover bg-scroll bg-center bg-no-repeat p-4 sm:p-8">
                  <Paragraph size="lg">{item}</Paragraph>
                </div>

                <div className="absolute bottom-0 w-full rotate-180">
                  <SvgPattern fill="#FFF" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper section">
        <Title
          align="center"
          size="lg"
          weight="normal"
        >
          Results
        </Title>

        {results_objects?.length > 0 && (
          <div
            className={
              results_objects.length === 3
                ? "flex flex-wrap items-center justify-center gap-4 sm:gap-8"
                : "flex flex-wrap items-center justify-center gap-4 sm:gap-8"
            }
          >
            {results_objects.map((item: ResultObject, index: number) => {
              const blob = resultBlobs[index % resultBlobs.length];

              return (
                <CaseStudyResultCard
                  key={index}
                  label={item.label}
                  value={item.value}
                  bgSvg={blob.svg}
                  textColor={blob.color}
                />
              );
            })}
          </div>
        )}

        {results_strings?.length > 0 && (
          <div
            className={
              results_objects?.length === 3
                ? "flex flex-wrap items-center justify-center gap-4 sm:gap-8"
                : "flex flex-wrap items-center justify-center gap-4 sm:gap-8"
            }
          >
            {results_strings.map((item: string, index: number) => {
              const resultBlobs = [
                { svg: "/blobs/blob-haikei.svg", color: "#000" },
                { svg: "/blobs/blob-haikei.svg", color: "#000" },
                { svg: "/blobs/blob-haikei.svg", color: "#000" },
                { svg: "/blobs/blob-haikei.svg", color: "#000" },
              ];
              const blob = resultBlobs[index % resultBlobs.length];

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center rounded-2xl p-8 text-center"
                >
                  <Image
                    src={blob.svg}
                    alt=""
                    width={120}
                    height={120}
                    className="absolute top-1/2 left-1/2 -z-10 w-full max-w-[100px] -translate-x-1/2 -translate-y-1/2 sm:max-w-[160px]"
                  />
                  <p
                    className="z-10 text-lg font-medium sm:text-xl"
                    style={{ color: blob.color }}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Page block */}
      <PageBlock
        title="The present, the future are digital. Gain ahead in marketing and transformation."
        btnText="Book your free strategy"
      />
    </section>
  );
}
