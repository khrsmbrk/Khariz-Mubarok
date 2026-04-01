import React, { useState } from 'react';
import { FileText, Download, Printer, Filter, Calendar, FileDown } from 'lucide-react';

const SRMLaporanPDF = () => {
  const [jenisLaporan, setJenisLaporan] = useState('kunjungan');
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" />
            Laporan PDF
          </h1>
          <p className="text-slate-500">Cetak dan unduh laporan dalam format PDF</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar Filter */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-blue-600" />
              Parameter Laporan
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Jenis Laporan</label>
                <select 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={jenisLaporan}
                  onChange={(e) => setJenisLaporan(e.target.value)}
                >
                  <option value="kunjungan">Laporan Kunjungan Pasien</option>
                  <option value="pendapatan">Laporan Pendapatan</option>
                  <option value="diagnosa">Laporan 10 Besar Diagnosa</option>
                  <option value="tindakan">Laporan Tindakan Medis</option>
                  <option value="obat">Laporan Penggunaan Obat</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Periode Awal</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="date" 
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Periode Akhir</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="date" 
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Poliklinik (Opsional)</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="semua">Semua Poliklinik</option>
                  <option value="umum">Poli Umum</option>
                  <option value="gigi">Poli Gigi</option>
                  <option value="anak">Poli Anak</option>
                  <option value="kandungan">Poli Kandungan</option>
                </select>
              </div>

              <div className="pt-4 border-t border-slate-200 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" /> Tampilkan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 h-full flex flex-col">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-xl">
              <h2 className="font-semibold text-slate-800">Preview Laporan</h2>
              <div className="flex gap-2">
                <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Cetak">
                  <Printer className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Unduh PDF">
                  <FileDown className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-8 bg-slate-200 flex items-center justify-center min-h-[400px]">
              <div className="bg-white p-8 shadow-md w-full max-w-2xl aspect-[1/1.4] flex flex-col items-center justify-center text-center border border-slate-300">
                <FileText className="w-16 h-16 text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-700 mb-2">Belum Ada Data</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Silakan atur parameter laporan di panel sebelah kiri dan klik tombol "Tampilkan" untuk melihat preview laporan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRMLaporanPDF;
