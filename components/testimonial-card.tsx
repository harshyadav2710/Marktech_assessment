import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarSrc: string
}

export default function TestimonialCard({ quote, author, role, avatarSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-primary/40 mb-4" />
        <p className="mb-6 italic">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

