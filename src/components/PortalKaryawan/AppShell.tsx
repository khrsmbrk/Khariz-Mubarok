import React from 'react';
import { LogOut, Menu, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AppShell = ({ children, user }: { children: React.ReactNode, user: any }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('karyawan_session');
    navigate('/karyawan/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top App Bar (Material 3 Style) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button onClick={() => alert('Membuka menu navigasi... (Simulasi)')} className="p-2 -ml-2 mr-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors md:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-blue-900 leading-tight">Portal Karyawan</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">RSM LAMONGAN</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button onClick={() => alert('Membuka panel notifikasi... (Simulasi)')} className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              
              <div className="hidden md:flex flex-col items-end mr-4">
                <span className="text-sm font-semibold text-slate-800">{user?.name}</span>
                <span className="text-xs text-slate-500">{user?.jabatan}</span>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm border border-blue-200">
                {user?.name?.charAt(0) || 'U'}
              </div>

              <button 
                onClick={handleLogout}
                className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
        {children}
      </main>
    </div>
  );
};

export default AppShell;
