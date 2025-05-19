import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Box } from "@mui/material";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { SyncWishlistAfterLogin } from "@/components/wishlist/SyncWishlistAfterLogin";

export const metadata: Metadata = {
  title: "Mauzl",
  description: "Your new clothing brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="clarity-script" strategy="afterInteractive">
        {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
      </Script>

      <body className="flex flex-col min-h-screen">
        <Providers>
          {/*  TODO: Create a Menu for mobile version  */}
          <Navbar />
          <Box className="flex-grow" sx={{ marginTop: "80px" }}>
            <SyncWishlistAfterLogin />
            {children}
          </Box>
          <Toaster position="bottom-center" />
          <Footer />
          {/* Tailwind styles for footer */}
        </Providers>
      </body>
    </html>
  );
}
