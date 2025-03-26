import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { Link } from 'lucide-react'

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  window.alert('URL encurtada com sucesso!')
}

export default function FormUrl() {
  return (
    <div className="px-4 sm:px-8">
      <form
        action=""
        className="flex flex-col sm:flex-row justify-between gap-3 items-center"
      >
        <Input
          type="url"
          className="w-full sm:w-3xl focus:outline-none focus:ring-8 focus:ring-orange-600"
          placeholder="https://www.exemplo.com/8h2ks4l9fA9ld1qZ5tFv9K3Bd9xzW0FQwK8tXzFf2"
        />
        <Button
          className="mt-4 sm:mt-0 bg-orange-600 hover:bg-orange-700 font-bold cursor-pointer"
          onClick={handleClick}
        >
          <Link size={20} className="mr-2" />
          Gerar url encurtada...
        </Button>
      </form>
    </div>
  )
}
