import { AlertTriangle, Clock, TrendingDown } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Fragmented Health Tracking",
      description: "Multiple apps, scattered data, no unified view of your wellness journey.",
    },
    {
      icon: Clock,
      title: "Lack of Consistency",
      description: "Starting strong but losing momentum without proper systems and accountability.",
    },
    {
      icon: TrendingDown,
      title: "No Real Progress",
      description: "Feeling stuck despite efforts, with no clear path to sustainable improvement.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">The Health Challenge</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Most people struggle with maintaining consistent health habits because traditional approaches are fragmented
            and unsustainable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-destructive/10 rounded-xl w-fit mb-6">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-card-foreground mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
