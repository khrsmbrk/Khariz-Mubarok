import React, { useState } from "react";
import {
  Search,
  Save,
  FileText,
  Camera,
  Stethoscope,
  Printer,
  FilePlus,
  XCircle,
} from "lucide-react";
import { useSRMStore } from "../../store/srmStore";

const SRMRekamMedis = () => {
  const patients = useSRMStore((state) => state.patients);
  const visits = useSRMStore((state) => state.visits);
  const addVisit = useSRMStore((state) => state.addVisit);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    patients.length > 0 ? patients[0].id : null,
  );

  // Form state
  const [anamnesa, setAnamnesa] = useState("");
  const [pemeriksaanFisik, setPemeriksaanFisik] = useState("");
  const [pemeriksaanPenunjang, setPemeriksaanPenunjang] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [terapi, setTerapi] = useState("");
  const [tindakan, setTindakan] = useState("");
  const [totalBiaya, setTotalBiaya] = useState(0);

  const filteredPatients = patients.filter(
    (p) =>
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.nik.includes(searchTerm) ||
      p.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedPatient = patients.find((p) => p.id === selectedPatientId);
  const patientVisits = visits.filter((v) => v.patientId === selectedPatientId);

  const handleSave = () => {
    if (!selectedPatientId) return;

    addVisit({
      id: `V-${Date.now()}`,
      patientId: selectedPatientId,
      tanggalKunjungan: new Date().toISOString(),
      dokterId: "D-001", // Placeholder
      operatorId: "OP-001", // Placeholder
      anamnesa,
      pemeriksaanFisik,
      pemeriksaanPenunjang,
      diagnosis,
      terapi,
      tindakan,
      status: "Selesai",
      totalBiaya,
    });

    // Reset form after save
    setAnamnesa("");
    setPemeriksaanFisik("");
    setPemeriksaanPenunjang("");
    setDiagnosis("");
    setTerapi("");
    setTindakan("");
    setTotalBiaya(0);
    alert("Data rekam medis berhasil disimpan!");
  };

  const handleNew = () => {
    setAnamnesa("");
    setPemeriksaanFisik("");
    setPemeriksaanPenunjang("");
    setDiagnosis("");
    setTerapi("");
    setTindakan("");
    setTotalBiaya(0);
  };

  return (
    <div className="bg-white border border-slate-300 shadow-sm rounded-sm p-4 h-full flex flex-col md:flex-row gap-4">
      {/* Left Panel - Form */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        {/* Search Bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
          <label className="text-sm font-bold text-slate-700 whitespace-nowrap">
            CARI PASIEN :
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Masukkan No.RM/Nik.KTP/Nama..."
            className="flex-1 border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500"
          />
          <button 
            className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 shadow-sm"
            onClick={() => alert('Pencarian sudah otomatis saat mengetik')}
          >
            <Search className="w-4 h-4" /> Cari
          </button>
          <span className="text-sm text-slate-500">atau</span>
          <button 
            className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 shadow-sm"
            onClick={() => alert('Fitur Pendaftaran Pasien Baru masih dalam pengembangan')}
          >
            <FilePlus className="w-4 h-4" /> Pendaftaran Pasien Baru
          </button>
        </div>

        {/* Patient Info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm bg-slate-50 p-3 rounded border border-slate-200">
          <div className="flex">
            <span className="w-24 text-slate-500">NRM</span>
            <span className="font-bold">: {selectedPatient?.id || "-"}</span>
          </div>
          <div className="flex">
            <span className="w-24 text-slate-500">Nik KTP</span>
            <span className="font-bold">: {selectedPatient?.nik || "-"}</span>
          </div>
          <div className="flex">
            <span className="w-24 text-slate-500">Tgl. Registrasi</span>
            <span className="font-bold">
              :{" "}
              {selectedPatient
                ? new Date(
                    selectedPatient.tanggalRegistrasi,
                  ).toLocaleDateString("id-ID")
                : "-"}
            </span>
          </div>
          <div className="flex">
            <span className="w-24 text-slate-500">Nama</span>
            <span className="font-bold">
              : {selectedPatient?.namaLengkap || "-"}
            </span>
          </div>
          <div className="flex">
            <span className="w-24 text-slate-500">Tgl. Lahir</span>
            <span className="font-bold">
              : {selectedPatient?.kotaLahir} {selectedPatient?.tanggalLahir}
            </span>
          </div>
          <div className="flex">
            <span className="w-24 text-slate-500">Kunjungan Ke</span>
            <span className="font-bold">
              : {patientVisits.length} Kali kunjungan
            </span>
          </div>
          <div className="flex">
            <span className="w-24 text-slate-500">Alamat</span>
            <span className="font-bold">
              : {selectedPatient?.kotaLahir || "-"}
            </span>
          </div>
          <div className="flex">
            <span className="w-24 text-slate-500">Umur</span>
            <span className="font-bold">
              :{" "}
              {selectedPatient
                ? new Date().getFullYear() -
                  new Date(selectedPatient.tanggalLahir).getFullYear()
                : "-"}{" "}
              Tahun
            </span>
          </div>
          <div className="flex items-center">
            <button 
              className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded text-xs font-medium w-full shadow-sm"
              onClick={() => alert('Fitur Tampilkan Detail Riwayat Kunjungan masih dalam pengembangan')}
            >
              Tampilkan Detail Riwayat Kunjungan
            </button>
          </div>
        </div>

        {/* Medical Record Form */}
        <div className="flex-1 overflow-auto border border-slate-300 rounded-sm p-3 bg-slate-50 flex flex-col gap-3">
          <div className="flex gap-2 items-start">
            <label className="w-48 text-right text-sm font-medium text-slate-700 pt-2">
              ANAMNESA :
            </label>
            <textarea
              value={anamnesa}
              onChange={(e) => setAnamnesa(e.target.value)}
              className="flex-1 border border-slate-300 rounded p-2 text-sm h-24 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex gap-2 items-start">
            <label className="w-48 text-right text-sm font-medium text-slate-700 pt-2">
              PEMERIKSAAN FISIK :
            </label>
            <div className="flex-1 flex flex-col gap-1">
              <textarea
                value={pemeriksaanFisik}
                onChange={(e) => setPemeriksaanFisik(e.target.value)}
                className="w-full border border-slate-300 rounded p-2 text-sm h-16 focus:outline-none focus:border-blue-500"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button 
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-3 py-1 rounded text-xs flex items-center gap-1 shadow-sm"
                  onClick={() => alert('Fitur Cari Di Database masih dalam pengembangan')}
                >
                  <Search className="w-3 h-3" /> Cari Di Database
                </button>
                <input
                  type="text"
                  defaultValue="0"
                  className="w-24 border border-slate-300 rounded px-2 py-1 text-xs text-right focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <label className="w-48 text-right text-sm font-medium text-slate-700 pt-2">
              PEMERIKSAAN PENUNJANG :
            </label>
            <div className="flex-1 flex flex-col gap-1">
              <textarea
                value={pemeriksaanPenunjang}
                onChange={(e) => setPemeriksaanPenunjang(e.target.value)}
                className="w-full border border-slate-300 rounded p-2 text-sm h-16 focus:outline-none focus:border-blue-500"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button 
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-3 py-1 rounded text-xs flex items-center gap-1 shadow-sm"
                  onClick={() => alert('Fitur Cari Di Database masih dalam pengembangan')}
                >
                  <Search className="w-3 h-3" /> Cari Di Database
                </button>
                <input
                  type="text"
                  defaultValue="0"
                  className="w-24 border border-slate-300 rounded px-2 py-1 text-xs text-right focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <label className="w-48 text-right text-sm font-medium text-slate-700 pt-2">
              DIAGNOSIS :
            </label>
            <div className="flex-1 flex flex-col gap-1">
              <textarea
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                className="w-full border border-slate-300 rounded p-2 text-sm h-16 focus:outline-none focus:border-blue-500"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button 
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-3 py-1 rounded text-xs flex items-center gap-1 shadow-sm"
                  onClick={() => alert('Fitur Cari Di Database masih dalam pengembangan')}
                >
                  <Search className="w-3 h-3" /> Cari Di Database
                </button>
                <input
                  type="text"
                  defaultValue="0"
                  className="w-24 border border-slate-300 rounded px-2 py-1 text-xs text-right focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <label className="w-48 text-right text-sm font-medium text-slate-700 pt-2">
              TERAPI :
            </label>
            <div className="flex-1 flex flex-col gap-1">
              <textarea
                value={terapi}
                onChange={(e) => setTerapi(e.target.value)}
                className="w-full border border-slate-300 rounded p-2 text-sm h-16 focus:outline-none focus:border-blue-500"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button 
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-3 py-1 rounded text-xs flex items-center gap-1 shadow-sm"
                  onClick={() => alert('Fitur Cari Di Database masih dalam pengembangan')}
                >
                  <Search className="w-3 h-3" /> Cari Di Database
                </button>
                <input
                  type="text"
                  defaultValue="0"
                  className="w-24 border border-slate-300 rounded px-2 py-1 text-xs text-right focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <label className="w-48 text-right text-sm font-medium text-slate-700 pt-2">
              TINDAKAN :
            </label>
            <div className="flex-1 flex flex-col gap-1">
              <textarea
                value={tindakan}
                onChange={(e) => setTindakan(e.target.value)}
                className="w-full border border-slate-300 rounded p-2 text-sm h-16 focus:outline-none focus:border-blue-500"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button 
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-3 py-1 rounded text-xs flex items-center gap-1 shadow-sm"
                  onClick={() => alert('Fitur Cari Di Database masih dalam pengembangan')}
                >
                  <Search className="w-3 h-3" /> Cari Di Database
                </button>
                <input
                  type="text"
                  defaultValue="0"
                  className="w-24 border border-slate-300 rounded px-2 py-1 text-xs text-right focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <label className="w-48 text-right text-sm font-medium text-slate-700">
              No Transaksi :
            </label>
            <span className="text-blue-600 font-bold">-</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4">
          <button
            onClick={handleSave}
            disabled={!selectedPatientId}
            className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" /> SIMPAN
          </button>
          <button 
            onClick={() => alert('Fitur Resep Obat akan membuka modal e-Resep.')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4" /> Resep Obat
          </button>
          <button 
            onClick={() => alert('Fitur Surat akan membuka pilihan surat keterangan sehat/sakit.')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4" /> Surat
          </button>
          <button 
            onClick={() => alert('Fitur Foto akan membuka kamera atau upload file.')}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          >
            <Camera className="w-4 h-4" /> Foto
          </button>
          <button 
            onClick={() => alert('Fitur Diagnosis akan membuka pencarian ICD-10.')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          >
            <Stethoscope className="w-4 h-4" /> Diagnosis
          </button>
          <button 
            onClick={() => window.print()}
            className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4" /> CETAK
          </button>
          <button 
            onClick={() => window.print()}
            className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4" /> CETAK KWI
          </button>
          <button
            onClick={handleNew}
            className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-4 py-2 rounded text-sm font-bold shadow-sm"
          >
            BARU
          </button>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm font-bold text-slate-700">
              TOTAL BIAYA Rp :
            </span>
            <input
              type="number"
              value={totalBiaya}
              onChange={(e) => setTotalBiaya(Number(e.target.value))}
              className="w-24 border border-slate-300 rounded px-2 py-1 text-sm text-right focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Patient List */}
      <div className="w-full md:w-1/3 flex flex-col border border-slate-300 rounded-sm bg-white">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100 text-slate-700 border-b border-slate-300 sticky top-0">
              <tr>
                <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">
                  NO
                </th>
                <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">
                  NO RM
                </th>
                <th className="px-2 py-2 font-bold border-r border-slate-300 text-center">
                  NIK KTP
                </th>
                <th className="px-2 py-2 font-bold border-r border-slate-300">
                  NAMA
                </th>
                <th className="px-2 py-2 font-bold">TTL</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-2 py-4 text-center text-slate-400 italic"
                  >
                    Tidak ada data pasien
                  </td>
                </tr>
              ) : (
                filteredPatients.map((patient, index) => (
                  <tr
                    key={patient.id}
                    onClick={() => setSelectedPatientId(patient.id)}
                    className={`${selectedPatientId === patient.id ? "bg-green-500 text-white" : "bg-white hover:bg-slate-50 text-slate-700"} border-b border-slate-200 cursor-pointer`}
                  >
                    <td className="px-2 py-2 text-center border-r border-slate-300">
                      {index + 1}
                    </td>
                    <td className="px-2 py-2 text-center border-r border-slate-300">
                      {patient.id}
                    </td>
                    <td className="px-2 py-2 text-center border-r border-slate-300">
                      {patient.nik}
                    </td>
                    <td className="px-2 py-2 border-r border-slate-300 font-bold">
                      {patient.namaLengkap}
                    </td>
                    <td className="px-2 py-2">
                      {patient.kotaLahir}, {patient.tanggalLahir}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom Search & Exit */}
        <div className="bg-slate-50 border-t border-slate-300 p-2 flex items-center gap-2">
          <label className="text-xs font-bold text-slate-700 whitespace-nowrap">
            CARI PASIEN :
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Masukkan No.RM/Nik.KTP/Nama..."
            className="flex-1 border border-slate-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
          />
          <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-red-600 px-3 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm ml-auto">
            <XCircle className="w-3 h-3" /> KELUAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default SRMRekamMedis;
