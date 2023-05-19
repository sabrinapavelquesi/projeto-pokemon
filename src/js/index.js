/* 
    O que precisamos fazer? - quando clicarmos no botão de troca de tema, temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro e também trocar imagem do sol/lua.

    - OBJETIVO 1: quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados, e também mudar a imagem para lua;
        Passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema;
        Passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body;
        Passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema;
        Passo 4 - adicionar a classe modo-escuro no body;
        Passo 5 - trocar a imagem do botão de alterar tema para a imagem da lua.

    - OBJETIVO 2: quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro, e mudar a imagem para o sol;
        Passo 6 - verificar se o body já possui a classe modo-escuro;
        Passo 7 - remover a classe do modo-escuro do body;
        Passo 8 - trocar a imagem do botão de alterar tema para a imagem do sol.
    
*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});