"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "\u9996\u9801" },
  { href: "/about", label: "\u95dc\u65bc\u6211\u5011" },
  { href: "/rules", label: "\u4f3a\u670d\u5668\u898f\u5247" },
  { href: "/team", label: "\u7ba1\u7406\u5718\u968a" },
  { href: "/players", label: "\u73a9\u5bb6\u641c\u5c0b" },
  { href: "/install", label: "\u5b89\u88dd\u6307\u5357" },
  { href: "/updates", label: "\u66f4\u65b0\u516c\u544a" },
  { href: "/faq", label: "\u5e38\u898b\u554f\u984c" },
  { href: "/connect", label: "\u5982\u4f55\u9023\u7dda" },
  { href: "/store", label: "\u5546\u5e97" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/30">
            <span className="text-lg font-bold text-[#00d4ff]">WS</span>
          </div>
          <span className="text-xl font-bold text-[#00d4ff]">
            {"\u6eab\u6696\u5c0f\u93ae"}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-[#00d4ff]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "\u95dc\u9589\u9078\u55ae" : "\u958b\u555f\u9078\u55ae"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-[rgba(255,255,255,0.1)]">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[#00d4ff] bg-[#00d4ff]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.05)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
