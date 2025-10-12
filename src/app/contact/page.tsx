import { type LucideIcon, ArrowRight, ExternalLink, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Shield, Star, Zap } from 'lucide-react';
import { getPersonalInfo } from '@/utils/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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
  ctaLabel: string;
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
      value: '+20 128 498 6274',
      href: 'https://wa.me/201284986274',
      description: 'WhatsApp messages only (no calls)',
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
      description: 'Join satisfied clients who built amazing solutions',
      action: `mailto:${personalInfo.emailPrimary}?subject=Project Inquiry`,
      ctaLabel: 'Start a project brief',
      urgency: 'Limited spots available this month',
      highlight: true,
    },
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Chat with me on WhatsApp for quick responses',
      action: 'https://wa.me/201284986274',
      ctaLabel: 'Chat on WhatsApp',
    },
    {
      icon: Phone,
      title: 'Quick Call',
      description: 'Speak directly — fast response within hours',
      action: 'https://wa.me/201284986274',
      ctaLabel: 'Message on WhatsApp',
    },
  ];

  const collaborationHighlights = [
    {
      icon: Send,
      title: 'Thoughtful discovery',
      description: 'We begin with a relaxed conversation to understand your goals, constraints, and what success feels like for you.',
    },
    {
      icon: Zap,
      title: 'Responsive updates',
      description: `Expect clear check-ins and answers inside ${socialProof.responseTime.toLowerCase()} — momentum without the rush.`,
    },
    {
      icon: Shield,
      title: 'Proven delivery',
      description: `${socialProof.successRate} success rate across ${socialProof.projectsCompleted}+ engagements, with teams who keep coming back.`,
    },
  ];

  const primaryChannels = contactMethods.filter((method) => ['Email', 'Phone'].includes(method.label));
  const supportingChannels = contactMethods.filter((method) => method.href.startsWith('http'));
  const locationMethod = contactMethods.find((method) => method.label === 'Location');

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
            <a href="https://wa.me/201284986274">
              <Phone className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>,
        ]}
      />

      <section className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-100/40 via-transparent to-transparent dark:from-slate-900/40" />
        <div className="absolute -right-24 top-24 hidden h-72 w-72 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-500/10 lg:block" />

        <div className="container relative mx-auto space-y-16 px-6">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr]">
            <Card className="rounded-3xl border border-white/60 bg-white/80 shadow-xl backdrop-blur md:px-2 dark:border-slate-800/60 dark:bg-slate-900/70">
              <CardHeader className="space-y-5 lg:p-10">
                <Badge size="sm" variant="default" className="w-fit bg-sky-500/15 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                  Start a conversation
                </Badge>
                <CardTitle className="text-3xl font-semibold leading-snug text-slate-900 dark:text-white">
                  Tell me about the product you have in mind
                </CardTitle>
                <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
                  Skip the long forms. Share a note, book a short chat, or hop on a call—whatever feels easiest. I&apos;ll reply personally with a thoughtful first step.
                </p>
              </CardHeader>
              <CardContent className="space-y-10 lg:p-10 lg:pt-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <a
                        key={`${action.title}-${index}`}
                        href={action.action}
                        className={`group flex h-full flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70 ${
                          action.highlight ? 'border-sky-300/80 bg-sky-50/80 dark:border-sky-500/40 dark:bg-sky-500/10' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">{action.title}</div>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{action.description}</p>
                          </div>
                        </div>
                        {action.urgency && <p className="mt-4 text-xs font-medium text-amber-500">{action.urgency}</p>}
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition group-hover:gap-3 dark:text-sky-300">
                          {action.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </a>
                    );
                  })}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {primaryChannels.map((method, index) => {
                    const Icon = method.icon;
                    const isLink = method.href !== '#';
                    const isExternal = isLink && method.href.startsWith('http');
                    return (
                      <div
                        key={`${method.label}-${index}`}
                        className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900/5 text-slate-900 dark:bg-slate-100/10 dark:text-slate-100">
                            <Icon className={`h-5 w-5 ${method.color ?? ''}`} />
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">{method.label}</div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{method.description}</p>
                          </div>
                        </div>
                        <div className="mt-5">
                          {isLink ? (
                            <a
                              href={method.href}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-2 text-base font-semibold text-slate-900 transition hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
                            >
                              {method.value}
                              {isExternal ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                            </a>
                          ) : (
                            <span className="text-base font-semibold text-slate-900 dark:text-white">{method.value}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {locationMethod && (
                  <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-5 text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Currently collaborating from</div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{locationMethod.description}</p>
                      </div>
                    </div>
                    <span className="text-base font-medium text-slate-900 dark:text-white">{locationMethod.value}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-3xl border border-white/60 bg-white/80 shadow-xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                <CardHeader className="space-y-4 lg:p-10">
                  <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">What happens after you reach out</CardTitle>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">A calm, collaborative process to understand your needs and craft a plan together.</p>
                </CardHeader>
                <CardContent className="space-y-6 lg:p-10 lg:pt-0">
                  {collaborationHighlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={`${item.title}-${index}`} className="flex items-start gap-3 rounded-2xl border border-transparent bg-slate-50/60 p-4 dark:bg-slate-800/40">
                        <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</div>
                          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-slate-900/5 p-4 dark:bg-slate-100/5">
                    <Badge variant="default" size="sm">Accepting new collaborations</Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Replies typically land within {socialProof.responseTime.toLowerCase()}.</span>
                  </div>
                </CardContent>
              </Card>

              {supportingChannels.length > 0 && (
                <Card className="rounded-3xl border border-white/60 bg-white/80 shadow-lg backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                  <CardHeader className="space-y-3 lg:p-8">
                    <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <ExternalLink className="h-5 w-5 text-sky-500" />
                      Follow along elsewhere
                    </CardTitle>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Peek behind the scenes, explore open-source work, or connect for future collaborations.</p>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:p-8 lg:pt-0">
                    {supportingChannels.map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <a
                          key={`${method.label}-${index}`}
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 text-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/60"
                        >
                          <span className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/5 text-slate-900 dark:bg-slate-100/10 dark:text-slate-100">
                              <Icon className="h-4 w-4" />
                            </span>
                            {method.label}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{method.value}</span>
                        </a>
                      );
                    })}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="space-y-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Kind words from collaborators</h2>
              <p className="mt-3 text-base text-slate-500 dark:text-slate-400">A few teams who trusted me to bring clarity and momentum to their projects.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="rounded-3xl border border-white/60 bg-white/80 shadow-lg backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                  <CardContent className="space-y-5 p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-base font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
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