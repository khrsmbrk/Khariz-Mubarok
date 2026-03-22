import React, { useState } from 'react';
import { User, Plus, Search, Trash2, Edit } from 'lucide-react';
import { useSRMStore } from '../../store/srmStore';

const SRMJadwalDokter = () => {
  const { doctors, doctorSchedules, addDoctor, deleteDoctor, addDoctorSchedule, deleteDoctorSchedule } = useSRMStore();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
  const [newDoctorName, setNewDoctorName] = useState('');
  const [newDoctorSpecialty, setNewDoctorSpecialty] = useState('');

  const [showAddScheduleModal, setShowAddScheduleModal] = useState(false);
  const [newScheduleDay, setNewScheduleDay] = useState('');
  const [newScheduleStart, setNewScheduleStart] = useState('');
  const [newScheduleEnd, setNewScheduleEnd] = useState('');

  const selectedDoctor = doctors.find(d => d.id === selectedDoctorId);
  const selectedDoctorSchedules = doctorSchedules.filter(s => s.doctorId === selectedDoctorId);

  const handleAddDoctor = () => {
    if (newDoctorName && newDoctorSpecialty) {
      const id = `DR${String(doctors.length + 1).padStart(4, '0')}`;
      addDoctor({ id, nama: newDoctorName, spesialisasi: newDoctorSpecialty });
      setShowAddDoctorModal(false);
      setNewDoctorName('');
      setNewDoctorSpecialty('');
    }
  };

  const handleAddSchedule = () => {
    if (selectedDoctorId && newScheduleDay && newScheduleStart && newScheduleEnd) {
      addDoctorSchedule({
        id: `SCH${Date.now()}`,
        doctorId: selectedDoctorId,
        hari: newScheduleDay,
        jamMulai: newScheduleStart,
        jamSelesai: newScheduleEnd
      });
      setShowAddScheduleModal(false);
      setNewScheduleDay('');
      setNewScheduleStart('');
      setNewScheduleEnd('');
    }
  };

  const daysOfWeek = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col md:flex-row gap-4 relative">
      
      {/* Add Doctor Modal */}
      {showAddDoctorModal && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96 border border-slate-300">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Tambah Dokter</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Dokter</label>
                <input 
                  type="text" 
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  value={newDoctorName}
                  onChange={(e) => setNewDoctorName(e.target.value)}
                  placeholder="Contoh: dr. Budi Santoso, Sp.A"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Spesialisasi</label>
                <input 
                  type="text" 
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  value={newDoctorSpecialty}
                  onChange={(e) => setNewDoctorSpecialty(e.target.value)}
                  placeholder="Contoh: Spesialis Anak"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button 
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded"
                onClick={() => setShowAddDoctorModal(false)}
              >
                Batal
              </button>
              <button 
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
                onClick={handleAddDoctor}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Schedule Modal */}
      {showAddScheduleModal && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96 border border-slate-300">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Tambah Jadwal</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Hari</label>
                <select 
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  value={newScheduleDay}
                  onChange={(e) => setNewScheduleDay(e.target.value)}
                >
                  <option value="">Pilih Hari</option>
                  {daysOfWeek.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Jam Mulai</label>
                  <input 
                    type="time" 
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    value={newScheduleStart}
                    onChange={(e) => setNewScheduleStart(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Jam Selesai</label>
                  <input 
                    type="time" 
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    value={newScheduleEnd}
                    onChange={(e) => setNewScheduleEnd(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button 
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded"
                onClick={() => setShowAddScheduleModal(false)}
              >
                Batal
              </button>
              <button 
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
                onClick={handleAddSchedule}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Left Panel - Doctor List */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-2">
          <User className="w-6 h-6 text-slate-700" />
          <h1 className="text-xl font-bold text-slate-800">Jadwal Dokter</h1>
        </div>

        <div className="border border-slate-300 rounded-sm flex-1 flex flex-col bg-slate-50">
          <div className="p-2 border-b border-slate-300 flex justify-between items-center bg-white">
            <span className="text-sm font-bold text-slate-700">Daftar Dokter</span>
            <button 
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-medium flex items-center gap-1 shadow-sm"
              onClick={() => setShowAddDoctorModal(true)}
            >
              <Plus className="w-3 h-3" /> Tambah
            </button>
          </div>
          <div className="flex-1 overflow-auto bg-white">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 border-b border-slate-300 sticky top-0">
                <tr>
                  <th className="px-3 py-2 font-bold border-r border-slate-300 text-center w-16">Kode</th>
                  <th className="px-3 py-2 font-bold">Nama</th>
                </tr>
              </thead>
              <tbody>
                {doctors.length > 0 ? (
                  doctors.map(doctor => (
                    <tr 
                      key={doctor.id} 
                      className={`border-b border-slate-200 cursor-pointer hover:bg-slate-50 ${selectedDoctorId === doctor.id ? 'bg-blue-50' : 'bg-white'}`}
                      onClick={() => setSelectedDoctorId(doctor.id)}
                    >
                      <td className="px-3 py-2 border-r border-slate-300 text-center font-medium">{doctor.id}</td>
                      <td className="px-3 py-2">
                        <div className="font-bold text-slate-800">{doctor.nama}</div>
                        <div className="text-[10px] text-slate-500">{doctor.spesialisasi}</div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-white border-b border-slate-200">
                    <td colSpan={2} className="px-3 py-8 text-center text-slate-400 italic">Belum ada data dokter</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Panel - Schedule */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-2">
          {selectedDoctor ? (
            <div>
              <h2 className="text-lg font-bold text-slate-800">{selectedDoctor.nama}</h2>
              <p className="text-sm text-slate-500">{selectedDoctor.spesialisasi}</p>
            </div>
          ) : (
            <h2 className="text-sm font-bold text-slate-700 py-1">Pilih dokter untuk melihat jadwal</h2>
          )}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-slate-700">Jadwal Mingguan</h3>
            <button 
              className={`px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 shadow-sm ${selectedDoctorId ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
              onClick={() => setShowAddScheduleModal(true)}
              disabled={!selectedDoctorId}
            >
              <Plus className="w-4 h-4" /> Tambah Jadwal
            </button>
          </div>

          {/* Weekly Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {daysOfWeek.map((day) => {
              const schedulesForDay = selectedDoctorSchedules.filter(s => s.hari.toLowerCase() === day.toLowerCase());
              return (
                <div key={day} className="border border-slate-300 rounded-sm bg-white flex flex-col items-center p-3 min-h-[100px] shadow-sm">
                  <span className="text-blue-600 font-bold mb-2 text-sm border-b border-slate-100 w-full text-center pb-1">{day}</span>
                  {schedulesForDay.length > 0 ? (
                    <div className="flex flex-col gap-1 w-full">
                      {schedulesForDay.map(s => (
                        <div key={s.id} className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-center font-medium text-slate-700">
                          {s.jamMulai} - {s.jamSelesai}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-slate-400 text-xs italic mt-2">-</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Schedule List */}
          <div className="border border-slate-300 rounded-sm flex-1 flex flex-col bg-white mt-4">
            <div className="flex-1 overflow-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-300 sticky top-0">
                  <tr>
                    <th className="px-3 py-2 font-bold border-r border-slate-300 text-center w-24">Hari</th>
                    <th className="px-3 py-2 font-bold border-r border-slate-300 text-center w-24">Mulai</th>
                    <th className="px-3 py-2 font-bold border-r border-slate-300 text-center w-24">Selesai</th>
                    <th className="px-3 py-2 font-bold text-center w-20">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedDoctorSchedules.length > 0 ? (
                    selectedDoctorSchedules.map(schedule => (
                      <tr key={schedule.id} className="bg-white border-b border-slate-200 hover:bg-slate-50">
                        <td className="px-3 py-2 border-r border-slate-300 text-center font-medium">{schedule.hari}</td>
                        <td className="px-3 py-2 border-r border-slate-300 text-center">{schedule.jamMulai}</td>
                        <td className="px-3 py-2 border-r border-slate-300 text-center">{schedule.jamSelesai}</td>
                        <td className="px-3 py-2 text-center">
                          <button 
                            className="text-red-500 hover:text-red-700 p-1"
                            onClick={() => deleteDoctorSchedule(schedule.id)}
                            title="Hapus Jadwal"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="bg-white border-b border-slate-200">
                      <td colSpan={4} className="px-3 py-8 text-center text-slate-400 italic">
                        {selectedDoctorId ? 'Belum ada jadwal untuk dokter ini' : 'Pilih dokter untuk melihat jadwal'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SRMJadwalDokter;
