document.querySelector('#botao').addEventListener('click', function() {
    const nome = document.querySelector('.nome').value;
    const nasc = new Date(document.querySelector('#data').value);
    const ano = nasc.getFullYear();
    const idade = 2024 - ano;
    
    if(!nome || !ano) {
        alert('Por favor, preencha todos os campos!')
        return;
    }
    
    let resultadoTexto;

    if(idade <= 12) {
        resultadoTexto = `Criança: ${nome}`;
        console.log(resultadoTexto);
    }
    if(idade > 12 && idade <= 25) {
        resultadoTexto = `Jovem: ${nome}`;
        console.log(resultadoTexto);
    }
    if(idade > 25 && idade <= 59) {
        resultadoTexto = `Adulto: ${nome}`;
        console.log(resultadoTexto);
    }
    if(idade > 59 && idade <= 100) {
        resultadoTexto = `Idoso: ${nome}`;
        console.log(resultadoTexto);
    }
    if(idade > 100) {
        resultadoTexto = `Quase Falecido: Michael Jackson`;
        console.log(resultadoTexto);
    }


    const elemento = document.querySelector('.resultado');
    elemento.innerText = resultadoTexto;
    elemento.style.display = 'block';


    document.querySelector('.nome').value = '';
    document.querySelector('#data').value = '';
})

