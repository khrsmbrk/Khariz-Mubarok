import React from 'react';

const EmployeeTable = ({ employees }: { employees: any[] }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 p-6 overflow-hidden">
      <h3 className="text-lg font-medium text-white mb-4">Daftar Karyawan</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs text-left">
          <thead className="bg-slate-900/50">
            <tr>
              <th className="px-4 py-3 font-medium text-slate-400">NIP</th>
              <th className="px-4 py-3 font-medium text-slate-400">Nama</th>
              <th className="px-4 py-3 font-medium text-slate-400">Jabatan</th>
              <th className="px-4 py-3 font-medium text-slate-400">Divisi</th>
              <th className="px-4 py-3 font-medium text-slate-400">Status</th>
              <th className="px-4 py-3 font-medium text-slate-400">Lembur (Jam)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-800/50">
                <td className="px-4 py-3 text-slate-400">{emp.nip}</td>
                <td className="px-4 py-3 text-slate-200 font-medium">{emp.name}</td>
                <td className="px-4 py-3 text-slate-400">{emp.jabatan}</td>
                <td className="px-4 py-3 text-slate-400 capitalize">{emp.divisi}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-medium border ${
                    emp.status === 'Hadir' 
                      ? 'bg-emerald-900/30 text-emerald-400 border-emerald-800/50' 
                      : 'bg-slate-900/30 text-slate-400 border-slate-700'
                  }`}>
                    {emp.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400">{emp.lembur}</td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  Tidak ada data karyawan yang sesuai filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
