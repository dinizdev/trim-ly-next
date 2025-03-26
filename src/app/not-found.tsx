// pages/404.tsx

import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-netural-950 text-white p-5">
      <div className="bg-yellow-500 p-4 rounded-full">
        <span role="img" aria-label="Error" className="text-6xl">
          🚫
        </span>
      </div>
      <h1 className="text-5xl font-bold mt-5">Oops! Página Não Encontrada</h1>
      <p className="text-lg mt-3 mb-5">
        A página que você está procurando não existe.{' '}
        <span role="img" aria-label="Sad face">
          😔
        </span>
      </p>
      <Link
        href="/"
        className="text-blue-500 underline text-xl hover:text-blue-400 transition-colors"
      >
        Voltar para a página inicial{' '}
        <span role="img" aria-label="Home">
          🏠
        </span>
      </Link>
    </div>
  )
}
