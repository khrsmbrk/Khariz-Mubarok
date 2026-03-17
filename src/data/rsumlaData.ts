import { 
  Stethoscope, BedDouble, FileText, Users, CreditCard, 
  ClipboardCheck, MessageSquareWarning, Info, Activity,
  Baby, HeartPulse, ActivitySquare, Sparkles, ShieldCheck
} from 'lucide-react';

export const quickAccess = [
  { id: 1, title: 'Pendaftaran Online', desc: 'Daftar periksa tanpa antri', icon: Stethoscope, link: '/portal/pendaftaran' },
  { id: 2, title: 'Kamar Rawat Inap', desc: 'Cek ketersediaan bed', icon: BedDouble, link: '#' },
  { id: 3, title: 'Hasil Penunjang', desc: 'Laboratorium & Radiologi', icon: FileText, link: '#' },
  { id: 4, title: 'Daftar Dokter', desc: 'Jadwal & profil dokter', icon: Users, link: '/srm/jadwal-dokter' },
  { id: 5, title: 'Tarif & Kerja Sama', desc: 'Informasi biaya & asuransi', icon: CreditCard, link: '#' },
  { id: 6, title: 'Standar Pelayanan', desc: 'Maklumat & standar layanan', icon: ClipboardCheck, link: '#' },
  { id: 7, title: 'Pengaduan Layanan', desc: 'Sampaikan keluhan Anda', icon: MessageSquareWarning, link: '#' },
  { id: 8, title: 'Permohonan Informasi', desc: 'PPID & Keberatan', icon: Info, link: '#' },
  { id: 9, title: 'PROMs & PREMs', desc: 'Survei kepuasan pasien', icon: Activity, link: '#' },
];

export const layananUnggulan = [
  { id: 1, title: 'Klinik Tumbuh Kembang Anak', desc: 'Layanan komprehensif untuk memantau dan mengoptimalkan tumbuh kembang anak sejak dini.', icon: Baby },
  { id: 2, title: 'Pusat Pelayanan Jantung Terpadu', desc: 'Penanganan penyakit jantung dengan teknologi modern dan tenaga medis ahli.', icon: HeartPulse },
  { id: 3, title: 'Layanan Ginjal Terpadu / Hemodialisa', desc: 'Fasilitas cuci darah yang nyaman dengan pengawasan dokter spesialis nefrologi.', icon: ActivitySquare },
  { id: 4, title: 'Klinik Estetika & Rehabilitasi', desc: 'Perawatan kecantikan medis dan rehabilitasi medik pasca cedera atau operasi.', icon: Sparkles },
  { id: 5, title: 'Pencegahan & Manajemen Penyakit Kronis', desc: 'Pendampingan jangka panjang untuk diabetes, hipertensi, dan penyakit kronis lainnya.', icon: ShieldCheck },
];

export const beritaRSUMLA = [
  {
    id: 1,
    tanggal: '15 Mar 2026',
    kategori: 'RSUMLA NEWS',
    judul: 'RSUMLA Resmikan Gedung Pusat Pelayanan Jantung Terpadu',
    ringkasan: 'Fasilitas baru ini diharapkan dapat menekan angka rujukan pasien jantung ke luar kota Lamongan.',
    image: 'https://picsum.photos/seed/news1/400/250'
  },
  {
    id: 2,
    tanggal: '12 Mar 2026',
    kategori: 'RSUMLA NEWS',
    judul: 'Penghargaan Pelayanan Publik Terbaik Tingkat Provinsi',
    ringkasan: 'RSUMLA berhasil meraih penghargaan atas inovasi sistem antrian digital dan rekam medis terintegrasi.',
    image: 'https://picsum.photos/seed/news2/400/250'
  },
  {
    id: 3,
    tanggal: '08 Mar 2026',
    kategori: 'RSUMLA NEWS',
    judul: 'Bakti Sosial Operasi Katarak Gratis Bersama FIK UMLA',
    ringkasan: 'Lebih dari 100 warga Lamongan mendapatkan layanan operasi katarak gratis dalam rangka milad universitas.',
    image: 'https://picsum.photos/seed/news3/400/250'
  }
];

export const seputarUMLA = [
  {
    id: 1,
    tanggal: '16 Mar 2026',
    kategori: 'PENDIDIKAN',
    judul: 'Penerimaan Mahasiswa Profesi Ners Angkatan Baru',
    ringkasan: 'RSUMLA menyambut 50 mahasiswa profesi Ners FIK UMLA untuk menjalani praktik klinik komprehensif.'
  },
  {
    id: 2,
    tanggal: '10 Mar 2026',
    kategori: 'KOLABORASI',
    judul: 'Riset Bersama Penanganan Stunting di Lamongan',
    ringkasan: 'Tim dokter RSUMLA dan dosen FIK UMLA meluncurkan program riset intervensi gizi untuk balita stunting.'
  },
  {
    id: 3,
    tanggal: '05 Mar 2026',
    kategori: 'SEMINAR',
    judul: 'Seminar Nasional Keperawatan Gawat Darurat',
    ringkasan: 'Diadakan di auditorium RSUMLA, menghadirkan pakar keperawatan gawat darurat tingkat nasional.'
  }
];

export const agendaDiklit = [
  { id: 1, tanggal: '20 - 22 Mar 2026', status: 'Akan Datang', judul: 'Pelatihan Bantuan Hidup Dasar (BHD) untuk Tenaga Non-Medis' },
  { id: 2, tanggal: '25 - 26 Mar 2026', status: 'Akan Datang', judul: 'Workshop Manajemen Mutu & Keselamatan Pasien RS' },
  { id: 3, tanggal: '10 - 12 Mar 2026', status: 'Selesai', judul: 'Pelatihan Pencegahan dan Pengendalian Infeksi (PPI) Dasar' },
  { id: 4, tanggal: '01 - 03 Mar 2026', status: 'Selesai', judul: 'Orientasi Mahasiswa Praktik Klinik Keperawatan' },
];

export const inovasiLayanan = [
  { id: 1, judul: 'Sistem Antrian Digital (SIM RSUMLA)', desc: 'Integrasi antrian online dengan estimasi waktu panggil via WhatsApp.' },
  { id: 2, judul: 'Dashboard Mutu Real-time', desc: 'Pemantauan indikator mutu rumah sakit secara transparan dan real-time.' },
  { id: 3, judul: 'Edukasi Pasien Berbasis Video', desc: 'Akses mudah ke perpustakaan video edukasi kesehatan melalui QR code di ruang tunggu.' },
  { id: 4, judul: 'Telemedicine Terintegrasi', desc: 'Konsultasi online lanjutan pasca rawat inap langsung dari aplikasi.' },
];

export const mediaEdukasi = [
  { id: 1, episode: 'Episode 1', judul: 'Mengenal Gejala Awal Stroke & Penanganannya' },
  { id: 2, episode: 'Episode 2', judul: 'Pentingnya Imunisasi Dasar Lengkap pada Anak' },
  { id: 3, episode: 'Episode 3', judul: 'Mitos dan Fakta Seputar Penyakit Diabetes' },
  { id: 4, episode: 'Episode 4', judul: 'Tips Menjaga Kesehatan Mental di Lingkungan Kerja' },
];
