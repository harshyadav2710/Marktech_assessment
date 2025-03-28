import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-lg border ${highlighted ? "border-primary shadow-lg" : "border-border"} p-6 transition-all duration-200 hover:shadow-md flex flex-col h-full`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Most Popular
        </div>
      )}
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </div>
      <ul className="mt-6 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" variant={buttonVariant} asChild>
        <Link href="/signup">{buttonText}</Link>
      </Button>
    </div>
  )
}

