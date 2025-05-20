import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import { Toaster } from "sonner";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Agyedabi | The future tells it all.",
  description: "Agyedabi is a tech-focused bootcamp and gig platform that helps aspiring professionals launch their careers. We offer high-demand courses and connect graduates with real job opportunities. Payment is deferred until you secure a role.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-poppins scroll-smooth antialiased ${poppins.className} ${spaceGrotesk.variable}`}
      >
        <Toaster 
          richColors
          position="top-center"
          className="text-lg capitalize"
        />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
