"use client";

import Link from "next/link";

// Third-party imports
import "react-phone-input-2/lib/style.css";
import { ArrowRight } from "lucide-react";

// Local imports
import { CaseStudyCard } from "../case-study/case-study-card";
import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";
import { WhatsappForm } from "./whatsapp-form";

interface CaseStudy {
  main_image: string;
  client: string;
  slug: string;
  who_is: string;
}

interface CaseStudiesPreviewProps {
  caseStudies: CaseStudy[];
}

export const CaseStudiesPreview = ({
  caseStudies,
}: CaseStudiesPreviewProps) => {
  return (
    <section className="bg-brand-yellow relative mt-24">
      <SvgPattern fill="#FFF" />

      <WhatsappForm />

      <div className="-z-10">
        <SvgPattern fill="#FFF" />
      </div>

      <div className="wrapper section mt-24 py-12 sm:mt-32">
        <Title size="md">View our case studies</Title>

        <div className="grid min-h-[50vh] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {caseStudies.slice(0, 2).map((item, index) => (
            <CaseStudyCard
              key={index}
              main_image={item.main_image}
              client={item.client}
              slug={item.slug}
              who_is={item.who_is}
            />
          ))}

          <Link
            href="/case-study"
            className="jusify-end flex items-center gap-2 justify-self-end text-lg hover:underline"
          >
            more case studies
            <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 w-full -rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </section>
  );
};
