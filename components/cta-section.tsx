export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#0a0e17]/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <div className="glass-strong rounded-2xl p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold text-[#00d4ff] sm:text-3xl text-balance">
            {"\u6e96\u5099\u597d\u958b\u59cb\u4e86\u55ce\uff1f"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
            {"\u52a0\u5165\u6eab\u6696\u5c0f\u93ae\uff0c\u9ad4\u9a57\u6700\u68d2\u7684\u89d2\u8272\u626e\u6f14\u5192\u96aa\uff01"}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/connect"
              className="rounded-xl bg-[#00d4ff] px-8 py-3.5 text-base font-bold text-[#0a0e17] transition-all hover:bg-[#00d4ff]/90 hover:shadow-[0_0_24px_rgba(0,212,255,0.4)]"
            >
              {"\u7acb\u5373\u958b\u59cb\u904a\u73a9"}
            </a>
            <a
              href="/about"
              className="rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-[rgba(255,255,255,0.1)]"
            >
              {"\u4e86\u89e3\u66f4\u591a"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
