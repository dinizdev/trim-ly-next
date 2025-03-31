'use client'
import Footer from '@/components/footer'
import FormUrl from '@/components/form-url'
import MenuBar from '@/components/menu-bar'
import Section from '@/components/section'

export default function Home() {
  return (
    <div className="flex flex-col">
      <MenuBar />
      <div className="flex flex-col justify-center items-center max-w-4xl p-6 mx-auto text-center text-white">
        <h2 className="text-gray-100 text-2xl font-bold my-24">
          {
            '🔗✨ Transforme seus links longos em curtos e fáceis de compartilhar em segundos! 🚀 Comece agora e torne seus links mais rápidos e organizados! 🔥'
          }
        </h2>
        <div>
          <FormUrl />
        </div>
      </div>
      <div className="p-10">
        <Section />
      </div>
      <Footer />
    </div>
  )
}
