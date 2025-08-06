import { redirect } from "next/navigation"
import { createServerComponentClient } from "@/lib/supabase/server"
import { SignupForm } from "@/components/auth/signup-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function SignupPage() {
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
        <SignupForm />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login">
              <Button variant="link" className="p-0 h-auto">
                Inicia sesión aquí
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
