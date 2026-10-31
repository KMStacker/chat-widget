import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Intake Widget",
  description: "AI-powered legal consultation and intake service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}