const sendBtn = document.getElementById('sendBtn');
const loader = document.getElementById('loader');

let isLoader = false;

function toggleLoader() {
    if(isLoader) {
        loader.style.display = 'none';
        isLoader = false;
    } else {
        loader.style.display = 'inline-block';
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
    });
}

sendBtn.addEventListener('click', sendEmail);