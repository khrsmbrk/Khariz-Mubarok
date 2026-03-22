import React from 'react';
import { Users, Calendar, CalendarDays, DollarSign, Wallet, ClipboardList, RefreshCw, BarChart } from 'lucide-react';
import { useSRMStore } from '../../store/srmStore';

const SRMDashboard = () => {
  const patients = useSRMStore((state) => state.patients);
  const visits = useSRMStore((state) => state.visits);
  
  // Calculate stats
  const totalPasien = patients.length;
  
  const today = new Date().toISOString().split('T')[0];
  const currentMonth = today.substring(0, 7); // YYYY-MM
  
  const visitsToday = visits.filter(v => v.tanggalKunjungan.startsWith(today));
  const visitsThisMonth = visits.filter(v => v.tanggalKunjungan.startsWith(currentMonth));
  
  const pendapatanHariIni = visitsToday.reduce((sum, v) => sum + (v.totalBiaya || 0), 0);
  const pendapatanBulanIni = visitsThisMonth.reduce((sum, v) => sum + (v.totalBiaya || 0), 0);
  const totalKunjungan = visits.length;

  // Format currency
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col overflow-y-auto">
      <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-2">
          <BarChart className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-bold text-slate-800">Dashboard Statistik</h1>
        </div>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm flex items-center gap-2 shadow-sm"
          onClick={() => alert('Data berhasil diperbarui!')}
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>
      
      <p className="text-xs text-slate-500 italic mb-4">Terakhir diperbarui: {new Date().toLocaleString('id-ID')}</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Pasien */}
        <div className="border-l-4 border-l-blue-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <Users className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Pasien</p>
            <p className="text-2xl font-bold text-blue-500">{totalPasien}</p>
          </div>
        </div>

        {/* Kunjungan Hari Ini */}
        <div className="border-l-4 border-l-green-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <Calendar className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Kunjungan Hari Ini</p>
            <p className="text-2xl font-bold text-green-500">{visitsToday.length}</p>
          </div>
        </div>

        {/* Kunjungan Bulan Ini */}
        <div className="border-l-4 border-l-orange-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <CalendarDays className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Kunjungan Bulan Ini</p>
            <p className="text-2xl font-bold text-orange-500">{visitsThisMonth.length}</p>
          </div>
        </div>

        {/* Pendapatan Hari Ini */}
        <div className="border-l-4 border-l-purple-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <DollarSign className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Pendapatan Hari Ini</p>
            <p className="text-2xl font-bold text-purple-500">{formatRupiah(pendapatanHariIni)}</p>
          </div>
        </div>

        {/* Pendapatan Bulan Ini */}
        <div className="border-l-4 border-l-red-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <Wallet className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Pendapatan Bulan Ini</p>
            <p className="text-2xl font-bold text-red-500">{formatRupiah(pendapatanBulanIni)}</p>
          </div>
        </div>

        {/* Total Kunjungan */}
        <div className="border-l-4 border-l-teal-500 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex items-center">
          <div className="bg-slate-100 p-3 rounded-full mr-4">
            <ClipboardList className="w-8 h-8 text-slate-700" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Kunjungan</p>
            <p className="text-2xl font-bold text-teal-500">{totalKunjungan}</p>
          </div>
        </div>
      </div>

      {/* Charts Area (Placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 flex-1 min-h-[200px]">
        <div className="border border-slate-300 rounded-sm p-4 flex flex-col">
          <h3 className="text-sm font-bold text-slate-700 mb-4">Kunjungan 7 Hari Terakhir</h3>
          <div className="flex-1 border-b border-l border-slate-300 flex items-end justify-between px-2 pb-1 relative">
             {/* Fake chart bars */}
             {[10, 25, 15, 40, 30, 20, visitsToday.length * 10].map((val, i) => (
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
             {[15, 30, 20, 50, 40, 25, (pendapatanHariIni / 10000) || 5].map((val, i) => (
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
            {visits.length === 0 ? (
              <tr className="bg-white border-b border-slate-200">
                <td colSpan={5} className="px-3 py-8 text-center text-slate-400 italic">Belum ada aktivitas hari ini</td>
              </tr>
            ) : (
              visits.slice(-5).reverse().map((visit) => {
                const patient = patients.find(p => p.id === visit.patientId);
                const dateObj = new Date(visit.tanggalKunjungan);
                return (
                  <tr key={visit.id} className="bg-white border-b border-slate-200 hover:bg-slate-50">
                    <td className="px-3 py-2 border-r border-slate-200">{dateObj.toLocaleDateString('id-ID')}</td>
                    <td className="px-3 py-2 border-r border-slate-200">{dateObj.toLocaleTimeString('id-ID', {hour: '2-digit', minute: '2-digit'})}</td>
                    <td className="px-3 py-2 border-r border-slate-200">{visit.patientId}</td>
                    <td className="px-3 py-2 border-r border-slate-200">{patient?.namaLengkap || 'Unknown'}</td>
                    <td className="px-3 py-2">{formatRupiah(visit.totalBiaya)}</td>
                  </tr>
                );
              })
            )}
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
