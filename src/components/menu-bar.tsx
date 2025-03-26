import Link from 'next/link'
import { Button } from './ui/button'
import { useState } from 'react'

export default function MenuBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div>
      <nav className="flex justify-between items-center p-6 text-white">
        {/* Logo */}
        <Link href={'/'}>
          <h2 className="text-4xl font-bold border-solid border-b-4 border-orange-600">
            Trim.Ly
          </h2>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="sm:hidden flex items-center text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>

        {/* Links (visible on larger screens, toggleable on mobile) */}
        <ul
          className={`sm:flex justify-between gap-5 font-bold text-lg ${
            isMobileMenuOpen ? 'flex flex-col' : 'hidden sm:flex'
          }`}
        >
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Plataforma</Link>
          </li>
          <li>
            <Link href={'/'}>Preços</Link>
          </li>
          <li>
            <Link href={'/'} className="underline">
              Log in
            </Link>
          </li>
        </ul>

        {/* Register Button */}
        <Link href={'/cadastro'}>
          <Button className="hover:bg-zinc-700 cursor-pointer">
            Cadastre-se grátis
          </Button>
        </Link>
      </nav>
    </div>
  )
}
