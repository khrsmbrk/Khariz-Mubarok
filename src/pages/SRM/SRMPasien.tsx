import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, FileSpreadsheet, XCircle } from 'lucide-react';
import { useSRMStore } from '../../store/srmStore';

const SRMPasien = () => {
  const navigate = useNavigate();
  const patients = useSRMStore((state) => state.patients);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter(p => 
    p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.nik.includes(searchTerm) ||
    p.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
        <h1 className="text-xl font-bold text-slate-800 uppercase tracking-wider">DATA MASTER PASIEN</h1>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto border border-slate-300 rounded-sm mb-4">
        <table className="w-full text-xs text-left whitespace-nowrap">
          <thead className="bg-slate-100 text-slate-700 border-b border-slate-300 sticky top-0 z-10">
            <tr>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">NO</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">NO.RM</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">NIK KTP</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300">NAMA</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300">ISTRI</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300">PEKERJAAN</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300">KOTA KELAHIRAN</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">TGL LAHIR</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">JENIS KELAMIN</th>
              <th className="px-3 py-2 font-bold border-r border-slate-300 text-center">PERNIKAHAN</th>
              <th className="px-3 py-2 font-bold">RIWAYAT ALERGI</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length === 0 ? (
              <tr>
                <td colSpan={11} className="px-3 py-8 text-center text-slate-400 italic">Tidak ada data pasien ditemukan</td>
              </tr>
            ) : (
              filteredPatients.map((patient, index) => (
                <tr key={patient.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 border-b border-slate-200 cursor-pointer`}>
                  <td className="px-3 py-2 text-center border-r border-slate-300">{index + 1}</td>
                  <td className="px-3 py-2 text-center border-r border-slate-300 font-bold">{patient.id}</td>
                  <td className="px-3 py-2 text-center border-r border-slate-300">{patient.nik}</td>
                  <td className="px-3 py-2 border-r border-slate-300 font-bold">{patient.namaLengkap}</td>
                  <td className="px-3 py-2 border-r border-slate-300">{patient.istri || '-'}</td>
                  <td className="px-3 py-2 border-r border-slate-300">{patient.pekerjaan}</td>
                  <td className="px-3 py-2 border-r border-slate-300">{patient.kotaLahir}</td>
                  <td className="px-3 py-2 text-center border-r border-slate-300">{patient.tanggalLahir}</td>
                  <td className="px-3 py-2 text-center border-r border-slate-300">{patient.jenisKelamin}</td>
                  <td className="px-3 py-2 text-center border-r border-slate-300">{patient.statusPernikahan}</td>
                  <td className="px-3 py-2">{patient.riwayatAlergi}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-wrap items-center gap-4 bg-slate-50 p-3 border border-slate-300 rounded-sm">
        <button 
          className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          onClick={() => alert('Fitur Tambah Pasien masih dalam pengembangan')}
        >
          <Plus className="w-4 h-4 text-green-600" /> TAMBAH
        </button>
        <button 
          className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          onClick={() => alert('Fitur Edit Pasien masih dalam pengembangan')}
        >
          <Edit className="w-4 h-4 text-blue-600" /> EDIT
        </button>
        <button 
          className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          onClick={() => alert('Fitur Hapus Pasien masih dalam pengembangan')}
        >
          <Trash2 className="w-4 h-4 text-red-600" /> HAPUS
        </button>
        
        <div className="mx-auto">
          <button 
            className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
            onClick={() => alert('Fitur Export Ke Excel masih dalam pengembangan')}
          >
            <FileSpreadsheet className="w-4 h-4 text-green-600" /> Export Ke Excel
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-bold text-slate-700 whitespace-nowrap">Cari Pasien :</label>
          <input 
            type="text" 
            placeholder="Masukkan No.RM/Nik.KTP/Nama..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" 
          />
        </div>

        <button 
          className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-red-600 px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 shadow-sm ml-auto"
          onClick={() => navigate('/srm')}
        >
          <XCircle className="w-4 h-4" /> KELUAR
        </button>
      </div>
    </div>
  );
};

export default SRMPasien;
