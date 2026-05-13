import type { ReactNode } from "react"

interface CardProps {
  icon: ReactNode
  title: string
  description: string
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  )
}
