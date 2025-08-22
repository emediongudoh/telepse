import { client } from "./sanity";

export const getPosts = async () => {
  const query = `
        *[_type == 'post'] | order(publishedAt desc) {
            _id, 
            title, 
            "slug": slug.current,
            main_image {
                asset->{
                    url
                }
            },
            author->{
                name,
            },
            categories[]->{
                title
            },
            preview,
            body,
            publishedAt,
            _createdAt,
        }`;

  const data = await client.fetch(query);

  return data;
};

export const getPost = async (slug: string) => {
  const query = `
    *[_type == 'post' && slug.current == '${slug}'] {
        title, 
        "slug": slug.current,
        main_image {
            asset->{
                url
            }
        },
        author->{
            name,
        },
        categories[]->{
            title
        },
        preview,
        body,
        _createdAt,
        }[0]
  `;

  const data = await client.fetch(query);

  return data;
};

export const getRelatedPosts = async (slug: string, categories: string[]) => {
  // 1. Try related posts by categories
  const relatedQuery = `
    *[_type == "post" && slug.current != $slug && count(categories[@.title in $categories]) > 0] 
      | order(publishedAt desc)[0...3] {
        _id,
        title,
        "slug": slug.current,
        main_image {
          asset->{
            url
          }
        },
        author->{
          name
        },
        categories[]->{
          title
        },
        preview,
        publishedAt
      }
  `;

  let relatedPosts = await client.fetch(relatedQuery, { slug, categories });

  // 2. Fallback: if none found, fetch recent posts (excluding current one)
  if (!relatedPosts.length) {
    const fallbackQuery = `
      *[_type == "post" && slug.current != $slug] 
        | order(publishedAt desc)[0...3] {
          _id,
          title,
          "slug": slug.current,
          main_image {
            asset->{
              url
            }
          },
          author->{
            name
          },
          categories[]->{
            title
          },
          preview,
          publishedAt
        }
    `;
    relatedPosts = await client.fetch(fallbackQuery, { slug });
  }

  return relatedPosts;
};

export const fetchBlogsByDateRange = async (rangeInDays: string) => {
  let dateFilter = "";

  if (rangeInDays) {
    const now = new Date();
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - parseInt(rangeInDays));
    const isoDate = pastDate.toISOString();

    dateFilter = `&& publishedAt >= "${isoDate}"`;
  }

  const query = `
    *[_type == 'post' ${dateFilter}] | order(publishedAt desc) {
        _id,
        title, 
        publishedAt,
}`;

  const data = await client.fetch(query);

  return data;
};
