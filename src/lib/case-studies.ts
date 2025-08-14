import { client } from "./sanity";

export const getCaseStudies = async () => {
  const query = `
        *[_type == 'caseStudy'] | order(_createdAt desc) {
            main_image {
                asset->{
                    url
                }
            },
            client,
            who_is,
            "slug": slug.current,
            industry,
            service,
            solution,
        }`;

  const data = await client.fetch(query);

  return data;
};

export const getContentMarketingCaseStudies = async () => {
  const query = `
        *[_type == 'caseStudy' && "Content marketing" in service] | order(_createdAt desc) {
            main_image {
                asset->{
                    url
                }
            },
            client,
            who_is,
            "slug": slug.current,
            industry,
            service,
            solution,
        }`;

  const data = await client.fetch(query);

  return data;
};

export const getCaseStudy = async (slug: string) => {
  const query = `
    *[_type == 'caseStudy' && slug.current == '${slug}'] {
        main_image {
            asset->{
                url
            }
        },
        slides[] {
            "url": asset->url,
        },
        logo {
            asset->{
                url
            }
        },
        client,
        who_is,
        "slug": slug.current,
        challenge,
        what_we_did,
        results_strings,
        results_objects,
    }[0]
  `;

  const data = await client.fetch(query);

  return data;
};
