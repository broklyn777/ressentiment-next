import type { MDXComponents } from "mdx/types";
import type React from "react";

export const mdxComponents: MDXComponents = {
  Callout: ({ children }: { children: React.ReactNode }) => (
    <aside className="my-8 rounded-lg border border-zincLine bg-chalk p-5 text-ink shadow-sm">
      {children}
    </aside>
  )
};
