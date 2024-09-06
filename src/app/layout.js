
import "./globals.css";
import { Inter } from "next/font/google";

// import AuthProvider from "@/providers/AuthProvider";
import Navbar from "@/Component/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/TheamProvider";
import AuthProvider from "@/provider/AuthProvider";
import Footer from "@/Component/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saga Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="containermain">
                <div className="wrapper">
                   <Navbar/>
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}