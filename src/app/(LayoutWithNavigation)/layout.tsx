import type { Metadata } from "next";
import "../globals.css";
import { inter } from "../fonts";
import Container from "@/components/UI/Container/Container";
import Navigation from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Beglarian test app",
  description: "Beglarian test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container withNavigation>{children}</Container>
        <Navigation />
      </body>
    </html>
  );
}
