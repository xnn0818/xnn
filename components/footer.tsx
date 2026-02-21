import Link from "next/link"

const quickLinks = [
  { href: "/rules", label: "\u4f3a\u670d\u5668\u898f\u5247" },
  { href: "/team", label: "\u7ba1\u7406\u5718\u968a" },
  { href: "/faq", label: "\u5e38\u898b\u554f\u984c" },
  { href: "/install", label: "\u5b89\u88dd\u6307\u5357" },
  { href: "/connect", label: "\u5982\u4f55\u9023\u7dda" },
]

const communityLinks = [
  { href: "/store", label: "\u5546\u5e97" },
  { href: "/players", label: "\u73a9\u5bb6\u641c\u5c0b" },
  { href: "/updates", label: "\u66f4\u65b0\u516c\u544a" },
]

const legalLinks = [
  { href: "/rules", label: "\u670d\u52d9\u689d\u6b3e" },
  { href: "/rules", label: "\u96b1\u79c1\u653f\u7b56" },
  { href: "/rules", label: "\u9000\u6b3e\u653f\u7b56" },
]

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#060911]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/30">
                <span className="text-lg font-bold text-[#00d4ff]">WS</span>
              </div>
              <span className="text-xl font-bold text-[#00d4ff]">
                {"\u6eab\u6696\u5c0f\u93ae"}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {"\u6eab\u6696\u5c0f\u93ae - \u53f0\u7063\u534a RP FiveM \u4f3a\u670d\u5668"}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-foreground">{"\u5feb\u901f\u9023\u7d50"}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-bold text-foreground">{"\u793e\u7fa4"}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-foreground">{"\u6cd5\u5f8b\u8cc7\u8a0a"}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-[rgba(255,255,255,0.06)] pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {"© 2025 \u6eab\u6696\u5c0f\u93ae. \u7248\u6b0a\u6240\u6709\u3002"}
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            {"\u672c\u4f3a\u670d\u5668\u8207 Rockstar Games \u6216 Take-Two Interactive \u7121\u95dc"}
          </p>
        </div>
      </div>
    </footer>
  )
}
