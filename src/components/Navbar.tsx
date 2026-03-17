import React from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Jadwal Dokter", href: "/portal/pendaftaran" },
  { label: "Portal Pasien", href: "/portal/pendaftaran" },
  { label: "SMART Office", href: "/smart-office" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-20">
      {/* Top bar IGD */}
      <div className="bg-emerald-700 text-white text-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4 py-1.5">
          <p className="font-medium">
            IGD 24 Jam: <span className="font-semibold">0322-XXXXXX</span>
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span>Portal Internal:</span>
            <Link
              to="/portal/pendaftaran"
              className="underline underline-offset-2 hover:text-emerald-100"
            >
              Portal Pasien
            </Link>
            <span className="text-emerald-200">|</span>
            <Link
              to="/smart-office"
              className="underline underline-offset-2 hover:text-emerald-100"
            >
              SMART Office
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-emerald-700 text-white flex items-center justify-center text-sm font-bold">
            RS
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Rumah Sakit Universitas Muhammadiyah Lamongan
            </p>
            <p className="text-xs text-slate-500">
              Melayani dengan Cepat, Tepat, dan Islami
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-slate-600 hover:text-emerald-700 font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/portal/pendaftaran"
            className="rounded-full bg-emerald-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Daftar Berobat
          </Link>
        </div>
      </nav>
    </header>
  );
}
