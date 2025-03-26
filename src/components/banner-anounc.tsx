'use client'

import Link from 'next/link'

export default function BannerAnounc() {
  return (
    <div className="flex flex-row flex-1 justify-evenly text-sm justify-items-stretch place-items-baseline p-2 bg-orange-600 text-white font-bold text-center text-md  h-auto">
      <Link href={'/'}>
        <p>BANNER DE ANUNCIO</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde autem
          est doloribus voluptate
        </p>
      </Link>
    </div>
  )
}
