import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const ScheduleList = ({ shifts }: { shifts: any[] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">Jadwal Shift</h3>
        <button onClick={() => alert('Menampilkan semua jadwal shift... (Simulasi)')} className="text-sm text-blue-600 font-medium hover:text-blue-700">Lihat Semua</button>
      </div>

      <div className="space-y-3">
        {shifts.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-4">Tidak ada jadwal shift dalam waktu dekat.</p>
        ) : (
          shifts.map(shift => {
            const isToday = shift.date === new Date().toISOString().split('T')[0];
            
            return (
              <div key={shift.id} className={`p-4 rounded-xl border ${isToday ? 'bg-blue-50 border-blue-100' : 'bg-white border-slate-100'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <Calendar className={`w-4 h-4 mr-2 ${isToday ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className={`text-sm font-bold ${isToday ? 'text-blue-900' : 'text-slate-700'}`}>
                      {isToday ? 'Hari Ini' : shift.date}
                    </span>
                  </div>
                  {isToday && <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Berlangsung</span>}
                </div>
                
                <h4 className="text-base font-bold text-slate-800 mb-1">{shift.roleDescription}</h4>
                
                <div className="flex items-center space-x-4 text-xs text-slate-500 mt-2">
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    <span>{shift.startTime} - {shift.endTime}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    <span>{shift.unit}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ScheduleList;
