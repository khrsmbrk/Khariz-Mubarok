import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Globe, Menu, X, ChevronRight, PlayCircle, 
  Calendar, MapPin, Phone, Mail, ArrowRight
} from 'lucide-react';
import { 
  quickAccess, layananUnggulan, beritaRSUMLA, 
  seputarUMLA, agendaDiklit, inovasiLayanan, mediaEdukasi 
} from '../data/rsumlaData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('ID');

  const menus = [
    'Beranda', 'Profil', 'Pelayanan', 'Diklat & Penelitian', 
    'Promosi Kesehatan', 'Laporan', 'Reformasi Birokrasi', 'PPID', 'Pengaduan'
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emerald-700 text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Rumah Sakit Pendidikan Universitas Muhammadiyah Lamongan</span>
          <span className="sm:hidden">RSUMLA</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-emerald-200 transition-colors">Portal Pasien</button>
          <button className="hover:text-emerald-200 transition-colors">SIM RSUMLA</button>
          <div className="flex items-center border-l border-emerald-600 pl-4 ml-2">
            <button 
              onClick={() => setLang('ID')} 
              className={`px-1.5 ${lang === 'ID' ? 'font-bold' : 'text-emerald-300'}`}
            >ID</button>
            <span>|</span>
            <button 
              onClick={() => setLang('EN')} 
              className={`px-1.5 ${lang === 'EN' ? 'font-bold' : 'text-emerald-300'}`}
            >EN</button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-emerald-700 font-bold text-xl">RS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-800 leading-tight">RSUMLA</span>
              <span className="text-xs text-slate-500 font-medium">Universitas Muhammadiyah Lamongan</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menus.map((menu, idx) => (
              <a key={idx} href="#" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors">
                {menu}
              </a>
            ))}
            <button className="ml-2 p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
          {menus.map((menu, idx) => (
            <a key={idx} href="#" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">
              {menu}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/hospital/1920/1080" 
          alt="RSUMLA Building" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-slate-900/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider mb-4 border border-emerald-500/30">
            TEACHING HOSPITAL RSUMLA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Melayani dengan Ilmu,<br/>Menyembuhkan dengan Hati.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Rumah Sakit Pendidikan Universitas Muhammadiyah Lamongan hadir memberikan layanan kesehatan paripurna, terintegrasi dengan pendidikan dan penelitian medis terkini.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/portal/pendaftaran" className="px-8 py-3.5 text-base font-bold text-emerald-900 bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg transition-all">
              Pendaftaran Online
            </Link>
            <Link to="/srm/dashboard" className="px-8 py-3.5 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full shadow-lg transition-all">
              SIM RSUMLA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AksesCepat = () => {
  return (
    <section className="py-16 bg-slate-50 relative -mt-10 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full mr-3"></span>
            Akses Cepat Layanan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickAccess.map((item) => (
              <Link key={item.id} to={item.link} className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-emerald-100 text-slate-600 group-hover:text-emerald-600 rounded-full flex items-center justify-center mb-3 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-emerald-700">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LayananUnggulan = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Layanan Unggulan RSUMLA</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Pusat pelayanan medis terpadu yang didukung oleh tenaga ahli dan teknologi terkini untuk memberikan perawatan terbaik.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layananUnggulan.map((item) => (
            <div key={item.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeritaDanSeputar = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Berita RSUMLA */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span>
                Berita RSUMLA
              </h2>
              <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center">
                Lihat semua <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {beritaRSUMLA.map((berita) => (
                <div key={berita.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={berita.image} alt={berita.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                      {berita.kategori}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-xs text-slate-500 mb-3">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" /> {berita.tanggal}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      <a href="#">{berita.judul}</a>
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{berita.ringkasan}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seputar UMLA */}
          <div>
            <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full mr-3"></span>
                Seputar UMLA
              </h2>
            </div>
            <div className="space-y-6">
              {seputarUMLA.map((item) => (
                <div key={item.id} className="group">
                  <div className="flex items-center text-xs text-emerald-600 font-bold mb-1">
                    <span>{item.kategori}</span>
                    <span className="mx-2 text-slate-300">•</span>
                    <span className="text-slate-500 font-normal">{item.tanggal}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-1.5 group-hover:text-emerald-600 transition-colors">
                    <a href="#">{item.judul}</a>
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{item.ringkasan}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-block mt-6 text-sm font-bold text-emerald-600 hover:text-emerald-700">
              Lihat kegiatan pendidikan &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

const DiklitDanInovasi = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Diklit & Agenda */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full mr-3"></span>
              Diklit & Agenda Pelatihan
            </h2>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <ul className="divide-y divide-slate-200">
                {agendaDiklit.map((agenda) => (
                  <li key={agenda.id} className="p-4 hover:bg-white transition-colors flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center mr-4">
                      <span className="text-xs text-slate-500 font-medium uppercase">{agenda.tanggal.split(' ')[1]}</span>
                      <span className="text-lg font-bold text-slate-800">{agenda.tanggal.split(' ')[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${agenda.status === 'Selesai' ? 'bg-slate-200 text-slate-600' : 'bg-purple-100 text-purple-700'}`}>
                          {agenda.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">{agenda.judul}</h4>
                      <p className="text-xs text-slate-500 mt-1">{agenda.tanggal}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="inline-block mt-4 text-sm font-bold text-purple-600 hover:text-purple-700">
              Lihat semua agenda &rarr;
            </a>
          </div>

          {/* Inovasi & Edukasi */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-1.5 h-5 bg-orange-500 rounded-full mr-2"></span>
                Inovasi Layanan
              </h2>
              <div className="space-y-4">
                {inovasiLayanan.map((inovasi) => (
                  <div key={inovasi.id} className="bg-white border border-slate-200 p-4 rounded-xl hover:border-orange-200 hover:shadow-md transition-all">
                    <h4 className="text-sm font-bold text-slate-800 mb-1">{inovasi.judul}</h4>
                    <p className="text-xs text-slate-600">{inovasi.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-1.5 h-5 bg-red-500 rounded-full mr-2"></span>
                Media Edukasi
              </h2>
              <div className="bg-slate-900 rounded-2xl p-5 text-white">
                <div className="flex items-center mb-4 text-red-400">
                  <PlayCircle className="w-6 h-6 mr-2" />
                  <span className="font-bold text-sm">RSUMLA Podcast</span>
                </div>
                <ul className="space-y-3">
                  {mediaEdukasi.map((edu) => (
                    <li key={edu.id} className="group border-b border-slate-700 pb-3 last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">{edu.episode}</span>
                      <a href="#" className="text-sm font-medium text-slate-200 group-hover:text-white leading-snug block mb-2">
                        {edu.judul}
                      </a>
                      <button className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center">
                        Tonton Video <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg">
                RS
              </div>
              <div>
                <h3 className="font-bold text-xl text-white leading-tight">RSUMLA</h3>
                <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Rumah Sakit Pendidikan</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-md leading-relaxed">
              Rumah Sakit Universitas Muhammadiyah Lamongan (RSUMLA) adalah rumah sakit pendidikan yang berkomitmen memberikan pelayanan kesehatan paripurna, bermutu, dan Islami.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Jl. Raya Plalangan Plosowahyu KM 2, Lamongan, Jawa Timur 62218</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <span>(0322) 322356 (Hunting)</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <span>info@rsumla.ac.id</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Profil RSUMLA</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Jadwal Dokter</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pendaftaran Online</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Ketersediaan Kamar</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Karir & Lowongan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Layanan Publik</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Standar Pelayanan Publik</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pengaduan Masyarakat</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">PPID (Informasi Publik)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Whistleblowing System</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Survei Kepuasan (IKM)</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 Instalasi Teknologi Komunikasi dan Informasi, RSUMLA.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Peta Situs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function HomePageRSUMLA() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <AksesCepat />
        <LayananUnggulan />
        <BeritaDanSeputar />
        <DiklitDanInovasi />
      </main>
      <Footer />
    </div>
  );
}
