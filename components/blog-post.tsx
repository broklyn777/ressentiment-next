import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import type { BlogPost } from "@/lib/blog";

export function BlogPost({ post }: { post: BlogPost }) {
  return (
    <main className="bg-paper">
      <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blood">
          {post.readingTime}
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-xl leading-8 text-ink/70">{post.description}</p>
        <div className="prose-nietzsche mt-12">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
