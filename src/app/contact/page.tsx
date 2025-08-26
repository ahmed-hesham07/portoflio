import { Mail, Github, Linkedin, MapPin, Clock, Wallet, Send, MessageCircle, Phone } from 'lucide-react';
import { getPersonalInfo } from '@/utils/data';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ContactPage() {
  const personalInfo = getPersonalInfo();
  const isWeb3Enabled = process.env.NEXT_PUBLIC_WEB3_ENABLED === 'true';

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
      title: 'Start a Project',
      description: 'Ready to build something amazing?',
      action: `mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A`,
      variant: 'primary' as const
    },
    {
      icon: MessageCircle,
      title: 'General Inquiry',
      description: 'Have questions about my work?',
      action: `mailto:${personalInfo.emailPrimary}?subject=General Inquiry`,
      variant: 'secondary' as const
    },
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Let\'s discuss your requirements',
      action: `mailto:${personalInfo.emailPrimary}?subject=Schedule a Call&body=Hi Ahmed, I'd like to schedule a call to discuss:%0D%0A%0D%0A`,
      variant: 'outline' as const
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to bring your engineering software vision to life? I'm here to help you build intelligent solutions that make a real impact.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-sky-500/50 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/10 text-sky-400 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white">{action.title}</CardTitle>
                  <p className="text-sm text-slate-400">{action.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant={action.variant} className="w-full" asChild>
                    <a href={action.action}>
                      Contact Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="h-5 w-5 text-sky-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-600">
                  <Mail className="h-8 w-8 text-sky-400 mx-auto mb-3" />
                  <div className="font-medium text-white text-lg mb-1">Primary Email</div>
                  <a 
                    href={`mailto:${personalInfo.emailPrimary}`}
                    className="text-sky-400 hover:text-sky-300 transition-colors font-mono text-sm"
                  >
                    {personalInfo.emailPrimary}
                  </a>
                  <p className="text-xs text-slate-400 mt-2">Best for all inquiries and project discussions</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <div>
                      <div className="font-medium text-white">Location</div>
                      <div className="text-sm text-slate-300">{personalInfo.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <div>
                      <div className="font-medium text-white">Response Time</div>
                      <div className="text-sm text-slate-300">Usually within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactMethods.map((method, index) => {
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
                      </a>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Web3 Section */}
            {isWeb3Enabled && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    Web3 Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Connect your wallet to unlock exclusive project case studies and detailed technical documentation.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <Wallet className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </Button>
                </CardContent>
              </Card>
            )}

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
          </div>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}