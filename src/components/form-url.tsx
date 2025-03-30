'use client'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { Link } from 'lucide-react'
import router from 'next/router'

const handleClick = () => {
  router.push('/cadastro')
}

export default function FormUrl() {
  return (
    <div className="px-4">
      <form
        action=""
        className="flex flex-col sm:flex-row gap-3 justify-between items-center w-full"
      >
        <Input
          type="url"
          className="w-full sm:w-[600px] lg:w-[800px] focus:outline-none focus:ring-2 focus:ring-orange-600 p-3"
          placeholder="https://www.exemplo.com/8h2ks4l9fA9ld1qZ5tFv9K3Bd9xzW0FQwK8tXzFf2"
        />
        <Button
          className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 font-bold cursor-pointer flex items-center justify-center"
          onClick={handleClick}
        >
          <Link size={20} className="mr-2" />
          Gerar URL encurtada
        </Button>
      </form>
    </div>
  )
}
