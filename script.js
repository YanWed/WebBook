window.onload = function() {
    alert('Selamat datang di halaman buku kami!'); 
};

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama tidak boleh kosong.';
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '' || !email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Email tidak valid.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Pesan tidak boleh kosong.';
        isValid = false;
    }

    if (isValid) {
        alert('Terima Kasih :)');
        document.getElementById('contactForm').reset();
    }
});
