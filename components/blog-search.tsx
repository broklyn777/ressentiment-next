"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import type { BlogPost } from "@/lib/blog";

export function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return posts;
    }

    return posts.filter((post) =>
      [post.title, post.description, post.content].some((field) =>
        field.toLowerCase().includes(search)
      )
    );
  }, [posts, query]);

  return (
    <div className="mt-12">
      <label htmlFor="blog-search" className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
        Sök i bloggen
      </label>
      <input
        id="blog-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Sök efter ressentiment, slavmoral, omvärdering..."
        className="mt-3 w-full rounded-lg border border-zincLine bg-chalk px-4 py-3 text-base text-ink outline-none transition placeholder:text-ink/38 focus:border-blood focus:ring-2 focus:ring-blood/20"
      />

      <p className="mt-4 text-sm text-ink/62">
        {filteredPosts.length === 1
          ? "1 artikel matchar."
          : `${filteredPosts.length} artiklar matchar.`}
      </p>

      {filteredPosts.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-zincLine bg-chalk p-6">
          <h2 className="font-serif text-2xl">Inga träffar</h2>
          <p className="mt-2 leading-7 text-ink/70">
            Prova ett bredare ord, till exempel "moral", "värde" eller "Nietzsche".
          </p>
        </div>
      )}
    </div>
  );
}
