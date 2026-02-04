import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Young_Serif } from 'next/font/google'
import Navbar from "@/components/Navbar";
import { AppContainer } from "@/components/AppContainer";


export const metadata: Metadata = {
  title: "Babbler Blog",
  description: "Blog site for tech, fitness and life",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",

})

const youngSerif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-young-serif",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${youngSerif.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          <AppContainer>
            {children}
          </AppContainer>
        </ThemeProvider>  
      </body>
    </html>
  );
}
