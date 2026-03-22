import { create } from 'zustand';

// --- SCHEMAS / INTERFACES ---

export interface Patient {
  id: string; // No.RM
  nik: string;
  namaLengkap: string;
  istri?: string;
  pekerjaan: string;
  kotaLahir: string;
  tanggalLahir: string;
  jenisKelamin: 'L' | 'P';
  statusPernikahan: string;
  riwayatAlergi: string;
  tanggalRegistrasi: string;
  jumlahKunjungan: number;
}

export interface Doctor {
  id: string; // Kode Dokter
  nama: string;
  spesialisasi: string;
}

export interface DoctorSchedule {
  id: string;
  doctorId: string;
  hari: string;
  jamMulai: string;
  jamSelesai: string;
}

export interface QueueItem {
  id: string;
  nomor: number;
  patientId: string;
  nama: string;
  status: 'Menunggu' | 'Sedang Diperiksa' | 'Selesai' | 'Dilewati';
  waktuDaftar: string;
}

export interface QueueState {
  tanggal: string;
  currentNumber: number;
  nextNumber: number;
  totalHariIni: number;
  menunggu: number;
  selesai: number;
  list: QueueItem[];
}

export interface Visit {
  id: string;
  patientId: string;
  tanggalKunjungan: string;
  dokterId: string;
  operatorId: string;
  anamnesa: string;
  pemeriksaanFisik: string;
  pemeriksaanPenunjang: string;
  diagnosis: string;
  terapi: string;
  tindakan: string;
  status: 'Menunggu' | 'Diperiksa' | 'Selesai';
  totalBiaya: number;
}

export interface Operator {
  id: string;
  kode: string;
  nama: string;
  passwordHash: string;
  permissions: {
    kunjungan: boolean;
    rekamMedis: boolean;
    laporan: boolean;
    pasien: boolean;
    pemeriksaan: boolean;
    diagnosis: boolean;
    tindakan: boolean;
    layananTambahan: boolean;
    pengaturan: boolean;
  };
}

export interface AppSettings {
  header1: string;
  header2: string;
  titleBar: string;
  versi: string;
  backupFolder: string;
}

export interface IntegrationConfig {
  satuSehat: {
    isProduction: boolean;
    baseUrl: string;
    authUrl: string;
    organizationId: string;
    clientId: string;
    clientSecret: string;
  };
  bpjs: {
    isProduction: boolean;
    consId: string;
    secretKey: string;
    userKey: string;
  };
}

// --- ZUSTAND STORE ---

interface SRMStore {
  // State
  patients: Patient[];
  doctors: Doctor[];
  doctorSchedules: DoctorSchedule[];
  queueToday: QueueState;
  visits: Visit[];
  operators: Operator[];
  settings: AppSettings;
  integrationConfig: IntegrationConfig;

  // Actions - Patients
  addPatient: (patient: Patient) => void;
  updatePatient: (id: string, data: Partial<Patient>) => void;
  deletePatient: (id: string) => void;

  // Actions - Queue
  addQueue: (patientId: string, nama: string) => void;
  callNextQueue: () => void;
  callQueueAgain: () => void;
  skipQueue: () => void;
  resetQueue: () => void;

  // Actions - Visits
  addVisit: (visit: Visit) => void;
  updateVisit: (id: string, data: Partial<Visit>) => void;

  // Actions - Doctors
  addDoctor: (doctor: Doctor) => void;
  updateDoctor: (id: string, data: Partial<Doctor>) => void;
  deleteDoctor: (id: string) => void;

  // Actions - Doctor Schedules
  addDoctorSchedule: (schedule: DoctorSchedule) => void;
  updateDoctorSchedule: (id: string, data: Partial<DoctorSchedule>) => void;
  deleteDoctorSchedule: (id: string) => void;

  // Actions - Settings & Integration
  updateSettings: (data: Partial<AppSettings>) => void;
  updateIntegrationConfig: (type: 'satuSehat' | 'bpjs', data: any) => void;
}

