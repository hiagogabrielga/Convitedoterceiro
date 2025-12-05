import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


export const metadata = {
  title: "Convite",
  description: "Convite dos terceirões de informática",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
