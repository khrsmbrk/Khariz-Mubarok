import React from 'react';
import { FileText, RefreshCw, FileSpreadsheet, XCircle } from 'lucide-react';

const SRMKunjungan = () => {
  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
        <h1 className="text-xl font-bold text-slate-800 uppercase tracking-wider">LAPORAN KUNJUNGAN</h1>
      </div>

      {/* Filters & Summary */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 bg-slate-50 p-3 border border-slate-300 rounded-sm">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-slate-700">DARI TANGGAL :</label>
            <div className="flex gap-1">
              <select className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>13</option>
              </select>
              <select className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Nov 2025</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-slate-700">S/D TANGGAL :</label>
            <div className="flex gap-1">
              <select className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>13</option>
              </select>
              <select className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Des 2025</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-slate-700">Operator :</label>
            <select className="border border-slate-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Semua</option>
            </select>
          </div>

          <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-green-600 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
            <RefreshCw className="w-4 h-4" /> REFRESH
          </button>
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-1 text-sm text-blue-600 font-medium">
          <div className="flex justify-between w-64"><span>TOTAL BIAYA PEMERIKSAAN FISIK</span><span>: Rp 0</span></div>
          <div className="flex justify-between w-64"><span>TOTAL BIAYA PEMERIKSAAN PENUNJANG</span><span>: Rp 0</span></div>
          <div className="flex justify-between w-64"><span>TOTAL BIAYA DIAGNOSIS</span><span>: Rp 0</span></div>
          <div className="flex justify-between w-64"><span>TOTAL BIAYA TERAPI</span><span>: Rp 0</span></div>
          <div className="flex justify-between w-64"><span>TOTAL BIAYA TINDAKAN</span><span>: Rp 0</span></div>
          <div className="flex justify-between w-64 border-t border-blue-200 pt-1 mt-1 font-bold"><span>TOTAL BIAYA</span><span>: Rp 0</span></div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto border border-slate-300 rounded-sm mb-4">
        <table className="w-full text-xs text-left whitespace-nowrap">
          <thead className="bg-slate-100 text-slate-700 border-b border-slate-300 sticky top-0 z-10">
            <tr>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">NO</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">KODE TRANSAKSI</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">TANGGAL</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">NO.RM</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300">NAMA PASIEN</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-right">B.PEMERIKSAAN FISIK</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-right">B.PEMERIKSAAN PENUNJANG</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-right">B.DIAGNOSIS</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-right">B.TERAPI</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-right">B.TINDAKAN</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-right">TOTAL BIAYA</th>
              <th className="px-3 py-2 font-bold text-center">OPERA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-slate-200">
              <td colSpan={12} className="px-3 py-8 text-center text-slate-400 italic">Tidak ada data kunjungan pada periode ini</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center gap-4 bg-slate-50 p-3 border border-slate-300 rounded-sm">
        <div className="flex items-center gap-2 flex-1">
          <label className="text-sm font-bold text-slate-700 whitespace-nowrap">Cari Pasien :</label>
          <input type="text" placeholder="Masukkan No.RM/Nama..." className="w-full max-w-md border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" />
        </div>

        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
          <FileSpreadsheet className="w-4 h-4 text-green-600" /> Export Ke Excel
        </button>

        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-red-600 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
          <XCircle className="w-4 h-4" /> Keluar
        </button>
      </div>
    </div>
  );
};

export default SRMKunjungan;
