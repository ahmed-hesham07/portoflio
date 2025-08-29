"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPersonalInfo } from '@/utils/data';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactMethod {
  name: string;
  value: string;
  link: string;
  icon: string;
  color: string;
  description: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const personalInfo = getPersonalInfo();

  const contactMethods: ContactMethod[] = [
    {
      name: 'Email',
      value: personalInfo.emailPrimary,
      link: `mailto:${personalInfo.emailPrimary}`,
      icon: '📧',
      color: 'blue',
      description: 'Best for detailed discussions and project inquiries'
    },
    {
      name: 'LinkedIn',
      value: 'ahmed-hesham07',
      link: 'https://linkedin.com/in/ahmed-hesham07',
      icon: '💼',
      color: 'blue',
      description: 'Professional networking and career opportunities'
    },
    {
      name: 'GitHub',
      value: 'ahmed-hesham07',
      link: 'https://github.com/ahmed-hesham07',
      icon: '💻',
      color: 'gray',
      description: 'Explore my open source projects and contributions'
    },
    {
      name: 'Phone',
      value: '+20 (xxx) xxx-xxxx',
      link: 'tel:+20xxxxxxxxxx',
      icon: '📱',
      color: 'green',
      description: 'For urgent matters and quick consultations'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    gray: 'from-gray-500 to-gray-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <section id="contact" className="py-20 px-4 bg-cyber-dark relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cyber tracking-wider">
            <span className="cyber-text">{'>'}</span> ESTABLISH <span className="gradient-text">CONNECTION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-cyber">
            Ready to architect the future? Let's synchronize our neural networks and build 
            quantum-enhanced solutions together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 neon-text font-cyber tracking-wider">
                NEURAL_INTERFACE
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-cyber">
                I'm actively seeking opportunities for quantum computing collaborations, autonomous system development, 
                and neural network architecture projects. Whether you need an AI engineer, quantum software developer, 
                or engineering consultant, let's build the future together.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.link}
                  target={method.name !== 'Email' && method.name !== 'Phone' ? '_blank' : undefined}
                  rel={method.name !== 'Email' && method.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center p-4 card hover:shadow-neon-blue/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[method.color as keyof typeof colorClasses]} mr-4 border border-neon-blue/30`}>
                    <span className="text-white text-xl">{method.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold neon-text group-hover:animate-neon-flicker transition-all font-cyber tracking-wider">
                      {method.name.toUpperCase()}
                    </h4>
                    <p className="text-gray-300 text-sm mb-1 font-mono-cyber">
                      {method.value}
                    </p>
                    <p className="text-gray-400 text-xs font-cyber">
                      {method.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-neon-blue">→</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🚀 Quick Response Guarantee
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                please mention "URGENT" in your subject line.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      errors.name 
                        ? 'border-red-300 dark:border-red-600' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      errors.email 
                        ? 'border-red-300 dark:border-red-600' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    errors.subject 
                      ? 'border-red-300 dark:border-red-600' 
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Project Discussion / Collaboration"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-300 dark:border-red-600' 
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Tell me about your project, requirements, timeline, and any specific questions you have..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="ml-2">🚀</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <div className="flex items-center text-green-800 dark:text-green-200">
                    <span className="mr-2">✅</span>
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-600 dark:text-green-300 text-sm mt-1">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <div className="flex items-center text-red-800 dark:text-red-200">
                    <span className="mr-2">❌</span>
                    <span className="font-medium">Failed to send message</span>
                  </div>
                  <p className="text-red-600 dark:text-red-300 text-sm mt-1">
                    Please try again or contact me directly via email.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
