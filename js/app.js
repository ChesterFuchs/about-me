"use strict";

let nombreUsuario = prompt("Hola usuario, por favor digite su nombre.");
alert("Bienvenido " + nombreUsuario + ", para conocernos mejor adivine entre si o no sobre alguna de mis preferencias.");

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
]

for (let i = 0; i < pregunta.length; i++) {
    const respuestaUsuario = prompt(pregunta[i]);
    if (respuestaUsuario.toLowerCase() === respuesta[i].toLowerCase()) {
        alert("Acertaste " + nombreUsuario + ", me impreciona tu previcion.")
    } else {
        alert(nombreUsuario + ", usted no acerto, pero no pasa nada ya nos iremos conociendo")
    };
}

/*console.log(nombreUsuario,
    "fue un gusto tenerte aqui y espero que sigamos interactuanso para ir conociendonos mejor, vuelva pronto."
)*/

alert(nombreUsuario + " fue un gusto tenerte aqui y espero que sigamos interactuando para ir conociendonos mejor, vuelva pronto.")