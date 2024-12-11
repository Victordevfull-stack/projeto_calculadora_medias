const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji descpcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = ''; // Inicializando a variável que vai armazenar as linhas da tabela

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();   
    atualizaTabela();
    atualizaMediaFinal(); 
});

function adicionalinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`)
    } else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        // Criando a linha da tabela
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>'; // Corrigindo o fechamento da tag </tr>
    
        linhas += linha; // Adicionando a nova linha à variável `linhas`
    }

    // Limpar os campos de entrada
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; // Atualizando o conteúdo da tabela
}

function atualizaMediaFinal() {
   const mediafinal = calculaMediafinal();

   document.getElementById('media-final-valor').innerHTML = mediafinal;
   document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediafinal() {
    let somaDasNotas = 0;

    for (let i = 0; i <notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}