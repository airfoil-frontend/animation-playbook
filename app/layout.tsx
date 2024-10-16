import { Inter } from "next/font/google";

import { Providers } from "./providers";

import { CoreLayout } from "@/common/components/CoreLayout";

import type { Metadata } from "next";

import "@/common/styles/globals.scss";
import "keen-slider/keen-slider.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Storybook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CoreLayout>{children}</CoreLayout>
        </Providers>
      </body>
    </html>
  );
}
