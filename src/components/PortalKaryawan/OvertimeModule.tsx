import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const OvertimeModule = ({ overtimes, employeeId }: { overtimes: any[], employeeId: string }) => {
  const [showForm, setShowForm] = useState(false);
  const [localOvertimes, setLocalOvertimes] = useState(overtimes.filter(o => o.employeeId === employeeId));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOv = {
      id: `OVT-NEW-${Date.now()}`,
      employeeId,
      date: new Date().toISOString().split('T')[0],
      hours: 2, // dummy
      reason: 'Pekerjaan tambahan (Simulasi)',
      status: 'Menunggu',
      approvedBy: null
    };
    setLocalOvertimes([newOv, ...localOvertimes]);
    setShowForm(false);
    alert('Pengajuan lembur berhasil dikirim (Simulasi)');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-800">Lembur</h3>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="text-sm px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors"
        >
          {showForm ? 'Batal' : 'Ajukan Lembur'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Tanggal</label>
              <input type="date" required className="w-full p-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Durasi (Jam)</label>
              <input type="number" min="1" max="12" required className="w-full p-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium text-slate-500 mb-1">Alasan Lembur</label>
            <textarea required rows={2} className="w-full p-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Jelaskan alasan lembur..."></textarea>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
            Kirim Pengajuan
          </button>
        </form>
      )}

      <div className="space-y-3">
        {localOvertimes.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-4">Belum ada riwayat lembur.</p>
        ) : (
          localOvertimes.map(ov => (
            <div key={ov.id} className="p-3 border border-slate-100 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-slate-800">{ov.date}</p>
                <p className="text-xs text-slate-500">{ov.hours} Jam • {ov.reason}</p>
              </div>
              <div>
                {ov.status === 'Disetujui' && <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><CheckCircle className="w-3 h-3 mr-1" /> Disetujui</span>}
                {ov.status === 'Ditolak' && <span className="flex items-center text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full"><XCircle className="w-3 h-3 mr-1" /> Ditolak</span>}
                {ov.status === 'Menunggu' && <span className="flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full"><AlertCircle className="w-3 h-3 mr-1" /> Menunggu</span>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OvertimeModule;
