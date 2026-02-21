import {
  Ban,
  MessageCircleOff,
  ShieldOff,
  Bug,
  UserX,
  Clapperboard,
  FileWarning,
  HeartOff,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Rule {
  id: number
  icon: LucideIcon
  title: string
  description: string
  penalty: string
  penaltyColor: string
}

const rules: Rule[] = [
  {
    id: 1,
    icon: Ban,
    title: "\u7981\u6b62\u5ba3\u50b3\u5176\u4ed6\u4f3a\u670d\u5668",
    description:
      "\u4e0d\u5f97\u4ee5\u4efb\u4f55\u65b9\u5f0f\uff08\u5305\u62ec\u79c1\u4e0b\u5f62\u5f0f\uff09\u5ba3\u50b3\u5176\u4ed6\u4f3a\u670d\u5668/\u76f4\u64ad\u5176\u4ed6\u4f3a\u670d\u5668\u756b\u9762/\u5ba3\u50b3\u81ea\u5df1\u7fa4\u7d44\uff0c\u5de5\u4f5c\u5ba4\uff0c\u62c9\u4eba\u96e2\u958b\u7b49\u7b49\uff08FIVEM \u4ee5\u5916\u904a\u6232\u9664\u5916\uff09",
    penalty: "\u6c38\u4e45\u5c01\u7981",
    penaltyColor: "#ef4444",
  },
  {
    id: 2,
    icon: MessageCircleOff,
    title: "\u7981\u6b62\u6b67\u8996\u8207\u4eba\u8eab\u653b\u64ca",
    description: "\u904a\u6232\u516c\u983b\u53ca\u9ea5\u514b\u98a8\u8a9e\u8a00\u8a00\u8a5e\u4e0d\u5f97\u5e36\u6709\u6b67\u8996\u3001\u4eba\u8eab\u653b\u64ca\u3002",
    penalty: "\u8b66\u544a x1",
    penaltyColor: "#f59e0b",
  },
  {
    id: 3,
    icon: ShieldOff,
    title: "\u7981\u6b62\u4f7f\u7528\u5916\u639b\u8173\u672c",
    description: "\u7981\u6b62\u975e\u6b63\u7576\u9014\u5f91\u9032\u884c\u904a\u73a9\uff01\uff08\u4f8b\u5982\uff1a\u8173\u672c\u3001\u5916\u639b\u3001bug \u7b49\u7b49\uff09",
    penalty: "\u8b66\u544a x1 \u6216\u6c38\u4e45\u5c01\u7981",
    penaltyColor: "#ef4444",
  },
  {
    id: 4,
    icon: Bug,
    title: "\u7981\u6b62\u5229\u7528\u6f0f\u6d1e",
    description: "\u7981\u6b62\u5229\u7528\u4efb\u4f55\u6f0f\u6d1e\u5237\u4efb\u4f55\u7269\u54c1\u3002",
    penalty: "\u6d17\u767d + \u8b66\u544a 1-3 \u652f",
    penaltyColor: "#f59e0b",
  },
  {
    id: 5,
    icon: UserX,
    title: "\u7981\u6b62\u591a\u91cd\u5e33\u865f",
    description: "\u7981\u6b62\u5275\u5efa\u591a\u500b\u8eab\u5206\u9032\u884c\u904a\u73a9\u3002",
    penalty: "\u5927\u5c0f\u865f\u6d17\u767d + \u8b66\u544a x1",
    penaltyColor: "#f59e0b",
  },
  {
    id: 6,
    icon: Clapperboard,
    title: "\u5287\u60c5\u9700\u544a\u77e5\u76ee\u7684",
    description:
      "\u4efb\u4f55\u5287\u60c5\u90fd\u9808[\u544a\u77e5]\uff0c\u6216\u6709[\u660e\u78ba\u76ee\u7684]\u3002\u82e5\u7121\u76ee\u7684\u7684\u6216\u5c0d\u8a71\u5c31\u7b97\u662f\u7121\u5287\u60c5\u3002",
    penalty: "\u8b66\u544a x1",
    penaltyColor: "#f59e0b",
  },
  {
    id: 7,
    icon: FileWarning,
    title: "\u540d\u7a31\u5fc5\u9808\u4e00\u81f4",
    description:
      "\u73a9\u5bb6\u540d\u7a31 DC & Steam & \u904a\u6232\u8eab\u5206\u8b49 & Fivem \u8a2d\u5b9a\u540d\u7a31\u5fc5\u9808\u4e00\u81f4\u3002",
    penalty: "\u8b66\u544a x1",
    penaltyColor: "#f59e0b",
  },
  {
    id: 8,
    icon: HeartOff,
    title: "\u7981\u6b62\u6027\u9a37\u64fe",
    description:
      "\u7981\u6b62\u9a37\u64fe\u7570\u6027/\u540c\u6027\u73a9\u5bb6\uff0c\u52a0\u73a9\u5bb6\u7537\u5176\u4ed6\u73a9\u5bb6\u9023\u7dda\u904e\u7a0b\uff0c\u6216\u5230\u4e0d\u9069\u7576\u884c\u70ba\u3002",
    penalty: "\u8b66\u544a x1 \u6216\u6c38\u4e45\u5c01\u7981",
    penaltyColor: "#ef4444",
  },
]

export function RulesList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {rules.map((rule) => (
        <div
          key={rule.id}
          className="glass rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
              <rule.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold">
                <span className="text-[#a855f7]">{"#"}{rule.id}</span>{" "}
                <span className="text-[#00d4ff]">{rule.title}</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {rule.description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] px-3 py-1.5">
                <span className="text-xs" style={{ color: rule.penaltyColor }}>
                  {"⚠ "}{rule.penalty}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
