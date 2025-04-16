import "./globals.css";

import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({
  subsets: ["latin"],
});


const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body className={inter.className}>
        <div className="flex flex-col items-stretch">
        </div>
      </body>
    </html>
  );
};

export default RootLayout;