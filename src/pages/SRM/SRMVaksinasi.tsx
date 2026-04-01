import React, { useState } from 'react';
import { Syringe, Search, Filter, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const SRMVaksinasi = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Syringe className="w-6 h-6 text-blue-600" />
            Riwayat Vaksinasi
          </h1>
          <p className="text-slate-500">Data riwayat imunisasi dan vaksinasi pasien</p>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
          <Syringe className="w-4 h-4" /> Input Vaksin Baru
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari nama pasien, NIK, atau jenis vaksin..." 
              className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="semua">Semua Vaksin</option>
              <option value="covid">COVID-19</option>
              <option value="polio">Polio</option>
              <option value="campak">Campak</option>
              <option value="bcg">BCG</option>
            </select>
            <button className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2 bg-white">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-medium">Tanggal</th>
                <th className="px-6 py-3 font-medium">Nama Pasien</th>
                <th className="px-6 py-3 font-medium">Jenis Vaksin</th>
                <th className="px-6 py-3 font-medium">Dosis</th>
                <th className="px-6 py-3 font-medium">No. Batch</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: 1, date: '2023-10-15', name: 'Ahmad Dahlan', type: 'COVID-19 (Sinovac)', dose: 'Dosis 1', batch: 'SNV-2023-01', status: 'Selesai' },
                { id: 2, date: '2023-10-15', name: 'Siti Aisyah', type: 'Polio', dose: 'Booster', batch: 'POL-2023-05', status: 'Selesai' },
                { id: 3, date: '2023-10-14', name: 'Budi Santoso', type: 'Campak', dose: 'Dosis Tunggal', batch: 'CMP-2023-02', status: 'Selesai' },
                { id: 4, date: '2023-10-14', name: 'Rina Wati', type: 'COVID-19 (Pfizer)', dose: 'Booster 1', batch: 'PFZ-2023-08', status: 'Selesai' },
                { id: 5, date: '2023-10-13', name: 'Joko Widodo', type: 'BCG', dose: 'Dosis 1', batch: 'BCG-2023-01', status: 'Selesai' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-slate-600">{item.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{item.name}</td>
                  <td className="px-6 py-4 text-slate-600">{item.type}</td>
                  <td className="px-6 py-4 text-slate-600">{item.dose}</td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{item.batch}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <CheckCircle className="w-3 h-3" /> {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50">
          <div>Menampilkan 1-5 dari 124 data</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded bg-white text-slate-400 cursor-not-allowed">Sebelumnya</button>
            <button className="px-3 py-1 border border-slate-300 rounded bg-blue-50 text-blue-600 font-medium">1</button>
            <button className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50">2</button>
            <button className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50">3</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50">Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRMVaksinasi;
