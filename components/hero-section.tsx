"use client"

import { useState } from "react"
import { Gamepad2, MessageCircle, Copy, Check, Users, Trophy, Star, Zap } from "lucide-react"

const SERVER_ADDRESS = "play.warmtown-fivem.com"

const stats = [
  { icon: Users, value: "0/128", label: "\u7dda\u4e0a\u73a9\u5bb6" },
  { icon: Trophy, value: "50+", label: "\u904a\u6232\u6d3b\u52d5" },
  { icon: Star, value: "4.9/5", label: "\u73a9\u5bb6\u8a55\u5206" },
  { icon: Zap, value: "99.9%", label: "\u4f3a\u670d\u5668\u7a69\u5b9a\u5ea6" },
]

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SERVER_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#0a0e17]/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-7xl text-balance">
          {"\u6b61\u8fce\u4f86\u5230"}
          <span className="block text-[#00d4ff]">{"\u6eab\u6696\u5c0f\u93ae"}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
          {"\u53f0\u7063\u534a RP FiveM \u4f3a\u670d\u5668 \u00b7 \u6eab\u99a8\u904a\u6232\u9ad4\u9a57"}
          <br />
          {"\u5c08\u696d\u5718\u968a \u00b7 \u6d3b\u8e8d\u793e\u7fa4"}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/connect"
            className="flex items-center gap-2 rounded-xl bg-[#00d4ff] px-8 py-3.5 text-base font-bold text-[#0a0e17] transition-all hover:bg-[#00d4ff]/90 hover:shadow-[0_0_24px_rgba(0,212,255,0.4)]"
          >
            <Gamepad2 className="h-5 w-5" />
            {"\u7acb\u5373\u52a0\u5165\u904a\u6232"}
          </a>
          <a
            href="/about"
            className="flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-[rgba(255,255,255,0.1)]"
          >
            <MessageCircle className="h-5 w-5" />
            {"\u52a0\u5165 Discord"}
          </a>
        </div>

        {/* Server Status Card */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="glass-strong rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-foreground">{"\u4f3a\u670d\u5668\u72c0\u614b"}</h3>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-sm text-[#22c55e] font-medium">{"\u904b\u884c\u4e2d"}</span>
              </div>
            </div>

            {/* Server name */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">{"\u4f3a\u670d\u5668\u540d\u7a31"}</p>
              <p className="text-sm font-bold text-[#00d4ff]">{"\u6eab\u6696\u5c0f\u93ae | \u534aRP\u4f3a\u670d\u5668"}</p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="mx-auto h-6 w-6 text-[#00d4ff]" />
                  <p className="mt-2 text-xl font-bold text-[#00d4ff]">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-[rgba(255,255,255,0.1)]" />

            {/* Server address */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">{"\u4f3a\u670d\u5668\u9023\u7dda\u4f4d\u5740"}</p>
              <button
                onClick={handleCopy}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[rgba(255,255,255,0.05)] py-3 transition-colors hover:bg-[rgba(255,255,255,0.1)]"
              >
                <span className="text-base font-bold text-[#00d4ff]">{SERVER_ADDRESS}</span>
                {copied ? (
                  <Check className="h-4 w-4 text-[#22c55e]" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
              </button>
              <p className="mt-1 text-xs text-muted-foreground">{"\u9ede\u64ca\u8907\u88fd"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
