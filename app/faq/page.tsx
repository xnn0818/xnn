import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "\u5e38\u898b\u554f\u984c | \u6eab\u6696\u5c0f\u93ae",
  description: "\u6eab\u6696\u5c0f\u93ae FiveM \u4f3a\u670d\u5668\u5e38\u898b\u554f\u984c\u89e3\u7b54",
}

export default function FAQPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u5e38\u898b\u554f\u984c"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u5e38\u898b\u554f\u984c\u89e3\u7b54\uff0c\u5e6b\u52a9\u4f60\u5feb\u901f\u4e0a\u624b"}
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl">
        <FAQAccordion />
      </div>
    </PageLayout>
  )
}
