import React, { useState } from 'react';
import { BarChart2, PieChart, TrendingUp, Users, Calendar, Download, Filter } from 'lucide-react';

const SRMLaporan = () => {
  const [activeTab, setActiveTab] = useState('kunjungan');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <BarChart2 className="w-6 h-6 text-indigo-600" />
            Laporan & Analitik
          </h1>
          <p className="text-slate-500">Ringkasan data operasional dan statistik rumah sakit</p>
        </div>
        
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2 bg-white">
            <Calendar className="w-4 h-4" /> Bulan Ini
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" /> Export Data
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6 overflow-x-auto">
        <button 
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'kunjungan' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          onClick={() => setActiveTab('kunjungan')}
        >
          Statistik Kunjungan
        </button>
        <button 
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'demografi' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          onClick={() => setActiveTab('demografi')}
        >
          Demografi Pasien
        </button>
        <button 
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'penyakit' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          onClick={() => setActiveTab('penyakit')}
        >
          10 Besar Penyakit
        </button>
        <button 
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'keuangan' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          onClick={() => setActiveTab('keuangan')}
        >
          Ringkasan Keuangan
        </button>
      </div>

      {activeTab === 'kunjungan' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-600">Total Kunjungan</h3>
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-800">4,285</div>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-green-600 font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> +12.5%
                </span>
                <span className="text-slate-500 ml-2">vs bulan lalu</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-600">Pasien Baru</h3>
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-800">842</div>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-green-600 font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> +5.2%
                </span>
                <span className="text-slate-500 ml-2">vs bulan lalu</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-600">Rata-rata per Hari</h3>
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <BarChart2 className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-800">142</div>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-slate-500">Pasien per hari</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-base font-semibold text-slate-800 mb-6">Kunjungan per Poliklinik</h3>
              <div className="space-y-4">
                {[
                  { name: 'Poli Umum', count: 1245, percent: 85 },
                  { name: 'Poli Gigi', count: 856, percent: 65 },
                  { name: 'Poli Anak', count: 642, percent: 45 },
                  { name: 'Poli Kandungan', count: 524, percent: 35 },
                  { name: 'Poli Penyakit Dalam', count: 412, percent: 25 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">{item.name}</span>
                      <span className="text-slate-600">{item.count} pasien</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[300px]">
              <PieChart className="w-16 h-16 text-slate-300 mb-4" />
              <h3 className="text-lg font-medium text-slate-700 mb-2">Grafik Kunjungan</h3>
              <p className="text-slate-500 text-sm max-w-sm">
                Visualisasi grafik sedang dimuat. Pastikan koneksi internet Anda stabil.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab !== 'kunjungan' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-16 text-center">
          <BarChart2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Data Belum Tersedia</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Laporan untuk kategori {activeTab} sedang dalam proses sinkronisasi dengan database utama.
          </p>
        </div>
      )}
    </div>
  );
};

export default SRMLaporan;
