import React, { useState } from 'react';
import { Building2, Save, Wrench, Key } from 'lucide-react';

const SRMIntegrasi = () => {
  const [activeTab, setActiveTab] = useState('konfigurasi');

  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2">
        <Building2 className="w-6 h-6 text-slate-700" />
        <h1 className="text-xl font-bold text-slate-800">Integrasi Satu Sehat</h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-300 mb-6">
        <button 
          className={`px-6 py-2 text-sm font-bold flex items-center gap-2 border-b-2 ${activeTab === 'konfigurasi' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-transparent text-slate-600 hover:bg-slate-50'}`}
          onClick={() => setActiveTab('konfigurasi')}
        >
          <Wrench className="w-4 h-4" /> Konfigurasi
        </button>
        <button 
          className={`px-6 py-2 text-sm font-bold flex items-center gap-2 border-b-2 ${activeTab === 'cari' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-transparent text-slate-600 hover:bg-slate-50'}`}
          onClick={() => setActiveTab('cari')}
        >
          <SearchIcon className="w-4 h-4" /> Cari Pasien
        </button>
        <button 
          className={`px-6 py-2 text-sm font-bold flex items-center gap-2 border-b-2 ${activeTab === 'kirim' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-transparent text-slate-600 hover:bg-slate-50'}`}
          onClick={() => setActiveTab('kirim')}
        >
          <SendIcon className="w-4 h-4" /> Kirim Data
        </button>
      </div>

      {/* Tab Content - Konfigurasi */}
      {activeTab === 'konfigurasi' && (
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-4 h-4 text-slate-600" />
            <h2 className="text-sm font-bold text-slate-700">Konfigurasi API Satu Sehat</h2>
          </div>

          <div className="bg-slate-50 border border-slate-300 rounded-sm p-6 mb-6">
            <div className="grid grid-cols-[150px_1fr] gap-y-4 items-center">
              
              <label className="text-sm text-slate-700">Environment:</label>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="env" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <label htmlFor="env" className="text-sm text-slate-600">Mode Production (centang jika sudah live)</label>
              </div>

              <label className="text-sm text-slate-700">Base URL:</label>
              <input type="text" defaultValue="https://api-satusehat-stg.dto.kemkes.go.id" className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" />

              <label className="text-sm text-slate-700">Auth URL:</label>
              <input type="text" defaultValue="https://api-satusehat-stg.dto.kemkes.go.id/oauth2/v1/accesstoken" className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" />

              <label className="text-sm text-slate-700">Organization ID:</label>
              <input type="text" placeholder="Organization ID dari Satu Sehat" className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" />

              <label className="text-sm text-slate-700">Client ID:</label>
              <input type="text" placeholder="Client ID dari Satu Sehat" className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" />

              <label className="text-sm text-slate-700">Client Secret:</label>
              <input type="password" placeholder="Client Secret dari Satu Sehat" className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" />

            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
              <Save className="w-4 h-4" /> Simpan Konfigurasi
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
              <Wrench className="w-4 h-4" /> Test Koneksi
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
              <Key className="w-4 h-4" /> Get Token
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-300 rounded-sm p-6 flex-1">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
              <h3 className="text-sm font-bold text-slate-700">Cara Mendapatkan Kredensial Satu Sehat</h3>
            </div>
            <div className="text-sm text-slate-700 leading-relaxed">
              <p className="font-bold mb-2">Langkah-langkah:</p>
              <ol className="list-decimal list-inside space-y-1 mb-4">
                <li>Daftar faskes di <a href="#" className="font-bold text-blue-600 hover:underline">https://satusehat.kemkes.go.id</a></li>
                <li>Login ke dashboard developer</li>
                <li>Buat aplikasi dan dapatkan kredensial</li>
                <li>Copy Organization ID, Client ID, Client Secret</li>
                <li>Test di environment Staging terlebih dahulu</li>
                <li>Jika sudah siap, ajukan Production</li>
              </ol>
              <p>
                <span className="font-bold">Dokumentasi:</span> <a href="#" className="text-blue-600 hover:underline">https://satusehat.kemkes.go.id/platform/docs</a>
              </p>
            </div>
          </div>

        </div>
      )}

      {/* Other Tabs Placeholder */}
      {activeTab !== 'konfigurasi' && (
        <div className="flex-1 flex items-center justify-center text-slate-400 italic">
          Fitur {activeTab} sedang dalam pengembangan
        </div>
      )}

    </div>
  );
};

// Helper icons
const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default SRMIntegrasi;
