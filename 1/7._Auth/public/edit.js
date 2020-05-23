$(document).ready(() => {

    editUsername = (event) => {
        event.preventDefault();

        const value = {
            username: $('#newUsername').val()
        }

        if (value.username != '') {
            $.post('/newUsername', value, ({ response }) => {
                if (response === 'success') {
                    alert(`Successfully changed username to ${value.username}`);
                    return window.location.href = '/edit';
                } else {
                    alert(response);
                }
            });
        }
        
    }

    a = (event) => {
        event.preventDefault();

        const values = {
            oldPassword: $('#oldPassword').val(),
            newPassword: $('#newPassword').val(),
            passwordRepeat: $('#passwordRepeat').val()
        }

        if (values.oldPassword != '' && values.newPassword != '') {
            if (values.newPassword === values.passwordRepeat) {
                $.post('/newPassword', values, ({ response }) => {
                    if (response === 'success') {
                        alert('Successfully changed password')
                        return window.location.href = '/edit'
                    } else {
                        alert(response)
                    }
                })
            } else {
                alert('Passwords not matching');
            }
        } else {
            alert('Please fill all fields')
        }
    }

    logout = (event) => {
        event.preventDefault();

        $.post('/logout', ({ response }) => {
            alert(response);
            window.location.href = '/'
        })
    }

})