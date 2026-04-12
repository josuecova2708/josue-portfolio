'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('about'), href: '#about' },
    { label: t('services'), href: '#services' },
    { label: t('contact'), href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/marco-josue-covarrubias-rodriguez-a313502a0',
      color: 'hover:text-[#0077b5]',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/josuecova2708',
      color: 'hover:text-gray-900',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:josuecovarrubias8@gmail.com',
      color: 'hover:text-[#14b8a6]',
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      href: 'https://wa.me/59177616799',
      color: 'hover:text-[#25D366]',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#14b8a6] to-[#0d9488] bg-clip-text text-transparent mb-4">
              Josue Covarrubias
            </div>
            <p className="text-gray-400 mb-4">
              Full-stack web developer building modern, scalable solutions for startups and businesses.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new projects
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#14b8a6] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('social')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>josuecovarrubias8@gmail.com</p>
              <p>+591 77616799</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t('copyright').replace('2026', String(currentYear))}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#14b8a6] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#14b8a6] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
