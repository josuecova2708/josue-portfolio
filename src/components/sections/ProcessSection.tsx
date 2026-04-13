'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  FileText,
  Code,
  Rocket,
  HeartHandshake,
} from 'lucide-react';

export default function ProcessSection() {
  const t = useTranslations('process');

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      titleKey: 'step_1.title',
      descKey: 'step_1.description',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      number: '02',
      titleKey: 'step_2.title',
      descKey: 'step_2.description',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      number: '03',
      titleKey: 'step_3.title',
      descKey: 'step_3.description',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Rocket,
      number: '04',
      titleKey: 'step_4.title',
      descKey: 'step_4.description',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: HeartHandshake,
      number: '05',
      titleKey: 'step_5.title',
      descKey: 'step_5.description',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-teal-50 rounded-full text-[#14b8a6] text-sm font-semibold mb-4">
            {t('title')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('subtitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#14b8a6] to-[#0d9488]"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div
                    className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#14b8a6] transition-all duration-300 hover:shadow-xl ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      {/* Icon - left on mobile, positioned based on index on desktop */}
                      <div
                        className={`md:hidden w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-5xl font-bold text-gray-200">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {t(step.titleKey)}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {t(step.descKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Icon - only visible on desktop */}
                <div className="hidden md:flex w-20 h-20 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full items-center justify-center shadow-2xl z-10 flex-shrink-0">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            {t('cta_text')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#14b8a6] text-white rounded-lg font-semibold hover:bg-[#0d9488] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t('cta_button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
