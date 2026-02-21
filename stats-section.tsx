import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { createClient } from "@/lib/supabase/server"
import { getIcon } from "@/lib/icons"

export const metadata: Metadata = {
  title: "管理團隊 | 溫暖小鎮",
  description: "認識溫暖小鎮的管理團隊成員",
}

export default async function TeamPage() {
  const supabase = await createClient()
  const { data: teamMembers } = await supabase
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true })

  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#00d4ff] sm:text-4xl md:text-5xl">
          {"管理團隊"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {"認識我們專業的管理團隊，他們確保伺服器的順暢運作"}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(teamMembers ?? []).map((member) => {
          const Icon = getIcon(member.icon_name)
          return (
            <div
              key={member.id}
              className="glass rounded-2xl p-6 text-center transition-all hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
                <Icon className="h-8 w-8" style={{ color: member.icon_color }} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm font-medium" style={{ color: member.icon_color }}>
                {member.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          )
        })}
      </div>
    </PageLayout>
  )
}
