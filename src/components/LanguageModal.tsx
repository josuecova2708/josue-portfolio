'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function LanguageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Verificar si ya se seleccionó un idioma
    const hasSelectedLanguage = localStorage.getItem('language-selected');

    if (!hasSelectedLanguage) {
      // Mostrar modal después de un pequeño delay
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    }
  }, []);

  const selectLanguage = (locale: 'en' | 'es') => {
    // Guardar que ya se seleccionó un idioma
    localStorage.setItem('language-selected', 'true');

    // Cerrar modal con animación
    setIsOpen(false);

    // Cambiar al idioma seleccionado
    router.replace(pathname, { locale });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Choose Your Language
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Elige tu idioma preferido
              </p>

              {/* Language Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => selectLanguage('en')}
                  className="w-full group relative overflow-hidden px-6 py-4 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-lg">🇺🇸 English</span>
                    <span className="text-sm opacity-90">United States</span>
                  </div>
                </button>

                <button
                  onClick={() => selectLanguage('es')}
                  className="w-full group relative overflow-hidden px-6 py-4 bg-white border-2 border-[#14b8a6] text-[#14b8a6] rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-lg">🇪🇸 Español</span>
                    <span className="text-sm opacity-90">España / América Latina</span>
                  </div>
                </button>
              </div>

              {/* Footer note */}
              <p className="text-xs text-gray-500 text-center mt-6">
                You can change the language anytime from the navigation menu
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
