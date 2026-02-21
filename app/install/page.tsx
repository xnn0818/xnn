import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Download, HardDrive, Settings, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "\u5b89\u88dd\u6307\u5357 | \u6eab\u6696\u5c0f\u93ae",
  description: "\u6eab\u6696\u5c0f\u93ae FiveM \u4f3a\u670d\u5668\u5b89\u88dd\u6307\u5357",
}

const requirements = [
  "GTA V \u904a\u6232\u672c\u9ad4\uff08Steam / Epic / Rockstar Launcher\uff09",
  "Windows 10 \u4ee5\u4e0a\u4f5c\u696d\u7cfb\u7d71",
  "8GB RAM \u4ee5\u4e0a",
  "\u7a69\u5b9a\u7684\u7db2\u8def\u9023\u7dda",
  "\u81f3\u5c11 80GB \u78c1\u789f\u7a7a\u9593",
]

const installSteps = [
  {
    icon: Download,
    step: "01",
    title: "\u4e0b\u8f09 FiveM",
    description:
      "\u524d\u5f80 fivem.net \u5b98\u65b9\u7db2\u7ad9\u4e0b\u8f09 FiveM \u5ba2\u6236\u7aef\u3002\u8acb\u78ba\u4fdd\u5f9e\u5b98\u65b9\u7db2\u7ad9\u4e0b\u8f09\uff0c\u907f\u514d\u4e0b\u8f09\u5230\u60e1\u610f\u8edf\u9ad4\u3002",
  },
  {
    icon: HardDrive,
    step: "02",
    title: "\u5b89\u88dd FiveM",
    description:
      "\u57f7\u884c\u4e0b\u8f09\u7684\u5b89\u88dd\u7a0b\u5f0f\uff0c\u9078\u64c7\u5b89\u88dd\u4f4d\u7f6e\u3002\u5efa\u8b70\u4e0d\u8981\u5b89\u88dd\u5728 GTA V \u7684\u76ee\u9304\u4e2d\uff0c\u9078\u64c7\u5176\u4ed6\u78c1\u789f\u4f4d\u7f6e\u3002",
  },
  {
    icon: Settings,
    step: "03",
    title: "\u8a2d\u5b9a\u8a2d\u5b9a",
    description:
      "\u9996\u6b21\u555f\u52d5 FiveM \u6642\uff0c\u5b83\u6703\u81ea\u52d5\u5075\u6e2c GTA V \u7684\u5b89\u88dd\u4f4d\u7f6e\u3002\u5982\u679c\u672a\u81ea\u52d5\u5075\u6e2c\uff0c\u8acb\u624b\u52d5\u6307\u5b9a\u8def\u5f91\u3002",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "\u9023\u7dda\u4f3a\u670d\u5668",
    description:
      "\u5728 FiveM \u4e3b\u9801\u9762\u7684\u641c\u5c0b\u6b04\u8f38\u5165\u300c\u6eab\u6696\u5c0f\u93ae\u300d\u6216\u4f3a\u670d\u5668\u4f4d\u5740 play.warmtown-fivem.com\uff0c\u9ede\u64ca\u9023\u7dda\u5373\u53ef\u3002",
  },
]

export default function InstallPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u5b89\u88dd\u6307\u5357"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u8ddf\u96a8\u4ee5\u4e0b\u6b65\u9a5f\uff0c\u5b8c\u6210\u5b89\u88dd\u4e26\u52a0\u5165\u6eab\u6696\u5c0f\u93ae"}
        </p>
      </div>

      {/* System requirements */}
      <div className="mt-14 glass-strong rounded-2xl p-8">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-[#f59e0b]" />
          <h2 className="text-lg font-bold text-foreground">{"\u7cfb\u7d71\u9700\u6c42"}</h2>
        </div>
        <ul className="mt-4 flex flex-col gap-3">
          {requirements.map((req) => (
            <li key={req} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d4ff]" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div className="mt-10 flex flex-col gap-6">
        {installSteps.map((item) => (
          <div key={item.step} className="glass rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)]">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00d4ff]/15">
                <item.icon className="h-7 w-7 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#00d4ff]">{`STEP ${item.step}`}</p>
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
