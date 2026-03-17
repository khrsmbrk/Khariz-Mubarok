import React from 'react';
import { Users, CheckCircle, Clock, Briefcase } from 'lucide-react';

const StatsCards = ({ employees, user }: { employees: any[], user: any }) => {
  const total = employees.length;
  const hadir = employees.filter(e => e.status === 'Hadir').length;
  const lembur = employees.reduce((acc, curr) => acc + curr.lembur, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><Users className="w-16 h-16" /></div>
        <p className="text-slate-400 text-sm font-medium mb-1">Total Karyawan</p>
        <div className="flex items-end justify-between">
          <h4 className="text-3xl font-bold text-white">{total}</h4>
        </div>
      </div>
      
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><CheckCircle className="w-16 h-16" /></div>
        <p className="text-slate-400 text-sm font-medium mb-1">Hadir Hari Ini</p>
        <div className="flex items-end justify-between">
          <h4 className="text-3xl font-bold text-emerald-400">{hadir}</h4>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><Clock className="w-16 h-16" /></div>
        <p className="text-slate-400 text-sm font-medium mb-1">Total Lembur (Jam)</p>
        <div className="flex items-end justify-between">
          <h4 className="text-3xl font-bold text-blue-400">{lembur}</h4>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><Briefcase className="w-16 h-16" /></div>
        <p className="text-slate-400 text-sm font-medium mb-1">Akses Role</p>
        <div className="flex items-end justify-between mt-2">
          <span className="px-2 py-1 bg-blue-900/30 text-blue-400 border border-blue-800/50 rounded text-xs font-medium capitalize">
            {user.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
