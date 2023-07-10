let nomes = [];
let senhas = [];
let continuar = true;

//Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
//que o usuário pode escolher quando encerrar o programa conforme as opções e
//que no login caso seja bem sucedido retorna uma mensagem “Login feito com
//sucesso!” e em caso negativo “Nome ou senha incorretos!”

while (continuar) {
    let opcao = EscolherOpcao();
    let nome;

    switch (opcao) {
        case 1:
            CadastrarUsuario();
            break;

        case 2:
            nome = prompt("Digite o usuário para login:");
            let senha = prompt("Digite a senha para login:");
            let login = FazerLogin(nome, senha);

            if (login) {
                console.log("Login efetuado com sucesso");
            }
            else {
                console.log("Nome e/ou senha incorretos");
            }
            break;

        case 3:
            nome = prompt("Digite o usuário que deseja excluir:");
            let excluido = ExcluirCadastro(nome);
            break;

        case 4:
            console.log("Programa encerrado");
            continuar = false;
            break;

        default:
            console.log("Opção inválida, tente novamente!")
            break;


    }
}

//1 - Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
//guarde cada um no seu respectivo array.
function CadastrarUsuario() { 
    nomes.push(prompt("Digite o nome de usuário:")); //.push coloca o elemento na ultima posição da array. RETORNA o novo tamanho dessa array. 
    senhas.push(prompt("Digite a senha do usuário:"));
    console.log("Usuário cadastrado com sucesso");
}

//2 - Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
//login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
//opção escolhida pelo usuário.
function EscolherOpcao() {
    let opcao = parseInt(prompt("Escolha o que deseja fazer:\n Digite 1 - CADASTRO\n Digite 2 - FAZER LOGIN\n Digite 3 - EXCLUIR CADASTRO\n Digite 4 - ENCERRAR PROGRAMA"));
    return opcao;
}

//3 - Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
//senha, depois procure o nome recebido no array de nomes e em caso positivo
//compare a senha no array de senhas. Se as duas comparações forem válidas
//retorne true se uma delas não for válida retorne false.
function FazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome); //espera como parametro o valor que quero buscar no meu array. RETORNA a posicao desse valor.

    if (indice != -1 && senhas[indice] == senha) {
        return true;
    }
    else {
        return false;
    }
}

//4 - Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
//então procure pelo nome no array de nomes e exclua ele e a senha correspondente
//do outro array.
function ExcluirCadastro(nome) {
    let indice = nomes.indexOf(nome); 

    if (indice != -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Usuário excluído.");
    }
    else ("Usuário não encontrado");
}

