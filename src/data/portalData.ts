export const ROLES = [
  { id: 'dir', name: 'Direktur', level: 'puncak', permissions: ['all'] },
  { id: 'wadir_sdi', name: 'Wakil Direktur SDI', level: 'puncak', permissions: ['manage_all', 'view_reports'] },
  { id: 'kasubag_pegawai', name: 'Kasubag Kepegawaian', level: 'menengah', permissions: ['manage_team', 'view_reports'] },
  { id: 'ka_instalasi_igd', name: 'Kepala Instalasi IGD', level: 'menengah', permissions: ['manage_team'] },
  { id: 'staf_admin', name: 'Staf Administrasi', level: 'operasional', permissions: ['basic'] },
  { id: 'perawat', name: 'Perawat', level: 'operasional', permissions: ['basic'] },
  { id: 'dokter', name: 'Dokter', level: 'operasional', permissions: ['basic'] }
];

export const EMPLOYEES = [
  { id: 'EMP-001', nip: '198001012005011001', name: 'dr. Hj. Umi Aliyah, MARS', roleId: 'dir', jabatan: 'Direktur', unit: 'Direksi', level: 'puncak', statusKepegawaian: 'Tetap', kontak: '081234567890' },
  { id: 'EMP-002', nip: '198202022008021002', name: 'Budi Santoso, S.E., M.Kes.', roleId: 'wadir_sdi', jabatan: 'Wakil Direktur SDI', unit: 'SDI', level: 'puncak', statusKepegawaian: 'Tetap', kontak: '081234567891' },
  { id: 'EMP-003', nip: '198503032010032003', name: 'Siti Aminah, S.Kep., Ns.', roleId: 'ka_instalasi_igd', jabatan: 'Kepala Instalasi IGD', unit: 'IGD', level: 'menengah', statusKepegawaian: 'Tetap', kontak: '081234567892' },
  { id: 'EMP-004', nip: '199004042015042004', name: 'Rina Wati, A.Md.Kep.', roleId: 'perawat', jabatan: 'Perawat Pelaksana', unit: 'IGD', level: 'operasional', statusKepegawaian: 'Kontrak', kontak: '081234567893' },
  { id: 'EMP-005', nip: '199205052018051005', name: 'Ahmad Fauzi, S.Kom.', roleId: 'staf_admin', jabatan: 'Staf IT & Data', unit: 'Pengolahan Data', level: 'operasional', statusKepegawaian: 'Tetap', kontak: '081234567894' },
];

export const SHIFTS = [
  { id: 'SHF-001', employeeId: 'EMP-004', date: new Date().toISOString().split('T')[0], startTime: '07:00', endTime: '14:00', unit: 'IGD', roleDescription: 'Perawat Jaga Pagi IGD' },
  { id: 'SHF-002', employeeId: 'EMP-005', date: new Date().toISOString().split('T')[0], startTime: '08:00', endTime: '16:00', unit: 'IT', roleDescription: 'Support IT Shift Pagi' },
];

export const ATTENDANCES = [
  { id: 'ATT-001', employeeId: 'EMP-004', date: new Date().toISOString().split('T')[0], checkInTime: '06:55', status: 'Hadir' },
];

export const OVERTIMES = [
  { id: 'OVT-001', employeeId: 'EMP-005', date: '2026-03-15', hours: 2, reason: 'Maintenance Server SIMRS', status: 'Disetujui', approvedBy: 'EMP-002' },
  { id: 'OVT-002', employeeId: 'EMP-004', date: new Date().toISOString().split('T')[0], hours: 3, reason: 'Cover shift teman sakit', status: 'Menunggu', approvedBy: null },
];

export const NOTIFICATIONS = [
  { id: 'NOT-001', title: 'Jadwal Shift Diperbarui', body: 'Jadwal shift Anda untuk minggu depan telah diterbitkan.', createdAt: '2026-03-16T08:00:00Z', type: 'schedule' },
  { id: 'NOT-002', title: 'Pengumuman HRD', body: 'Pembaruan kebijakan cuti tahunan 2026.', createdAt: '2026-03-15T10:00:00Z', type: 'announcement' },
  { id: 'NOT-003', title: 'Lembur Disetujui', body: 'Pengajuan lembur Anda tanggal 15 Maret telah disetujui.', createdAt: '2026-03-16T14:30:00Z', type: 'overtime' },
];
