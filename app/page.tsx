import { Phone, Brain, Clock, ArrowRight, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Claire AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">AI Voice Technology</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your 24/7
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Leasing Agent
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Claire AI is your intelligent leasing agent that never sleeps. Qualify leads, schedule tours, and close
            deals with human-like conversations, available around the clock.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4 text-lg border-gray-300 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Lead Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">3x</div>
              <div className="text-gray-600">Faster Conversions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Three core capabilities.
              <br />
              Endless possibilities.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Claire AI handles every aspect of your leasing calls with human-like intelligence and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: AI-Powered Voice Calls */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Voice Calls</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Natural conversations that feel human. Claire AI understands context, handles objections, and adapts
                  to each prospect's unique needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Natural language processing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Emotional intelligence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Multi-language support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2: Smart Lead Qualification */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Lead Qualification</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Automatically qualify prospects with intelligent questioning. Claire AI identifies high-value leads
                  and prioritizes your follow-ups.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Budget qualification
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Timeline assessment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Preference matching
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3: 24/7 Availability */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Never miss a lead again. Claire AI works around the clock, responding to inquiries instantly and
                  scheduling tours at any hour.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Instant response times
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Global time zone support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Holiday coverage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your leasing process?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join hundreds of property managers who've already revolutionized their leasing with Claire AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4 text-lg border-gray-300 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Claire AI</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Claire AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
