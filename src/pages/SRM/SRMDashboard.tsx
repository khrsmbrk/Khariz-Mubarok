import React from 'react';
import { Users, Calendar, CalendarDays, DollarSign, Wallet, ClipboardList, RefreshCw } from 'lucide-react';

const SRMDashboard = () => {
  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-2">
          <BarChartIcon className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-bold text-slate-800">Dashboard Statistik</h1>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm flex items-center gap-2 shadow-sm">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>
      
      <p className="text-xs text-slate-500 italic mb-4">Terakhir diperbarui: 2025-12-13 05:02:52</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Pasien */}
        <div className="border-l-4 border-l-blue-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <Users className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Pasien</p>
            <p className="text-2xl font-bold text-blue-500">2</p>
          </div>
        </div>

        {/* Kunjungan Hari Ini */}
        <div className="border-l-4 border-l-green-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <Calendar className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Kunjungan Hari Ini</p>
            <p className="text-2xl font-bold text-green-500">0</p>
          </div>
        </div>

        {/* Kunjungan Bulan Ini */}
        <div className="border-l-4 border-l-orange-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <CalendarDays className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Kunjungan Bulan Ini</p>
            <p className="text-2xl font-bold text-orange-500">0</p>
          </div>
        </div>

        {/* Pendapatan Hari Ini */}
        <div className="border-l-4 border-l-purple-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <DollarSign className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Pendapatan Hari Ini</p>
            <p className="text-2xl font-bold text-purple-500">Rp 0</p>
          </div>
        </div>

        {/* Pendapatan Bulan Ini */}
        <div className="border-l-4 border-l-red-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <Wallet className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Pendapatan Bulan Ini</p>
            <p className="text-2xl font-bold text-red-500">Rp 0</p>
          </div>
        </div>

        {/* Total Kunjungan */}
        <div className="border-l-4 border-l-teal-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <ClipboardList className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Kunjungan</p>
            <p className="text-2xl font-bold text-teal-500">0</p>
          </div>
        </div>
      </div>

      {/* Charts Area (Placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 flex-1 min-h-[200px]">
        <div className="border border-slate-300 rounded-sm p-4 flex flex-col">
          <h3 className="text-sm font-bold text-slate-700 mb-4">Kunjungan 7 Hari Terakhir</h3>
          <div className="flex-1 border-b border-l border-slate-300 flex items-end justify-between px-2 pb-1 relative">
             {/* Fake chart bars */}
             {[0,0,0,0,0,0,0].map((val, i) => (
                <div key={i} className="flex flex-col items-center w-8">
                  <div className="w-full bg-blue-400 rounded-t-sm" style={{height: `${val}px`}}></div>
                  <span className="text-[10px] text-slate-500 mt-1">{`0${i+7}/12`}</span>
                </div>
             ))}
          </div>
        </div>
        <div className="border border-slate-300 rounded-sm p-4 flex flex-col">
          <h3 className="text-sm font-bold text-slate-700 mb-4">Pendapatan 7 Hari Terakhir (Ribu)</h3>
          <div className="flex-1 border-b border-l border-slate-300 flex items-end justify-between px-2 pb-1 relative">
             {/* Fake chart bars */}
             {[0,0,0,0,0,0,0].map((val, i) => (
                <div key={i} className="flex flex-col items-center w-8">
                  <div className="w-full bg-green-400 rounded-t-sm" style={{height: `${val}px`}}></div>
                  <span className="text-[10px] text-slate-500 mt-1">{`0${i+7}/12`}</span>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Aktivitas Terakhir Table */}
      <div className="border border-slate-300 rounded-sm overflow-hidden">
        <div className="bg-slate-100 px-3 py-2 border-b border-slate-300 flex items-center gap-2">
          <ClipboardList className="w-4 h-4 text-slate-600" />
          <h3 className="text-sm font-bold text-slate-700">Aktivitas Terakhir</h3>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-400 text-white text-xs">
            <tr>
              <th className="px-3 py-2 font-medium border-r border-blue-300">Tanggal</th>
              <th className="px-3 py-2 font-medium border-r border-blue-300">Jam</th>
              <th className="px-3 py-2 font-medium border-r border-blue-300">No RM</th>
              <th className="px-3 py-2 font-medium border-r border-blue-300">Nama Pasien</th>
              <th className="px-3 py-2 font-medium">Total Biaya</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-slate-200">
              <td colSpan={5} className="px-3 py-8 text-center text-slate-400 italic">Belum ada aktivitas hari ini</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Helper icon
const BarChartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

export default SRMDashboard;
