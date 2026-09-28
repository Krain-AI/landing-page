/**
 * Whitepaper version registry. Newest first; the first entry is what
 * /whitepaper serves. Each version is also reachable at /whitepaper/<slug>.
 */
export interface WhitepaperVersion {
  slug: string;
  label: string;
  file: string;
  summary: string;
}

export const WHITEPAPER_VERSIONS: WhitepaperVersion[] = [
  {
    slug: "v2.1",
    label: "v2.1",
    file: "v2.1.md",
    summary: "Revised after the v2.0 community review",
  },
  {
    slug: "v2.0",
    label: "v2.0",
    file: "v2.0.md",
    summary: "Open draft, published for community feedback",
  },
  {
    slug: "v1.0",
    label: "v1.0",
    file: "v1.0.md",
    summary: "Original whitepaper, first published on GitBook",
  },
];

export const LATEST_WHITEPAPER = WHITEPAPER_VERSIONS[0];

export const whitepaperHref = (v: WhitepaperVersion) =>
  v.slug === LATEST_WHITEPAPER.slug ? "/whitepaper" : `/whitepaper/${v.slug}`;
