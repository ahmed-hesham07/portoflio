'use client';

import { useState } from 'react';
import { Send, Mail, User, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { getPersonalInfo } from '@/utils/data';

export function ContactForm() {
  const personalInfo = getPersonalInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // If there's a fallback mailto (for demo purposes), you could optionally use it
        if (data.fallbackMailto) {
          console.log('Fallback mailto URL:', data.fallbackMailto);
        }
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Mail className="h-5 w-5 text-sky-400" />
          Send Me a Message
        </CardTitle>
        <p className="text-slate-400 text-sm">
          Fill out the form below and I'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-slate-600 rounded-lg bg-slate-900 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                placeholder="Your name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-slate-600 rounded-lg bg-slate-900 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                placeholder="Tell me about your project or question..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 rounded-lg bg-green-900/20 border border-green-500/20 text-green-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <div>
                  <div className="font-medium">Message sent successfully!</div>
                  <div className="text-sm text-green-400/80">I'll get back to you within 24 hours at {personalInfo.emailPrimary}</div>
                </div>
              </div>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/20 text-red-300">
              <div className="flex items-center gap-2">
                <span className="text-red-400">⚠</span>
                <div>
                  <div className="font-medium">Failed to send message</div>
                  <div className="text-sm text-red-400/80">
                    Please try again or email me directly at{' '}
                                    <a href={`mailto:${personalInfo.emailPrimary}`} className="underline hover:text-red-300">
                  {personalInfo.emailPrimary}
                </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
