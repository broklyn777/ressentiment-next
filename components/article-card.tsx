import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-zincLine bg-chalk p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-calm"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blood">{post.readingTime}</p>
      <h3 className="mt-3 font-serif text-2xl leading-tight">{post.title}</h3>
      <p className="mt-3 text-base leading-7 text-ink/70">{post.description}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-ink group-hover:text-blood">
        Läs artikeln
      </span>
    </Link>
  );
}
