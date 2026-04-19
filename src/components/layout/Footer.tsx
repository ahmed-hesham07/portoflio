import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="mx-auto max-w-[1100px] px-6 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Row 1: Name + socials */}
          <div className="flex items-center justify-between sm:justify-start gap-6">
            <span className="font-display text-base font-semibold text-primary">
              {personalInfo.name}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Row 2: Build info + copyright */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 text-xs text-muted">
            <span>Built with Next.js + Tailwind · Deployed on Vercel</span>
            <span className="hidden sm:inline text-border">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
