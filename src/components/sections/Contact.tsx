'use client';

import { m, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Download, Mail, ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { personalInfo, contactCopy } from '@/lib/content';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const vp = { once: true };
  const ease = [0, 0, 0.2, 1] as const;

  return (
    <section id="contact" className="py-24 md:py-32" aria-label="Contact">
      <div className="mx-auto max-w-[1100px] px-6">
        <m.div
          initial={prefersReducedMotion ? false : ({ opacity: 0, y: 24 } as const)}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          viewport={vp}
          className="mb-14 flex flex-col items-center gap-4 text-center"
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl font-semibold text-primary md:text-[42px]">
            {contactCopy.heading}
          </h2>
          <p className="max-w-xl font-body text-base text-secondary leading-relaxed">
            {contactCopy.subCopy}
          </p>
        </m.div>

        <m.div
          initial={prefersReducedMotion ? false : ({ opacity: 0, y: 24 } as const)}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          viewport={vp}
          className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-0"
        >
          {/* Left: Recruiter */}
          <div className="flex flex-1 flex-col gap-5 rounded-2xl border border-border bg-surface p-8">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-muted mb-1">
                {contactCopy.recruiterLabel}
              </p>
              <div className="h-0.5 w-8 bg-accent rounded-full" />
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 active:scale-[0.98] transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-blue-700 transition-colors duration-200"
              >
                <Github size={15} />
                View GitHub
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="font-body text-xs text-muted mt-auto">{contactCopy.recruiterAvailability}</p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center md:flex-col md:px-8">
            <div className="h-px flex-1 bg-border md:h-full md:w-px" />
            <span className="px-4 py-4 font-body text-xs text-muted">or</span>
            <div className="h-px flex-1 bg-border md:h-full md:w-px" />
          </div>

          {/* Right: Client */}
          <div className="flex flex-1 flex-col gap-5 rounded-2xl border border-border bg-surface p-8">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-muted mb-1">
                {contactCopy.clientLabel}
              </p>
              <div className="h-0.5 w-8 bg-accent-warm rounded-full" />
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent px-6 py-3 text-sm font-medium text-accent hover:bg-accent hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <Mail size={15} />
                Send me a message
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-blue-700 transition-colors duration-200"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="font-body text-xs text-muted mt-auto">{contactCopy.clientFootprint}</p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
