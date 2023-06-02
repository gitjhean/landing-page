var setaEsquerda = window.document.getElementById("left-arrow")
var setaDireita = window.document.getElementById("right-arrow")
var Bruna = window.document.getElementById("carousel-bruna")
var Leonardo = window.document.getElementById("carousel-leo")
var Samantha = window.document.getElementById("carousel-sam")

function Right() {
    Bruna.style = "display: none"
    Leonardo.style = "left: 82px"
    Samantha.style = "display: flex"
    setaEsquerda.style = "display: flex"
    setaDireita.style = "display: none"
}

function Left() {
    Samantha.style = "display: none"
    Bruna.style = "display: flex"
    Leonardo.style = "left: 657px"
    setaDireita.style = "display: flex"
    setaEsquerda.style = "display: none"
}