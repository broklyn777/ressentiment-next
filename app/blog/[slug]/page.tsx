import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = getAllPosts().find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Nietzsche och ressentiment`,
    description: post.description
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getAllPosts().find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const fullPost = getPostBySlug(slug);

  return (
    <main className="bg-paper">
      <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blood">
          {fullPost.readingTime}
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">{fullPost.title}</h1>
        <p className="mt-5 text-xl leading-8 text-ink/70">{fullPost.description}</p>
        <div className="prose-nietzsche mt-12">
          <MDXRemote source={fullPost.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
