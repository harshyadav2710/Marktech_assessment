import Link from "next/link"
import { BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Nexus</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/dashboard/projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/dashboard/tasks" className="text-sm font-medium hover:text-primary transition-colors">
              Tasks
            </Link>
            <Link href="/dashboard/analytics" className="text-sm font-medium hover:text-primary transition-colors">
              Analytics
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/">Logout</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
            <p className="text-muted-foreground mt-2">You've successfully logged in to the Nexus platform.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Quick Start</h3>
              <p className="text-sm text-muted-foreground mt-2">Get started with your first project or task.</p>
              <Button className="mt-4" size="sm">
                Create Project
              </Button>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Recent Activity</h3>
              <p className="text-sm text-muted-foreground mt-2">No recent activity to display.</p>
              <Button variant="outline" className="mt-4" size="sm">
                View All
              </Button>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Team Members</h3>
              <p className="text-sm text-muted-foreground mt-2">Invite your team to collaborate.</p>
              <Button variant="outline" className="mt-4" size="sm">
                Invite Members
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Getting Started Guide</h3>
            <p className="text-sm text-muted-foreground mt-2">Follow these steps to get the most out of Nexus:</p>
            <ol className="mt-4 space-y-2 list-decimal list-inside text-sm">
              <li>Create your first project</li>
              <li>Add tasks and assign them to team members</li>
              <li>Set up integrations with your existing tools</li>
              <li>Explore AI-powered features to automate workflows</li>
              <li>Check analytics to track progress</li>
            </ol>
            <Button className="mt-6">View Full Guide</Button>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Nexus Technologies Inc. All rights reserved. Developed by Harsh Yadav.
          </p>
        </div>
      </footer>
    </div>
  )
}

