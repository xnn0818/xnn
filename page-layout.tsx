import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Zap } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { getIcon } from "@/lib/icons"

export const metadata: Metadata = {
  title: "商店 | 溫暖小鎮",
  description: "溫暖小鎮 FiveM 伺服器商店",
}

export default async function StorePage() {
  const supabase = await createClient()
  const { data: storeItems } = await supabase
    .from("store_items")
    .select("*")
    .order("sort_order", { ascending: true })

  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"商店"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"支持溫暖小鎮，獲得專屬特權和裝飾品"}
        </p>
        <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground/60">
          {"所有付費項目均為裝飾性，不影響遊戲平衡"}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(storeItems ?? []).map((item) => {
          const Icon = getIcon(item.icon_name)
          return (
            <div
              key={item.id}
              className="glass rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)] relative"
            >
              {item.popular && (
                <div className="absolute -top-3 right-4 rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-bold text-[#0a0e17]">
                  {"熱門"}
                </div>
              )}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <Icon className="h-6 w-6" style={{ color: item.color }} />
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
                  {"購買"}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Disclaimer */}
      <div className="mt-10 glass rounded-2xl p-6 text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <Zap className="mr-1 inline-block h-3 w-3 text-[#f59e0b]" />
          {"購買前請確認您已閱讀並同意我們的服務條款。所有交易均為最終銷售，不提供退款。"}
        </p>
      </div>
    </PageLayout>
  )
}
