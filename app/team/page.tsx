import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Crown, Shield, Wrench, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "\u7ba1\u7406\u5718\u968a | \u6eab\u6696\u5c0f\u93ae",
  description: "\u8a8d\u8b58\u6eab\u6696\u5c0f\u93ae\u7684\u7ba1\u7406\u5718\u968a\u6210\u54e1",
}

const teamMembers = [
  {
    name: "\u5c0f\u660e",
    role: "\u4f3a\u670d\u5668\u64c1\u6709\u8005",
    icon: Crown,
    iconColor: "#f59e0b",
    description: "\u4f3a\u670d\u5668\u5275\u8fa6\u4eba\uff0c\u8ca0\u8cac\u6574\u9ad4\u71df\u904b\u548c\u6c7a\u7b56\u65b9\u5411\u3002",
  },
  {
    name: "\u5c0f\u83ef",
    role: "\u526f\u64c1\u6709\u8005",
    icon: Crown,
    iconColor: "#c0c0c0",
    description: "\u5354\u52a9\u7ba1\u7406\u4f3a\u670d\u5668\u65e5\u5e38\u904b\u4f5c\uff0c\u8ca0\u8cac\u793e\u7fa4\u7ba1\u7406\u3002",
  },
  {
    name: "\u5c0f\u6797",
    role: "\u8d85\u7d1a\u7ba1\u7406\u54e1",
    icon: Shield,
    iconColor: "#ef4444",
    description: "\u7dad\u8b77\u4f3a\u670d\u5668\u79e9\u5e8f\uff0c\u8655\u7406\u91cd\u5927\u9055\u898f\u4e8b\u4ef6\u3002",
  },
  {
    name: "\u5c0f\u9673",
    role: "\u7ba1\u7406\u54e1",
    icon: Shield,
    iconColor: "#3b82f6",
    description: "\u8ca0\u8cac\u65e5\u5e38\u7ba1\u7406\u548c\u73a9\u5bb6\u6295\u8a34\u8655\u7406\u3002",
  },
  {
    name: "\u5c0f\u738b",
    role: "\u958b\u767c\u8005",
    icon: Wrench,
    iconColor: "#22c55e",
    description: "\u4f3a\u670d\u5668\u6280\u8853\u958b\u767c\uff0c\u8ca0\u8cac\u8173\u672c\u548c\u7cfb\u7d71\u7dad\u8b77\u3002",
  },
  {
    name: "\u5c0f\u5433",
    role: "\u5ba2\u670d",
    icon: Headphones,
    iconColor: "#a855f7",
    description: "\u63d0\u4f9b 24/7 \u73a9\u5bb6\u652f\u63f4\uff0c\u89e3\u7b54\u73a9\u5bb6\u554f\u984c\u3002",
  },
]

export default function TeamPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u7ba1\u7406\u5718\u968a"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u8a8d\u8b58\u6211\u5011\u5c08\u696d\u7684\u7ba1\u7406\u5718\u968a\uff0c\u4ed6\u5011\u78ba\u4fdd\u4f3a\u670d\u5668\u7684\u9806\u66a2\u904b\u4f5c"}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="glass rounded-2xl p-6 text-center transition-all hover:bg-[rgba(255,255,255,0.08)]"
          >
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]"
            >
              <member.icon className="h-8 w-8" style={{ color: member.iconColor }} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">{member.name}</h3>
            <p className="mt-1 text-sm font-medium" style={{ color: member.iconColor }}>
              {member.role}
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
