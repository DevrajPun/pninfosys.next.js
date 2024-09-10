import Navbar from "@/app/components/layouts/Navbar";
import "./globals.css";
import Footer from "@/app/components/layouts/Footer";

export const metadata = {
  title: "PN INFOSYS",
  description: "PN Infosys is a company specializing in software developer training, IT services, and consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
