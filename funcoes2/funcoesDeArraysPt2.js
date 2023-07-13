//Lista de exercícios - Hotel DoDev
//Você deve criar um sistema de reservas para um hotel organize os dados de cada
//entidade em arrays diferentes:
//Um hotel deve possuir: id, nome, categoria, endereço e telefone;
//Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e
//dia de saída;

let idsHotel = [];
let nomesHotel = [];
let categoriasHotel = [];
let enderecosHotel = [];
let telefonesHotel = [];
let contadorHotel = 1;

let idsReserva = [];
let idsHotelReserva = [];
let nomesReserva = [];
let diasEntradaReserva = [];
let diasSaidaReserva = [];
let contadorReserva = 1;


//Algumas validações devem ser feitas na hora de fazer os cadastros:
//● O id não pode ser igual a nenhum outro já existente;
//● O dia de entrada não pode ser maior que o de saída;
//● No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir
//o cadastro de um hotel que não esteja no sistema;
let continuar = true

do {
    let  opcao = prompt("Escolha uma opcäo: \nl - Cadastrar hotel \n2 - Cadastrar reserva" +
    "\n3 - Procurar reserva pelo hotel \n4 -Procurar hotel pela reserva \n5 - Procurar reserva pelo nome" +
    "\n6 - Procurar hotéis por categoria \n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa");
    switch(opcao) {
        case "1":
            cadastrarHotel();
            break;

        case "2":
            cadastrarReserva();
            break;

        case "3":
            ExibirReservasBuscadasPorIdHotel(prompt("Qual o hotel que deseja buscar as reservas?"));
            break;

        case "4":
            ExibirReservasBuscadasPorIdReserva(prompt("Qual a id de reserva que deseja exibir as informações?"));
            break;

        case "5":
            ExibirReservasBuscadasPorNome(prompt("Qual o nome que deseja buscar as reservas?"));
            break;

        case "6":
            
            let hoteis = ExibirHoteisBuscadosPorCategoria(prompt("Qual a categoria que deseja exibir os hotéis?"));
            console.log(hoteis);
            break;
            //ou poderia ser como abaixo:
            //let categoria = prompt("Qual a categoria que deseja exibir os hotéis?");
            //let hoteisPorCategoria = ExibirHoteisBuscadosPorCategoria(categoria);
            //console.log(hoteisPorCategoria);
            //break;

        case "7":
            let idHotel = parseInt(prompt("Qual a id do hotel que deseja atualizar o telefone?"));
            let telefone = prompt("Qual o novo telefone que deseja atualizar?");
            AtualizarTelefonePeloId(idHotel, telefone);
            break;
            
        case "8":
            console.log("Programa encerrado.");
            continuar = false;
            break;

        default:
            console.log("Opção inválida!");
            break;
    }
    
} while (continuar);
     

//1a. Criar funções para cadastrar um hotel;
function cadastrarHotel() {
    idsHotel.push(contadorHotel);
    nomesHotel.push(prompt("Digite o nome do hotel:"));
    categoriasHotel.push(prompt("Digite a categoria do hotel:"));
    enderecosHotel.push(prompt("Digite o endereço do hotel:"));
    telefonesHotel.push(prompt("Digite o telefone do hotel:"));
    console.log("Hotel cadastrado com sucesso!");
    contadorHotel++;
}

//1b. Criar funções para cadastrar uma reserva;
function cadastrarReserva() {
    idsReserva.push(contadorReserva);
    let existe = false;

    do {
        let idHotelReserva = parseInt(prompt("Digite a id do hotel da reserva:"));
        for (let i = 0; i < idsHotel.length; i++) {
            if (idHotelReserva == idsHotel[i]) {
                idsHotelReserva.push(idHotelReserva)
                existe = true;
                i = idsHotel.length;
            }
            else if (i ==idsHotel.length - 1) {
                console.log("Hotel não cadastrado!")
            }
        }
    } while (!existe)

    nomesReserva.push(prompt("Digite o nome do responsável pela reserva:"));
    let diaEntrada = prompt("Digite o dia de entrada da reserva:");
    diasEntradaReserva.push(diaEntrada);
    let diaSaida;

    do {
        diaSaida = prompt("Digite o dia de saída da reserva:");
        if (diaSaida >= diaEntrada) {
            diasSaidaReserva.push(diaSaida);
        }
        else {
            console.log("O dia de saída deve ser maior que o dia de entrada!")
        }
    } while (diaSaida < diaEntrada);

    console.log("Reserva cadastrado com sucesso!");
    contadorReserva++;
}

//2. Criar uma função que recebe como parâmetro o id do hotel e exibe na tela todas as
//reservas neste hotel com as seguintes informações: nome do hotel - nome do
//responsável da reserva - dia de entrada - dia de saída.
function ExibirReservasBuscadasPorIdHotel(idHotel) {
    idsHotelReserva.forEach(hotel => {
        if (idHotel == hotel) {
            let i = idsHotelReserva.indexOf(hotel);
            console.log(`Hotel: ${nomesHotel[idHotel - 1]}`);
            console.log(`Reserva em nome de: ${nomesReserva[i]}`);
            console.log(`Dia de entrada: ${diasEntradaReserva[i]}`);
            console.log(`Dia de saída: ${diasSaidaReserva[i]}`);
        }
    })
}

//3. Criar uma função que recebe como parâmetro o id de uma reserva e exibe no
//console: nome do hotel - endereço - dia de entrada - dia de saída.
function ExibirReservasBuscadasPorIdReserva(idsReserva) {
    let idHotel = idsHotelReserva[idsReserva - 1];
    console.log(`Hotel: ${nomesHotel[idHotel - 1]}`);
    console.log(`Endereço: ${enderecosHotel[idHotel - 1]}`);
    console.log(`Dia de entrada: ${diasEntradaReserva[idsReserva - 1]}`);
    console.log(`Dia de saída: ${diasSaidaReserva[idsReserva - 1]}`);
}

//4. Criar uma função que recebe como parâmetro o nome de uma pessoa e exibe na
//tela todas as suas reservas;
function ExibirReservasBuscadasPorNome(nome) {
        for (let i = 0; i < nomesReserva.length; i++) {
        if (nome == nomesReserva[i]) {
            console.log(`Id da reserva: ${idsReserva[i]}`);
            console.log(`Hotel da reserva: ${nomesHotel[(idsHotelReserva[i]) - 1]}`);
        }
    }
}

//5. Criar uma função que recebe como parâmetro uma categoria e retorna um array
//com todos os hotéis nessa categoria;
function ExibirHoteisBuscadosPorCategoria(categoria) {
    let hoteis = [];
    for (let i = 0; i < categoriasHotel.length; i++) {
        if (categoria == categoriasHotel[i]) {
            hoteis.push(nomesHotel[i]);
        }
    }
    return hoteis;
}

//6. Criar uma função que recebe o id de um hotel e um telefone como parâmetro, a
//função deve atualizar o telefone de cadastro com o do parâmetro.
function AtualizarTelefonePeloId(idHotel, telefone) {
    let i = idsHotel.indexOf(idHotel);
    telefonesHotel[i] = telefone;
    console.log("Telefone atualizado com sucesso!");
}
