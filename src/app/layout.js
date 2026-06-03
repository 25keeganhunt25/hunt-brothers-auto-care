export const metadata = {
  title: "Hunt Brothers Auto Care LLC",
  description: "Luxury auto detailing in Springfield Missouri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}