import { create } from 'zustand';
import { Lang } from '../utils/translations';

interface LangState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: 'ID',
  setLang: (lang) => set({ lang }),
}));
