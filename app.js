let sendButton = document.getElementById('send');
let cancelButton = document.getElementById('cancel');
let form = document.getElementById('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();
});

cancelButton.addEventListener('click', function () {
    document.location.href = 'index.html';
});

sendButton.addEventListener('click', function (e) {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);

    if(email === '' ||  name === '' || message === '') {
        alert('All Feilds are required');
        document.location.href = 'contact.html';
    }
    else if (!isemail(email)) {
        alert('Please enter valid email address');
        document.location.href = 'contact.html';
    }
    else {
        document.location.href = 'index.html';
    }

});

function isemail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}
