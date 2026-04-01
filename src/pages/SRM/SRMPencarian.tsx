import React, { useState } from 'react';
import { Search, Filter, Calendar, Users, FileText, Download } from 'lucide-react';

const SRMPencarian = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    kategori: 'semua',
    tanggalAwal: '',
    tanggalAkhir: '',
    status: 'semua'
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Search className="w-6 h-6 text-blue-600" />
            Pencarian Lanjutan
          </h1>
          <p className="text-slate-500">Cari data pasien, rekam medis, dan kunjungan secara mendetail</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
        <div className="p-5 border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-12">
              <label className="block text-xs font-medium text-slate-600 mb-1">Kata Kunci (Nama, No. RM, NIK)</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ketik kata kunci pencarian..."
                  value={searchParams.keyword}
                  onChange={(e) => setSearchParams({...searchParams, keyword: e.target.value})}
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-slate-600 mb-1">Kategori Data</label>
              <select 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchParams.kategori}
                onChange={(e) => setSearchParams({...searchParams, kategori: e.target.value})}
              >
                <option value="semua">Semua Kategori</option>
                <option value="pasien">Data Pasien</option>
                <option value="kunjungan">Riwayat Kunjungan</option>
                <option value="rekam_medis">Rekam Medis</option>
                <option value="tagihan">Tagihan & Pembayaran</option>
              </select>
            </div>
            
            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-slate-600 mb-1">Tanggal Mulai</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="date" 
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchParams.tanggalAwal}
                  onChange={(e) => setSearchParams({...searchParams, tanggalAwal: e.target.value})}
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-slate-600 mb-1">Tanggal Akhir</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="date" 
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchParams.tanggalAkhir}
                  onChange={(e) => setSearchParams({...searchParams, tanggalAkhir: e.target.value})}
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-slate-600 mb-1">Status</label>
              <select 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchParams.status}
                onChange={(e) => setSearchParams({...searchParams, status: e.target.value})}
              >
                <option value="semua">Semua Status</option>
                <option value="aktif">Aktif</option>
                <option value="selesai">Selesai</option>
                <option value="batal">Dibatalkan</option>
              </select>
            </div>
          </div>
          
          <div className="mt-5 flex justify-end gap-3">
            <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" /> Reset Filter
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
              <Search className="w-4 h-4" /> Terapkan Pencarian
            </button>
          </div>
        </div>
        
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-1">Mulai Pencarian</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Gunakan form di atas untuk mencari data secara spesifik. Anda dapat mengkombinasikan berbagai filter untuk hasil yang lebih akurat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SRMPencarian;
