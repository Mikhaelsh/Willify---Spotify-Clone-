function validateForm() {
    var email = document.getElementById('email').value;
    var profileName = document.getElementById('profileName').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;

    if (!email.includes('.com')) {
        alert('Email must include ".com".');
        return false;
    }

    if (profileName.trim() === '') {
        alert('Profile Name cannot be empty.');
        return false;
    }

    if (password.trim() === '') {
        alert('Password cannot be empty.');
        return false;
    }

    if (age <= 13) {
        alert('Age must be over 13');
        return false;
    }

    if (gender.trim() === '') {
        alert('Gender cannot be empty.');
        return false;
    }

    // If all validations pass, redirect to home.html
    window.location.href = 'home.html';
    alert('Registration Successful!')
}