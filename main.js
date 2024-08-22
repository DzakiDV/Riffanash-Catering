function updateAboutContent() {
    const aboutContent = document.getElementById('aboutContent');
    if (window.innerWidth <= 1024) {
        aboutContent.innerHTML = '<p class="text-light">Riffanash Catering, penyedia layanan catering berkualitas di Semarang. Kami mengutamakan hidangan lezat dan berkualitas untuk setiap acara, dari pernikahan hingga acara perusahaan. Dengan dedikasi terhadap cita rasa dan kepuasan pelanggan. </p>';
    } else {
        aboutContent.innerHTML = '<p class="text-light">Selamat datang di Riffanash Catering, spesialis masakan nusantara di Semarang. Kami menyajikan hidangan lezat dan sehat untuk berbagai acara, mulai dari pernikahan hingga acara perusahaan. Dengan fokus pada cita rasa autentik Indonesia, kami berkomitmen memberikan pengalaman kuliner yang memuaskan. Nikmati layanan catering istimewa kami yang penuh cita rasa khas nusantara!</p>';
    }
}

function updateFaqTitle() {
    const faqTitle = document.querySelector('.faq-title-text');
    if (window.innerWidth <= 770) { 
        faqTitle.textContent = 'F. A. Q';
    } else {
        faqTitle.textContent = 'Frequently Asked Questions';
    }
}

function updateMapLocation() {
    const mapLocation = document.getElementById('mapLocation');
    if (window.innerWidth <= 767.98) { 
        mapLocation.style.width = "300px";
        mapLocation.style.height = "200px";
    } else {    
        mapLocation.style.width = "500px";
        mapLocation.style.height = "290px";
    }
}


window.onload = function() {
    updateFaqTitle(); 
    updateAboutContent();
    updateMapLocation();
};

window.onresize = function() {
    updateFaqTitle();
    updateAboutContent();
    updateMapLocation();
};

function toWhatsapp() {
    location.href = "https://wa.me/6289522667474";
}
function toInstagram() {
    location.href = "https://www.instagram.com/riffanash.catering";
}
