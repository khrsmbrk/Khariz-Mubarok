import React from 'react';
import { User, Plus, Search } from 'lucide-react';

const SRMJadwalDokter = () => {
  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col md:flex-row gap-4">
      
      {/* Left Panel - Doctor List */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-2">
          <User className="w-6 h-6 text-slate-700" />
          <h1 className="text-xl font-bold text-slate-800">Jadwal Dokter</h1>
        </div>

        <div className="border border-slate-300 rounded-sm flex-1 flex flex-col bg-slate-50">
          <div className="p-2 border-b border-slate-300 flex justify-between items-center bg-white">
            <span className="text-sm font-bold text-slate-700">Daftar Dokter</span>
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-medium flex items-center gap-1 shadow-sm">
              <Plus className="w-3 h-3" /> Tambah
            </button>
          </div>
          <div className="flex-1 overflow-auto bg-white">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <tr>
                  <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">Kode</th>
                  <th className="px-3 py-2 font-bold">Nama</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-200">
                  <td colSpan={2} className="px-3 py-8 text-center text-slate-400 italic">Pilih dokter untuk melihat jadwal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Panel - Schedule */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-2">
          <h2 className="text-sm font-bold text-slate-700">Pilih dokter untuk melihat jadwal</h2>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-slate-700">Jadwal Mingguan</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 shadow-sm">
              <Plus className="w-4 h-4" /> Tambah Jadwal
            </button>
          </div>

          {/* Weekly Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((day) => (
              <div key={day} className="border border-slate-300 rounded-sm bg-white flex flex-col items-center justify-center p-4 min-h-[100px] shadow-sm">
                <span className="text-blue-600 font-bold mb-2">{day}</span>
                <span className="text-slate-400">-</span>
              </div>
            ))}
          </div>

          {/* Schedule List */}
          <div className="border border-slate-300 rounded-sm flex-1 flex flex-col bg-white mt-4">
            <div className="flex-1 overflow-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-300">
                  <tr>
                    <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">Hari</th>
                    <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">Mulai</th>
                    <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">Selesai</th>
                    <th className="px-3 py-2 font-bold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-slate-200">
                    <td colSpan={4} className="px-3 py-8 text-center text-slate-400 italic">Belum ada jadwal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SRMJadwalDokter;
