"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Copy, Check, Monitor, Wifi, Globe, Server } from "lucide-react"

const SERVER_ADDRESS = "play.warmtown-fivem.com"

const steps = [
  {
    icon: Monitor,
    step: "1",
    title: "\u5b89\u88dd FiveM",
    description: "\u524d\u5f80 fivem.net \u4e0b\u8f09\u4e26\u5b89\u88dd FiveM \u5ba2\u6236\u7aef\uff0c\u4e26\u78ba\u4fdd\u4f60\u5df2\u64c1\u6709 GTA V \u904a\u6232\u672c\u9ad4\u3002",
  },
  {
    icon: Globe,
    step: "2",
    title: "\u555f\u52d5 FiveM",
    description: "\u958b\u555f FiveM \u5ba2\u6236\u7aef\uff0c\u7b49\u5f85\u66f4\u65b0\u5b8c\u6210\u5f8c\u9032\u5165\u4e3b\u7db2\u9801\u3002",
  },
  {
    icon: Wifi,
    step: "3",
    title: "\u641c\u5c0b\u4f3a\u670d\u5668",
    description: "\u5728\u641c\u5c0b\u6b04\u8f38\u5165\u300c\u6eab\u6696\u5c0f\u93ae\u300d\u6216\u76f4\u63a5\u8f38\u5165\u4f3a\u670d\u5668\u4f4d\u5740\u3002",
  },
  {
    icon: Server,
    step: "4",
    title: "\u958b\u59cb\u904a\u73a9",
    description: "\u9ede\u64ca\u9023\u7dda\uff0c\u7b49\u5f85\u8f09\u5165\u5b8c\u6210\u5f8c\u5373\u53ef\u958b\u59cb\u4f60\u7684\u5192\u96aa\uff01",
  },
]

export default function ConnectPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SERVER_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u5982\u4f55\u9023\u7dda"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u8ddf\u96a8\u4ee5\u4e0b\u6b65\u9a5f\uff0c\u8f15\u9b06\u52a0\u5165\u6eab\u6696\u5c0f\u93ae"}
        </p>
      </div>

      {/* Server address card */}
      <div className="mx-auto mt-10 max-w-lg">
        <div className="glass-strong rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">{"\u4f3a\u670d\u5668\u9023\u7dda\u4f4d\u5740"}</p>
          <button
            onClick={handleCopy}
            className="group mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-[rgba(255,255,255,0.05)] py-4 transition-colors hover:bg-[rgba(255,255,255,0.1)]"
          >
            <span className="text-lg font-bold text-[#00d4ff]">{SERVER_ADDRESS}</span>
            {copied ? (
              <Check className="h-5 w-5 text-[#22c55e]" />
            ) : (
              <Copy className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
          </button>
          <p className="mt-2 text-xs text-muted-foreground">{"\u9ede\u64ca\u8907\u88fd\u4f4d\u5740"}</p>
        </div>
      </div>

      {/* Steps */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {steps.map((item) => (
          <div key={item.step} className="glass rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/15">
                <item.icon className="h-6 w-6 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#00d4ff]">{`\u6b65\u9a5f ${item.step}`}</p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
