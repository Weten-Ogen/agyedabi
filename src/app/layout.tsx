import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import { Toaster } from "sonner";

const poppins = Poppins ({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight:['100','300','500','700','900'], 
})

export const metadata: Metadata = {
  title: "Agyedabi | Change The Direction.",
  description: "Agyedabi is a bootcamp and also a gig at those who are seeking to break into the technology space. we offer you with high end demand course and get you a gig afterwards. You will be required to pay us back our tuition fee once the deed is done.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-poppins  antialiased`}
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
