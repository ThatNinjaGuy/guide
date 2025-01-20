import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mentor Guide",
  description: "A comprehensive mentorship platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="app-container">
            <Navbar />
            <div className="content-container">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
