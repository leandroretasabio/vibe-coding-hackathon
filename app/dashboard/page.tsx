import { redirect } from "next/navigation"
import { createServerComponentClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Leaderboard } from "@/components/leaderboard"

export default async function DashboardPage() {
  const supabase = createServerComponentClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              ¡Bienvenido, {user.user_metadata?.username || "Usuario"}!
            </h1>
            <p className="text-muted-foreground">Consulta las posiciones actuales en tiempo real</p>
          </div>
          <Leaderboard />
        </div>
      </main>
    </div>
  )
}
