/*
var - escopo global, ou seja, consigo pegar em qualquer lugar do código, variável que pode ser alterada durante o código
const - escopo global, variável que não pode ser alterada durante o código
let - escopo local, consigo acessar a variável somente dentro das {}, variável que pode ou não ser alterada durante o código
Linguagem case sensitive: reconhece letras maiusculas e minusculas
*/

/* 
Acessos do DOM (window, document)
por Tag: getElementByTagName()
por id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML= 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML= 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(regex)) {
        txtEmail.innerHTML= 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
}

}

function validaAssunto() {

    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito longo. Digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.innerHTML = assunto.value.length + '/100'
        txtAssunto.style.color = '#2b2d42'
        mensagemOk = true
}

}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso')
    }  else {
        alert('Preencha o formulário corretamente')
    }

}

function mapaZoom() {
    mapa.style.width = '500px' 
    mapa.style.height = '300px'
}

function mapaNormal() {
    mapa.style.width = '300px' 
    mapa.style.height = '150px'

}
