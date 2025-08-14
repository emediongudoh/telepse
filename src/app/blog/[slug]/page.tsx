import Image from "next/image";

// Local imports
import { getPost } from "@/lib/posts";
import { urlFor } from "@/lib/sanity";

// Third-party imports
import { PortableText } from "next-sanity";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const data = await getPost(slug);

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-4 p-4">
      <div className="flex items-center justify-center">
        <Image
          src={urlFor(data.mainImage).url()}
          alt={data.title}
          width={1200}
          height={1200}
          className="h-auto w-[500px] object-cover"
          priority
        />
      </div>

      <h1 className="text-3xl font-semibold sm:text-6xl">{data.title}</h1>

      <div className="leading-loose">
        <PortableText value={data.body} />
      </div>
    </section>
  );
}
