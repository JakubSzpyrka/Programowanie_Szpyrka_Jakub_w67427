
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const sameAddressCheckbox = document.getElementById('sameAddress');
    const correspondenceAddressGroup = document.getElementById('correspondenceAddressGroup');
    const countrySelect = document.getElementById('country');
    const regionSelect = document.getElementById('region');
    const regionText = document.getElementById('regionText');
    const phoneInput = document.getElementById('phone');

    // sprawdzenie wartosci
    function hasValue(input) {
        const errorField = document.getElementById(input.id + 'Error');
        if (input.value.trim() === '') {
            errorField.textContent = 'To pole jest wymagane.';
            return false;
        } else {
            errorField.textContent = '';
            return true;
        }
    }

    // spr dlugosc znakow
    function checkLength(input, minLength) {
        const errorField = document.getElementById(input.id + 'Error');
        if (input.value.length < minLength) {
            errorField.textContent = `Pole musi zawierać co najmniej ${minLength} znaków.`;
            return false;
        } else {
            errorField.textContent = '';
            return true;
        }
    }

    //spr mail
    function validateEmail(input) {
        const errorField = document.getElementById(input.id + 'Error');
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(input.value)) {
            errorField.textContent = 'Podaj poprawny adres email.';
            return false;
        } else {
            errorField.textContent = '';
            return true;
        }
    }


    function validatePassword(input) {
        const errorField = document.getElementById(input.id + 'Error');
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(input.value)) {
            errorField.textContent = 'Hasło musi zawierać co najmniej 8 znaków, w tym jedną wielką literę, jedną małą literę i jedną cyfrę.';
            return false;
        } else {
            errorField.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const errorField = document.getElementById('confirmPasswordError');
        if (password.value !== confirmPassword.value) {
            errorField.textContent = 'Hasła nie są zgodne.';
            return false;
        } else {
            errorField.textContent = '';
            return true;
        }
    }


    function validateBirthDate(input) {
        const errorField = document.getElementById(input.id + 'Error');
        const birthDate = new Date(input.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            errorField.textContent = 'Musisz być pełnoletni, aby wypełnić ten formularz.';
            return false;
        } else {
            errorField.textContent = '';
            return true;
        }
    }

    
    function restrictToDigits(input) {
        input.value = input.value.replace(/\D/g, '');
    }

    
    function toggleCorrespondenceAddress() {
        if (sameAddressCheckbox.checked) {
            correspondenceAddressGroup.classList.add('hidden');
        } else {
            correspondenceAddressGroup.classList.remove('hidden');
        }
    }

    
    function toggleRegionField() {
        if (countrySelect.value === 'PL') {
            regionSelect.classList.remove('hidden');
            regionText.classList.add('hidden');
        } else {
            regionSelect.classList.add('hidden');
            regionText.classList.remove('hidden');
        }
    }

    
    form.addEventListener('input', function (event) {
        switch (event.target.id) {
            case 'firstName':
            case 'lastName':
                hasValue(event.target);
                break;
            case 'email':
                validateEmail(event.target);
                break;
            case 'password':
                validatePassword(event.target);
                validateConfirmPassword(); // Sprawdza też czy hasła się zgadzają
                break;
            case 'confirmPassword':
                validateConfirmPassword();
                break;
            case 'phone':
                restrictToDigits(event.target);
                hasValue(event.target);
                break;
            case 'birthDate':
                validateBirthDate(event.target);
                break;
            case 'country':
                toggleRegionField();
                hasValue(event.target);
                break;
            case 'region':
            case 'regionText':
                hasValue(event.target);
                break;
            case 'address':
                hasValue(event.target);
                break;
            case 'correspondenceAddress':
                if (!sameAddressCheckbox.checked) {
                    hasValue(event.target);
                }
                break;
        }
    });

    form.addEventListener('submit', function (event) {
        let isValid = true;

        isValid &= hasValue(document.getElementById('firstName'));
        isValid &= hasValue(document.getElementById('lastName'));
        isValid &= validateEmail(document.getElementById('email'));
        isValid &= validatePassword(document.getElementById('password'));
        isValid &= validateConfirmPassword();
        isValid &= hasValue(document.getElementById('phone'));
        isValid &= validateBirthDate(document.getElementById('birthDate'));
        isValid &= hasValue(document.getElementById('country'));
        
        if (countrySelect.value === 'PL') {
            isValid &= hasValue(document.getElementById('region'));
        } else {
            isValid &= hasValue(document.getElementById('regionText'));
        }

        isValid &= hasValue(document.getElementById('address'));

        if (!sameAddressCheckbox.checked) {
            isValid &= hasValue(document.getElementById('correspondenceAddress'));
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            alert('Formularz został poprawnie wypełniony.');
        }
    });

    // Event listener dla checkboxa
    sameAddressCheckbox.addEventListener('change', toggleCorrespondenceAddress);

    // Początkowa aktywacja pola 'Województwo'
    toggleRegionField();

    // Początkowe ukrycie/wyświetlenie pola 'Adres korespondencyjny'
    toggleCorrespondenceAddress();
});