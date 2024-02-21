const errorMessages = {
    en: {
        firstName: 'First name should be at least 2 characters long.',
        lastName: 'Last name should be at least 2 characters long.',
        email: 'Please enter a valid email address.',
        phns: 'Please enter a valid phone number.',
        formError: 'An error occurred while submitting the form. Please try again.'
    },
    ru: {
        firstName: 'Имя должно содержать не менее 2 символов.',
        lastName: 'Фамилия должна содержать не менее 2 символов.',
        email: 'Пожалуйста, введите действительный адрес электронной почты.',
        phns: 'Пожалуйста, введите действительный номер телефона.',
        formError: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'
    },
    tr: {
        firstName: 'İlk isim en az 2 karakter uzunluğunda olmalıdır.',
        lastName: 'Soyadı en az 2 karakter uzunluğunda olmalıdır.',
        email: 'Lütfen geçerli bir e-posta adresi girin.',
        phns: 'Lütfen geçerli bir telefon numarası girin.',
        formError: 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.'
    },
    es: {
        firstName: 'El nombre debe tener al menos 2 caracteres.',
        lastName: 'El apellido debe tener al menos 2 caracteres.',
        email: 'Por favor, introduce una dirección de correo electrónico válida.',
        phns: 'Por favor ingrese un número de teléfono válido.',
        formError: 'Se produjo un error al enviar el formulario. Inténtalo de nuevo.'
    }
};

const lang = document.documentElement.getAttribute('lang') || 'en';
const messages = errorMessages[lang];

$(document).ready(function() {




    $('.register-form').each(function() {


        $.ajax({
            url: '/lander/integrations/proxy.php',
            dataType: 'json',
            success: function(data) {
                const countryCode = data.countryCode.toLowerCase();
                iti.setCountry(countryCode);
                const ipAddress = data.ipAddress;
                $('#ipAddress').val(ipAddress);
            },
            error: function() {
                console.error('Error fetching country data');
            }
        });

        const form = $(this);
        const phoneInput = form.find('input[name="phns"]')[0];
        const iti = intlTelInput(phoneInput, {
            allowDropdown: true,
            separateDialCode: true,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
            excludeCountries: ["ua", "us", "fr", "il"],
            preferredCountries: ["uz", "tj", "ru", "kz", "az", "kr", "mn","kg","by","th","vn","id","rs","me"],
        });

        initInputHandlers(form, iti);
        initFormValidation(form, iti);
    });
});

function initInputHandlers(form, iti) {
    form.find('input[name="first_name"]').on('input', function() {
        let first_name = $(this).val();
        if (first_name.length < 2) {
            $(this).addClass('is-invalid');
            $(this).next('.invalid-feedback').text(messages.firstName);
        } else {
            $(this).removeClass('is-invalid');
            $(this).next('.invalid-feedback').text('');
        }
    });

    form.find('input[name="last_name"]').on('input', function() {
        let last_name = $(this).val();
        if (last_name.length < 2) {
            $(this).addClass('is-invalid');
            $(this).next('.invalid-feedback').text(messages.lastName);
        } else {
            $(this).removeClass('is-invalid');
            $(this).next('.invalid-feedback').text('');
        }
    });

    form.find('input[name="email"]').on('input', function() {
        let email = $(this).val();
        let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegEx.test(email)) {
            $(this).addClass('is-invalid');
            $(this).next('.invalid-feedback').text(messages.email);
        } else {
            $(this).removeClass('is-invalid');
            $(this).next('.invalid-feedback').text('');
        }
    });

    form.find('input[name="phns"]').on('input', function() {
        let phns = iti.getNumber();
        console.log(phns);
        if (!iti.isValidNumber()) {
            $(this).addClass('is-invalid');
            $(this).next('.invalid-feedback').text(messages.phns);
        } else {
            $(this).removeClass('is-invalid');
            $(this).next('.invalid-feedback').text('');
        }
    });
}

function initFormValidation(form, iti) {

    form.submit(function(event) {
        event.preventDefault();
        let isValid = true;
        let formData = new FormData();

        // Validate first_name
        let first_name = form.find('input[name="first_name"]').val();
        if (first_name.length < 2) {
            isValid = false;
            form.find('input[name="first_name"]').addClass('is-invalid');
            form.find('input[name="first_name"]').next('.invalid-feedback').text(messages.firstName);
        }

        // Validate last_name
        let last_name = form.find('input[name="last_name"]').val();
        if (last_name.length < 2) {
            isValid = false;
            form.find('input[name="last_name"]').addClass('is-invalid');
            form.find('input[name="last_name"]').next('.invalid-feedback').text(messages.lastName);
        }

        // Validate email
        let email = form.find('input[name="email"]').val();
        let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegEx.test(email)) {
            isValid = false;
            form.find('input[name="email"]').addClass('is-invalid');
            form.find('input[name="email"]').next('.invalid-feedback').text(messages.email);
        }

        // Validate phns
        let phns = iti.getNumber();
        if (!iti.isValidNumber()) {
            isValid = false;
            form.find('input[name="phns"]').addClass('is-invalid');
            form.find('input[name="phns"]').next('.invalid-feedback').text(messages.phns);
        }

        if (isValid) {
            formData.append('phns', phns);

            // Add all form fields except "phns" to formData
            form.find(':input').each(function() {
                let inputName = $(this).attr('name');
                let inputValue = $(this).val();
                if (inputName !== 'phns') {
                    formData.append(inputName, inputValue);
                }
            });

            $.ajax({
                url: '/lander/integrations/send.php',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function () {
                    form.find('button[type="submit"]').hide(); // Hide submit button
                    form.find('.loading-animation').show(); // Show loading animation
                },
                success: function(responseData) {
                    const response = JSON.parse(responseData);

                    if (response.status === 'successful') {
                        const pixelInput = document.getElementById('pixel-input');
                        const pixelValue = pixelInput ? pixelInput.value : '';

                        const sourceInput = document.getElementById('traffic_source_name');
                        const sourceValue = sourceInput ? sourceInput.value : '';

                        const offerInput = document.getElementById("offerId");
                        const offerValue = offerInput ? offerInput.value : '';

                        const sourceTypeInput = document.getElementById("source_type");
                        const sourceTypeValue = sourceTypeInput ? sourceTypeInput.value : '';

                        const leadId = response.lead_id;

                        let url = '/lander/assets/register/thank-you?language=RU&pixel={pixel}&status=successful&source={traffic_source_name}&funnel={offerId}&source_type={source_type}&lead_id={lead_id}';
                        url = url.replace('{pixel}', encodeURIComponent(pixelValue));
                        url = url.replace('{traffic_source_name}', encodeURIComponent(sourceValue));
                        url = url.replace('{offerId}', encodeURIComponent(offerValue));
                        url = url.replace('{source_type}', encodeURIComponent(sourceTypeValue));
                        url = url.replace('{lead_id}', encodeURIComponent(leadId));

                        //URL всегда будет HTTPS
                        window.location.href = 'https://' + window.location.host + url;
                    } else {
                        form.find('.form-message').addClass('alert alert-danger');
                        form.find('.form-message').text(messages.formError);
                    }
                },
                error: function() {
                    form.find('.form-message').addClass('alert alert-danger');
                    form.find('.form-message').text(messages.formError);
                },
                complete: function () {
                    form.find('button[type="submit"]').show(); // Show submit button
                    form.find('.loading-animation').hide(); // Hide loading animation
                }
            });

        }
    });
}
