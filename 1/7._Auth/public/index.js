$(document).ready(() => {

    login = (event) => {
        event.preventDefault();

        const values = {
            username: $('#username').val(),
            password: $('#password').val()
        }
    
        $.post('/login', values, ({ response }) => {
            if (response === 'success') {
                return window.location.href = '/home';
            } else {
                alert(response);
            }
        });
    }
    
    signup = (event) => {
        event.preventDefault();

        const values = {
            username: $('#signupUsername').val(),
            password: $('#signupPassword').val(),
            passwordRepeat: $('#passwordRepeat').val()
        } 

        $.post('/signup', values, ({ response }) => {
            if (response === 'success') {
                alert(`Successfully created user ${values.username}`)
            } else {
                alert(response);
            }
        });
    }
});

