import { Brain, Heart, Dumbbell, Moon, Apple, Users, BarChart3, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Meditation tracking, mood analysis, and cognitive enhancement tools.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Heart rate monitoring, blood pressure tracking, and cardio optimization.",
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Workout planning, progress tracking, and form analysis with AI coaching.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Moon,
      title: "Sleep Optimization",
      description: "Sleep quality analysis, circadian rhythm alignment, and recovery metrics.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Apple,
      title: "Nutrition Intelligence",
      description: "Meal planning, macro tracking, and personalized dietary recommendations.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with like-minded individuals and share your wellness journey.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and predictive health modeling with AI.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "End-to-end encryption and complete control over your health data.",
      color: "bg-muted-foreground/10 text-muted-foreground",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and features designed to support every aspect of your health and wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`p-3 rounded-xl w-fit mb-4 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
