import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; 
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({
  subsets: ["latin"],
});


const RootLayout = (props: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider>
          
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;