const prompt = require ('prompt-sync')()

const atividades = []

const modelo_registro = () => {
    let atividade = {
        dia: "",
        descricao: []
    }
    atividade.dia = prompt("Qual dia?")
    let resposta
    while(true){
        resposta = prompt("O que você fez nesse dia?")

        if (resposta == "acabou"){
            break
        }
        atividades.descricao.push(resposta)
    }
    atividade.push(atividade)
    console.log("Informação salva!")
}

const criar = atividade => {
    let atividade = modelo()
    atividade.push(atividade)
    console.log("Informação salva!")
}
const listar = () => {
    atividades.forEach((atividade, indice) => {
        console.log(`${indice++} ${atividade}`)
    })
}

const atualizar = () => {
    listar()
    let indice = prompt("Qual indice deseja atualizar?")
    let atividade = modelo_registro()

    atividades [--indice] = atividade
}
const remover = () => {
    listar()
    let indice = prompt("Qual indice deseja remover?")

    atividades.splice(--indice, 1)
}