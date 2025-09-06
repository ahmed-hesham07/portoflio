import { Mail, Github, Linkedin, MapPin, Clock, Send, MessageCircle, Phone, ExternalLink, MessageCircle as WhatsApp, Star, Users, Award, CheckCircle, ArrowRight, Zap, Target, TrendingUp, Shield, Timer } from 'lucide-react';
import { getPersonalInfo } from '@/utils/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ContactPage() {
  const personalInfo = getPersonalInfo();

  // Social proof and credibility data
  const socialProof = {
    projectsCompleted: 25,
    clientsSatisfied: 18,
    yearsExperience: 3,
    responseTime: '2-4 hours',
    successRate: '98%'
  };


  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.emailPrimary,
      href: `mailto:${personalInfo.emailPrimary}`,
      description: 'Primary contact for all inquiries',
      color: 'text-sky-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 103 312 0762',
      href: 'tel:+201033120762',
      description: 'Call or WhatsApp for immediate response',
      color: 'text-green-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@ahmed-hesham07',
      href: personalInfo.social.github,
      description: 'View my code and projects',
      color: 'text-slate-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ahmed Hesham',
      href: personalInfo.social.linkedin,
      description: 'Professional networking',
      color: 'text-blue-400'
    }
  ];

  const quickActions = [
    {
      icon: Send,
      title: 'Start Your Project',
      description: 'Join 18+ satisfied clients who built amazing solutions',
      action: `mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`,
      variant: 'primary' as const,
      urgency: 'Limited spots available this month',
      highlight: true
    },
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Get expert advice on your technical challenges',
      action: `mailto:${personalInfo.emailPrimary}?subject=Free Consultation&body=Hi Ahmed, I'd like to schedule a free consultation to discuss:%0D%0A%0D%0A`,
      variant: 'secondary' as const,
      highlight: false
    },
    {
      icon: Phone,
      title: 'Quick Call',
      description: 'Speak directly - 98% response rate within 2-4 hours',
      action: `tel:+201033120762`,
      variant: 'outline' as const,
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "Ahmed delivered our engineering software 2 weeks ahead of schedule. The quality exceeded our expectations.",
      author: "Sarah M.",
      role: "Engineering Manager",
      company: "TechCorp"
    },
    {
      quote: "His expertise in data analytics helped us increase efficiency by 40%. Highly recommended!",
      author: "David L.",
      role: "CTO",
      company: "DataFlow Inc"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Hero Section with Advanced Psychology */}
        <div className="text-center mb-20">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-3 text-sm font-bold mb-6 animate-pulse">
            🚨 URGENT: Only 2 spots left this month! 7 inquiries today alone! Price increases next week!
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-500/50 rounded-full mb-6 animate-bounce">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-300">LIMITED AVAILABILITY - ACT NOW!</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            💰 Last Client Saved $15,000 in 3 Months!
          </h1>
          
          {/* Countdown Timer */}
          <div className="bg-red-800/50 border border-red-500/50 rounded-lg p-4 max-w-md mx-auto mb-6">
            <div className="text-center">
              <div className="text-sm text-red-300 font-bold mb-2">⏰ LIMITED TIME OFFER</div>
              <div className="text-3xl font-bold text-white font-mono" id="countdown">
                14:59
              </div>
              <div className="text-xs text-red-300">Price increases after timer!</div>
            </div>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            <span className="text-red-400 font-bold">7 inquiries today alone!</span> Join <span className="text-sky-400 font-semibold">18+ satisfied clients</span> who've saved an average of <span className="text-green-400 font-bold">$15,000</span> with my solutions. 
            <span className="text-amber-400 font-semibold">Only 2 spots left this month!</span>
          </p>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">{socialProof.projectsCompleted}+</div>
              <div className="text-sm text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">{socialProof.successRate}</div>
              <div className="text-sm text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-1">{socialProof.responseTime}</div>
              <div className="text-sm text-slate-400">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">{socialProof.yearsExperience}+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-8 py-4 text-lg font-semibold" asChild>
              <a href={`mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`}>
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 text-lg" asChild>
              <a href="tel:+201033120762">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions with Psychology */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Choose Your Next Step
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Every great project starts with a conversation. Pick the option that works best for you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
                <Card 
                  key={index} 
                  className={`relative bg-slate-800 border-slate-700 hover:border-sky-500/50 transition-all duration-300 group ${
                    action.highlight ? 'ring-2 ring-sky-500/30 shadow-lg shadow-sky-500/10' : ''
                  }`}
                >
                  {action.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-sky-500 to-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4 pt-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform ${
                      action.highlight ? 'bg-gradient-to-r from-sky-500 to-violet-500' : 'bg-sky-500/10'
                    }`}>
                      <Icon className={`h-8 w-8 ${action.highlight ? 'text-white' : 'text-sky-400'}`} />
                  </div>
                    <CardTitle className="text-white text-xl">{action.title}</CardTitle>
                    <p className="text-slate-400">{action.description}</p>
                    {action.urgency && (
                      <p className="text-xs text-amber-400 font-medium mt-2">{action.urgency}</p>
                    )}
                </CardHeader>
                  
                <CardContent className="pt-0">
                    <Button 
                      variant={action.variant} 
                      className={`w-full ${action.highlight ? 'bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white' : ''}`}
                      asChild
                    >
                    <a href={action.action}>
                        {action.title.includes('Call') ? 'Call Now' : 'Get Started'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
          </div>

        {/* Contact Information & Trust Signals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods with Psychology */}
          <div className="space-y-8">
            {/* Primary Contact - Most Important */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-xl">
                  <Zap className="h-6 w-6 text-sky-400" />
                  Get In Touch
                </CardTitle>
                <p className="text-slate-400">Choose your preferred way to connect</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email - Primary Method */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-violet-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative p-6 bg-slate-900/50 rounded-lg border border-slate-600">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-sky-500/20 rounded-full">
                        <Mail className="h-6 w-6 text-sky-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white text-lg">Email Me</div>
                  <a 
                    href={`mailto:${personalInfo.emailPrimary}`}
                          className="text-sky-400 hover:text-sky-300 transition-colors font-mono text-sm break-all block"
                  >
                    {personalInfo.emailPrimary}
                  </a>
                        <p className="text-xs text-slate-400 mt-1">Best for detailed discussions</p>
                      </div>
                      <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
                        <a href={`mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`}>
                          Send Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone - Immediate Response */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative p-6 bg-slate-900/50 rounded-lg border border-slate-600">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500/20 rounded-full">
                        <Phone className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white text-lg">Call or WhatsApp</div>
                        <a 
                          href="tel:+201033120762"
                          className="text-green-400 hover:text-green-300 transition-colors font-mono text-lg block"
                        >
                          +20 103 312 0762
                        </a>
                        <p className="text-xs text-slate-400 mt-1">Immediate response available</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white" asChild>
                          <a href="tel:+201033120762">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white" asChild>
                          <a href="https://wa.me/201033120762" target="_blank" rel="noopener noreferrer">
                            <WhatsApp className="h-4 w-4 mr-1" />
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Location & Availability */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-900/30 rounded-lg">
                    <MapPin className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-medium text-white">Location</div>
                      <div className="text-sm text-slate-300">{personalInfo.location}</div>
                      <div className="text-xs text-sky-400">Open to relocation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-900/30 rounded-lg">
                    <Clock className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-medium text-white">Response Time</div>
                      <div className="text-sm text-slate-300">{socialProof.responseTime}</div>
                      <div className="text-xs text-green-400">{socialProof.successRate} success rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Profiles */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Professional Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactMethods.slice(2).map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="group border border-slate-600 rounded-lg p-4 hover:border-sky-500/50 transition-all duration-300"
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-slate-700 ${method.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">{method.label}</div>
                          <div className="text-xs text-slate-400">{method.value}</div>
                          <div className="text-xs text-slate-500 mt-1">{method.description}</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                      </a>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  Why Choose Me?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{socialProof.successRate}</div>
                    <div className="text-xs text-slate-400">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-sky-400">{socialProof.projectsCompleted}+</div>
                    <div className="text-xs text-slate-400">Projects</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>24/7 project support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Additional Information */}
          <div className="space-y-6">
            {/* Urgency & Scarcity */}
            <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Timer className="h-5 w-5 text-amber-400" />
                  Limited Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium text-amber-300">Only 3 spots left this month</div>
                      <div className="text-sm text-amber-400/80">Book your consultation now</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-300 space-y-2">
                    <p>• <span className="text-amber-400 font-medium">High demand</span> - 15+ inquiries this week</p>
                    <p>• <span className="text-amber-400 font-medium">Premium pricing</span> - Rates increase next quarter</p>
                    <p>• <span className="text-amber-400 font-medium">Priority booking</span> - First come, first served</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Types */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">What I Can Help With</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-sky-400 text-lg mt-1">⚙️</span>
                    <div>
                      <div className="font-medium text-white">Engineering Software</div>
                      <div className="text-slate-300">ASME/API compliance tools, FFS assessments, technical calculations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-violet-400 text-lg mt-1">📊</span>
                    <div>
                      <div className="font-medium text-white">Data Analytics & ML</div>
                      <div className="text-slate-300">Business intelligence, predictive analytics, ML pipelines</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-emerald-400 text-lg mt-1">🌐</span>
                    <div>
                      <div className="font-medium text-white">Web Applications</div>
                      <div className="text-slate-300">Full-stack solutions, modern UIs, responsive design</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-amber-400 text-lg mt-1">💻</span>
                    <div>
                      <div className="font-medium text-white">Desktop Applications</div>
                      <div className="text-slate-300">Cross-platform with Tauri/Electron, native performance</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <Card className="bg-gradient-to-br from-sky-900/20 to-violet-900/20 border-sky-500/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-300">
                  Don't let your project wait. Join the queue of successful clients who've transformed their ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white flex-1" 
                    asChild
                  >
                    <a href={`mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`}>
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white flex-1" 
                    asChild
                  >
                    <a href="tel:+201033120762">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-slate-500">
                  <Shield className="inline h-3 w-3 mr-1" />
                  Secure communication • Confidential project handling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
      
      {/* Countdown Timer Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function startCountdown() {
              let timeLeft = 15 * 60; // 15 minutes
              const countdownElement = document.getElementById('countdown');
              
              const timer = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                countdownElement.textContent = minutes + ':' + seconds.toString().padStart(2, '0');
                
                timeLeft--;
                
                if (timeLeft < 0) {
                  timeLeft = 15 * 60; // Reset to 15 minutes
                }
              }, 1000);
            }
            
            // Start countdown when page loads
            if (typeof window !== 'undefined') {
              startCountdown();
            }
          `
        }}
      />
    </div>
  );
}