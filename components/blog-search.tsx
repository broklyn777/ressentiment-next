"use client";

import { useMemo, useState } from "react";
import type React from "react";
import Link from "next/link";
import type { SearchItem } from "@/lib/search";
import { categoryOrder, createSearchIndex, groupSearchItems } from "@/lib/search";
import type { BlogPost } from "@/lib/blog";

type ScoredItem = SearchItem & {
  score: number;
};

function scoreItem(item: SearchItem, query: string) {
  if (!query) {
    return 1;
  }

  const normalizedTitle = item.title.toLowerCase();
  const normalizedDescription = item.description.toLowerCase();
  const normalizedKeywords = item.keywords.join(" ").toLowerCase();
  const normalizedContent = item.content?.toLowerCase() ?? "";
  let score = 0;

  if (normalizedTitle === query) score += 100;
  if (normalizedTitle.startsWith(query)) score += 70;
  if (normalizedTitle.includes(query)) score += 45;
  if (normalizedKeywords.includes(query)) score += 28;
  if (normalizedDescription.includes(query)) score += 18;
  if (normalizedContent.includes(query)) score += 8;

  return score;
}

export function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const searchIndex = useMemo(() => createSearchIndex(posts), [posts]);
  const updateQuery = (event: React.FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const groupedResults = useMemo(() => {
    const search = query.trim().toLowerCase();

    const results = searchIndex
      .map<ScoredItem>((item) => ({
        ...item,
        score: scoreItem(item, search)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
      });

    return groupSearchItems(results);
  }, [query, searchIndex]);

  const totalMatches = groupedResults.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="mt-12">
      <label htmlFor="blog-search" className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
        Sök i bloggen
      </label>
      <input
        id="blog-search"
        type="search"
        value={query}
        onInput={updateQuery}
        placeholder="Sök efter ressentiment, slavmoral, omvärdering..."
        className="mt-3 w-full rounded-lg border border-zincLine bg-chalk px-4 py-3 text-base text-ink outline-none transition placeholder:text-ink/38 focus:border-blood focus:ring-2 focus:ring-blood/20"
      />

      <p className="mt-4 text-sm text-ink/62">
        {totalMatches === 1 ? "1 träff matchar." : `${totalMatches} träffar matchar.`}
      </p>

      {groupedResults.length > 0 ? (
        <div className="mt-8 space-y-10">
          {groupedResults.map((group) => (
            <section key={group.id} aria-labelledby={`search-group-${group.id}`}>
              <div className="border-b border-zincLine pb-3">
                <h2
                  id={`search-group-${group.id}`}
                  className="font-serif text-2xl leading-tight text-ink"
                >
                  {group.label}
                </h2>
                <p className="mt-1 text-sm leading-6 text-ink/58">{group.description}</p>
              </div>
              <div className="divide-y divide-zincLine">
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group block py-5 transition hover:pl-2"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="font-serif text-2xl leading-tight text-ink group-hover:text-blood">
                        {item.title}
                      </h3>
                      <span className="text-sm font-semibold text-ink/45 group-hover:text-blood">
                        {item.href}
                      </span>
                    </div>
                    <p className="mt-2 max-w-3xl leading-7 text-ink/70">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
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
