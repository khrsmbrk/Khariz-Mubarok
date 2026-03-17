import React, { useState } from 'react';
import { TRAININGS } from '../data/trainings';

const TrainingModule = ({ user }: { user: any }) => {
  const [trainings, setTrainings] = useState(TRAININGS);

  const handleRegister = (trainingId: number) => {
    setTrainings(prev => prev.map(t => {
      if (t.id === trainingId) {
        if (!t.participants.includes(user.name)) {
          return { ...t, participants: [...t.participants, user.name] };
        }
      }
      return t;
    }));
    alert("Berhasil mendaftar pelatihan!");
  };

  return (
    <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 p-6">
      <h2 className="text-lg font-semibold text-white mb-2">Modul Pelatihan (SIMPEL)</h2>
      <p className="text-xs text-slate-400 mb-6">
        Sistem Informasi Manajemen Pelatihan. Daftar dan pantau riwayat pelatihan Anda.
      </p>

      <div className="overflow-x-auto border border-slate-700 rounded-lg">
        <table className="min-w-full text-xs text-left">
          <thead className="bg-slate-900/50">
            <tr>
              <th className="px-4 py-3 font-medium text-slate-400">Nama Pelatihan</th>
              <th className="px-4 py-3 font-medium text-slate-400">Penyelenggara</th>
              <th className="px-4 py-3 font-medium text-slate-400">Tanggal</th>
              <th className="px-4 py-3 font-medium text-slate-400">Target Unit</th>
              <th className="px-4 py-3 font-medium text-slate-400">Status</th>
              <th className="px-4 py-3 font-medium text-slate-400">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {trainings.map((training) => {
              const isRegistered = training.participants.includes(user.name) || training.participants.includes("RSML-0002"); // dummy check
              
              return (
                <tr key={training.id} className="hover:bg-slate-800/50">
                  <td className="px-4 py-3 text-slate-200 font-medium">{training.name}</td>
                  <td className="px-4 py-3 text-slate-400">{training.organizer}</td>
                  <td className="px-4 py-3 text-slate-400">{training.date}</td>
                  <td className="px-4 py-3 text-slate-400">{training.targetUnit}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-medium border ${
                      training.status === 'Selesai' 
                        ? 'bg-slate-900/30 text-slate-400 border-slate-700' 
                        : 'bg-blue-900/30 text-blue-400 border-blue-800/50'
                    }`}>
                      {training.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {training.status === 'Pendaftaran Dibuka' ? (
                      isRegistered ? (
                        <span className="text-emerald-400 font-medium">Terdaftar</span>
                      ) : (
                        <button 
                          onClick={() => handleRegister(training.id)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                        >
                          Daftar
                        </button>
                      )
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {(user.role === 'management' || user.role === 'admin') && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-white mb-3">Rekap Peserta (Akses Manajemen)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainings.map(t => (
              <div key={t.id} className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <h4 className="text-sm font-medium text-blue-400 mb-2">{t.name}</h4>
                <p className="text-xs text-slate-400 mb-2">Total Peserta: {t.participants.length}</p>
                <div className="flex flex-wrap gap-2">
                  {t.participants.map((p, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingModule;
