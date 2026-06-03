import './globals.css'

export const metadata = {
  title: 'Hunt Brothers Auto Care LLC',
  description: 'Professional Auto Detailing in Springfield, Missouri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}