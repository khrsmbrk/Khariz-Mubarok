import React, { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DUMMY_VISITS } from '../../data/mockData';

export default function PatientSummary() {
  const { patient } = useOutletContext<{ patient: any }>();
  const visits = DUMMY_VISITS;
  const lastVisit = visits[visits.length - 1];

  const lastVisitCost = useMemo(() => {
    if (!lastVisit) return 0;
    const procedureTotal = lastVisit.procedures.reduce(
      (sum, p) => sum + p.tariff,
      0
    );
    const drugTotal = lastVisit.drugPrescription.reduce(
      (sum, d) => sum + d.cost,
      0
    );
    return procedureTotal + drugTotal + lastVisit.adminFee;
  }, [lastVisit]);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2 space-y-3">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2">
          <p className="text-xs font-semibold text-emerald-800 mb-1">
            Peringatan Medis
          </p>
          <p className="text-[11px] text-emerald-900">
            Alergi: {patient.allergies?.join(", ") || '-'} · Riwayat:{" "}
            {patient.chronicConditions?.join(", ") || '-'}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
          <p className="text-xs font-semibold text-slate-800 mb-1">
            Kunjungan Terakhir
          </p>
          {lastVisit ? (
            <div className="text-[11px] text-slate-700 space-y-1">
              <p>
                Tanggal: {lastVisit.date} · {lastVisit.clinic}
              </p>
              <p>Dokter: {lastVisit.doctor}</p>
              <p>
                Diagnosis: {lastVisit.diagnosis} (ICD-10: {lastVisit.icd10})
              </p>
              <p>
                Metode Pembayaran: {lastVisit.paymentMethod} · Status:{" "}
                <span className="inline-flex items-center rounded-full border px-2 py-[2px] text-[10px] font-medium bg-emerald-50 border-emerald-200 text-emerald-800">
                  {lastVisit.status}
                </span>
              </p>
            </div>
          ) : (
            <p className="text-[11px] text-slate-500">
              Belum ada riwayat kunjungan.
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
          <p className="text-xs font-semibold text-slate-800 mb-1">
            Ringkasan Biaya Kunjungan Terakhir
          </p>
          {lastVisit ? (
            <>
              <p className="text-[11px] text-slate-600">
                Perkiraan total biaya (tindakan, obat, administrasi) untuk
                kunjungan terakhir.
              </p>
              <p className="text-sm font-semibold text-slate-900 mt-1">
                Rp {lastVisitCost.toLocaleString("id-ID")}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                Angka ini digunakan untuk simulasi perhitungan biaya rumah
                sakit.
              </p>
            </>
          ) : (
            <p className="text-[11px] text-slate-500">
              Belum ada data biaya kunjungan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
