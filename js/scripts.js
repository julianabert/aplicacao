let valorRefriAtual = 0;

function calc(valor, marcado) {
    let total = Number(document.getElementById('total').value);

    if (marcado) {
        total += Number(valor);
    } else {
        total -= Number(valor);
    }

    document.getElementById('total').value = total;
}

function ing(valor, marcado) {
    let total = Number(document.getElementById('total').value);

    if (marcado) {
        total += Number(valor);
    } else {
        total -= Number(valor);
    }

    document.getElementById('total').value = total;
}

function pipocavalor() {
    let tamanho = document.getElementById('pipoca').value;
    let total;

    if (tamanho === "p") {
        total = 20;
    } else if (tamanho === "m") {
        total = 25;
    } else if (tamanho === "g") {
        total = 30;
    } else if (tamanho === "xg") {
        total = 35;
    } else {
        total = 0;
    }

    document.getElementById('total').value = total;
}

function refrivalor() {
    let tamanho = document.getElementById('refri').value;
    let valor;

    if (tamanho === "p") {
        valor = 10;
    } else if (tamanho === "m") {
        valor = 15;
    } else if (tamanho === "g") {
        valor = 20;
    } else {
        valor = 0;
    }

    let total = Number(document.getElementById('total').value);
    total -= valorRefriAtual; // Subtrai o valor antigo do refrigerante
    total += valor; // Adiciona o novo valor do refrigerante

    valorRefriAtual = valor; // Atualiza o valor atual do refrigerante
    document.getElementById('total').value = total;
}

function compra() {
    let dia = document.getElementById('dias').value;
    let hora = document.getElementById('hora').value;
    let total = document.getElementById('total').value;

    alert(`Sua sessão foi agendada para: \n${dia} \nÀs ${hora}. \nSeu total foi de R$${total}`);
}

function trocaFilme() {
    let filmes = document.getElementById('filme').value;
    let nomefilme;

    if (filmes === "c") {
        nomefilme = "Challengers";
    } else if (filmes === "b") {
        nomefilme = "Barbie";
    } else if (filmes === "k") {
        nomefilme = "Kung Fu Panda 4";
    } else {
        nomefilme = "Duna 2";
    }

    document.getElementById('nomefilme').value = nomefilme;
}
