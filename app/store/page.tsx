import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Star, Gem, Crown, Zap, Car, Shirt } from "lucide-react"

export const metadata: Metadata = {
  title: "\u5546\u5e97 | \u6eab\u6696\u5c0f\u93ae",
  description: "\u6eab\u6696\u5c0f\u93ae FiveM \u4f3a\u670d\u5668\u5546\u5e97",
}

const storeItems = [
  {
    icon: Crown,
    name: "VIP \u6703\u54e1",
    description: "\u5c08\u5c6c\u8eab\u4efd\u6a19\u8b58\u3001\u512a\u5148\u6392\u968a\u3001\u5c08\u5c6c\u8eca\u5eab\u8eca\u4f4d\u3001\u6bcf\u65e5\u984d\u5916\u734e\u52f5",
    price: "NT$ 299/\u6708",
    color: "#f59e0b",
    popular: true,
  },
  {
    icon: Star,
    name: "SVIP \u6703\u54e1",
    description: "\u5305\u542b VIP \u6240\u6709\u6b0a\u76ca\uff0c\u52a0\u4e0a\u5c08\u5c6c\u8eca\u8f1b\u3001\u5c08\u5c6c\u623f\u5c4b\u3001\u66f4\u591a\u6bcf\u65e5\u734e\u52f5",
    price: "NT$ 599/\u6708",
    color: "#a855f7",
    popular: false,
  },
  {
    icon: Gem,
    name: "\u904a\u6232\u5e63 1000",
    description: "\u7528\u65bc\u8cfc\u8cb7\u904a\u6232\u5167\u88dd\u98fe\u6027\u7269\u54c1\u548c\u5916\u89c0",
    price: "NT$ 150",
    color: "#00d4ff",
    popular: false,
  },
  {
    icon: Gem,
    name: "\u904a\u6232\u5e63 3000",
    description: "\u7528\u65bc\u8cfc\u8cb7\u904a\u6232\u5167\u88dd\u98fe\u6027\u7269\u54c1\u548c\u5916\u89c0\uff0c\u984d\u5916\u8d08\u9001 500 \u904a\u6232\u5e63",
    price: "NT$ 399",
    color: "#00d4ff",
    popular: false,
  },
  {
    icon: Car,
    name: "\u8c6a\u83ef\u8eca\u5305",
    description: "\u5305\u542b 5 \u8f1b\u7cbe\u9078\u8c6a\u8eca\uff0c\u6c38\u4e45\u64c1\u6709",
    price: "NT$ 499",
    color: "#22c55e",
    popular: false,
  },
  {
    icon: Shirt,
    name: "\u9650\u5b9a\u670d\u88dd\u5305",
    description: "\u5305\u542b 10 \u5957\u9650\u5b9a\u7248\u670d\u88dd\uff0c\u7368\u5bb6\u8a2d\u8a08",
    price: "NT$ 199",
    color: "#ec4899",
    popular: false,
  },
]

export default function StorePage() {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u5546\u5e97"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u652f\u6301\u6eab\u6696\u5c0f\u93ae\uff0c\u7372\u5f97\u5c08\u5c6c\u7279\u6b0a\u548c\u88dd\u98fe\u54c1"}
        </p>
        <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground/60">
          {"\u6240\u6709\u4ed8\u8cbb\u9805\u76ee\u5747\u70ba\u88dd\u98fe\u6027\uff0c\u4e0d\u5f71\u97ff\u904a\u6232\u5e73\u8861"}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {storeItems.map((item) => (
          <div
            key={item.name}
            className="glass rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)] relative"
          >
            {item.popular && (
              <div className="absolute -top-3 right-4 rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-bold text-[#0a0e17]">
                {"\u71b1\u9580"}
              </div>
            )}
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <item.icon className="h-6 w-6" style={{ color: item.color }} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">{item.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-lg font-bold" style={{ color: item.color }}>
                {item.price}
              </span>
              <button
                className="rounded-xl px-5 py-2 text-sm font-bold text-[#0a0e17] transition-all hover:shadow-[0_0_16px_rgba(0,212,255,0.3)]"
                style={{ backgroundColor: item.color }}
              >
                {"\u8cfc\u8cb7"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-10 glass rounded-2xl p-6 text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <Zap className="mr-1 inline-block h-3 w-3 text-[#f59e0b]" />
          {"\u8cfc\u8cb7\u524d\u8acb\u78ba\u8a8d\u60a8\u5df2\u95b1\u8b80\u4e26\u540c\u610f\u6211\u5011\u7684\u670d\u52d9\u689d\u6b3e\u3002\u6240\u6709\u4ea4\u6613\u5747\u70ba\u6700\u7d42\u92b7\u552e\uff0c\u4e0d\u63d0\u4f9b\u9000\u6b3e\u3002"}
        </p>
      </div>
    </PageLayout>
  )
}
