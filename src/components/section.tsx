import { Link, Settings, BarChart, Edit } from 'lucide-react'

export default function Section() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 text-gray-300 font-bold">
      <div className="p-4 bg-zinc-800 rounded-lg">
        <Link size={32} color="white" className="mb-4" />
        <h2>Encurtar Links</h2>
        <p>
          Utilize nossa plataforma para encurtar qualquer URL de forma rápida e
          eficiente. Basta inserir seu link e obter uma versão mais curta, ideal
          para compartilhamento em redes sociais, e-mails, ou mensagens
          instantâneas.
        </p>
      </div>
      <div className="p-4 bg-zinc-800 rounded-lg">
        <Settings size={32} color="white" className="mb-4" />
        <h2>Gerenciar Links</h2>
        <p>
          Acesse o painel de gerenciamento para ver todos os seus links
          encurtados. Organize, edite ou exclua links com facilidade e controle
          total sobre suas URLs.
        </p>
      </div>
      <div className="p-4 bg-zinc-800 rounded-lg">
        <BarChart size={32} color="white" className="mb-4" />
        <h2>Estatísticas de Cliques</h2>
        <p>
          Monitore o desempenho de seus links com dados detalhados sobre
          cliques, origem do tráfego, dispositivos e localizações. Acompanhe o
          sucesso de suas campanhas em tempo real.
        </p>
      </div>
      <div className="p-4 bg-zinc-800 rounded-lg">
        <Edit size={32} color="white" className="mb-4" />
        <h2>Personalizar URL</h2>
        <p>
          Torne seus links ainda mais personalizados e memoráveis. Escolha um
          nome exclusivo para sua URL encurtada e destaque sua marca ou
          campanha.
        </p>
      </div>
    </div>
  )
}
