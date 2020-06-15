$(document).ready(() => {
    
    switchClicked = () => {
        const input = $('#input-1').val()
        $('#input-1').val($('#input-2').val())
        $('#input-2').val(input)
        $('body').css('background-color', 'red')
    }

    callServer = () => {
        $.get('/home', (data) => {
            if (data) {
                if (data.answer === 'Hello') {
                    $('#input-1').val('mynamejeff')
                } else {
                    
                }
            } else {
                print('error')
            }
        })
    }

    postSomething = (name) 

})