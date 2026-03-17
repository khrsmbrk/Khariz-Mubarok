import React, { useState, useEffect } from 'react';
import { WifiOff, CheckCircle, Clock } from 'lucide-react';

const AttendanceModule = ({ attendances, employeeId }: { attendances: any[], employeeId: string }) => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [localQueue, setLocalQueue] = useState<any[]>([]);
  const [history, setHistory] = useState(attendances.filter(a => a.employeeId === employeeId));

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      // Sync local queue
      if (localQueue.length > 0) {
        setHistory(prev => [...localQueue.map(q => ({ ...q, isSynced: true })), ...prev]);
        setLocalQueue([]);
        alert("Data absensi offline berhasil disinkronisasi!");
      }
    };
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [localQueue]);

  const handleCheckIn = () => {
    const now = new Date();
    const newRecord = {
      id: `ATT-NEW-${Date.now()}`,
      employeeId,
      date: now.toISOString().split('T')[0],
      checkInTime: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      status: 'Hadir',
      isSynced: !isOffline
    };

    if (isOffline) {
      setLocalQueue(prev => [newRecord, ...prev]);
    } else {
      setHistory(prev => [newRecord, ...prev]);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-800">Kehadiran & Aktivitas</h3>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setIsOffline(!isOffline)}
            className={`text-xs px-3 py-1 rounded-full font-medium border transition-colors ${
              isOffline ? 'bg-red-50 text-red-600 border-red-200' : 'bg-emerald-50 text-emerald-600 border-emerald-200'
            }`}
          >
            {isOffline ? 'Simulasi: Offline' : 'Simulasi: Online'}
          </button>
        </div>
      </div>

      {isOffline && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start">
          <WifiOff className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Anda sedang offline. Absensi akan disimpan di perangkat dan disinkronkan otomatis saat koneksi kembali.
          </p>
        </div>
      )}

      <div className="flex justify-center mb-6">
        <button 
          onClick={handleCheckIn}
          className="w-40 h-40 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center active:scale-95"
        >
          <span className="text-3xl font-bold mb-1">
            {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
          </span>
          <span className="text-sm font-medium text-blue-100 uppercase tracking-wider">Catat Hadir</span>
        </button>
      </div>

      <h4 className="text-sm font-semibold text-slate-700 mb-3">Riwayat Terakhir</h4>
      <div className="space-y-3">
        {localQueue.map(record => (
          <div key={record.id} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl border-dashed">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{record.date}</p>
                <p className="text-xs text-slate-500">Masuk: {record.checkInTime}</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
              Belum Sinkron
            </span>
          </div>
        ))}

        {history.map(record => (
          <div key={record.id} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mr-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{record.date}</p>
                <p className="text-xs text-slate-500">Masuk: {record.checkInTime}</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100">
              {record.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceModule;
