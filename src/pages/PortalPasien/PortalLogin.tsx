import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DUMMY_PATIENT } from '../../data/mockData';

export default function PortalLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    identifier: "",
    birthDate: "",
  });
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.identifier || !form.birthDate) {
      setError("Harap isi NIK/No. RM dan Tanggal Lahir.");
      return;
    }

    if (form.birthDate !== DUMMY_PATIENT.birthDate) {
      setError("Data tidak sesuai. Gunakan data simulasi yang disediakan.");
      return;
    }

    // Simulate login
    localStorage.setItem('patient_session', JSON.stringify(DUMMY_PATIENT));
    navigate('/portal/pendaftaran/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">Portal Pasien & RME</p>
            <h1 className="text-sm md:text-base font-semibold text-slate-900">
              Rumah Sakit Universitas Muhammadiyah Lamongan
            </h1>
          </div>
          <Link
            to="/"
            className="text-xs text-emerald-700 font-medium hover:text-emerald-800"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-sm p-5 md:p-6">
          <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
            Masuk Portal Pasien
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Gunakan data simulasi untuk mengakses rekam medis elektronik dan
            pendaftaran berobat.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                NIK atau Nomor Rekam Medis
              </label>
              <input
                type="text"
                value={form.identifier}
                onChange={(e) => handleChange("identifier", e.target.value)}
                placeholder="Contoh: 3512XXXXXXXX0001 atau RSUML-2024-001"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Tanggal Lahir
              </label>
              <input
                type="date"
                value={form.birthDate}
                onChange={(e) => handleChange("birthDate", e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Data simulasi: 2004-03-15
              </p>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-md px-2 py-1">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-700 text-white text-xs font-semibold py-2 hover:bg-emerald-800"
            >
              Masuk Portal
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
