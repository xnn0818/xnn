"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Search, User, Clock, Shield } from "lucide-react"

const mockPlayers = [
  { id: 1, name: "\u5c0f\u660e", status: "online", role: "\u73a9\u5bb6", joinDate: "2024-06-15", playTime: "320h" },
  { id: 2, name: "\u5c0f\u83ef", status: "online", role: "\u7ba1\u7406\u54e1", joinDate: "2024-03-20", playTime: "580h" },
  { id: 3, name: "\u963f\u5fb7", status: "offline", role: "\u73a9\u5bb6", joinDate: "2024-08-10", playTime: "150h" },
  { id: 4, name: "\u5c0f\u7f8e", status: "online", role: "\u73a9\u5bb6", joinDate: "2024-11-05", playTime: "90h" },
  { id: 5, name: "\u5927\u52c7", status: "offline", role: "VIP", joinDate: "2024-04-22", playTime: "420h" },
  { id: 6, name: "\u5c0f\u5409", status: "online", role: "\u73a9\u5bb6", joinDate: "2025-01-08", playTime: "45h" },
  { id: 7, name: "\u963f\u6797", status: "offline", role: "\u73a9\u5bb6", joinDate: "2024-09-30", playTime: "210h" },
  { id: 8, name: "\u5c0f\u82b1", status: "online", role: "\u5ba2\u670d", joinDate: "2024-05-18", playTime: "390h" },
]

export default function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPlayers = mockPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"\u73a9\u5bb6\u641c\u5c0b"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"\u641c\u5c0b\u548c\u67e5\u770b\u6eab\u6696\u5c0f\u93ae\u7684\u73a9\u5bb6"}
        </p>
      </div>

      {/* Search bar */}
      <div className="mx-auto mt-10 max-w-lg">
        <div className="glass-strong flex items-center gap-3 rounded-2xl px-5 py-3">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="\u8f38\u5165\u73a9\u5bb6\u540d\u7a31..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Player list */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {filteredPlayers.map((player) => (
          <div
            key={player.id}
            className="glass rounded-2xl p-5 transition-all hover:bg-[rgba(255,255,255,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-foreground truncate">{player.name}</h3>
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      player.status === "online" ? "bg-[#22c55e]" : "bg-muted-foreground"
                    }`}
                  />
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    {player.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {player.playTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">{"\u627e\u4e0d\u5230\u7b26\u5408\u7684\u73a9\u5bb6"}</p>
        </div>
      )}
    </PageLayout>
  )
}
