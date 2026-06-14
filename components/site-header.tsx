import Link from "next/link";

const navItems = [
  { href: "/", label: "Begreppet" },
  { href: "/blog", label: "Blogg" },
  { href: "/#lasguide", label: "Läsguide" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zincLine bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-xl font-semibold tracking-normal">
          Ressentiment
        </Link>
        <nav aria-label="Huvudnavigering" className="flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-ink/75 transition hover:bg-ink hover:text-chalk"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
