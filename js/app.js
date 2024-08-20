"use strict";

let nombreUsuario = prompt("Hola usuario, por favor digite su nombre.");

function saludar () {
    let nombre = nombreUsuario;
    alert("Bienvenido " + nombre + ", para conocernos mejor adivine entre alguna de mis preferencias.");
}
saludar();

let respuestaCorrecta = 0;

const pregunta = [
    "¿Me gusta jugar futbol?",
    "¿tengo 20 años?",
    "¿Mi signo zodiacal es tauro?",
    "¿Se entonar algun instrumento?",
    "¿Me gusta estudiar desarrollo web?",
];

const respuesta = [
    "si", 
    "no",
    "si",
    "no",
    "si",
];

function ResponderSiNo () {

    for (let i = 0; i < pregunta.length; i++) {
        const respuestaUsuario = prompt(pregunta[i]);
        if (respuestaUsuario.toLowerCase() === respuesta[i].toLowerCase()) {
            alert("Acertaste " + nombreUsuario + ", me impreciona tu previcion.");
            respuestaCorrecta++;            
        } else {
            alert(nombreUsuario + ", usted no acerto, pero no pasa nada ya nos iremos conociendo");
        };
    }
}
ResponderSiNo();

function adivinarEdad () {

    let intentosEdad = 0;
    for (let i = 0; i < 4; i++) {
        let edad = prompt("¿que edad tengo? piensalo bien por favor, usted solo tiene cuatro intentos")
        if (edad == "27") {
            alert("Acertaste " + nombreUsuario + ", me impreciona tu previcion.")
            intentosEdad++;
            respuestaCorrecta++;
            break
        } else if (edad > 27) {
            alert("¡que! jajajaj no, muy alto.")
            intentosEdad++;
        } else {
            alert("¡que! jajajaj no, demasiado bajo.")
            intentosEdad++;
        };
    }
    
    if (intentosEdad == 4) {
        alert(nombreUsuario + " se te acabaron los intentos asi que mejor te lo digo y no te quedes con la intriga, tengo " + 27 + " años.");
    };
}
adivinarEdad();

const comidaFaborita = [
    "ceviche",
    "lomo saltado",
    "aji de gallina",
    "estofado de cordero",
    "caldo de gallina",
    "carapulcra",
];

function adivinarComida() {
    let intentosComida = 0;
    for (let i = 0; i < comidaFaborita.length; i++) {
        let comida = " " + comidaFaborita;
        let respuestaComidaFaborita = prompt("¿cual es mi comida faborita? " + comida);
        if (respuestaComidaFaborita === comidaFaborita[0]) {
            alert("acertaste");
            intentosComida++;
            respuestaCorrecta++;
            break;
        } else {
            alert("no, pero cerca");
            intentosComida++;
        }
    };
    if (intentosComida == 6) {
        alert(nombreUsuario + " se te acabaron los intentos, la respuesta correcta es lomo saltado");
    };
}
adivinarComida();
    
    let total = respuestaCorrecta;
    if(total > 5) {
        alert("Felicidades por obtener " + total + " puntos, exelente puntaje.")
    } else if(total > 3) {
        alert("Felicidades por obtener " + total + " puntos, pero se que lo haras mejor.")
    } else {
        alert("usted tiene " + total + " puntos, intentelo mejor la proxima vez.")
    }
    
/*console.log(comidaFaborita[1]);

/*console.log(nombreUsuario,
    "fue un gusto tenerte aqui y espero que sigamos interactuanso para ir conociendonos mejor, vuelva pronto."
)*/

alert(nombreUsuario + " fue un gusto tenerte aqui y espero que sigamos interactuando para ir conociendonos mejor, vuelve pronto.");
