import type { Metadata } from "next";
import Container from "@/components/UI/Container/Container";
import Navigation from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Beglarian test app",
  description: "Beglarian test app",
};

export default function LayoutWithNavigation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container withNavigation>{children}</Container>
      <Navigation />
    </>
  );
}
