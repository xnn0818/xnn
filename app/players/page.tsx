"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { Search, User, Clock, Shield } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface Player {
  id: number
  name: string
  status: string
  role: string
  join_date: string
  play_time: string
}

export default function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    supabase
      .from("players")
      .select("*")
      .order("id", { ascending: true })
      .then(({ data }) => {
        if (data) setPlayers(data)
        setLoading(false)
      })
  }, [])

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"玩家搜尋"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"搜尋和查看溫暖小鎮的玩家"}
        </p>
      </div>

      {/* Search bar */}
      <div className="mx-auto mt-10 max-w-lg">
        <div className="glass-strong flex items-center gap-3 rounded-2xl px-5 py-3">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="輸入玩家名稱..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Player list */}
      {loading ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="glass rounded-2xl p-5 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-[rgba(255,255,255,0.08)]" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-20 rounded bg-[rgba(255,255,255,0.08)]" />
                  <div className="h-3 w-32 rounded bg-[rgba(255,255,255,0.05)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
                      {player.play_time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredPlayers.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">{"找不到符合的玩家"}</p>
        </div>
      )}
    </PageLayout>
  )
}
