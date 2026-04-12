'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Palette,
  LayoutDashboard,
  Smartphone,
  Server,
  Database,
  Headphones,
} from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Palette,
      key: 'landing_pages',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: LayoutDashboard,
      key: 'dashboards',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      key: 'web_apps',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Server,
      key: 'apis',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      key: 'database',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Headphones,
      key: 'support',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                {/* Decorative dot */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#f97316] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#14b8a6] transition-colors">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`${service.key}.description`)}
              </p>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-[#14b8a6] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Need a custom solution? Let's discuss your project
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#14b8a6] text-white rounded-lg font-semibold hover:bg-[#0d9488] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
