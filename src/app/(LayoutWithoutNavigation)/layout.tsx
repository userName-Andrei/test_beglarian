import type { Metadata } from "next";
import "../globals.css";
import { inter } from "../fonts";
import Container from "@/components/UI/Container/Container";

export const metadata: Metadata = {
  title: "Beglarian tests",
  description: "Beglarian tests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
