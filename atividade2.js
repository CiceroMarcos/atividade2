// Exercícios JavaScript para Node.js

// 1. Validação de Datas
function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 2 && ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0))) {
        diasPorMes[1] = 29;
    }

    return dia <= diasPorMes[mes - 1];
}

// 2. Jogo de Adivinhação com readline-sync
const readlineSync = require('readline-sync');

function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa = 0;
    let palpite = -1;

    while (palpite !== numeroSecreto) {
        palpite = parseInt(readlineSync.question("Adivinhe o número entre 1 e 100: "));
        tentativa++;

        if (palpite < numeroSecreto) {
            console.log("Mais alto!");
        } else if (palpite > numeroSecreto) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou em ${tentativa} tentativa(s).`);
        }
    }
}

// Descomente para testar o jogo no terminal:
// jogoAdivinhacao();

console.log("Data válida (29/02/2024):", ehDataValida(29, 2, 2024));
console.log("Data inválida (30/02/2023):", ehDataValida(30, 2, 2023));

// 3. Palavras Únicas
function palavrasUnicas(texto) {
    const palavras = texto.split(" ");
    const unicas = [];

    for (let i = 0; i < palavras.length; i++) {
        if (palavras.indexOf(palavras[i]) === palavras.lastIndexOf(palavras[i])) {
            unicas.push(palavras[i]);
        }
    }
    return unicas;
}

console.log("Palavras únicas:", palavrasUnicas("olá mundo olá teste mundo"));

// 4. Fatorial Recursivo
function fatorial(n) {
    if (n < 0) throw new Error("Fatorial não definido para números negativos");
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

console.log("Fatorial de 5:", fatorial(5));

// 5. Debounce
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const funcaoDebounce = debounce(() => console.log("Executou após 500ms sem novas chamadas"), 500);
funcaoDebounce();
funcaoDebounce();
setTimeout(funcaoDebounce, 300);
setTimeout(funcaoDebounce, 700);

// 6. Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const chave = JSON.stringify(args);
        if (cache[chave] !== undefined) {
            return cache[chave];
        }
        const resultado = fn(...args);
        cache[chave] = resultado;
        return resultado;
    };
}

const fatorialMemo = memoize(fatorial);
console.log("Fatorial memoizado de 5:", fatorialMemo(5));
console.log("Fatorial memoizado de 5 novamente (cache):", fatorialMemo(5));

// 7. Mapeamento e Ordenação
function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

console.log("Ordenação por preço:", nomesOrdenadosPorPreco([
    { nome: "Produto A", preco: 20 },
    { nome: "Produto B", preco: 10 },
    { nome: "Produto C", preco: 30 }
]));

// 8. Agrupamento por Cliente
function agruparPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});
}

console.log("Agrupamento por cliente:", agruparPorCliente([
    { cliente: "Cícero", total: 100 },
    { cliente: "Cláudio", total: 200 },
    { cliente: "Cícero", total: 50 }
]));

// 9. Conversão Entre Formatos
function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

console.log("Pares para objeto:", paresParaObjeto([["a", 1], ["b", 2]]));
console.log("Objeto para pares:", objetoParaPares({ x: 10, y: 20 }));