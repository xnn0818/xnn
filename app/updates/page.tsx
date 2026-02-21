import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Sparkles, Bug, Wrench, Plus } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "\u66f4\u65b0\u516c\u544a | \u6eab\u6696\u5c0f\u93ae",
  description: "\u6eab\u6696\u5c0f\u93ae FiveM \u4f3a\u670d\u5668\u6700\u65b0\u66f4\u65b0\u516c\u544a",
}

interface UpdateItem {
  type: "new" | "fix" | "improve" | "add"
  text: string
}

interface Update {
  date: string
  version: string
  title: string
  items: UpdateItem[]
}

const typeConfig: Record<string, { icon: LucideIcon; color: string; label: string }> = {
  new: { icon: Sparkles, color: "#00d4ff", label: "\u65b0\u529f\u80fd" },
  fix: { icon: Bug, color: "#ef4444", label: "\u4fee\u5fa9" },
  improve: { icon: Wrench, color: "#f59e0b", label: "\u6539\u9032" },
  add: { icon: Plus, color: "#22c55e", label: "\u65b0\u589e" },
}

const updates: Update[] = [
  {
    date: "2025-02-15",
    version: "v2.4.0",
    title: "\u65b0\u5e74\u5927\u66f4\u65b0",
    items: [
      { type: "new", text: "\u65b0\u589e\u8cfd\u8eca\u7cfb\u7d71\uff0c\u652f\u63f4\u591a\u4eba\u7af6\u901f" },
      { type: "new", text: "\u65b0\u589e\u91e3\u9b5a\u7cfb\u7d71\uff0c\u5305\u542b 20+ \u7a2e\u9b5a\u985e" },
      { type: "improve", text: "\u512a\u5316\u4f3a\u670d\u5668\u6548\u80fd\uff0c\u964d\u4f4e\u5ef6\u9072" },
      { type: "fix", text: "\u4fee\u5fa9\u8eca\u8f1b\u751f\u6210\u9ede\u7684\u554f\u984c" },
    ],
  },
  {
    date: "2025-02-01",
    version: "v2.3.2",
    title: "\u7a69\u5b9a\u6027\u66f4\u65b0",
    items: [
      { type: "fix", text: "\u4fee\u5fa9\u73a9\u5bb6\u7121\u6cd5\u6b63\u5e38\u767b\u5165\u7684\u554f\u984c" },
      { type: "fix", text: "\u4fee\u5fa9\u5730\u5716\u8cc7\u6e90\u8f09\u5165\u932f\u8aa4" },
      { type: "improve", text: "\u6539\u9032\u53cd\u4f5c\u5f0a\u7cfb\u7d71" },
    ],
  },
  {
    date: "2025-01-20",
    version: "v2.3.0",
    title: "\u65b0\u5e74\u6d3b\u52d5\u7248\u672c",
    items: [
      { type: "new", text: "\u65b0\u5e74\u9650\u5b9a\u6d3b\u52d5\u4e0a\u7dda" },
      { type: "add", text: "\u65b0\u589e\u9650\u5b9a\u670d\u88dd\u548c\u8eca\u8f1b\u5857\u88dd" },
      { type: "add", text: "\u65b0\u589e\u7159\u706b\u7279\u6548\u548c\u88dd\u98fe\u7269\u54c1" },
      { type: "improve", text: "\u512a\u5316\u904a\u6232\u5167\u754c\u9762" },
    ],
  },
  {
    date: "2025-01-10",
    version: "v2.2.5",
    title: "\u6548\u80fd\u512a\u5316",
    items: [
      { type: "improve", text: "\u5927\u5e45\u512a\u5316\u4f3a\u670d\u5668\u6548\u80fd" },
      { type: "fix", text: "\u4fee\u5fa9\u591a\u500b\u5df2\u77e5 bug" },
      { type: "add", text: "\u65b0\u589e\u73a9\u5bb6\u7d71\u8a08\u7cfb\u7d71" },
    ],
  },
]

export default function UpdatesPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u66f4\u65b0\u516c\u544a"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u67e5\u770b\u6eab\u6696\u5c0f\u93ae\u7684\u6700\u65b0\u66f4\u65b0\u8a18\u9304"}
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-8">
        {updates.map((update) => (
          <div key={update.version} className="glass-strong rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground">{update.title}</h2>
                <p className="mt-1 text-sm text-[#00d4ff] font-medium">{update.version}</p>
              </div>
              <span className="text-sm text-muted-foreground">{update.date}</span>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {update.items.map((item, i) => {
                const config = typeConfig[item.type]
                const Icon = config.icon
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
                      style={{ backgroundColor: `${config.color}20` }}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: config.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded px-1.5 py-0.5 text-xs font-medium"
                        style={{ color: config.color, backgroundColor: `${config.color}15` }}
                      >
                        {config.label}
                      </span>
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
