let horas = [];
let minutos = [];
let renta = 50;

function Mesa(num) {
    var mesa = document.querySelector('#imgMesa' + num);
    if (mesa.src.indexOf('uso.jpg') > 0) {
        mesa.src = 'images/mesa.jpg';
        Apagar(num);
    } else {
        mesa.src = 'images/mesauso.jpg';
        Encender(num);
    }
}

function Encender(num) {
    var d = new Date();
    var inicio = document.querySelector('#inicioMesa' + num);
    inicio.innerHTML = 'Hora de inicio: ' + d.getHours() + ':' + d.getMinutes();

    var final = document.querySelector('#finalMesa' + num);
    final.innerHTML = 'Hora final: ';

    var total = document.querySelector('#total' + num);
    total.innerHTML = 'Total: ';

    horas[num] = d.getHours();
    minutos[num] = d.getMinutes();
}

function Apagar(num) {
    var d = new Date();
    var final = document.querySelector('#finalMesa' + num);
    final.innerHTML = 'Hora final: ' + d.getHours() + ':' + d.getMinutes();
}

window.setInterval(function () {
    var d = new Date();
    var tFn = (parseInt(d.getHours()) * 60) + parseInt(d.getMinutes());
    for (var i = 1; i <= 6; i++) {
        var mesa = document.querySelector('#imgMesa' + i);
        if (mesa.src.indexOf('uso.jpg') > 0) {
            var tIn = (parseInt(horas[i]) * 60) + parseInt(minutos[i]);
            var t = tFn - tIn;
            var h = Math.round((t / 60) * 100) / 100;
            var cost = Math.round((h * renta) * 100) / 100;

            var total = document.querySelector('#total' + i);
            total.innerHTML = 'Total: $' + cost;
        }
    }
}, 1000);
