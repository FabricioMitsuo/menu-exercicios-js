// menu de exercicios.
import { helloworld } from "./exercicio.js"
// importando o pacote prompt sync
import PromptSync from "prompt-sync";
// chamando a funcao do promptsync
let prompt = PromptSync()

let exercicios;

let continuar;

// a estrutura de repeticao do while, primeiro faz o loop pra depois verificar a condicao.
do {
    // chamamos a variavel exercicios onde o recebe a funcao prompt pra receber um valor que o usuario ira receber.
    exercicios = parseInt(prompt("Digite um numero 1 á 6, aonde representa um exercicio: "));
    switch (exercicios) {
        case 1:

            break;
        case 2:

            break;
        case 3:
            let frase = prompt("Digite uma frase: ");
            let retorno = helloworld(frase);
            console.log("frase que usuario digitou foi: ", retorno);

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        // a opcao do default do swith serve para quando o valor for diferente de todos os case ira entrar nele.
        default:
            console.log("Digite um numero, de 1 á 6");
            break;
    }

    continuar = prompt("Voce deseja continuar,digite s para sim ou n para nao: ").toLocaleLowerCase();

} while (continuar == "s");