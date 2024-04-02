var corpo = document.getElementById("corpo");
var lezioni = [];

var prendiNome = document.getElementById("boxNome");
var prendiData = document.getElementById("boxData");
var bottone = document.getElementById("bottone");

bottone.addEventListener('click', (event) => { immettiDati() });

fetch('./lezioni.json')
    .then((response) => response.json())
    .then((dati) => {
        console.log(dati);
        lezioni = dati.lezioni;

        creaLista();
    });

function creaLista() {
    for (lezione of lezioni) {
        let tmp = document.createElement("div");
        tmp.style.border = "2px solid black";
        tmp.style.marginBottom = "25px";
        tmp.style.borderRadius = "25px";
        tmp.style.boxShadow = "10px 10px 5px lightgray";


        let nomeL = document.createElement("p");
        nomeL.innerText = "Nome: " + lezione.nome;
        nomeL.style.marginTop = "12px";
        let dataL = document.createElement("p");
        dataL.innerText = "Data: " + lezione.data;

        tmp.appendChild(nomeL);
        tmp.appendChild(dataL);
        corpo.appendChild(tmp);
    }
}

function immettiDati() {
    lezioni.push({ nome: prendiNome.value, data: prendiData.value });
    //console.log("asdasfdasfd")

    while (corpo.firstChild) {
        corpo.removeChild(corpo.firstChild);
    }

    creaLista();
}
