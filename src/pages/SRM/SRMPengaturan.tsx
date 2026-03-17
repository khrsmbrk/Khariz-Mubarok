import React from 'react';
import { UserPlus, Edit, Trash2, Save, XCircle, FolderOpen } from 'lucide-react';

const SRMPengaturan = () => {
  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col gap-4">
      <div className="flex justify-between items-center mb-2 border-b border-slate-200 pb-2">
        <h1 className="text-xl font-bold text-slate-800 uppercase tracking-wider">PENGATURAN</h1>
      </div>

      {/* Operators Table */}
      <div className="border border-slate-300 rounded-sm overflow-auto max-h-64">
        <table className="w-full text-xs text-left whitespace-nowrap">
          <thead className="bg-slate-100 text-slate-700 border-b border-slate-300 sticky top-0 z-10">
            <tr>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">NO</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">KODE</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300">NAMA</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300">PASSWORD</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">KUNJUNGAN</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">DATA REKAM MEDIS</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">LAPORAN</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">PASIEN</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">PEMERIKSAAN</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">DIAGNOSIS</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">TINDAKAN</th>
              <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">LAYANAN TAMBAHAN</th>
              <th className="px-2 py-2 font-bold text-center">PENGATURAN</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-slate-50 border-b border-slate-200 cursor-pointer">
              <td className="px-2 py-2 text-center border-r border-slate-300 text-green-600 font-bold">1</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">OP001</td>
              <td className="px-2 py-2 border-r border-slate-300 font-bold">ADMIN</td>
              <td className="px-2 py-2 border-r border-slate-300">*****</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center font-bold">True</td>
            </tr>
            <tr className="bg-slate-50 hover:bg-slate-100 border-b border-slate-200 cursor-pointer">
              <td className="px-2 py-2 text-center border-r border-slate-300 text-green-600 font-bold">2</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">OP002</td>
              <td className="px-2 py-2 border-r border-slate-300 font-bold">OPERATOR</td>
              <td className="px-2 py-2 border-r border-slate-300">********</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">True</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">False</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">False</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">False</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">False</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">False</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">False</td>
              <td className="px-2 py-2 text-center border-r border-slate-300 font-bold">False</td>
              <td className="px-2 py-2 text-center font-bold">False</td>
            </tr>
            {/* Empty rows to fill space like in screenshot */}
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="bg-white border-b border-slate-200">
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4 border-r border-slate-300"></td>
                <td className="px-2 py-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Operator Buttons */}
      <div className="flex gap-2 mb-2">
        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
          <UserPlus className="w-4 h-4 text-green-600" /> Tambah Operator Baru
        </button>
        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
          <Edit className="w-4 h-4 text-blue-600" /> Edit
        </button>
        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
          <Trash2 className="w-4 h-4 text-red-600" /> Hapus
        </button>
      </div>

      {/* Settings Forms */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Left Column - Headers */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-50 border border-slate-300 rounded-sm p-3">
            <h3 className="text-sm font-bold text-slate-700 mb-2">Header-1</h3>
            <textarea 
              className="w-full border border-slate-300 rounded p-2 text-sm h-24 focus:outline-none focus:border-blue-500 font-bold"
              defaultValue="KLINIK REKAM MEDIS&#10;REKAM MEDIS PASIEN"
            ></textarea>
          </div>
          <div className="bg-slate-50 border border-slate-300 rounded-sm p-3">
            <h3 className="text-sm font-bold text-slate-700 mb-2">Header-2</h3>
            <textarea 
              className="w-full border border-slate-300 rounded p-2 text-sm h-24 focus:outline-none focus:border-blue-500 font-bold"
              defaultValue="Alamat Klinik&#10;Email: klinik@email.com"
            ></textarea>
          </div>
        </div>

        {/* Middle Column - Title & Version */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-50 border border-slate-300 rounded-sm p-3">
            <h3 className="text-sm font-bold text-slate-700 mb-2">Title Bar</h3>
            <input 
              type="text" 
              className="w-full border border-slate-300 rounded p-2 text-sm focus:outline-none focus:border-blue-500 font-bold uppercase"
              defaultValue="APLIKASI REKAM MEDIS"
            />
          </div>
          <div className="bg-slate-50 border border-slate-300 rounded-sm p-3 flex-1">
            <h3 className="text-sm font-bold text-slate-700 mb-2 uppercase">VERSI</h3>
            <div className="w-full border border-slate-300 rounded p-2 text-sm h-32 bg-white text-slate-500">
              Versi 2025.Desember.13<br/>
              Builder by Kasirumkm store<br/>
              <span className="line-through text-red-500">082199995555</span>
            </div>
          </div>
        </div>

        {/* Right Column - Backup */}
        <div className="bg-slate-50 border border-slate-300 rounded-sm p-3 flex flex-col">
          <h3 className="text-sm font-bold text-slate-700 mb-4">BackUp Data Pelanggan :</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-bold text-slate-700 mb-1">Lokasi BackUp Data Pelanggan :</label>
            <div className="flex gap-2">
              <input type="text" defaultValue="C:/" className="flex-1 border border-slate-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-blue-500" />
              <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-3 py-1.5 rounded shadow-sm">
                <FolderOpen className="w-4 h-4 text-blue-600" />
              </button>
            </div>
            <p className="text-xs font-bold text-red-600 mt-2">Nama Folder Tidak Boleh Menggunakan Spasi...!!!</p>
          </div>

          <div className="flex justify-end mb-8">
            <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
              <Save className="w-4 h-4 text-green-600" /> BackUp
            </button>
          </div>

          <div className="mt-auto">
            <label className="block text-sm font-bold text-slate-700 mb-1">Pilih File Backup Untuk Di Restore:</label>
            <div className="flex gap-2">
              <input type="text" className="flex-1 border border-slate-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-blue-500" />
              <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-3 py-1.5 rounded shadow-sm">
                <FolderOpen className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-end gap-2 mt-2 pt-4 border-t border-slate-200">
        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
          <Save className="w-4 h-4 text-green-600" /> Simpan
        </button>
        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-red-600 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm">
          <XCircle className="w-4 h-4" /> Keluar
        </button>
      </div>

    </div>
  );
};

export default SRMPengaturan;
