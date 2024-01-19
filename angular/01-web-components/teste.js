function gerarCorRGBA() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random().toFixed(2);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

const listaCores = document.createElement('ul');

for (let i = 0; i < 1000; i++) {
    const cor = gerarCorRGBA();
    const itemLista = document.createElement('li');
    itemLista.textContent = cor;
    listaCores.appendChild(itemLista);
}

document.body.appendChild(listaCores);
