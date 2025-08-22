import { CaseStudiesClient } from "@/components/case-study/case-studies-client";
import { ClientLogos } from "@/components/client-logos";
import { Title } from "@/components/title";
import { getCaseStudies } from "@/lib/case-studies";

export const revalidate = 3600;

export default async function CaseStudy() {
  const caseStudies = await getCaseStudies();

  return (
    <section className="mt-16 flex flex-col gap-8">
      <Title
        align="center"
        size="lg"
        weight="normal"
      >
        View case studies
      </Title>

      <CaseStudiesClient caseStudies={caseStudies} />

      <ClientLogos />
    </section>
  );
}
