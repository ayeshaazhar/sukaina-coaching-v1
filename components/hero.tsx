"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Compass, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToDiscovery = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bubble-container"
    >
      {/* Transformation Bubble Effects */}
      <div className="bubble-transition">
        <div className="bubble"></div>
        <div className="butterfly-bubble"></div>
        <div className="bubble"></div>
        <div className="butterfly-bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="liquid-shape absolute top-20 left-10"></div>
        <div className="liquid-shape absolute bottom-20 right-10" style={{ animationDelay: "5s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-tight">
              Navigate Change.
              <span className="font-medium block text-primary">Embrace Growth.</span>
              <span className="font-light block">Create Your Future.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Are you feeling stuck in transition? Whether you're navigating motherhood, career changes, relocation, or
              life's unexpected turns, I'm here to guide you through transformation with compassion and clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" onClick={scrollToDiscovery} className="group coaching-gradient text-white">
              Book Free Discovery Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Learn About My Approach
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center transformation-card p-6 rounded-lg">
              <div className="w-12 h-12 coaching-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium mb-2">Compassionate Support</h3>
              <p className="text-sm text-muted-foreground font-light">
                Warm, non-judgmental guidance through life's challenges
              </p>
            </div>
            <div className="text-center transformation-card p-6 rounded-lg">
              <div className="w-12 h-12 coaching-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium mb-2">Clear Direction</h3>
              <p className="text-sm text-muted-foreground font-light">
                Find your path forward with clarity and confidence
              </p>
            </div>
            <div className="text-center transformation-card p-6 rounded-lg">
              <div className="w-12 h-12 coaching-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium mb-2">Lasting Transformation</h3>
              <p className="text-sm text-muted-foreground font-light">
                Create meaningful change that aligns with your values
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
