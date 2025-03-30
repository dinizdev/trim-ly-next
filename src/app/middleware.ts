import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res }) // Conexão com Supabase

  // Obtém sessão do usuário
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Se o usuário não estiver logado, redireciona para a página de login
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

// Define em quais rotas o middleware deve ser executado
export const config = {
  matcher: ['/dashboard/:path*'], // Protege todas as rotas dentro de /dashboard
}
