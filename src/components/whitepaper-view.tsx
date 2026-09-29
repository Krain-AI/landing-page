import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { Footer } from "@/sections/footer";
import { renderMarkdown } from "@/lib/markdown";
import {
  LATEST_WHITEPAPER,
  WHITEPAPER_VERSIONS,
  whitepaperHref,
  type WhitepaperVersion,
} from "@/lib/whitepaper-versions";

export function WhitepaperView({ version }: { version: WhitepaperVersion }) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "whitepaper",
    version.file,
  );
  const src = fs.readFileSync(filePath, "utf-8");
  const { html, frontmatter, toc } = renderMarkdown(src);

  return (
    <div className="flex flex-col min-h-screen bg-[#04030C] overflow-x-hidden">
      <section className="relative w-full pt-32 pb-12 px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8781BB] mb-4">
            <span>Whitepaper</span>
            {frontmatter.version ? (
              <>
                <span aria-hidden="true">/</span>
                <span>{frontmatter.version}</span>
              </>
            ) : null}
            {frontmatter.updated ? (
              <>
                <span aria-hidden="true">/</span>
                <span>Updated {frontmatter.updated}</span>
              </>
            ) : null}
          </div>
          {frontmatter.status ? (
            <p className="text-sm text-gray-400 mb-8 italic">
              {frontmatter.status}
            </p>
          ) : null}

          <nav
            aria-label="Version history"
            className="mb-8 border border-[#272442] rounded-lg p-6 bg-[#0a0916]"
          >
            <h2 className="text-xs uppercase tracking-widest text-[#8781BB] mb-4">
              Version history
            </h2>
            <ol className="space-y-2">
              {WHITEPAPER_VERSIONS.map((v) => {
                const current = v.slug === version.slug;
                return (
                  <li key={v.slug} className="flex flex-wrap items-baseline gap-x-3">
                    {current ? (
                      <span className="font-semibold text-white" aria-current="page">
                        {v.label}
                      </span>
                    ) : (
                      <Link
                        href={whitepaperHref(v)}
                        className="font-semibold text-[#1FC5D6] underline underline-offset-4 hover:text-[#6fe1ed]"
                      >
                        {v.label}
                      </Link>
                    )}
                    <span className="text-sm text-gray-400">
                      {v.summary}
                      {current ? " (you are reading this version)" : ""}
                      {v.slug === LATEST_WHITEPAPER.slug && !current ? " (latest)" : ""}
                    </span>
                  </li>
                );
              })}
            </ol>
          </nav>

          {toc.length > 1 ? (
            <nav
              aria-label="Table of contents"
              className="mb-12 border border-[#272442] rounded-lg p-6 bg-[#0a0916]"
            >
              <h2 className="text-xs uppercase tracking-widest text-[#8781BB] mb-4">
                Contents
              </h2>
              <ol className="space-y-2 text-gray-300">
                {toc
                  .filter((t) => t.level === 2)
                  .map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="hover:text-white transition-colors"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
              </ol>
            </nav>
          ) : null}

          <article
            className="whitepaper-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
