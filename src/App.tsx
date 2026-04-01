import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePageRSUMLA from './pages/HomePageRSUMLA';
import TentangKami from './pages/TentangKami';
import Home from './pages/Home';
import PortalLogin from './pages/PortalPasien/PortalLogin';
import PatientLayout from './pages/PortalPasien/PatientLayout';
import PatientSummary from './pages/PortalPasien/PatientSummary';
import PatientRME from './pages/PortalPasien/PatientRME';
import PatientRegistration from './pages/PortalPasien/PatientRegistration';
import SmartLogin from './pages/SmartOffice/SmartLogin';
import SmartDashboard from './pages/SmartOffice/SmartDashboard';
import PortalKaryawanLogin from './pages/PortalKaryawan/LoginPage';
import PortalKaryawanDashboard from './pages/PortalKaryawan/DashboardPage';
import { registerSW } from './pwaSetup';

// SRM Pages
import SRMLayout from './pages/SRM/SRMLayout';
import SRMDashboard from './pages/SRM/SRMDashboard';
import SRMAntrian from './pages/SRM/SRMAntrian';
import SRMRekamMedis from './pages/SRM/SRMRekamMedis';
import SRMPasien from './pages/SRM/SRMPasien';
import SRMPengaturan from './pages/SRM/SRMPengaturan';
import SRMIntegrasi from './pages/SRM/SRMIntegrasi';
import SRMKunjungan from './pages/SRM/SRMKunjungan';
import SRMJadwalDokter from './pages/SRM/SRMJadwalDokter';
import SRMBPJS from './pages/SRM/SRMBPJS';
import SRMPencarian from './pages/SRM/SRMPencarian';
import SRMLaporanPDF from './pages/SRM/SRMLaporanPDF';
import SRMWaReminder from './pages/SRM/SRMWaReminder';
import SRMVaksinasi from './pages/SRM/SRMVaksinasi';
import SRMLaporan from './pages/SRM/SRMLaporan';
import ComingSoon from './components/ComingSoon';

function App() {
  useEffect(() => {
    registerSW();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageRSUMLA />} />
        <Route path="/profil/tentang-kami" element={<TentangKami />} />
        <Route path="/srm-marketing" element={<Home />} />
        
        {/* Portal Pasien & RME */}
        <Route path="/portal/pendaftaran" element={<PortalLogin />} />
        <Route element={<PatientLayout />}>
          <Route path="/portal/pendaftaran/dashboard" element={<PatientSummary />} />
          <Route path="/portal/pendaftaran/rme" element={<PatientRME />} />
          <Route path="/portal/pendaftaran/daftar" element={<PatientRegistration />} />
        </Route>

        {/* SMART Office */}
        <Route path="/smart-office" element={<SmartLogin />} />
        <Route path="/smart-office/dashboard" element={<SmartDashboard />} />

        {/* Portal Karyawan */}
        <Route path="/karyawan/login" element={<PortalKaryawanLogin />} />
        <Route path="/karyawan/dashboard" element={<PortalKaryawanDashboard />} />

        {/* SRM Routes */}
        <Route path="/srm" element={<SRMLayout />}>
          <Route index element={<Navigate to="/srm/dashboard" replace />} />
          <Route path="dashboard" element={<SRMDashboard />} />
          <Route path="antrian" element={<SRMAntrian />} />
          <Route path="rekam-medis" element={<SRMRekamMedis />} />
          <Route path="pasien" element={<SRMPasien />} />
          <Route path="pengaturan" element={<SRMPengaturan />} />
          <Route path="integrasi/satusehat" element={<SRMIntegrasi />} />
          <Route path="integrasi/bpjs" element={<SRMBPJS />} />
          <Route path="kunjungan" element={<SRMKunjungan />} />
          <Route path="jadwal-dokter" element={<SRMJadwalDokter />} />
          <Route path="pencarian" element={<SRMPencarian />} />
          <Route path="laporan-pdf" element={<SRMLaporanPDF />} />
          <Route path="wa-reminder" element={<SRMWaReminder />} />
          <Route path="vaksinasi" element={<SRMVaksinasi />} />
          <Route path="laporan" element={<SRMLaporan />} />
          <Route path="*" element={<ComingSoon title="Halaman Tidak Ditemukan" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
