'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Zap,
  Globe2,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export default function WhyMeSection() {
  const t = useTranslations('why_me');

  const benefits = [
    {
      icon: DollarSign,
      text: t('cost_effective'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      text: t('modern_stack'),
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe2,
      text: t('bilingual'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: CheckCircle2,
      text: t('reliable'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      text: t('flexible'),
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
            Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-white font-medium leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/90 text-lg mb-6">
            Ready to start your project with a reliable partner?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#14b8a6] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
