const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const form = document.getElementById('registrationForm');
const formContainer = document.getElementById('formContainer');
const confirmationContainer = document.getElementById('confirmationContainer');
const successContainer = document.getElementById('successContainer');
const dataSummary = document.getElementById('dataSummary');
const driveBtn = document.getElementById('driveBtn');

const editBtn = document.getElementById('editBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Preview Foto
photoInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            photoPreview.src = e.target.result;
            photoPreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Buka Google Drive
driveBtn.addEventListener('click', function () {
    window.open("https://drive.google.com", "_blank");
});

// Submit Form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil semua data
    const data = {
        nama: ${document.getElementById('firstName').value} ${document.getElementById('lastName').value},
        alamat: ${document.getElementById('street').value}, ${document.getElementById('district').value}, ${document.getElementById('city').value}, ${document.getElementById('province').value}, ${document.getElementById('country').value} ${document.getElementById('postalCode').value},
        tanggalLahir: document.getElementById('birthDate').value,
        email: document.getElementById('email').value,
        teleponRumah: ${document.getElementById('areaCode').value}-${document.getElementById('homePhone').value},
        hp: document.getElementById('mobile').value,
        nisn: document.getElementById('nisn').value,
        asalSekolah: document.getElementById('school').value,
        alamatSekolah: document.getElementById('schoolAddress').value,
        daftarKe: document.getElementById('registerTo').value,
    };

    // Tampilkan ringkasan
    dataSummary.innerHTML = `
        <p><strong>Nama Lengkap:</strong> ${data.nama}</p>
        <p><strong>Alamat:</strong> ${data.alamat}</p>
        <p><strong>Tanggal Lahir:</strong> ${data.tanggalLahir}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telepon Rumah:</strong> ${data.teleponRumah}</p>
        <p><strong>HP:</strong> ${data.hp}</p>
        <p><strong>NISN:</strong> ${data.nisn}</p>
        <p><strong>Asal Sekolah:</strong> ${data.asalSekolah}</p>
        <p><strong>Alamat Sekolah:</strong> ${data.alamatSekolah}</p>
        <p><strong>Daftar Ke:</strong> ${data.daftarKe}</p>
    `;

    formContainer.style.display = 'none';
    confirmationContainer.style.display = 'block';
});

// Edit Data
editBtn.addEventListener('click', function () {
    confirmationContainer.style.display = 'none';
    formContainer.style.display = 'block';
});

// Kirim Data
confirmBtn.addEventListener('click', function () {
    confirmationContainer.style.display = 'none';
    successContainer.style.display = 'block';
});