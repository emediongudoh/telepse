import { CaseStudyCard } from "./case-study-card";

interface CaseStudyListProps {
  filtered: {
    main_image: string;
    slides: [];
    client: string;
    slug: string;
    who_is: string;
    industry?: string;
    service?: string | string[];
    solution?: string | string[];
    tags?: string[];
  }[];
}

export const CaseStudyList = ({ filtered }: CaseStudyListProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {filtered.map((item, index) => (
        <CaseStudyCard
          key={index}
          main_image={item.main_image}
          client={item.client}
          slug={item.slug}
          who_is={item.who_is}
        />
      ))}
    </div>
  );
};
