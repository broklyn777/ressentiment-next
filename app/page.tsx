import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ConceptPanel } from "@/components/concept-panel";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main>
      <section className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-ink text-chalk">
        <Image
          src="/images/nietzsche-hero.png"
          alt="Historiskt inspirerat portratt av Friedrich Nietzsche i ett arbetsrum"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,22,22,0.88),rgba(22,22,22,0.52),rgba(22,22,22,0.18))]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-chalk/70">
              Friedrich Nietzsche
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
              Ressentiment begrepp
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-chalk/82 md:text-xl">
              En svensk, begriplig och tankeskarp introduktion till ett av Nietzsches mest
              laddade begrepp: hur oformad vanmakt kan bli moral, dom och kultur.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#begrepp"
                className="rounded-full bg-chalk px-5 py-3 text-sm font-bold text-ink transition hover:bg-blood hover:text-chalk"
              >
                Förstå begreppet
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-chalk/45 px-5 py-3 text-sm font-bold text-chalk transition hover:border-chalk hover:bg-chalk hover:text-ink"
              >
                Öppna bloggen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="begrepp" className="bg-paper py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blood">Definition</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Inte bara bitterhet, utan en hel moralisk mekanism.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-ink/78">
            <p>
              Hos Nietzsche betecknar ressentiment en reaktiv kraft: en kvarhållen vrede,
              född ur maktlöshet, som inte kan uttryckas direkt och därför omvandlas till
              värderingar. Den som inte kan agera börjar tolka, döma och moralisera.
            </p>
            <p>
              Begreppet är centralt i <span className="italic">Till moralens genealogi</span>,
              där Nietzsche undersöker hur vissa moraliska ideal kan växa fram ur hämndens
              och jämförelsens långsamma arbete.
            </p>
          </div>
        </div>
      </section>

      <ConceptPanel />

      <section id="lasguide" className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blood">Lasguide</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Tre nycklar när du läser Nietzsche.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Genealogi", "Fråga inte bara vad en moral säger, utan varifrån den kommer."],
              ["Aktivt och reaktivt", "Skilj mellan värden som skapar och värden som svarar med nej."],
              ["Psykologi som kulturkritik", "Nietzsche analyserar själen, men också samhällets former."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-zincLine bg-chalk p-6">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-3 leading-7 text-ink/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chalk py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blood">MDX-blogg</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Fördjupningar</h2>
            </div>
            <Link href="/blog" className="font-semibold text-blood underline underline-offset-4">
              Se alla artiklar
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
