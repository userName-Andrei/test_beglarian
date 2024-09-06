import "./globals.css";
import { inter } from "./fonts";
import { AppInitializer } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppInitializer>
        <body className={inter.className}>{children}</body>
      </AppInitializer>
    </html>
  );
}
