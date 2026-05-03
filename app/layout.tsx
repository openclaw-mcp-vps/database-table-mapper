import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Database Table Mapper — Visual Relationship Explorer',
  description: 'Connect to your database, visualize table relationships, and get suggested JOIN query paths instantly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="44ccb244-032e-4e78-8b73-7d1bb9eca83e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
