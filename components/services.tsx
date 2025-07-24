"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, Search, MapPin, Home, Clock, CheckCircle, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      icon: Baby,
      title: "Motherhood Transitions",
      description: "Navigate the identity shifts of new motherhood, returning to work, or finding balance",
      challenges: ["Loss of identity beyond 'mom'", "Work-life balance guilt", "Overwhelm and exhaustion"],
      outcomes: ["Rediscover your authentic self", "Create sustainable balance", "Build confidence in your choices"],
    },
    {
      icon: Search,
      title: "Identity Crisis & Life Reassessment",
      description: "Find clarity when you're questioning your path and feeling stuck despite external success",
      challenges: ["Feeling numb or 'just existing'", "Questioning life choices", "Fear of starting over"],
      outcomes: ["Gain clarity on your values", "Design a meaningful path forward", "Overcome fear of change"],
    },
    {
      icon: MapPin,
      title: "Relocation & Cultural Adjustment",
      description: "Rebuild your sense of self and community after moving to a new place",
      challenges: ["Loss of support system", "Identity disruption", "Starting over professionally"],
      outcomes: ["Create new meaningful connections", "Rebuild confidence", "Establish new routines"],
    },
    {
      icon: Home,
      title: "Empty Nesting & Rediscovery",
      description: "Rediscover yourself and your purpose as your children become more independent",
      challenges: ["Sense of purposelessness", "Grief over changing role", "Fear of being 'too late'"],
      outcomes: ["Reconnect with your dreams", "Create new purpose", "Strengthen relationships"],
    },
  ]

  return (
    <section id="services" className="py-20 relative bubble-container">
      {/* Bubble Effects */}
      <div className="bubble-transition">
        <div className="bubble"></div>
        <div className="butterfly-bubble"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-tight">Transformation Coaching</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Specialized support for women navigating life's most challenging transitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transformation-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 coaching-gradient rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-medium">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-base font-light leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div>
                    <h4 className="font-medium mb-3 text-muted-foreground">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {service.challenges.map((challenge) => (
                        <li key={challenge} className="text-sm text-muted-foreground flex items-start font-light">
                          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-primary">Transformation Outcomes:</h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm flex items-start font-light">
                          <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] mr-2 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="transformation-card p-8 text-center"
        >
          <h3 className="text-2xl font-medium mb-4 tracking-tight">How We Work Together</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center space-y-2">
              <Clock className="h-8 w-8 text-primary" />
              <span className="font-medium">1-on-1 Sessions</span>
              <span className="text-sm text-muted-foreground font-light">60-90 minute deep-dive sessions</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="font-medium">Online & Flexible</span>
              <span className="text-sm text-muted-foreground font-light">From anywhere in the world</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-medium">Ongoing Support</span>
              <span className="text-sm text-muted-foreground font-light">Between-session check-ins</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 font-light">
            Every coaching journey is unique. We'll create a personalized approach that honors your pace, values, and
            vision for your life.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="coaching-gradient text-white"
          >
            Start Your Transformation Journey
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
