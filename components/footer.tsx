import { Mail, Phone, Heart, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-medium tracking-tight">Sukaina Pasha Coaching</span>
            </div>
            <p className="text-muted-foreground mb-4 font-light">
              Navigate Change. Embrace Growth. Create Your Future.
            </p>
            <p className="text-sm text-muted-foreground font-light mb-4">
              Compassionate transformation coaching for women navigating life's transitions.
            </p>
            <div className="flex space-x-4">
              <Mail className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Phone className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <MapPin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Coaching Areas</h3>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li className="hover:text-primary cursor-pointer transition-colors">Motherhood Transitions</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Identity Crisis Support</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Relocation Coaching</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Empty Nesting Guidance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li className="hover:text-primary cursor-pointer transition-colors">Free Discovery Call</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Client Testimonials</li>
              <li className="hover:text-primary cursor-pointer transition-colors">About Sukaina</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground font-light">
          <p>&copy; {new Date().getFullYear()} Sukaina Pasha Transformational Coaching. All rights reserved.</p>
          <p className="text-sm mt-2">Empowering women through life's transitions with compassion and clarity.</p>
        </div>
      </div>
    </footer>
  )
}
