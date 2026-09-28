import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { WhitepaperView } from "@/components/whitepaper-view";
import {
  LATEST_WHITEPAPER,
  WHITEPAPER_VERSIONS,
} from "@/lib/whitepaper-versions";

export const dynamicParams = false;

export function generateStaticParams() {
  return WHITEPAPER_VERSIONS.map((v) => ({ version: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}): Promise<Metadata> {
  const { version } = await params;
  const title = `KRAIN Whitepaper ${version}`;
  return {
    title,
    alternates: { canonical: "/whitepaper" },
    openGraph: { title, images: ["/social-share-image.webp"] },
  };
}

export default async function WhitepaperVersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  if (version === LATEST_WHITEPAPER.slug) redirect("/whitepaper");
  const v = WHITEPAPER_VERSIONS.find((w) => w.slug === version);
  if (!v) notFound();
  return <WhitepaperView version={v} />;
}
