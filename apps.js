function capturarDados(){
    let inputCep = document.getElementById("cep").value
    buscarCep(inputCep)
}

async function buscarCep(inputCep) {
    let dados = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`).then(Response => Response.json())
    dadosCapturados(dados)
}

function dadosCapturados(dados){
    document.getElementById("estado").value = dados.uf
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("endereco").value = dados.logradouro
}

