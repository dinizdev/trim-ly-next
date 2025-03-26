'use client'
import Footer from '@/components/footer'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 -text-white">{children}</body>
    </html>
  )
}
