'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-[#14b8a6] hover:bg-teal-50 transition-all duration-200 group"
      aria-label="Switch language"
    >
      <Globe className="w-5 h-5 text-gray-600 group-hover:text-[#14b8a6] transition-colors" />
      <span className="text-sm font-medium text-gray-700 group-hover:text-[#14b8a6] transition-colors">
        {locale === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}
