const inputAmigo = document.getElementById('amigo');
const btnAdicionar = document.querySelector('button-add');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === '') {
        alert('Por favor insira um nome válido');
        return;
    }

    for (let amigo of amigos) {
        if (amigo.toLowerCase() === nomeAmigo.toLowerCase()) {
            alert('Amigo já adicionado, por favor insira outro nome ou diferencie por sobrenomes');
            return;
        }
    }

    updateUl(nomeAmigo);

    amigos.push(nomeAmigo);
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Todos amigos já foram sorteados, por favor adicione mais');
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[numeroSorteado];
    
    updateUl(amigoSorteado);

    amigos.splice(amigos.indexOf(amigoSorteado), 1);

    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    
}

function updateUl(nomeAmigo) {
    if (amigos.includes(nomeAmigo)) {
        const amigoNode = document.getElementById(nomeAmigo);
        listaAmigos.removeChild(amigoNode);
        return;
    }

    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    li.id = nomeAmigo;
    listaAmigos.appendChild(li);
    inputAmigo.value = '';
}