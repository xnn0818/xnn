import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Gamepad2, Shield, Heart, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "\u95dc\u65bc\u6211\u5011 | \u6eab\u6696\u5c0f\u93ae",
  description: "\u4e86\u89e3\u6eab\u6696\u5c0f\u93ae FiveM \u4f3a\u670d\u5668\u7684\u6545\u4e8b\u548c\u7406\u5ff5",
}

const values = [
  {
    icon: Heart,
    title: "\u6eab\u6696\u53cb\u5584",
    description: "\u6211\u5011\u81f4\u529b\u65bc\u71df\u9020\u4e00\u500b\u53cb\u5584\u3001\u5305\u5bb9\u7684\u904a\u6232\u74b0\u5883\uff0c\u8b93\u6bcf\u4f4d\u73a9\u5bb6\u90fd\u80fd\u611f\u53d7\u5230\u5bb6\u7684\u6eab\u6696\u3002",
  },
  {
    icon: Gamepad2,
    title: "\u591a\u5143\u73a9\u6cd5",
    description: "\u7d50\u5408\u89d2\u8272\u626e\u6f14\u8207\u591a\u7a2e\u904a\u6232\u6a21\u5f0f\uff0c\u63d0\u4f9b\u7a7a\u6295\u3001\u5c0d\u6230\u3001\u5730\u76e4\u6230\u3001\u8cfd\u8eca\u7b49\u8c50\u5bcc\u5167\u5bb9\u3002",
  },
  {
    icon: Shield,
    title: "\u516c\u5e73\u7af6\u722d",
    description: "\u56b4\u683c\u7684\u53cd\u4f5c\u5f0a\u7cfb\u7d71\u548c\u5c08\u696d\u7684\u7ba1\u7406\u5718\u968a\uff0c\u78ba\u4fdd\u6bcf\u4f4d\u73a9\u5bb6\u90fd\u80fd\u5728\u516c\u5e73\u7684\u74b0\u5883\u4e2d\u904a\u73a9\u3002",
  },
  {
    icon: Target,
    title: "\u6301\u7e8c\u66f4\u65b0",
    description: "\u5718\u968a\u4e0d\u65b7\u958b\u767c\u65b0\u529f\u80fd\u3001\u65b0\u6d3b\u52d5\uff0c\u4fdd\u6301\u904a\u6232\u65b0\u9bae\u611f\uff0c\u8b93\u4f60\u6c38\u9060\u4e0d\u6703\u611f\u5230\u7121\u804a\u3002",
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u95dc\u65bc\u6211\u5011"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u6eab\u6696\u5c0f\u93ae\u662f\u4e00\u500b\u4ee5\u73a9\u5bb6\u70ba\u4e2d\u5fc3\u7684\u53f0\u7063\u534a RP FiveM \u4f3a\u670d\u5668"}
        </p>
      </div>

      {/* Story section */}
      <div className="mt-14 glass-strong rounded-2xl p-8 sm:p-10">
        <h2 className="text-xl font-bold text-foreground">{"\u6211\u5011\u7684\u6545\u4e8b"}</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {"\u6eab\u6696\u5c0f\u93ae\u8a95\u751f\u65bc\u4e00\u7fa4\u71b1\u611b FiveM \u7684\u73a9\u5bb6\u4e4b\u624b\u3002\u6211\u5011\u76f8\u4fe1\u904a\u6232\u4e0d\u50c5\u50c5\u662f\u5a1b\u6a02\uff0c\u66f4\u662f\u4eba\u8207\u4eba\u4e4b\u9593\u5efa\u7acb\u9023\u7d50\u7684\u6a4b\u6a11\u3002\u5f9e\u5275\u7acb\u4e4b\u521d\uff0c\u6211\u5011\u5c31\u5c08\u6ce8\u65bc\u63d0\u4f9b\u9ad8\u54c1\u8cea\u7684\u904a\u6232\u9ad4\u9a57\uff0c\u540c\u6642\u4fdd\u6301\u793e\u7fa4\u7684\u6eab\u6696\u548c\u53cb\u5584\u3002"}
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {"\u7d93\u904e\u4e0d\u65b7\u7684\u52aa\u529b\u548c\u6539\u9032\uff0c\u6211\u5011\u5df2\u7d93\u6210\u9577\u70ba\u53f0\u7063\u6700\u53d7\u6b61\u8fce\u7684 FiveM \u4f3a\u670d\u5668\u4e4b\u4e00\u3002\u611f\u8b1d\u6bcf\u4e00\u4f4d\u73a9\u5bb6\u7684\u652f\u6301\uff0c\u8b93\u6eab\u6696\u5c0f\u93ae\u6210\u70ba\u4e86\u4e00\u500b\u771f\u6b63\u6eab\u6696\u7684\u5bb6\u3002"}
        </p>
      </div>

      {/* Values */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value.title} className="glass rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00d4ff]/15">
              <value.icon className="h-6 w-6 text-[#00d4ff]" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">{value.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
