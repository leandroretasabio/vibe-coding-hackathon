import { redirect } from "next/navigation"
import { createServerComponentClient } from "@/lib/supabase/server"
import { LoginForm } from "@/components/auth/login-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function LoginPage() {
  const supabase = createServerComponentClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-4">
        <LoginForm />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/signup">
              <Button variant="link" className="p-0 h-auto">
                Regístrate aquí
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
