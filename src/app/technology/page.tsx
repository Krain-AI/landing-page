import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Footer } from "@/sections/footer";
import { renderMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "KRAIN Technology",
  description:
    "How KRAIN works: an AI-native L2 with verifiable inference (opML), an agent economy, and a live marketplace — and how our approach compares to TEE, peer-judgment, and attribution-only designs.",
  openGraph: {
    title: "KRAIN Technology",
    description:
      "How KRAIN works: an AI-native L2 with verifiable inference (opML), an agent economy, and a live marketplace already in production.",
    images: [
      {
        url: "/social-share-image.webp",
        width: 1200,
        height: 630,
        alt: "KRAIN Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KRAIN Technology",
    description:
      "How KRAIN works: an AI-native L2 with verifiable inference (opML), an agent economy, and a live marketplace already in production.",
    images: ["/social-share-image.webp"],
  },
};

export default function TechnologyPage() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "technology.md",
  );
  const src = fs.readFileSync(filePath, "utf-8");
  const { html, frontmatter, toc } = renderMarkdown(src);

  return (
    <div className="flex flex-col min-h-screen bg-[#04030C] overflow-x-hidden">
      <section className="relative w-full pt-32 pb-12 px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8781BB] mb-4">
            <span>Technology</span>
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
