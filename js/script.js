document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Reset pesan kesalahan
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Simulasi validasi
    let isValid = true;

    // Validasi username
    if (!username) {
        document.getElementById('usernameError').innerText = 'Username tidak boleh kosong';
        document.getElementById('usernameError').style.display = 'block'; 
        isValid = false; // Menandakan ada kesalahan
    } else if (username !== 'nasywa') {
        document.getElementById('usernameError').innerText = 'Username salah';
        document.getElementById('usernameError').style.display = 'block'; 
        isValid = false; 
    }

    // Validasi password
    if (!password) {
        document.getElementById('passwordError').innerText = 'Password tidak boleh kosong';
        document.getElementById('passwordError').style.display = 'block'; 
        isValid = false; 
    } else if (password !== '12345') {
        document.getElementById('passwordError').innerText = 'Password salah';
        document.getElementById('passwordError').style.display = 'block'; 
        isValid = false; 
    }

    // Jika semua validasi berhasil
    if (isValid) {
        window.location.href = 'index.html'; // Redirect ke halaman beranda
    }
});