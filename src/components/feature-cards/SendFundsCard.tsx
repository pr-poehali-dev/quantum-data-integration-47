import { Shield, ChevronDown, Info, ArrowUpRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Shield className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Антибан — Играй безопасно</h3>
      <p className="mb-4 text-sm text-gray-400">Многоуровневый обход античита: внешний рендер, рандомизация и защита от скриншотов</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-violet-400" />
            <div>
              <p className="text-sm font-medium text-white">Профиль защиты</p>
              <p className="text-xs text-gray-500">Статус: <span className="text-green-400">Активен</span></p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Уровень обхода <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Максимальный (рекомендуется)</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Внешний рендер, без инжекта в процесс.</p>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Поддерживаемый античит <span className="text-violet-400">*</span>
          </label>
          <div className="relative">
            <div className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5 text-sm text-white">
              EAC · BattlEye · VAC · Ricochet
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Switch defaultChecked className="data-[state=checked]:bg-violet-600" />
          <span className="text-sm text-gray-400">Скрытие от скриншотов</span>
        </div>
      </div>
    </div>
  )
}
