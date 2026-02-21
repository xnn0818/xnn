import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { RulesList } from "@/components/rules-list"

export const metadata: Metadata = {
  title: "\u4f3a\u670d\u5668\u898f\u5247 | \u6eab\u6696\u5c0f\u93ae",
  description: "\u6eab\u6696\u5c0f\u93ae FiveM \u4f3a\u670d\u5668\u898f\u5247\uff0c\u8acb\u4ed4\u7d30\u95b1\u8b80\u4e26\u9075\u5b88",
}

export default function RulesPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u4f3a\u670d\u5668\u898f\u5247"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u8acb\u4ed4\u7d30\u95b1\u8b80\u4e26\u9075\u5b88\u4ee5\u4e0b\u898f\u5247\uff0c\u9055\u898f\u8005\u5c07\u53d7\u5230\u76f8\u61c9\u8655\u7f70"}
        </p>
      </div>

      <div className="mt-14">
        <RulesList />
      </div>
    </PageLayout>
  )
}
