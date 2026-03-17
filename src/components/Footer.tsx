import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Rumah Sakit Universitas Muhammadiyah
          Lamongan. Simulasi sistem informasi untuk mahasiswa S1 Administrasi
          Rumah Sakit.
        </p>
        <p>
          Dibangun dengan React dan Tailwind CSS sebagai Single Page
          Application berbasis pembelajaran.
        </p>
      </div>
    </footer>
  );
}
