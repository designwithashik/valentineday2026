import "./globals.css";

export const metadata = {
  title: "Be My Valentine 💘",
  description: "Cute Valentine page built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
