let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {    
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe "menu-fechado" no menu
    // menu.classList.toggle("menu-fechado")

    // Se o menu contem a classe menu-fechado
    if ( menu.classList.contains("menu-fechado") ) {
        // Abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // Esconder icone barras
        iconeBarras.style.display = "none"

        // Mostrar o icone do X
        iconeX.style.display = "inline"

    } else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // Esconder icone do X
        iconeX.style.display = "none"

        // Mostrar o icone barras
        iconeBarras.style.display = "inline"

    }
}

onresize = () => {
    // Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // Esconder icone barras
    iconeBarras.style.display = "none"

    // Mostrar o icone do X
    iconeX.style.display = "inline"
}

// Carrossel
let banner = document.querySelector(".banner")

// let slides = [0, 1, 2]
// slides[0] -> primeiro-banner
// slides[1] -> segundo-banner
// slides[2] -> terceiro-banner

let slides = [
    "primeiro-banner", //0
    "segundo-banner", //1
    "terceiro-banner" //2
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        //somar 1 na variavel slideAtual
        slideAtual++
    } else {
        //voltar para o primeiro banner
        slideAtual = 0
    }

    // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior() {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        // Subtrair 1 na variavel slideAtual
        slideAtual--
    } else {
        // Voltar para o ultimo slide
        slideAtual = 2
    }


     // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])

     
}

function selecionarSlide(indiceSlide) {

    //remove o slide atual
    banner.classList.remove(slides[slideAtual])

    //Atualize a variavel com o indice de slide slecionado
    slideAtual = indiceSlide

    //mostra o slide selecionado e salvo na vafriavel slideAtual    
    banner.classList.add(slides[slideAtual])
}


let listaCases = [
    // {
    //     imagem: "https://unsplash.it/600/400?image=14",
    //     descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras."
    // },

    // {
    //     imagem: "https://unsplash.it/600/400?image=41",
    //     descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
    // },

    // {
    //     imagem: "https://unsplash.it/600/400?image=23",
    //     descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    // },

    // {
    //     imagem: "https://unsplash.it/600/400?image=62",
    //     descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico"
    // },
]

function renderizarCases() {
    //encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    //variavel para guardar o html dos cases montados
    let template = ""

    //para cada case da listaCases
    listaCases.forEach(cardCase => {
        //Montar o HTML do card, passando os atributos do case 
        template += `<div class="card">
        <img src=${ cardCase.imagem }>
        <p>${ cardCase.descricao }</p>
        <button>Ver mais</button>
    </div>`

    })


    //inserir HTML dos cases montados no elemento container-cards
    containerCards.innerHTML = template 

}



