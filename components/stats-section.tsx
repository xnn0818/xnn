import { Users, Trophy, Star, Zap } from "lucide-react"

const stats = [
  { icon: Users, value: "0/128", label: "\u7dda\u4e0a\u73a9\u5bb6", color: "#00d4ff" },
  { icon: Trophy, value: "50+", label: "\u904a\u6232\u6d3b\u52d5", color: "#00d4ff" },
  { icon: Star, value: "4.9/5", label: "\u73a9\u5bb6\u8a55\u5206", color: "#00d4ff" },
  { icon: Zap, value: "99.9%", label: "\u4f3a\u670d\u5668\u7a69\u5b9a\u5ea6", color: "#00d4ff" },
]

export function StatsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/stats-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#0a0e17]/75" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center transition-all hover:bg-[rgba(255,255,255,0.08)]"
            >
              <stat.icon className="mx-auto h-8 w-8" style={{ color: stat.color }} />
              <p className="mt-3 text-2xl font-bold sm:text-3xl" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
