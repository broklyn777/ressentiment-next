import type { BlogPost } from "@/lib/blog";

export type SearchCategory = "people" | "concepts" | "articles" | "other";

export type SearchItem = {
  id: string;
  category: SearchCategory;
  title: string;
  description: string;
  href: string;
  keywords: string[];
  content?: string;
};

export type SearchGroup = {
  id: SearchCategory;
  label: string;
  description: string;
  items: SearchItem[];
};

export const categoryOrder: SearchCategory[] = ["people", "concepts", "articles", "other"];

export const categoryLabels: Record<SearchCategory, string> = {
  people: "Personer",
  concepts: "Begrepp",
  articles: "Artiklar",
  other: "Övrigt"
};

export const categoryDescriptions: Record<SearchCategory, string> = {
  people: "Tänkare och personer som formar läsningen.",
  concepts: "Begrepp, motiv och idéer i materialet.",
  articles: "Längre texter och fördjupningar.",
  other: "Sidor och resurser som kompletterar biblioteket."
};

const seededItems: SearchItem[] = [
  {
    id: "friedrich-nietzsche",
    category: "people",
    title: "Friedrich Nietzsche",
    description: "Filosofen bakom analysen av ressentiment, slavmoral och omvärdering.",
    href: "/",
    keywords: ["nietzsche", "friedrich", "genealogi", "moral", "till moralens genealogi"]
  },
  {
    id: "max-scheler",
    category: "people",
    title: "Max Scheler",
    description: "Filosof som vidareutvecklade frågan om ressentiment i modern moralpsykologi.",
    href: "/blog",
    keywords: ["scheler", "max scheler", "ressentiment", "moralpsykologi"]
  },
  {
    id: "max-stirner",
    category: "people",
    title: "Max Stirner",
    description: "Närliggande figur för frågor om jaget, värden och auktoritet.",
    href: "/blog",
    keywords: ["stirner", "max stirner", "jaget", "värden", "auktoritet"]
  },
  {
    id: "ressentiment",
    category: "concepts",
    title: "Ressentiment",
    description: "En reaktiv kraft där sårad vanmakt blir moralisk tolkning.",
    href: "/vad-ar-ressentiment",
    keywords: ["ressentiment", "bitterhet", "agg", "reaktiv", "hämnd", "moral"]
  },
  {
    id: "slavmoral",
    category: "concepts",
    title: "Slavmoral",
    description: "Nietzsches namn på en moral som börjar med ett nej till den andre.",
    href: "/slavmoral-och-omvardering",
    keywords: ["slavmoral", "moral", "omvärdering", "god", "ond", "reaktiv"]
  },
  {
    id: "nihilism",
    category: "concepts",
    title: "Nihilism",
    description: "När gamla värden förlorar sin bindande kraft och nya ännu inte bär.",
    href: "/blog",
    keywords: ["nihilism", "värden", "mening", "nietzsche"]
  },
  {
    id: "om-ressentiment",
    category: "other",
    title: "Om Ressentiment",
    description: "Startsidan med definition, läsguide och översikt över ämnet.",
    href: "/",
    keywords: ["om", "ressentiment", "definition", "läsguide", "översikt"]
  },
  {
    id: "manifest",
    category: "other",
    title: "Manifest",
    description: "En kort riktning för hur materialet ska läsas: som bibliotek, inte bloggflöde.",
    href: "/blog",
    keywords: ["manifest", "bibliotek", "idéer", "samband", "läsning"]
  }
];

export function createSearchIndex(posts: BlogPost[]): SearchItem[] {
  const articleItems = posts.map<SearchItem>((post) => ({
    id: `article-${post.slug}`,
    category: "articles",
    title: post.title,
    description: post.description,
    href: `/${post.slug}`,
    keywords: [post.title, post.description, post.slug, post.readingTime],
    content: post.content
  }));

  return [...seededItems, ...articleItems];
}

export function groupSearchItems(items: SearchItem[]): SearchGroup[] {
  return categoryOrder
    .map((category) => ({
      id: category,
      label: categoryLabels[category],
      description: categoryDescriptions[category],
      items: items.filter((item) => item.category === category)
    }))
    .filter((group) => group.items.length > 0);
}
