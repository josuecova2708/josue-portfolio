'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Briefcase, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Systems Engineering - Final Semester',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '1+ Year Remote Development',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Bolivia - Available Worldwide',
    },
    {
      icon: Code2,
      title: 'Specialization',
      description: 'React/Next.js Ecosystem',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-2xl transform rotate-3"></div>

              {/* Profile Image */}
              <div className="relative rounded-2xl overflow-hidden h-full shadow-2xl">
                <Image
                  src="/PerfilpaTo.jpg"
                  alt="Josue Covarrubias - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f97316] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#14b8a6] rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-teal-50 rounded-full text-[#14b8a6] text-sm font-semibold mb-4">
              {t('title')}
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Josue Covarrubias
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>{t('description')}</p>
              <p>{t('description_2')}</p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#14b8a6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#14b8a6] text-white rounded-lg font-semibold hover:bg-[#0d9488] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('cta_button')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
