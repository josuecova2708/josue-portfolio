'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function PortfolioSection() {
  const t = useTranslations('portfolio');

  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Real projects with images and translations
  const projects = [
    {
      id: 'proj1',
      images: ['/proj1_1.png', '/proj1_2.png', '/proj1_3.png'],
      tags: ['Next.js', 'NestJS', 'PostgreSQL'],
      live: 'https://efarmacia.duckdns.org/',
    },
    {
      id: 'proj2',
      images: ['/proy2_1.png', '/proy2_2.png', '/proy2_3.png'],
      tags: ['React', 'Node.js', 'Tailwind'],
      live: 'https://condo-smart-uagrm.duckdns.org/login',
    },
    {
      id: 'proj3',
      images: ['/proy3_1.png', '/proy3_2.png'],
      tags: ['Next.js', 'TypeScript', 'CSS'],
      live: 'https://calculadora-interes-tawny.vercel.app/',
    },
  ];

  const openLightbox = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProjectIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectIndex !== null) {
      setCurrentImageIndex((prev) => (prev + 1) % projects[selectedProjectIndex].images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectIndex !== null) {
      setCurrentImageIndex((prev) => (prev - 1 + projects[selectedProjectIndex].images.length) % projects[selectedProjectIndex].images.length);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div
                className="relative h-48 bg-gray-200 overflow-hidden cursor-pointer group/image"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.images[0]}
                  alt={t(`projects.${project.id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />

                {/* Overlay for expanding */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white shadow-lg">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Gradient overlay on hover for links */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3 pointer-events-none"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#14b8a6] transition-colors">
                  {t(`projects.${project.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {t(`projects.${project.id}.description`)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 text-[#14b8a6] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProjectIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-[110]"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Navigation and Main Image Container */}
              <div
                className="relative w-full max-w-5xl flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                {/* Prev Button */}
                {projects[selectedProjectIndex].images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-[110]"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                )}

                {/* Main Image */}
                <motion.img
                  key={currentImageIndex} // forces re-animation on image change
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  src={projects[selectedProjectIndex].images[currentImageIndex]}
                  alt={`${t(`projects.${projects[selectedProjectIndex].id}.title`)} snapshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Next Button */}
                {projects[selectedProjectIndex].images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-[110]"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                )}

                {/* Image Counter */}
                {projects[selectedProjectIndex].images.length > 1 && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/70 bg-black/50 px-4 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {projects[selectedProjectIndex].images.length}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
