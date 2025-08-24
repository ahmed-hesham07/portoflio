import { Mail, Github, Linkedin, MapPin, Clock, Wallet } from 'lucide-react';
import { getPersonalInfo } from '@/utils/data';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const personalInfo = getPersonalInfo();
  const isWeb3Enabled = process.env.NEXT_PUBLIC_WEB3_ENABLED === 'true';

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.emailPrimary,
      href: `mailto:${personalInfo.emailPrimary}`,
      description: 'Best for project inquiries and detailed discussions'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@ahmed-hesham07',
      href: personalInfo.social.github,
      description: 'View my code, contribute to projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ahmed Hesham',
      href: personalInfo.social.linkedin,
      description: 'Professional networking and updates'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to bring your engineering software vision to life? Let's discuss your project and how we can build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Location</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Response Time</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Usually within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Direct Email</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{personalInfo.emailContact}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="mr-3 h-4 w-4" />
                        <div className="text-left">
                          <div className="font-medium">{method.label}</div>
                          <div className="text-xs text-slate-500">{method.value}</div>
                        </div>
                      </a>
                    </Button>
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
            <Card>
              <CardHeader>
                <CardTitle>Project Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Engineering Software</div>
                      <div className="text-slate-600 dark:text-slate-300">ASME/API compliance tools, FFS assessments</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Data Analytics</div>
                      <div className="text-slate-600 dark:text-slate-300">Business intelligence, ML pipelines</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Web Applications</div>
                      <div className="text-slate-600 dark:text-slate-300">Full-stack solutions, modern UIs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Desktop Apps</div>
                      <div className="text-slate-600 dark:text-slate-300">Cross-platform with Tauri/Electron</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}