import { type LucideIcon, ArrowRight, ExternalLink, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Shield, Star, Zap, FileText, Clock, CheckCircle, Calendar, Globe, Heart } from 'lucide-react';
import { getPersonalInfo, getPortfolioData } from '@/utils/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PageIntro } from '@/components/PageIntro';

export default function ContactPage() {
  const personalInfo = getPersonalInfo();
  const portfolioData = getPortfolioData();
  const stats = portfolioData.stats || {};
  const faqs = portfolioData.faqs || [];
  const testimonials = portfolioData.testimonials || [];

  const socialProof = {
    projectsCompleted: stats.projectsCompleted || '25+',
    successRate: stats.successRate || '98%',
    responseTime: stats.responseTime || '2-4 hours',
    yearsExperience: stats.yearsExperience || '5+',
  };

  const heroStats = [
    { label: 'Projects delivered', value: socialProof.projectsCompleted },
    { label: 'Success rate', value: socialProof.successRate },
    { label: 'Avg response time', value: socialProof.responseTime },
    { label: 'Years of experience', value: socialProof.yearsExperience },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Response',
      time: '2-4 hours',
      description: "I'll acknowledge your inquiry and ask a few clarifying questions to understand your needs better.",
      color: 'bg-teal-500',
    },
    {
      step: 2,
      title: 'Discovery Call',
      time: '30-60 min',
      description: 'Detailed discussion about your current inspection workflows, pain points, report formats, integration requirements, and budget expectations.',
      color: 'bg-blue-600',
    },
    {
      step: 3,
      title: 'Custom Demo',
      time: '3-5 days',
      description: "I'll create a demo using YOUR sample data and YOUR report formats to show exactly what the solution would look like.",
      color: 'bg-blue-800',
    },
    {
      step: 4,
      title: 'Proposal & Agreement',
      time: '1 week',
      description: 'Detailed proposal including scope of work, timeline with milestones, pricing (development + ongoing support), and terms.',
      color: 'bg-indigo-700',
    },
    {
      step: 5,
      title: 'Development & Delivery',
      time: '4-8 weeks',
      description: 'Iterative development with weekly check-ins, bi-weekly demos, continuous feedback incorporation, training, and documentation.',
      color: 'bg-violet-700',
    },
  ];

  const commitments = [
    {
      icon: Shield,
      title: 'Honest Assessment',
      description: "If software isn't the right solution for your problem, I'll tell you.",
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: "No hidden costs or surprise fees. You'll know the full investment upfront.",
    },
    {
      icon: Star,
      title: 'Quality Over Speed',
      description: "I won't cut corners to hit arbitrary deadlines. The software works correctly or it doesn't ship.",
    },
    {
      icon: Heart,
      title: 'Your Success = My Success',
      description: "I'm invested in your actual business outcomes, not just delivering code.",
    },
    {
      icon: Zap,
      title: 'Ongoing Partnership',
      description: "Support doesn't end at deployment. I'm here for updates, fixes, and enhancements as you grow.",
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's Discuss Your Digital Transformation"
        description="Whether you're looking to automate a single report type or transform your entire inspection operation, I'm here to help. No sales pressure - just a straightforward conversation about your needs and how technology can help you achieve your goals."
        stats={heroStats}
        actions={[
          <Button key="email" size="lg" className="bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
            <a href={`mailto:${personalInfo.emailPrimary}?subject=NDT/FFS Digital Transformation Inquiry`}>
              Send Email
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>,
          <Button key="whatsapp" size="lg" variant="outline" className="border-teal-300 dark:border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30" asChild>
            <a href="https://wa.me/201284986274" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Message on WhatsApp
            </a>
          </Button>,
        ]}
      />

      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto space-y-16 px-6 max-w-6xl">

          {/* Contact Methods & Quick Actions */}
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: Contact + Quick Actions */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">
                    Get in Touch
                  </CardTitle>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Choose your preferred communication method. I typically respond within {socialProof.responseTime}.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.emailPrimary}?subject=NDT/FFS Digital Transformation Inquiry`}
                    className="flex items-start gap-4 p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">Email (Preferred)</div>
                      <p className="text-sm text-blue-700 dark:text-blue-400 font-mono">{personalInfo.emailPrimary}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Best for detailed project descriptions, sharing sample reports, technical specifications</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 mt-1 transition-colors" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/201284986274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">WhatsApp (Quick Questions)</div>
                      <p className="text-sm text-teal-700 dark:text-teal-400">{personalInfo.phone || '+20 128 498 6274'}</p>
                      <p className="text-xs font-medium text-orange-600 dark:text-orange-400 mt-1">MESSAGES ONLY - NO VOICE CALLS</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Best for quick questions, scheduling, urgent inquiries</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-teal-600 mt-1 transition-colors" />
                  </a>

                  {/* Professional Networks */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">LinkedIn</div>
                        <div className="text-xs text-slate-500">Ahmed Hesham</div>
                      </div>
                    </a>
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">GitHub</div>
                        <div className="text-xs text-slate-500">@ahmed-hesham07</div>
                      </div>
                    </a>
                  </div>

                  {/* Location & Working Hours */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">{personalInfo.location}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">EET (UTC+2)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">Sun-Thu: 9AM-6PM</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Fri-Sat: By appointment</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href={`mailto:${personalInfo.emailPrimary}?subject=Demo Report Request`}
                  className="p-5 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hover:shadow-lg hover:-translate-y-1 transition-all text-center group"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 mb-3">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Demo Reports</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Within 24 hours</p>
                </a>
                <a
                  href="https://wa.me/201284986274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border-2 border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 hover:shadow-lg hover:-translate-y-1 transition-all text-center group"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400 mb-3">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Free Consultation</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">30-minute call</p>
                </a>
                <a
                  href="/Ahmed_Hesham_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all text-center group"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 mb-3">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Download CV</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">PDF resume</p>
                </a>
              </div>
            </div>

            {/* Right: Process & Commitments */}
            <div className="space-y-6">
              {/* Process Timeline */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">What Happens After You Reach Out</CardTitle>
                  <p className="text-sm text-slate-500 dark:text-slate-400">A structured, no-pressure process</p>
                </CardHeader>
                <CardContent className="space-y-0">
                  {processSteps.map((step, index) => (
                    <div key={step.step} className="relative flex gap-4 pb-6 last:pb-0">
                      {/* Timeline line */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                      )}
                      {/* Step number */}
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${step.color} text-white text-sm font-bold z-10`}>
                        {step.step}
                      </div>
                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* My Commitments */}
              <Card className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900 dark:text-white">My Promises to Every Client</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {commitments.map((commitment) => {
                    const Icon = commitment.icon;
                    return (
                      <div key={commitment.title} className="flex items-start gap-3">
                        <Icon className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{commitment.title}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300">{commitment.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Proven Track Record */}
              <Card className="rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Proven Track Record</h3>
                  <div className="space-y-2">
                    {[
                      `${socialProof.projectsCompleted} NDT/FFS projects delivered`,
                      `${socialProof.successRate} client satisfaction rate`,
                      '18+ oil & gas, petrochemical clients',
                      'Zero failed projects',
                      'Average 80-90% time savings for clients',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-3.5 w-3.5 text-teal-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
                      References available upon request
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQs Section */}
          {faqs.length > 0 && (
            <div className="space-y-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400">Common questions about NDT/FFS digital transformation projects.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {faqs.map((faq, index) => (
                  <Card key={index} className="rounded-xl">
                    <CardContent className="p-5">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials */}
          {testimonials.length > 0 && (
            <div className="space-y-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Client Feedback</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="rounded-xl border-l-4 border-l-teal-500">
                    <CardContent className="p-6">
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic mb-4">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-semibold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.title}, {testimonial.company}</p>
                        </div>
                        <div className="ml-auto flex gap-0.5 text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Take the First Step?
            </h2>
            <div className="max-w-xl mx-auto space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p>
                <strong className="text-slate-900 dark:text-white">Your Next Move:</strong>
              </p>
              <ol className="text-left space-y-2 list-decimal list-inside">
                <li>Send me an email at <a href={`mailto:${personalInfo.emailPrimary}`} className="text-blue-700 dark:text-blue-400 hover:underline font-medium">{personalInfo.emailPrimary}</a></li>
                <li>Describe your inspection workflow and current challenges</li>
                <li>I&apos;ll respond within 2-4 hours to schedule a call</li>
              </ol>
              <p className="text-slate-500 dark:text-slate-400">
                Or message me on WhatsApp (<a href="https://wa.me/201284986274" className="text-teal-700 dark:text-teal-400 hover:underline">+20 128 498 6274</a>) to schedule a free 30-minute consultation.
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                No sales pressure. Just a conversation about what&apos;s possible.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <Button size="lg" className="bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
                <a href={`mailto:${personalInfo.emailPrimary}?subject=NDT/FFS Digital Transformation Inquiry`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-teal-300 dark:border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30" asChild>
                <a href="https://wa.me/201284986274" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
