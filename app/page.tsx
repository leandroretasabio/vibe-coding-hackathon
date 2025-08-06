import { redirect } from "next/navigation"
import { createServerComponentClient } from "@/lib/supabase/server"

export default async function Home() {
  const supabase = createServerComponentClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  } else {
    redirect("/login")
  }
}
