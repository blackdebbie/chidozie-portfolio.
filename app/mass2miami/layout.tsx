import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Mass2Miami Website Redesign | Chidozie Deborah";
  const description = "A UX/UI case study showing how Chidozie Deborah made Mass2Miami's leadership programs clearer, more credible, and easier to act on.";
  const image = `${origin}/deploy-assets/mass2miami-card-mockup.webp`;

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: image, width: 2048, height: 1606 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function Mass2MiamiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
