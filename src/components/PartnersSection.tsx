import { Shield, Zap, Eye, Crosshair, Cpu, Lock, Radar } from "lucide-react"

const features = [
  { name: "ESP", icon: Eye },
  { name: "Aimbot", icon: Crosshair },
  { name: "No Recoil", icon: Zap },
  { name: "Anti-Ban", icon: Shield },
  { name: "Triggerbot", icon: Radar },
  { name: "Spinbot", icon: Cpu },
  { name: "Bypass", icon: Lock },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {features.map((f) => (
        <div key={f.name} className="flex items-center gap-2 text-gray-500">
          <f.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{f.name}</span>
        </div>
      ))}
    </section>
  )
}