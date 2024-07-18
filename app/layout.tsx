import { Inter } from "next/font/google";

import { CoreLayout } from "@/common/components/CoreLayout";

import type { Metadata } from "next";

import "@/common/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Storybook",
  description: "Next14 + Eslint + Prettier + TailwindCSS",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/icon-light.png",
        href: "/favicons/icon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/icon-dark.png",
        href: "/favicons/icon-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CoreLayout>{children}</CoreLayout>
      </body>
    </html>
  );
}
