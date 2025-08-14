import { client } from "./sanity";

export const getPosts = async () => {
  const query = `
        *[_type == 'post'] | order(_createdAt desc) {
            title, 
            "slug": slug.current,
            mainImage {
                asset->{
                    _id,
                    url
                }
            },
            author->{
                name,
            },
            categories[]->{
                _id,
                title
            },
            body,
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
        mainImage {
            asset->{
                _id,
                url
            }
        },
        author->{
            name,
        },
        categories[]->{
            _id,
            title
        },
        body,
        _createdAt,
        }[0]
  `;

  const data = await client.fetch(query);

  return data;
};
