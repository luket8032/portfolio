const loader = document.getElementById('loader');
const hiddenElements = document.querySelectorAll('.hidden');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;
let isLoader = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

function toggleMenu() {
    if(isMenuOpen) {
        mobileMenu.style.display = 'none';
        isMenuOpen = false;
    } else {
        mobileMenu.style.display = 'block';
        isMenuOpen = true;
    }
}

function toggleLoader() {
    if(isLoader) {
        loader.style.display = 'none';
        isLoader = false;
    } else {
        loader.style.display = 'block';
        isLoader = true;
    }
}

function sendEmail(e) {
    e.preventDefault();
    toggleLoader();
    const params = {
        user_name: document.getElementById('name').value ,
        user_email: document.getElementById('email').value ,
        message: document.getElementById('message').value
    };
    emailjs.send('service_jmfetmf', 'template_w3farno', params, 'RnVT1zlkdz8VevDyP')
    .then(() => {
        toggleLoader();
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        alert('You message has been sent!');
    }, function(){
        toggleLoader();
        alert('Something whent wrong, try again later.');
    });
}

menuBtn.addEventListener('click', toggleMenu);
hiddenElements.forEach((el) => observer.observe(el));

// //temp code to find elements that cause overflow
// document.querySelectorAll('*').forEach(elem => {
//     if (elem.offsetWidth > document.documentElement.offsetWidth) {
//         console.log('Problem child: ', elem);
//     }
//   });