// --- INITIAL DUMMY DATA ---
const initialPatients: Patient[] = [
  {
    id: "PSN0001",
    nik: "3524010101900001",
    namaLengkap: "Ahmad Dahlan",
    pekerjaan: "Wiraswasta",
    kotaLahir: "Lamongan",
    tanggalLahir: "1990-01-01",
    jenisKelamin: "L",
    statusPernikahan: "Menikah",
    riwayatAlergi: "Amoxicillin",
    tanggalRegistrasi: "2026-01-15",
    jumlahKunjungan: 2
  },
  {
    id: "PSN0002",
    nik: "3524010202950002",
    namaLengkap: "Siti Aisyah",
    pekerjaan: "Guru",
    kotaLahir: "Surabaya",
    tanggalLahir: "1995-02-02",
    jenisKelamin: "P",
    statusPernikahan: "Belum Menikah",
    riwayatAlergi: "Tidak Ada",
    tanggalRegistrasi: "2026-02-20",
    jumlahKunjungan: 1
  }
];

const initialDoctors: Doctor[] = [
  { id: "DR001", nama: "dr. Budi Santoso, Sp.PD", spesialisasi: "Penyakit Dalam" },
  { id: "DR002", nama: "dr. Siti Aminah, Sp.A", spesialisasi: "Anak" }
];

const initialQueue: QueueState = {
  tanggal: new Date().toISOString().split('T')[0],
  currentNumber: 5,
  nextNumber: 6,
  totalHariIni: 12,
  menunggu: 7,
  selesai: 4,
  list: [
    { id: "Q005", nomor: 5, patientId: "PSN0001", nama: "Ahmad Dahlan", status: "Sedang Diperiksa", waktuDaftar: "08:30" },
    { id: "Q006", nomor: 6, patientId: "PSN0002", nama: "Siti Aisyah", status: "Menunggu", waktuDaftar: "08:45" },
  ]
};

const initialVisits: Visit[] = [
  {
    id: "VST-20260318-001",
    patientId: "PSN0001",
    tanggalKunjungan: new Date().toISOString(),
    dokterId: "DR001",
    operatorId: "OP001",
    anamnesa: "Demam 3 hari, batuk pilek",
    pemeriksaanFisik: "TD: 120/80, HR: 88, T: 38.5",
    pemeriksaanPenunjang: "Lab Darah Lengkap",
    diagnosis: "ISPA (J06.9)",
    terapi: "Paracetamol 500mg 3x1, Ambroxol 3x1",
    tindakan: "Konsultasi Dokter Spesialis",
    status: "Diperiksa",
    totalBiaya: 150000
  }
];

