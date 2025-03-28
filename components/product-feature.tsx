import type { ReactNode } from "react"

interface ProductFeatureProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ProductFeature({ icon, title, description }: ProductFeatureProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="absolute bottom-0 right-0 h-12 w-12 translate-y-6 translate-x-6 rounded-full bg-primary/10 transition-transform duration-300 group-hover:translate-y-4 group-hover:translate-x-4"></div>
    </div>
  )
}

