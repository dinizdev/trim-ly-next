'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabaseClient'
import { Loader2 } from 'lucide-react'
import Footer from '@/components/footer'
import MenuBar from '@/components/menu-bar'

export default function Signup(className: any) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true },
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Um link mágico foi enviado para seu e-mail!')
    }
    setLoading(false)
  }

  return (
    <>
      <MenuBar />
      <div className="flex items-center flex-col justify-center bg-zinc-950 min-h-screen">
        <Card className="w-full max-w-md p-6 text-white border-none bg-zinc-950 ">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Cadastro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-900 border-gray-600 text-center  focus:ring-orange-500"
              />
              <Button
                type="submit"
                className="w-full h-14 bg-orange-700 text-md font-bold hover:bg-orange-700"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  'Entrar com Magic Link'
                )}
              </Button>
            </form>
            {message && (
              <p className="mt-4 text-center text-sm text-green-400">
                {message}
              </p>
            )}
          </CardContent>
        </Card>
        <Footer className={` ${className}`} />
      </div>
    </>
  )
}