export const useSRMStore = create<SRMStore>((set) => ({
  // Initial State
  patients: initialPatients,
  doctors: initialDoctors,
  doctorSchedules: [],
  queueToday: initialQueue,
  visits: initialVisits,
  operators: [
    {
      id: "OP001",
      kode: "ADM",
      nama: "Admin Utama",
      passwordHash: "***",
      permissions: {
        kunjungan: true, rekamMedis: true, laporan: true, pasien: true,
        pemeriksaan: true, diagnosis: true, tindakan: true, layananTambahan: true, pengaturan: true
      }
    }
  ],
  settings: {
    header1: "Klinik Utama RS UMLA",
    header2: "Jl. Raya Plalangan Plosowahyu KM 2, Lamongan",
    titleBar: "SIM RS UMLA - Sistem Informasi Manajemen",
    versi: "1.0.0",
    backupFolder: "D:/Backup_SIM_RSUMLA"
  },
  integrationConfig: {
    satuSehat: { isProduction: false, baseUrl: "", authUrl: "", organizationId: "", clientId: "", clientSecret: "" },
    bpjs: { isProduction: false, consId: "", secretKey: "", userKey: "" }
  },

  // Actions
  addPatient: (patient) => set((state) => ({ patients: [...state.patients, patient] })),
  updatePatient: (id, data) => set((state) => ({
    patients: state.patients.map(p => p.id === id ? { ...p, ...data } : p)
  })),
  deletePatient: (id) => set((state) => ({
    patients: state.patients.filter(p => p.id !== id)
  })),

  addQueue: (patientId, nama) => set((state) => {
    const newNomor = state.queueToday.totalHariIni + 1;
    const newItem: QueueItem = {
      id: `Q${newNomor.toString().padStart(3, '0')}`,
      nomor: newNomor,
      patientId,
      nama,
      status: 'Menunggu',
      waktuDaftar: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    return {
      queueToday: {
        ...state.queueToday,
        totalHariIni: state.queueToday.totalHariIni + 1,
        menunggu: state.queueToday.menunggu + 1,
        list: [...state.queueToday.list, newItem]
      }
    };
  }),
  callNextQueue: () => set((state) => {
    const current = state.queueToday.nextNumber;
    const next = current + 1;
    // Update status in list
    const updatedList = state.queueToday.list.map(q => {
      if (q.nomor === state.queueToday.currentNumber) return { ...q, status: 'Selesai' as const };
      if (q.nomor === current) return { ...q, status: 'Sedang Diperiksa' as const };
      return q;
    });
    return {
      queueToday: {
        ...state.queueToday,
        currentNumber: current,
        nextNumber: next,
        menunggu: Math.max(0, state.queueToday.menunggu - 1),
        selesai: state.queueToday.selesai + 1,
        list: updatedList
      }
    };
  }),
  callQueueAgain: () => {
    // Logic to trigger TTS or UI alert
    console.log("Memanggil ulang antrian...");
  },
  skipQueue: () => set((state) => {
    const current = state.queueToday.currentNumber;
    const next = state.queueToday.nextNumber;
    const updatedList = state.queueToday.list.map(q => {
      if (q.nomor === current) return { ...q, status: 'Dilewati' as const };
      if (q.nomor === next) return { ...q, status: 'Sedang Diperiksa' as const };
      return q;
    });
    return {
      queueToday: {
        ...state.queueToday,
        currentNumber: next,
        nextNumber: next + 1,
        menunggu: Math.max(0, state.queueToday.menunggu - 1),
        list: updatedList
      }
    };
  }),
  resetQueue: () => set((state) => ({
    queueToday: {
      tanggal: new Date().toISOString().split('T')[0],
      currentNumber: 0,
      nextNumber: 1,
      totalHariIni: 0,
      menunggu: 0,
      selesai: 0,
      list: []
    }
  })),

  addVisit: (visit) => set((state) => ({ visits: [...state.visits, visit] })),
  updateVisit: (id, data) => set((state) => ({
    visits: state.visits.map(v => v.id === id ? { ...v, ...data } : v)
  })),

  // Actions - Doctors
  addDoctor: (doctor) => set((state) => ({
    doctors: [...state.doctors, doctor]
  })),
  updateDoctor: (id, data) => set((state) => ({
    doctors: state.doctors.map(d => d.id === id ? { ...d, ...data } : d)
  })),
  deleteDoctor: (id) => set((state) => ({
    doctors: state.doctors.filter(d => d.id !== id)
  })),

  // Actions - Doctor Schedules
  addDoctorSchedule: (schedule) => set((state) => ({
    doctorSchedules: [...state.doctorSchedules, schedule]
  })),
  updateDoctorSchedule: (id, data) => set((state) => ({
    doctorSchedules: state.doctorSchedules.map(s => s.id === id ? { ...s, ...data } : s)
  })),
  deleteDoctorSchedule: (id) => set((state) => ({
    doctorSchedules: state.doctorSchedules.filter(s => s.id !== id)
  })),

  updateSettings: (data) => set((state) => ({
    settings: { ...state.settings, ...data }
  })),
  updateIntegrationConfig: (type, data) => set((state) => ({
    integrationConfig: {
      ...state.integrationConfig,
      [type]: { ...state.integrationConfig[type], ...data }
    }
  }))
}));
