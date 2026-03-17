import React, { useState } from 'react';
import { ClipboardList, Megaphone, SkipForward, RotateCcw, Settings, Plus } from 'lucide-react';

const SRMAntrian = () => {
  const [currentQueue, setCurrentQueue] = useState('-');
  const [nextQueue, setNextQueue] = useState('---');
  const [total, setTotal] = useState(0);
  const [waiting, setWaiting] = useState(0);
  const [finished, setFinished] = useState(0);

  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col md:flex-row gap-4">
      
      {/* Left Panel - Queue Display */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="bg-slate-800 rounded-md p-4 flex flex-col items-center justify-center text-white shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="w-6 h-6" />
            <h2 className="text-xl font-bold tracking-wider">ANTRIAN PASIEN</h2>
          </div>
          <div className="flex justify-between w-full text-sm text-slate-300 mb-6">
            <span>Sabtu, 13 Desember 2025</span>
            <span className="text-yellow-400 font-mono text-lg">05:02:42</span>
          </div>
          
          {/* Current Queue */}
          <div className="bg-green-500 w-full rounded-md p-6 flex flex-col items-center justify-center mb-4 shadow-inner">
            <span className="text-sm font-medium mb-2 uppercase tracking-wider">Nomor Antrian Sekarang</span>
            <span className="text-6xl font-bold">{currentQueue}</span>
          </div>

          {/* Next Queue */}
          <div className="bg-blue-500 w-full rounded-md p-6 flex flex-col items-center justify-center mb-4 shadow-inner">
            <span className="text-sm font-medium mb-2 uppercase tracking-wider">Antrian Berikutnya</span>
            <span className="text-4xl font-bold">{nextQueue}</span>
          </div>

          {/* Stats */}
          <div className="flex justify-between w-full gap-2">
            <div className="bg-purple-600 flex-1 rounded-md p-4 flex flex-col items-center justify-center shadow-inner">
              <span className="text-xs font-medium mb-1">Total Hari Ini</span>
              <span className="text-2xl font-bold">{total}</span>
            </div>
            <div className="bg-orange-500 flex-1 rounded-md p-4 flex flex-col items-center justify-center shadow-inner">
              <span className="text-xs font-medium mb-1">Menunggu</span>
              <span className="text-2xl font-bold">{waiting}</span>
            </div>
            <div className="bg-teal-500 flex-1 rounded-md p-4 flex flex-col items-center justify-center shadow-inner">
              <span className="text-xs font-medium mb-1">Selesai</span>
              <span className="text-2xl font-bold">{finished}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Controls & List */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        
        {/* Controls */}
        <div className="border border-slate-300 rounded-sm p-4 bg-slate-50">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
            <Settings className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold text-slate-700">Kontrol Antrian</h3>
          </div>
          
          <div className="flex gap-2 mb-4">
            <input type="text" placeholder="Nama Pasien..." className="flex-1 border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="No. RM (opsional)" className="w-1/3 border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 shadow-sm">
              <Plus className="w-4 h-4" /> Tambah Antrian
            </button>
          </div>

          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded text-sm font-bold flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider">
              <Megaphone className="w-5 h-5" /> Panggil Berikutnya
            </button>
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded text-sm font-bold flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider">
              <RotateCcw className="w-5 h-5" /> Panggil Ulang
            </button>
          </div>

          <div className="flex gap-2">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 shadow-sm">
              <SkipForward className="w-4 h-4" /> Lewati
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 shadow-sm">
              <RotateCcw className="w-4 h-4" /> Reset Antrian
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 shadow-sm">
              <Settings className="w-4 h-4" /> Pengaturan Suara
            </button>
          </div>
        </div>

        {/* List */}
        <div className="border border-slate-300 rounded-sm flex-1 flex flex-col bg-white">
          <div className="bg-slate-100 px-3 py-2 border-b border-slate-300 flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold text-slate-700">Daftar Antrian Hari Ini</h3>
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-600 text-white text-xs">
                <tr>
                  <th className="px-3 py-2 font-medium border-r border-slate-500 text-center">No. Antrian</th>
                  <th className="px-3 py-2 font-medium border-r border-slate-500 text-center">No. RM</th>
                  <th className="px-3 py-2 font-medium border-r border-slate-500">Nama Pasien</th>
                  <th className="px-3 py-2 font-medium border-r border-slate-500 text-center">Waktu Daftar</th>
                  <th className="px-3 py-2 font-medium border-r border-slate-500 text-center">Status</th>
                  <th className="px-3 py-2 font-medium text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-200">
                  <td colSpan={6} className="px-3 py-8 text-center text-slate-400 italic">Belum ada antrian hari ini</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SRMAntrian;
