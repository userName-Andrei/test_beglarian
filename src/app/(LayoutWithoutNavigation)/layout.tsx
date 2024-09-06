import type { Metadata } from "next";
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
    <>
      <Container>{children}</Container>
    </>
  );
}
