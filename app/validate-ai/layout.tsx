import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Validate AI Product Design Case Study | Chidozie Deborah";
  const description = "An AI product design case study showing how research, transparent confidence, user correction, reusable components, and actionable results can build trust between founders and AI.";
  const image = `${origin}/deploy-assets/validate-ai-case-study.webp`;

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: image, width: 1823, height: 28884 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function ValidateAiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
