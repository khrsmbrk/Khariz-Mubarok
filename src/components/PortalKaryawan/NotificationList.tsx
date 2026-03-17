import React from 'react';
import { Bell, Calendar, Info, Clock } from 'lucide-react';

const NotificationList = ({ notifications }: { notifications: any[] }) => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'schedule': return <Calendar className="w-5 h-5 text-blue-500" />;
      case 'overtime': return <Clock className="w-5 h-5 text-emerald-500" />;
      default: return <Info className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">Notifikasi</h3>
        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">{notifications.length} Baru</span>
      </div>

      <div className="space-y-4">
        {notifications.map(notif => (
          <div key={notif.id} className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mr-3 flex-shrink-0 border border-slate-100">
              {getIcon(notif.type)}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">{notif.title}</h4>
              <p className="text-xs text-slate-600 mt-0.5">{notif.body}</p>
              <p className="text-[10px] text-slate-400 mt-1">{new Date(notif.createdAt).toLocaleString('id-ID')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
