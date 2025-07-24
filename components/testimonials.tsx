"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "New Mother, Toronto",
      content:
        "Sukaina helped me rediscover who I am beyond being a mom. I was drowning in guilt and exhaustion, but through our sessions, I learned to honor both my role as a mother and my individual dreams. I finally feel like myself again.",
      rating: 5,
    },
    {
      name: "Priya K.",
      role: "Career Changer, Vancouver",
      content:
        "After feeling stuck in my corporate job for years, Sukaina guided me through the scariest and most rewarding transition of my life. Her compassionate approach gave me the courage to pursue my passion for sustainable design.",
      rating: 5,
    },
    {
      name: "Emma L.",
      role: "Expat, London",
      content:
        "Moving to a new country left me feeling completely lost. Sukaina understood the unique challenges of starting over and helped me build confidence in my new environment. I now feel at home in my own skin again.",
      rating: 5,
    },
    {
      name: "Jennifer R.",
      role: "Empty Nester, Calgary",
      content:
        "When my youngest left for university, I felt like I had lost my purpose. Sukaina helped me see this as a beginning, not an ending. I'm now pursuing art again and feel more alive than I have in years.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/20 relative bubble-container">
      {/* Bubble Effects */}
      <div className="bubble-transition">
        <div className="butterfly-bubble"></div>
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
          <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-tight">Transformation Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Real women, real transformations, real hope for your journey ahead
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transformation-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/30 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[hsl(var(--success))] text-[hsl(var(--success))]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 font-light leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-border/50 pt-4">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-light">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="transformation-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium mb-4">Ready to Write Your Own Transformation Story?</h3>
            <p className="text-muted-foreground font-light mb-6">
              Every journey begins with a single step. Let's explore how coaching can support your unique path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-medium text-primary">15 min</div>
                <div className="text-sm text-muted-foreground font-light">Free Discovery Call</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-primary">No Pressure</div>
                <div className="text-sm text-muted-foreground font-light">Just Conversation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-primary">Your Pace</div>
                <div className="text-sm text-muted-foreground font-light">Honor Your Journey</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
