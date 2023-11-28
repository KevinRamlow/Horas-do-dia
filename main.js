document.getElementById("msg").style.display = "none";
document.getElementById("msg2").style.display = "none";
document.getElementById("photo").style.display = "none";

function clicar() {
  document.getElementById("button").style.display = "none";
  document.getElementById("msg").style.display = "block";
  document.getElementById("msg2").style.display = "block";
  document.getElementById("photo").style.display = "block";

  var msg = document.getElementById("msg");
  var date = new Date();
  var hour = date.getHours();

  if (date.getMinutes() < 10) {
    var minutes = "0" + date.getMinutes();
  } else {
    var minutes = date.getMinutes();
  }

  var hours = hour + ":" + minutes;

  if (hour >= 5 && hour < 12) {
    msg.innerHTML = `Agora são ${hours} da manhã!`;
    image.src = "imagens/morning.png";
    document.body.style.background = "#ffcb69";
    msg2.innerHTML = "Bom dia!";
  } else if (hour >= 12 && hour < 18) {
    msg.innerHTML = `Agora são ${hours} da tarde!`;
    image.src = "imagens/afternoon.png";
    document.body.style.background = "#fa9500";
    msg2.innerHTML = "Boa tarde!";
  } else {
    msg.innerHTML = `Agora são ${hours} da noite!`;
    image.src = "imagens/night.png";
    document.body.style.background = "#00072d";
    msg2.innerHTML = "Boa noite!";
  }
}
