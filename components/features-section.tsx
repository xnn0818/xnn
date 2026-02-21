import { Gamepad2, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    iconBg: "bg-[#0284c7]",
    title: "\u534a RP \u4f3a\u670d\u5668",
    description:
      "\u7d50\u5408\u89d2\u8272\u626e\u6f14\u8207\u591a\u5143\u904a\u6232\u6a21\u5f0f\uff0c\u63d0\u4f9b\u66f4\u81ea\u7531\u7684\u904a\u6232\u9ad4\u9a57\u3002\u5305\u542b\u7a7a\u6295\u3001\u5c0d\u6230\u3001\u5730\u76e4\u6230\u7b49\u591a\u7a2e\u73a9\u6cd5\u3002",
  },
  {
    icon: Users,
    iconBg: "bg-gradient-to-br from-[#ec4899] to-[#a855f7]",
    title: "\u6d3b\u8e8d\u793e\u7fa4",
    description:
      "\u53cb\u5584\u7684\u73a9\u5bb6\u793e\u7fa4\uff0c\u5c08\u696d\u7684\u7ba1\u7406\u5718\u968a\u300224/7 \u7dda\u4e0a\u652f\u63f4\uff0c\u5b9a\u671f\u8209\u8fa6\u793e\u7fa4\u6d3b\u52d5\u548c\u6bd4\u8cfd\u3002",
  },
  {
    icon: Zap,
    iconBg: "bg-[#7c3aed]",
    title: "\u7a69\u5b9a\u904b\u884c",
    description:
      "\u9ad8\u6548\u80fd\u4f3a\u670d\u5668\uff0c24/7 \u7a69\u5b9a\u904b\u884c\u3002\u63a1\u7528\u6700\u65b0\u6280\u8853\uff0c\u78ba\u4fdd\u6d41\u66a2\u7684\u904a\u6232\u9ad4\u9a57\u548c\u6700\u4f4e\u5ef6\u9072\u3002",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e17]" id="features">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-[#00d4ff] sm:text-3xl">
          {"\u70ba\u4ec0\u9ebc\u9078\u64c7\u6211\u5011\uff1f"}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
