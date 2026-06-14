import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ScrollIndicator from "@/components/ScrollIndicator";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pin!t — Never lose a great spot again",
  description:
    "Pin!t is the home for every place you love — saved, organised by category, and ready the moment someone asks for a recommendation. Free on iOS and Android.",
  openGraph: {
    title: "Pin!t — Never lose a great spot again",
    description:
      "Save the places you love, organised by category. Free on iOS and Android.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable} style={{ colorScheme: "light" }}>
      <body>
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
