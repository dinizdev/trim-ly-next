interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <div>
      <footer
        className={`bg-slate-950 text-white text-center p-6 ${className}`}
      >
        <p>© 2025 Trim-ly | Feito no Brasil com Amor e Carinho. 🇧🇷</p>
      </footer>
    </div>
  )
}
