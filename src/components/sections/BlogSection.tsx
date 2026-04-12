'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const t = useTranslations('blog');

  // Placeholder blog posts - Replace with CMS data later
  const posts = [
    {
      title: 'Getting Started with Next.js 14: A Complete Guide',
      excerpt: 'Learn how to build modern web applications with Next.js 14, covering App Router, Server Components, and more.',
      date: '2026-01-05',
      readTime: '8 min read',
      category: 'Tutorial',
      slug: '#',
    },
    {
      title: 'Building Scalable REST APIs with NestJS',
      excerpt: 'Best practices for creating production-ready APIs using NestJS, TypeScript, and PostgreSQL.',
      date: '2025-12-28',
      readTime: '10 min read',
      category: 'Backend',
      slug: '#',
    },
    {
      title: 'Why Your Business Needs a Modern Web Presence',
      excerpt: 'Discover how a well-designed website can transform your business and attract more customers.',
      date: '2025-12-20',
      readTime: '5 min read',
      category: 'Business',
      slug: '#',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
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

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#14b8a6] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-teal-100 to-cyan-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-2">📝</div>
                    <p className="text-gray-600 text-sm font-medium">{post.category}</p>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[#14b8a6] text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#14b8a6] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={post.slug}
                  className="inline-flex items-center gap-2 text-[#14b8a6] font-semibold hover:gap-3 transition-all group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon / View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gray-50 rounded-2xl p-8 max-w-2xl">
            <p className="text-gray-600 mb-4">{t('coming_soon')}</p>
            <p className="text-sm text-gray-500">
              Stay tuned for technical articles, tutorials, and insights on web development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
