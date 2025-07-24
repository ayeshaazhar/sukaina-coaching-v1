"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/20 relative bubble-container">
      {/* Bubble Effects */}
      <div className="bubble-transition">
        <div className="bubble"></div>
        <div className="butterfly-bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-tight">About Sukaina</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Your compassionate guide through life's most challenging transitions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/10 to-[hsl(var(--success))]/10 rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=400&width=400&text=Sukaina%20Pasha"
                alt="Sukaina Pasha"
                width={400}
                height={400}
                className="relative rounded-lg object-cover transformation-card"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight">Sukaina Pasha</h3>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                I understand the weight of feeling lost in transition because I've been there too. As a transformation
                coach, I specialize in guiding women through life's most challenging passages - from the identity shifts
                of motherhood to the uncertainty of relocation, career changes, and life reassessment.
              </p>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                My approach combines deep empathy with practical tools, creating a safe space where you can explore,
                heal, and discover the clarity you've been seeking. Together, we'll navigate your unique journey toward
                a life that truly aligns with who you're becoming.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="transformation-card">
                <CardContent className="p-4 text-center">
                  <Heart className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-medium">500+</div>
                  <div className="text-sm text-muted-foreground font-light">Women Supported</div>
                </CardContent>
              </Card>
              <Card className="transformation-card">
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-medium">5+</div>
                  <div className="text-sm text-muted-foreground font-light">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="transformation-card">
                <CardContent className="p-4 text-center">
                  <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-medium">Certified</div>
                  <div className="text-sm text-muted-foreground font-light">Life Coach</div>
                </CardContent>
              </Card>
              <Card className="transformation-card">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-medium">Global</div>
                  <div className="text-sm text-muted-foreground font-light">Online Sessions</div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="font-medium mb-3">I Specialize In:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="font-light bg-primary/10 text-primary">
                  Motherhood Transitions
                </Badge>
                <Badge variant="secondary" className="font-light bg-primary/10 text-primary">
                  Identity Crisis
                </Badge>
                <Badge variant="secondary" className="font-light bg-primary/10 text-primary">
                  Relocation Support
                </Badge>
                <Badge variant="secondary" className="font-light bg-primary/10 text-primary">
                  Empty Nesting
                </Badge>
                <Badge variant="secondary" className="font-light bg-primary/10 text-primary">
                  Career Transitions
                </Badge>
                <Badge variant="secondary" className="font-light bg-primary/10 text-primary">
                  Life Reassessment
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
