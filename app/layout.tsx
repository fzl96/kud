import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-[#f8f9fa]">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
