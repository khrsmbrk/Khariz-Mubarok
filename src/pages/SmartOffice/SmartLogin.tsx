import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

export default function SmartLogin() {
  const navigate = useNavigate();
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (nip === 'rsumla' && password === 'rsumla123') {
      localStorage.setItem('smart_session', JSON.stringify({ role: 'management', name: 'Admin RS UMLA' }));
      navigate('/smart-office/dashboard');
    } else if (nip === 'admin' && password === 'admin') {
      localStorage.setItem('smart_session', JSON.stringify({ role: 'management', name: 'Admin RS UMLA' }));
      navigate('/smart-office/dashboard');
    } else if (nip === 'staff' && password === 'staff') {
      localStorage.setItem('smart_session', JSON.stringify({ role: 'staff', name: 'Staff RS UMLA' }));
      navigate('/smart-office/dashboard');
    } else {
      setError('Username atau Password salah. (Gunakan rsumla/rsumla123)');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="p-8 text-center border-b border-slate-100">
          <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 tracking-wide">RS UMLA Office</h2>
          <p className="text-slate-500 text-sm mt-2">Enterprise Resource Planning RS UMLA</p>
        </div>
        <div className="p-8">
          {error && <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg mb-6 text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username / NIP</label>
              <input 
                type="text" 
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-400" 
                placeholder="Masukkan Username atau NIP" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-400" 
                placeholder="••••••••" 
                required 
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center text-slate-600 text-sm">
                <input type="checkbox" className="mr-2 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /> Ingat saya
              </label>
              <button type="button" className="text-blue-600 text-sm hover:underline">Lupa Password?</button>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition shadow-md mt-6">
              Masuk Sistem
            </button>
          </form>
        </div>
        <div className="bg-slate-50 p-4 text-center text-xs text-slate-500 border-t border-slate-200">
          &copy; {new Date().getFullYear()} RS Muhammadiyah Lamongan. Internal Use Only.
        </div>
      </div>
    </div>
  );
}
