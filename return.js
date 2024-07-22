const prompt = require ('prompt-sync')()

const {criar,atualizar,listar,remover} = require("./lista_atividades.js")

while (true){
    console.log("Escolha a opção que deseja fazer\n1- criar\n2- listar\n3- atualizar\n4- remover\n5- sair")
    let opcao = Number(prompt())

    switch (opcao) {
        case 1:
            criar()
            break;
        case 2:
            listar()
            break;
        case 3:
            atualizar()
            break;
        case 4:
            remover()
            break;
        case 5:
            process.exit()
            break;
        default:
            console.log("Digite uma opção válida")
            break;
    }
}