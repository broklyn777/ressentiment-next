import { redirect } from "next/navigation";
import { getAllPosts } from "@/lib/blog";

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

export default async function OldBlogPostPage({ params }: Params) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
