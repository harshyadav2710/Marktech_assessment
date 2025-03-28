import Link from "next/link"
import Image from "next/image"
import { BrainCircuit, CheckCircle, Headphones, MessageSquareText, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductFeature from "@/components/product-feature"
import PricingCard from "@/components/pricing-card"
import TestimonialCard from "@/components/testimonial-card"
import { AnimatedCounter } from "@/components/animated-counter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Nexus</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline-flex"
            >
              Log in
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Rocket className="mr-1 h-4 w-4" />
                  <span>Launching Soon</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Productivity for Modern Teams
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nexus helps your team collaborate better, work faster, and achieve more with our intelligent platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Start for Free</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#demo">Watch Demo</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/dashboard-preview.png"
                  width={550}
                  height={400}
                  alt="Nexus AI Platform Interface - Person interacting with AI technology"
                  className="rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">
                  <AnimatedCounter end={500} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Companies</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">
                  <AnimatedCounter end={50000} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Users</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">
                  <AnimatedCounter end={99.9} duration={2} decimals={1} />%
                </h3>
                <p className="text-muted-foreground">Uptime</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">
                  <AnimatedCounter end={24} duration={2} />
                  /7
                </h3>
                <p className="text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to boost productivity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our platform streamlines workflows, enhances collaboration, and leverages AI to help your team focus
                  on what really matters.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <ProductFeature
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="AI-Powered Workflows"
                description="Automate repetitive tasks and gain insights with our advanced AI technology."
              />
              <ProductFeature
                icon={<MessageSquareText className="h-10 w-10 text-primary" />}
                title="Real-time Collaboration"
                description="Work together seamlessly across teams, departments, and time zones."
              />
              <ProductFeature
                icon={<Headphones className="h-10 w-10 text-primary" />}
                title="24/7 Support"
                description="Our dedicated support team is always available to help you succeed."
              />
              <ProductFeature
                icon={<CheckCircle className="h-10 w-10 text-primary" />}
                title="Task Management"
                description="Organize and prioritize work to ensure everything gets done on time."
              />
              <ProductFeature
                icon={<BrainCircuit className="h-10 w-10 text-primary" />}
                title="Smart Integrations"
                description="Connect with the tools you already use for a seamless experience."
              />
              <ProductFeature
                icon={<Rocket className="h-10 w-10 text-primary" />}
                title="Analytics Dashboard"
                description="Track progress, measure productivity, and identify opportunities for improvement."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that fits your team's needs. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-3">
              <PricingCard
                title="Starter"
                price="₹749"
                description="Perfect for individuals and small teams just getting started."
                features={[
                  "Up to 5 team members",
                  "Basic AI capabilities",
                  "10 projects",
                  "5GB storage",
                  "Email support",
                ]}
                buttonText="Start Free Trial"
                buttonVariant="outline"
              />
              <PricingCard
                title="Professional"
                price="₹2,499"
                description="Ideal for growing teams that need more power and features."
                features={[
                  "Up to 20 team members",
                  "Advanced AI capabilities",
                  "Unlimited projects",
                  "50GB storage",
                  "Priority support",
                  "Advanced analytics",
                ]}
                buttonText="Start Free Trial"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="₹7,999"
                description="For large organizations with specific needs and requirements."
                features={[
                  "Unlimited team members",
                  "Custom AI solutions",
                  "Unlimited projects",
                  "Unlimited storage",
                  "24/7 dedicated support",
                  "Custom integrations",
                  "On-premise deployment option",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our customers say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. Here's what teams are achieving with Nexus.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Nexus has transformed how our team collaborates. We've seen a 30% increase in productivity since implementing it."
                author="Harsh Yadav"
                role="Product Manager, TechCorp"
                avatarSrc="/testimonial-1.png"
              />
              <TestimonialCard
                quote="The AI features in Nexus have automated so many of our routine tasks. It's like having an extra team member."
                author="Prakhyat"
                role="CTO, StartupX"
                avatarSrc="/testimonial-2.png"
              />
              <TestimonialCard
                quote="Customer support is phenomenal. Any time we've had an issue, the team has been quick to respond and resolve it."
                author="Sakshi"
                role="Operations Director, GrowthInc"
                avatarSrc="/testimonial-3.png"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your team's productivity?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed opacity-90">
                  Join thousands of teams already using Nexus to work smarter, not harder.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">Start Your Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="#demo">Schedule a Demo</Link>
                </Button>
              </div>
              <p className="text-sm opacity-90">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Nexus</span>
              </div>
              <p className="text-sm text-muted-foreground">AI-powered productivity for modern teams.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <nav className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#integrations" className="text-sm text-muted-foreground hover:text-primary">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-sm text-muted-foreground hover:text-primary">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#terms" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#cookies" className="text-sm text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Nexus Technologies Inc. All rights reserved. Developed by Harsh Yadav.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

