import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <KomaruLogo />
        <span className="text-lg font-semibold text-white">
          KomaruDLC
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Функции
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Тарифы <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Статус
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          FAQ
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Discord
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Купить доступ
      </Button>
    </header>
  )
}

function KomaruLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1.5"/>
      <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#8B5CF6" opacity="0.4"/>
      <circle cx="14" cy="14" r="3" fill="#a78bfa"/>
    </svg>
  )
}