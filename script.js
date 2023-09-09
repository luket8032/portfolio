const test = document.getElementById('test');

function sendEmail(e) {
    e.preventDefault();
    const params = {
        user_name: document.getElementById('name').value ,
        user_email: document.getElementById('email').value ,
        message: document.getElementById('message').value
    };
    emailjs.send('service_jmfetmf', 'template_w3farno', params, 'RnVT1zlkdz8VevDyP')
    .then((res) => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        alert('sent!');
        console.log(res);
    })
}

test.addEventListener('click', sendEmail);