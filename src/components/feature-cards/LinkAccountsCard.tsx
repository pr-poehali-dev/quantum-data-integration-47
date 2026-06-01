import { Eye, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const espFeatures = [
  { name: "Скелеты игроков", detail: "Сквозь стены · 300м", tag: "ESP-01", color: "bg-violet-700" },
  { name: "Инвентарь врагов", detail: "Предметы · Оружие · Броня", tag: "ESP-02", color: "bg-indigo-700" },
  { name: "Дропы и лут", detail: "Редкие · Эпик · Легенд.", tag: "ESP-03", color: "bg-teal-700" },
  { name: "Транспорт", detail: "Авто · Вертолёт · Лодка", tag: "ESP-04", color: "bg-amber-700" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Eye className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">ESP — Видишь всё</h3>
      <p className="mb-4 text-sm text-gray-400">Скелеты, лут, транспорт и предметы врагов — отображаются прямо сквозь стены в реальном времени</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {espFeatures.map((item, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.color} bg-opacity-30`}>
                <Eye className="h-4 w-4 text-white opacity-70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-gray-500">{item.detail}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{item.tag}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Настроить фильтры
        </Button>
      </div>
    </div>
  )
}