import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LogOut, LayoutDashboard, Users, DollarSign, Package, 
  TrendingUp, Activity, AlertCircle, Clock, CheckCircle, Briefcase, User, Search
} from 'lucide-react';
import { SMART_ACTIVITY_LOG, SMART_DASHBOARD_DATA } from '../../data/mockData';
import { EMPLOYEES } from '../../data/employees';
import { getFilteredEmployees } from '../../utils/filters';
import QrAttendanceModule from '../../components/QrAttendanceModule';
import EmployeeQrGenerator from '../../components/EmployeeQrGenerator';
import EmployeeTable from '../../components/EmployeeTable';
import StatsCards from '../../components/StatsCards';
import TrainingModule from '../../components/TrainingModule';

export default function SmartDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeFilter, setTimeFilter] = useState<'today' | 'past_7_days'>('today');
  const [activeModule, setActiveModule] = useState('karyawan');
  
  // State for Employee Filter
  const [divisiFilter, setDivisiFilter] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  
  const session = JSON.parse(localStorage.getItem('smart_session') || 'null');

  useEffect(() => {
    if (!session) {
      navigate('/smart-office');
    }
  }, [session, navigate]);

  if (!session) return null;

  const handleLogout = () => {
    localStorage.removeItem('smart_session');
    navigate('/smart-office');
  };

  const data = SMART_DASHBOARD_DATA[timeFilter];
  const filteredLogs = SMART_ACTIVITY_LOG.filter(log => log.date === timeFilter || timeFilter === 'past_7_days');
  const filteredEmployees = getFilteredEmployees(EMPLOYEES, divisiFilter, searchQuery, session);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5 mr-3" /> },
    { id: 'hrd', label: 'HRD & Kepegawaian', icon: <Users className="w-5 h-5 mr-3" /> },
    { id: 'training', label: 'Pelatihan (SIMPEL)', icon: <CheckCircle className="w-5 h-5 mr-3" /> },
    { id: 'finance', label: 'Keuangan', icon: <DollarSign className="w-5 h-5 mr-3" /> },
    { id: 'inventory', label: 'Inventaris & Farmasi', icon: <Package className="w-5 h-5 mr-3" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row font-sans text-slate-300">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-800 border-r border-slate-700 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center">
            <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <h1 className="font-bold text-white text-lg leading-tight">SMART</h1>
              <h2 className="text-blue-400 text-xs font-semibold tracking-wider">OFFICE RSML</h2>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mr-3 border border-slate-600">
              <User className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">{session.name}</p>
              <p className="text-slate-400 text-xs capitalize">{session.role}</p>
            </div>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition text-sm font-medium ${
                activeTab === item.id 
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                  : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-lg transition text-sm font-medium"
          >
            <LogOut className="w-5 h-5 mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto bg-slate-900">
        <header className="bg-slate-800 border-b border-slate-700 p-4 sm:p-6 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold text-white">
            {navItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm text-slate-400 hover:text-white transition">Kembali ke Website</Link>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Ringkasan Eksekutif</h3>
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value as 'today' | 'past_7_days')}
                  className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
                >
                  <option value="today">Hari Ini</option>
                  <option value="past_7_days">7 Hari Terakhir</option>
                </select>
              </div>

              {/* KPI Widgets - Only for management */}
              {session.role === 'management' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="w-16 h-16" /></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Bed Occupancy Rate (BOR)</p>
                    <div className="flex items-end justify-between">
                      <h4 className="text-3xl font-bold text-white">{data.bor}</h4>
                      <span className="flex items-center text-emerald-400 text-sm font-medium"><TrendingUp className="w-4 h-4 mr-1" /> {data.borTrend}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Users className="w-16 h-16" /></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Pasien Rawat Jalan</p>
                    <div className="flex items-end justify-between">
                      <h4 className="text-3xl font-bold text-white">{data.pasien}</h4>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><DollarSign className="w-16 h-16" /></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Estimasi Pendapatan</p>
                    <div className="flex items-end justify-between">
                      <h4 className="text-3xl font-bold text-white">{data.pendapatan}</h4>
                      <span className="flex items-center text-emerald-400 text-sm font-medium"><TrendingUp className="w-4 h-4 mr-1" /> {data.pendapatanTrend}</span>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><AlertCircle className="w-16 h-16" /></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Stok Obat Kritis</p>
                    <div className="flex items-end justify-between">
                      <h4 className="text-3xl font-bold text-red-400">{data.stokKritis} Item</h4>
                      <span className="text-red-400 text-sm font-medium">Perlu Restock</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart Section */}
                <div className="lg:col-span-2 bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-white mb-6">Tren Kunjungan Pasien</h3>
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {data.chartData.map((val, i) => (
                      <div key={i} className="w-full flex flex-col items-center group">
                        <div className="w-full bg-blue-500/20 hover:bg-blue-500/40 rounded-t-sm transition-all relative flex justify-center" style={{ height: `${val}%` }}>
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-slate-700 text-white text-xs py-1 px-2 rounded transition-opacity">
                            {val * 10}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 mt-2">H-{6-i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-white mb-6">Aktivitas Terbaru</h3>
                  <div className="space-y-6">
                    {filteredLogs.map((log) => (
                      <div key={log.id} className="flex relative">
                        <div className="absolute top-0 left-4 bottom-[-24px] w-px bg-slate-700 last:hidden"></div>
                        <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 bg-slate-900 border border-slate-700">
                          {log.type === 'med' && <Activity className="w-4 h-4 text-emerald-400" />}
                          {log.type === 'fin' && <DollarSign className="w-4 h-4 text-yellow-400" />}
                          {log.type === 'inv' && <Package className="w-4 h-4 text-red-400" />}
                          {log.type === 'hr' && <Users className="w-4 h-4 text-blue-400" />}
                        </div>
                        <div>
                          <p className="text-sm text-slate-300">{log.text}</p>
                          <p className="text-xs text-slate-500 mt-1 flex items-center"><Clock className="w-3 h-3 mr-1" /> {log.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hrd' && (
            <div className="space-y-6">
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setActiveModule("karyawan")}
                  className={`px-4 py-2 text-sm rounded-full border transition ${
                    activeModule === "karyawan"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
                  }`}
                >
                  Data Karyawan
                </button>
                <button
                  onClick={() => setActiveModule("absensi")}
                  className={`px-4 py-2 text-sm rounded-full border transition ${
                    activeModule === "absensi"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
                  }`}
                >
                  Absensi QR
                </button>
                <button
                  onClick={() => setActiveModule("qr_generator")}
                  className={`px-4 py-2 text-sm rounded-full border transition ${
                    activeModule === "qr_generator"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
                  }`}
                >
                  Generate QR
                </button>
              </div>

              {activeModule === "karyawan" && (
                <div className="space-y-6">
                  <StatsCards employees={filteredEmployees} user={session} />
                  
                  <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center w-full md:w-1/2 relative">
                      <Search className="w-5 h-5 text-slate-500 absolute left-3" />
                      <input 
                        type="text" 
                        placeholder="Cari nama karyawan..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="w-full md:w-auto">
                      <select 
                        value={divisiFilter}
                        onChange={(e) => setDivisiFilter(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 outline-none"
                      >
                        <option value="semua">Semua Divisi</option>
                        <option value="puncak">Puncak</option>
                        <option value="medis">Medis</option>
                        <option value="keperawatan">Keperawatan</option>
                        <option value="operasional">Operasional</option>
                      </select>
                    </div>
                  </div>

                  <EmployeeTable employees={filteredEmployees} />
                </div>
              )}

              {activeModule === "absensi" && (
                <QrAttendanceModule user={session} />
              )}

              {activeModule === "qr_generator" && (
                <EmployeeQrGenerator />
              )}
            </div>
          )}

          {activeTab === 'training' && (
            <TrainingModule user={session} />
          )}

          {activeTab !== 'dashboard' && activeTab !== 'hrd' && activeTab !== 'training' && (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-800 rounded-xl border border-slate-700">
              <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-700">
                <Clock className="w-12 h-12 text-slate-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modul Sedang Dikembangkan</h3>
              <p className="text-slate-400 max-w-md text-sm">
                Modul {navItems.find(i => i.id === activeTab)?.label} saat ini sedang dalam tahap pengembangan dan akan segera tersedia pada pembaruan sistem berikutnya.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}


