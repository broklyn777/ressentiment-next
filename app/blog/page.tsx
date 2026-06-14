import { ArticleCard } from "@/components/article-card";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blogg | Nietzsche och ressentiment",
  description: "MDX-artiklar om Nietzsche, ressentiment och moralens genealogi."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blood">MDX-blogg</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Artiklar om ressentiment</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">
          Korta, läsbara texter som gör Nietzsches begrepp användbart utan att släta ut dess
          obekväma kanter.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
