import { type LucideIcon, ArrowRight, CheckCircle, ExternalLink, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Shield, Star, Zap } from 'lucide-react';
import { getPersonalInfo } from '@/utils/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ContactForm';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PageIntro } from '@/components/PageIntro';

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

  const heroStats = [
    { label: 'Projects delivered', value: `${socialProof.projectsCompleted}+` },
    { label: 'Success rate', value: socialProof.successRate },
    { label: 'Avg response time', value: socialProof.responseTime },
    { label: 'Years of experience', value: `${socialProof.yearsExperience}+` },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let&apos;s build something thoughtful together"
        description="Share your idea, brief, or technical challenge and I&apos;ll reach back within a few hours with next steps. Every conversation starts with listening."
        stats={heroStats}
        actions={[
          <Button key="email" size="lg" asChild>
            <a href={`mailto:${personalInfo.emailPrimary}?subject=Project Inquiry&body=Hi Ahmed, I'm interested in working with you on a project.`}>
              Start via email
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>,
          <Button key="call" size="lg" variant="outline" asChild>
            <a href="tel:+201033120762">
              <Phone className="mr-2 h-5 w-5" />
              Call or WhatsApp
            </a>
          </Button>,
        ]}
      />

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto space-y-12 px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <ContactForm />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Zap className="h-5 w-5 text-sky-500" />
                    Quick ways to get started
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;

                    return (
                      <div key={index} className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">{action.title}</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{action.description}</p>
                            {action.urgency && <p className="text-xs text-amber-500">{action.urgency}</p>}
                          </div>
                        </div>
                        <Button variant={action.variant === 'outline' ? 'outline' : action.variant} size="sm" asChild>
                          <a href={action.action}>
                            {action.title.includes('Call') ? 'Call now' : 'Get started'}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Mail className="h-5 w-5 text-sky-500" />
                    Direct contact details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={`${method.label}-${index}`} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">{method.label}</div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{method.description}</p>
                          {method.href !== '#' ? (
                            <a
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : undefined}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-sm text-slate-600 dark:text-slate-300">{method.value}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Shield className="h-5 w-5 text-sky-500" />
                    Why teams enjoy collaborating
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>{socialProof.successRate} success across 25+ deliveries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Deep experience with engineering, analytics, and UX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Transparent communication with 2–4 hour response time</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <ExternalLink className="h-5 w-5 text-sky-500" />
                    Professional profiles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contactMethods
                    .filter((method) => method.href.startsWith('http'))
                    .map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <a
                          key={`${method.label}-${index}`}
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm transition hover:border-sky-400 dark:border-slate-800 dark:hover:border-sky-500"
                        >
                          <span className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                            <Icon className="h-4 w-4" />
                            {method.label}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{method.value}</span>
                        </a>
                      );
                    })}
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-center text-2xl font-semibold text-slate-900 dark:text-white">Client feedback</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Analytics />
      <SpeedInsights />
    </>
  );
}