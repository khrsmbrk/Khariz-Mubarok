export type Lang = 'ID' | 'EN';

export const t = (lang: Lang, id: string, en: string) => lang === 'ID' ? id : en;
