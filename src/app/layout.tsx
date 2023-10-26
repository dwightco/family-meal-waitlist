import type { Metadata } from "next";
import {
  motterCorpus,
  rumikoSans,
  inter,
  spaceMono,
} from "@/styles/localFonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Family Meal Waitlist",
  description: "Buy & Sell Homecooked Food in Manila",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${spaceMono.variable} ${inter.variable} ${rumikoSans.variable} ${motterCorpus.variable}`}
      lang="en"
    >
      <body className="w-full min-h-[100dvh] h-full font-sans text-fam-black bg-fam-white">
        {children}
      </body>
    </html>
  );
}
