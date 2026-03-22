import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SiteSettings {
  logoUrl: string;
  heroImage: string;
  heroTitleId: string;
  heroTitleEn: string;
  heroSubtitleId: string;
  heroSubtitleEn: string;
  primaryColor: string;
}

interface SiteState {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
}

export const useSiteStore = create<SiteState>()(
  persist(
    (set) => ({
      settings: {
        logoUrl: '/logo-rsumla.png',
        heroImage: 'https://picsum.photos/seed/hospital/1920/1080',
        heroTitleId: 'Melayani dengan Ilmu,\nMenyembuhkan dengan Hati.',
        heroTitleEn: 'Serving with Knowledge,\nHealing with Heart.',
        heroSubtitleId: 'Rumah Sakit Universitas Muhammadiyah Lamongan hadir memberikan layanan kesehatan paripurna, terintegrasi dengan pendidikan dan penelitian medis terkini.',
        heroSubtitleEn: 'Muhammadiyah Lamongan University Hospital is here to provide comprehensive healthcare services, integrated with the latest medical education and research.',
        primaryColor: 'emerald',
      },
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: 'site-settings-v2',
    }
  )
);
