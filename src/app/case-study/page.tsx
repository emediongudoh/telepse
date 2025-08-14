import { CaseStudiesClient } from "@/components/case-study/case-studies-client";
import { ClientLogos } from "@/components/client-logos";
import { clientLogos } from "@/constants";
import { getCaseStudies } from "@/lib/case-studies";

export const revalidate = 3600;

export default async function CaseStudy() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <CaseStudiesClient caseStudies={caseStudies} />
      <ClientLogos logos={clientLogos} />
    </>
  );
}
