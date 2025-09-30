import { type LucideIcon, ArrowRight, CheckCircle, Clock, ExternalLink, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Shield, Star, Zap } from 'lucide-react';
import { getPersonalInfo } from '@/utils/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ContactForm';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

type ContactMethod = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  description: string;
  color?: string;
};

type QuickAction = {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  variant: 'primary' | 'secondary' | 'outline';
  highlight?: boolean;
  urgency?: string;
};

const socialProof = {
  projectsCompleted: 25,
  successRate: '98%',
  responseTime: '2-4 hours',
  yearsExperience: 3,
};

export default function ContactPage() {
  const personalInfo = getPersonalInfo();

  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.emailPrimary,
      href: `mailto:${personalInfo.emailPrimary}`,
      description: 'Send me an email',
      color: 'text-sky-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 103 312 0762',
      href: 'tel:+201033120762',
      description: 'Call or WhatsApp for immediate response',
      color: 'text-green-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@ahmed-hesham07',
      href: personalInfo.social.github,
      description: 'View my code and projects',
      color: 'text-slate-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ahmed Hesham',
      href: personalInfo.social.linkedin,
      description: 'Connect professionally',
      color: 'text-blue-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      description: 'Currently based in Alexandria, Egypt',
      color: 'text-amber-400',
    },
  ];

  const quickActions: QuickAction[] = [
    {
      icon: Send,
      title: 'Start Your Project',
      description: 'Join 18+ satisfied clients who built amazing solutions',
      action: `mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`,
      variant: 'primary',
      urgency: 'Limited spots available this month',
      highlight: true,
    },
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Get expert advice on your technical challenges',
      action: `mailto:${personalInfo.emailPrimary}?subject=Free Consultation&body=Hi Ahmed, I'd like to schedule a free consultation to discuss:%0D%0A%0D%0A`,
      variant: 'secondary',
    },
    {
      icon: Phone,
      title: 'Quick Call',
      description: 'Speak directly — 98% response rate within 2-4 hours',
      action: 'tel:+201033120762',
      variant: 'outline',
    },
  ];

  const testimonials = [
    {
      quote: 'Ahmed delivered our engineering software two weeks ahead of schedule. The quality exceeded our expectations.',
      author: 'Sarah M.',
      role: 'Engineering Manager',
      company: 'TechCorp',
    },
    {
      quote: 'His expertise in data analytics helped us increase efficiency by 40%. Highly recommended!',
      author: 'David L.',
      role: 'CTO',
      company: 'DataFlow Inc.',
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-300">Available for New Projects</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something Amazing Together
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to transform your ideas into reality? Join <span className="text-sky-400 font-semibold">18+ satisfied clients</span> who achieved their goals with professional engineering software, data analytics, and full-stack development solutions.
          </p>

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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href={`mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`}>
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 text-lg"
              asChild
            >
              <a href="tel:+201033120762">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-4 italic">“{testimonial.quote}”</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Choose Your Next Step</h2>
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-sky-500 to-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4 pt-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform ${
                        action.highlight ? 'bg-gradient-to-r from-sky-500 to-violet-500' : 'bg-sky-500/10'
                      }`}
                    >
                      <Icon className={`h-8 w-8 ${action.highlight ? 'text-white' : 'text-sky-400'}`} />
                    </div>
                    <CardTitle className="text-white text-xl">{action.title}</CardTitle>
                    <p className="text-slate-400">{action.description}</p>
                    {action.urgency && <p className="text-xs text-amber-400 font-medium mt-2">{action.urgency}</p>}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Button
                      variant={action.variant}
                      className={`w-full ${
                        action.highlight ? 'bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white' : ''
                      }`}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-xl">
                  <Zap className="h-6 w-6 text-sky-400" />
                  Get In Touch
                </CardTitle>
                <p className="text-slate-400">Choose your preferred way to connect</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-violet-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
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
                      <Button
                        size="sm"
                        className="bg-sky-500 hover:bg-sky-600 text-white"
                        asChild
                      >
                        <a href={`mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`}>
                          Send Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
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
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                          asChild
                        >
                          <a href="tel:+201033120762">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                          asChild
                        >
                          <a href="https://wa.me/201033120762" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

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

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Professional Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactMethods.filter(method => method.href.startsWith('http')).map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={`${method.label}-${index}`}
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

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-sky-900/20 to-violet-900/20 border-sky-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-sky-400" />
                  Professional Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-sky-900/20 border border-sky-500/30 rounded-lg">
                    <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                    <div>
                      <div className="font-medium text-sky-300">Available for new projects</div>
                      <div className="text-sm text-sky-400/80">Professional consultation available</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-300 space-y-2">
                    <p>
                      • <span className="text-sky-400 font-medium">Engineering Software</span> — ASME/API compliance tools
                    </p>
                    <p>
                      • <span className="text-sky-400 font-medium">Data Analytics</span> — Business intelligence solutions
                    </p>
                    <p>
                      • <span className="text-sky-400 font-medium">Full-Stack Development</span> — Modern web applications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                      <div className="font-medium text-white">Data Analytics &amp; ML</div>
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

            <Card className="bg-gradient-to-br from-sky-900/20 to-violet-900/20 border-sky-500/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-300">
                  Don&apos;t let your project wait. Join the queue of successful clients who have transformed their ideas into reality.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <Card className="bg-white/5 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Direct Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={`${method.label}-${index}`} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900/70 flex items-center justify-center">
                        <Icon className={`h-5 w-5 ${method.color ?? 'text-slate-300'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{method.label}</h3>
                        <p className="text-sm text-slate-400 mb-1">{method.description}</p>
                        {method.href !== '#' ? (
                          <a
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-slate-200 hover:text-white transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-slate-200">{method.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}