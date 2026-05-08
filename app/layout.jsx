import './globals.css'

export const metadata = {
  title: 'Olamilekan Royal Stitches',
  description: 'Premium Menswear & Tailoring',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
