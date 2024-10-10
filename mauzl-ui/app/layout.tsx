import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Box } from "@mui/material";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Mauzl App",
  description: "Your new clothing brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          {/*  TODO: Create a Menu for mobile version  */}
          <Navbar />
          <Box className="flex-grow" sx={{ marginTop: "80px" }}>
            {children}
          </Box>
          <Footer />
          {/* Tailwind styles for footer */}
        </Providers>
      </body>
    </html>
  );
}
