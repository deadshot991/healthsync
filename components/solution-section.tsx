import { CheckCircle, Zap, Target } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: Target,
      title: "Unified Dashboard",
      description: "All your health metrics, goals, and progress in one intelligent interface.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "AI-powered recommendations that adapt to your lifestyle and preferences.",
    },
    {
      icon: CheckCircle,
      title: "Habit Stacking",
      description: "Build sustainable routines using proven behavioral science techniques.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Your Complete <span className="text-primary">Health OS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HEALTHSYNC integrates everything you need into one powerful platform that makes healthy living effortless
            and engaging.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-card-foreground mb-4">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
