import localFont from "next/font/local";

const rumikoSans = localFont({
  src: [
    { path: "../styles/fonts/Rumiko-Sans-Variable.woff2", style: "normal" },
    {
      path: "../styles/fonts/Rumiko-Sans-Variable-Italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-rumiko-sans",
});

const inter = localFont({
  src: [
    { path: "../styles/fonts/Inter.var.woff2", style: "normal" },
    {
      path: "../styles/fonts/Inter-italic.var.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = localFont({
  src: [
    {
      path: "../styles/fonts/DMSans-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../styles/fonts/DMSans-Italic.woff2",
      style: "italic",
      weight: "400",
    },
    {
      path: "../styles/fonts/DMSans-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../styles/fonts/DMSans-BoldItalic.woff2",
      style: "italic",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-dm-sans",
});

const spaceMono = localFont({
  src: "../styles/fonts/SpaceMono-Regular.woff2",
  display: "swap",
  variable: "--font-space-mono",
});

const motterCorpus = localFont({
  src: "../styles/fonts/MotterCorpusCondensed.woff2",
  display: "swap",
  variable: "--font-motter-corpus",
});

export { rumikoSans };
export { inter };
export { spaceMono };
export { motterCorpus };
export { dmSans };
