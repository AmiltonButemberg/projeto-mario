/* 

OBJETIVO 1 - Quando o usuário clicar botão de veja o trailer, devemos abrir a modal com o video do trailer.

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.


OBJETIVO 1 - Quando o usuário clicar botão de veja o trailer, devemos abrir a modal com o video do trailer.
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js.
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
    - passo 3 - dar um jeito de pegar o elemento da modal no js.
    - passo 4 - abrir a modal na tela.

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando js.
    - passo 2 - dar um jeito de identificar quando o usuario clicar no X.
    - passo 3 - fechar modal.

*/


//imprimir coisas no console do navegador 
console.log('mostrar o document',document);


//- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js.
console.log(document.querySelector(".botao-trailer"));

//guardar informação em uma variavel / camel case

const botaoTrailer = document.querySelector(".botao-trailer");

//passo 3 - dar um jeito de pegar o elemento da modal no js.

const modal = document.querySelector(".modal");
console.log("mostrar o objeto da modal", modal)


// passo 2 - dar um jeito de identificar quando o usuário clicar no botão.

botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela.
    //modal.classList.add("aberto");  //add or toggle linha 36
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


//passo 1 - dar um jeito de pegar o elemento de fechar modal usando js.
console.log(document.querySelector(".fechar-modal"));

//adicionar informações em uma variavel e dar nome
const fecharModal = document.querySelector(".fechar-modal");

// - passo 2 - dar um jeito de identificar quando o usuario clicar no X.

fecharModal.addEventListener("click", () => {

    // - passo 3 - fechar modal.
    alternarModal();
    video.setAttribute("src", "");
});

const video = document.getElementById("video");
const linkDoVideo = video.src;



function alternarModal(){
    modal.classList.toggle("aberto");
}





