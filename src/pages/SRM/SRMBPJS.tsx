import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, RefreshCw, Search, FileText, Activity } from 'lucide-react';

const SRMBPJS = () => {
  const [status, setStatus] = useState<'connected' | 'disconnected' | 'checking'>('connected');
  const [searchNoKartu, setSearchNoKartu] = useState('');
  const [searchNIK, setSearchNIK] = useState('');

  const checkConnection = () => {
    setStatus('checking');
    setTimeout(() => {
      setStatus('connected');
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-600" />
            Bridging BPJS Kesehatan
          </h1>
          <p className="text-slate-500">Integrasi V-Claim dan Antrean JKN</p>
        </div>
        
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Status Koneksi:</span>
            {status === 'checking' ? (
              <span className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                <RefreshCw className="w-4 h-4 animate-spin" /> Mengecek...
              </span>
            ) : status === 'connected' ? (
              <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4" /> Terhubung
              </span>
            ) : (
              <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                <XCircle className="w-4 h-4" /> Terputus
              </span>
            )}
          </div>
          <button 
            onClick={checkConnection}
            disabled={status === 'checking'}
            className="ml-2 p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            title="Cek Koneksi"
          >
            <RefreshCw className={`w-4 h-4 ${status === 'checking' ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Cek Kepesertaan */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden md:col-span-2">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-600" />
              Cek Kepesertaan BPJS
            </h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Berdasarkan No. Kartu BPJS</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={searchNoKartu}
                    onChange={(e) => setSearchNoKartu(e.target.value)}
                    placeholder="Masukkan 13 digit No. Kartu" 
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Cari
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Berdasarkan NIK</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={searchNIK}
                    onChange={(e) => setSearchNIK(e.target.value)}
                    placeholder="Masukkan 16 digit NIK" 
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Cari
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 border border-slate-200 rounded-lg p-4 bg-slate-50 flex items-center justify-center min-h-[150px]">
              <div className="text-center text-slate-500">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Silakan masukkan No. Kartu BPJS atau NIK untuk melihat data kepesertaan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              Menu V-Claim
            </h2>
          </div>
          <div className="p-2">
            <button className="w-full text-left px-4 py-3 hover:bg-slate-50 rounded-lg flex items-center gap-3 transition-colors border-b border-slate-100 last:border-0">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-800">Pembuatan SEP</div>
                <div className="text-xs text-slate-500">Surat Eligibilitas Peserta</div>
              </div>
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-slate-50 rounded-lg flex items-center gap-3 transition-colors border-b border-slate-100 last:border-0">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-800">Rujukan Keluar</div>
                <div className="text-xs text-slate-500">Pembuatan rujukan ke faskes lain</div>
              </div>
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-slate-50 rounded-lg flex items-center gap-3 transition-colors border-b border-slate-100 last:border-0">
              <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-800">Surat Kontrol</div>
                <div className="text-xs text-slate-500">Rencana kontrol rawat jalan</div>
              </div>
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-slate-50 rounded-lg flex items-center gap-3 transition-colors">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-800">Klaim JKN</div>
                <div className="text-xs text-slate-500">Pengajuan klaim pelayanan</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRMBPJS;
