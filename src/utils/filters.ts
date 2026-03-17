export const getFilteredEmployees = (employees: any[], divisi: string, search: string, user: any) => {
  let filtered = employees;

  // Role-based filtering
  if (user.role === 'staff') {
    // Staff can only see their own division
    filtered = filtered.filter(e => e.divisi === user.divisi);
  } else if (user.role === 'kepala_instalasi') {
    // Kepala Instalasi can see their division
    filtered = filtered.filter(e => e.divisi === user.divisi);
  }
  // Direktur and Wadir (management/admin) can see all

  // Divisi filter
  if (divisi && divisi !== 'semua') {
    filtered = filtered.filter(e => e.divisi === divisi);
  }

  // Search filter
  if (search) {
    const lowerSearch = search.toLowerCase();
    filtered = filtered.filter(e => e.name.toLowerCase().includes(lowerSearch));
  }

  return filtered;
};
