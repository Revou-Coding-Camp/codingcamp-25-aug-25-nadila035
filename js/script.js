// Menunggu hingga seluruh konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // 1. Meminta nama pengguna dengan prompt dan menampilkannya
    const userNameSpan = document.getElementById('user-name');
    if (userNameSpan) {
        // Menampilkan pop-up untuk meminta nama pengguna
        let userName = prompt("Halo! Silakan masukkan nama Anda:", "Pengguna");

        // Jika pengguna tidak mengisi nama atau menekan "Cancel", gunakan nama default "Pengguna"
        if (userName === null || userName.trim() === "") {
            userName = "Pengguna";
        }
        
        // Mengubah teks sapaan dengan nama yang sudah diinput
        userNameSpan.textContent = userName;
    }

    // 2. Validasi Form dan Menampilkan Hasil
    const messageForm = document.getElementById('message-form');
    
    // Hanya jalankan kode form jika form-nya ada di halaman ini
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            // Mencegah form mengirim data ke server (default action)
            event.preventDefault();

            // Mengambil nilai dari setiap input
            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggal-lahir').value;
            const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
            const pesan = document.getElementById('pesan').value;

            // Validasi: Cek apakah semua field sudah diisi
            if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
                alert('Semua kolom wajib diisi!');
                return; // Hentikan eksekusi jika ada yang kosong
            }
            
            const jenisKelaminValue = jenisKelamin.value;
            
            const formattedTanggalLahir = new Date(tanggalLahir).toLocaleDateString('id-ID', {
                day: '2-digit', month: 'long', year: 'numeric'
            });

            // Menampilkan data ke area output
            document.getElementById('output-nama').textContent = nama;
            document.getElementById('output-tanggal-lahir').textContent = formattedTanggalLahir;
            document.getElementById('output-jenis-kelamin').textContent = jenisKelaminValue;
            document.getElementById('output-pesan').textContent = pesan;
            
            // Mengatur dan menampilkan waktu saat ini
            const currentTimeSpan = document.getElementById('current-time');
            const now = new Date();
            currentTimeSpan.textContent = now.toString();
        });
    }

});