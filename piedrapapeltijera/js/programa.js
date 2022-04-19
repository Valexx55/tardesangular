let selected;

let ids_botones = ["piedra", "papel", "tijera"];
let img_botones = ["rock", "paper", "scissors"];

/*
    La tabla de decision para determinar el ganador.
    Es un array bidimensional.
    Cada fila corresponde a piedra, papel y tijera, en este orden
    Cada columna corresponde al resultado de cruzar la fila correspondiente y piedra, papel y tijera en este orden
    Para acceder se necesitan dos valores, uno para la fila y otro para la columna, correspondiendo a lo seleccionado por los jugadores A y B
    0 (cero) implica un empate
    1 (uno) implica que A gana
    -1 (menos uno) implica que B gana
*/
let tabla_decision = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
];


function selectPlay(play) {
    localStorage.setItem("selected", play);

    decorateSelectedPlay(play);
}

function decorateSelectedPlay(play) {

    let piedra = document.getElementById("piedra");
    let papel = document.getElementById("papel");
    let tijera = document.getElementById("tijera");

    piedra.classList.remove("marcada");
    papel.classList.remove("marcada");
    tijera.classList.remove("marcada");

    let boton = document.getElementById(ids_botones[play]);

    boton.classList.add("marcada");

}

function getComputerPlay() {
    return Math.floor(Math.random() * 3);
}

function playNow() {

    let computer = getComputerPlay();

    let player = localStorage.getItem("selected");

    let result = tabla_decision[player][computer];

    let img_computer = document.getElementById("computerPlay");

    img_computer.setAttribute("src", `imagenes/${img_botones[computer]}.png`);
    img_computer.setAttribute("alt", img_botones[computer]);

    console.log(result);

    localStorage.removeItem("selected");
}