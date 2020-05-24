$(document).ready(() => {

    sendMail = (event) => {

        event.preventDefault();

        const values = {
            subject: $('#subject').val(),
            message: $('#message').val(),
            email: $('#email').val()
        }

        $.post('/sendMail', values, ({ response }) => {
            if (response === 'success') {
                alert('Mail has been sent successfully!');
                return window.location.href = '/home';
            } else {
                alert(response);
            }
        });

    }

    logout = (event) => {
        event.preventDefault();

        $.post('/logout', ({ response }) => {
            alert(response);
            window.location.href = '/';
        });
    }

});