import type { Metadata } from "next";
import { WhitepaperView } from "@/components/whitepaper-view";
import { LATEST_WHITEPAPER } from "@/lib/whitepaper-versions";

export const metadata: Metadata = {
  title: "KRAIN Whitepaper",
  description:
    "Technical and economic specification of KRAIN: the marketplace, the AI-native L2 protocol, and the $KRAIN token.",
  openGraph: {
    title: "KRAIN Whitepaper",
    description:
      "Technical and economic specification of KRAIN: the marketplace, the AI-native L2 protocol, and the $KRAIN token.",
    images: [
      {
        url: "/social-share-image.webp",
        width: 1200,
        height: 630,
        alt: "KRAIN Whitepaper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KRAIN Whitepaper",
    description:
      "Technical and economic specification of KRAIN: the marketplace, the AI-native L2 protocol, and the $KRAIN token.",
    images: ["/social-share-image.webp"],
  },
};

export default function WhitepaperPage() {
  return <WhitepaperView version={LATEST_WHITEPAPER} />;
}
