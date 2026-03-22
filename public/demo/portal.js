document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const btnLogout = document.getElementById('btnLogout');

    // Dummy DB
    const patientDB = {
        'RM123456': {
            name: 'Budi Santoso',
            dob: '1990-01-01',
            history: [
                { date: '10 Mar 2026', poli: 'Poli Penyakit Dalam', doctor: 'dr. Andi, Sp.PD', status: 'Selesai' },
                { date: '15 Feb 2026', poli: 'Poli Umum', doctor: 'dr. Budi', status: 'Selesai' }
            ]
        }
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const patientId = document.getElementById('patientId').value;
        const dob = document.getElementById('dob').value;
        const idError = document.getElementById('idError');
        
        idError.textContent = '';

        // Simulate Login
        const patient = patientDB[patientId];
        if (patient && patient.dob === dob) {
            // Success
            loginSection.classList.add('hidden');
            dashboardSection.classList.remove('hidden');
            
            // Populate Dashboard
            document.getElementById('patientNameDisplay').textContent = patient.name;
            document.getElementById('patientRmDisplay').textContent = patientId;
            
            const tbody = document.getElementById('historyTableBody');
            tbody.innerHTML = '';
            patient.history.forEach(visit => {
                tbody.innerHTML += `
                    <tr>
                        <td>${visit.date}</td>
                        <td>${visit.poli}</td>
                        <td>${visit.doctor}</td>
                        <td><span class="status-badge status-selesai">${visit.status}</span></td>
                    </tr>
                `;
            });
        } else {
            idError.textContent = 'Data tidak ditemukan atau kombinasi NIK/RM dan Tanggal Lahir salah.';
        }
    });

    btnLogout.addEventListener('click', () => {
        loginForm.reset();
        dashboardSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    });
});
