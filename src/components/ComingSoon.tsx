import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction } from 'lucide-react';

const ComingSoon = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white rounded-lg shadow-sm border border-slate-200 m-4">
      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
        <Construction className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
      <p className="text-slate-500 max-w-md">
        Fitur ini sedang dalam tahap pengembangan aktif oleh tim IT RS UMLA. 
        Nantikan pembaruan selanjutnya!
      </p>
      <button 
        onClick={() => navigate(-1)}
        className="mt-8 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-md transition-colors"
      >
        Kembali ke Halaman Sebelumnya
      </button>
    </div>
  );
};

export default ComingSoon;
