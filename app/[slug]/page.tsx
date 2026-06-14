import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog-post";
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

export default async function RootBlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getAllPosts().find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={getPostBySlug(slug)} />;
}
