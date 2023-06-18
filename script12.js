function clicar() {
    document.getElementById("button").style.display="none";    

    var msg = document.getElementById('msg')
    var photo = document.getElementById('photo')
    var date = new Date()
    var hour = date.getHours()

    if (date.getMinutes() < 10) {
        var minutes = '0' + date.getMinutes()
    } else {
        var minutes = date.getMinutes()
        } 

    var hours = (hour + ':' + minutes)
    
    if (hours >= 5 && hours < 12) {
        msg.innerHTML = `Agora são ${hours} da manhã!`
        image.src = 'morning.png'
        document.body.style.background = '#ffcb69'
        msg2.innerHTML = 'Bom dia!'

    } else if (hours >=12 && hours < 18) {
        msg.innerHTML = `Agora são ${hours} da tarde!`
        image.src = 'afternoon.png'
        document.body.style.background = '#fa9500'
        msg2.innerHTML = 'Boa tarde!'

    } else {
        msg.innerHTML = `Agora são ${hours} da noite!`
        image.src = 'night.png'
        document.body.style.background = '#00072d'
        msg2.innerHTML = 'Boa noite!'
    }
}

