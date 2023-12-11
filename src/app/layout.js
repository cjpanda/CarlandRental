import { Inter } from "next/font/google";
import "./globals.css";
import { SearchContextProvider } from "./context/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Rental App",
  description: "Car Rental App",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
