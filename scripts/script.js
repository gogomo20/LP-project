var selectorEst = document.querySelectorAll(".slider-item");
function scrollToElement(id) {
    document.querySelector(id).scrollIntoView({behavior : "smooth"})
    
}


//adcionado o menu que aparece e desaparece conforme o scroll da pagina 
//revisar função pois mesmo quando o menu é ativado buga a função
/*
var scrollPosition = window.scrollY
var classAdd = false
document.addEventListener("scroll",function(){
   
    if (window.scrollY>scrollPosition){
        scrollPosition = window.scrollY
        document.querySelector(".navbar").classList.remove("sticky-top")
        classAdd = false
    }else{
        scrollPosition = window.scrollY
        if(!classAdd){
            document.querySelector(".navbar").classList.toggle("sticky-top")
            classAdd = true
        }
    }
})*/
// var itens = {
//     "item1" : document.querySelector(".image1"), 
//     "item2" : document.querySelector(".image2"),
//     "item3" : document.querySelector(".image3"),
//     "item4" : document.querySelector(".image4"),
//     "item5" : document.querySelector(".image5")
// }
// function carouselEst(pos){
//     var posic = pos
//     if (pos == 4) {
//         contador = 0
//     }else{contador = pos+1}
//     for (let i = 1; i <= selectorEst.length; i++) {
//         if (itens["item"+i].className.includes("image3")) {
//             var selec = i
//         }


        
//     }
    
//     qtdMov = selec - posic - 1


//     if (qtdMov>0){
//         for (let index = 1; index <= qtdMov ; index++) {
//             item1 = document.querySelector(".image1")
//             item2 = document.querySelector(".image2")
//             item3 = document.querySelector(".image3")
//             item4 = document.querySelector(".image4")
//             item5 = document.querySelector(".image5")

//             item1.classList.toggle("image2")
//             item1.classList.remove("image1")

//             item2.classList.toggle("image3")
//             item2.classList.remove("image2")

//             item3.classList.toggle("image4")
//             item3.classList.remove("image3")

//             item4.classList.toggle("image5")
//             item4.classList.remove("image4")

//             item5.classList.toggle("image1")
//             item5.classList.remove("image5")               
//         }
//     }
//     if (qtdMov<0) {
//         for (let index = -1; index >= qtdMov ; index--) {
            
//             item1 = document.querySelector(".image1")
//             item2 = document.querySelector(".image2")
//             item3 = document.querySelector(".image3")
//             item4 = document.querySelector(".image4")
//             item5 = document.querySelector(".image5")

//             item1.classList.toggle("image5")
//             item1.classList.remove("image1")

//             item2.classList.toggle("image1")
//             item2.classList.remove("image2")

//             item3.classList.toggle("image2")
//             item3.classList.remove("image3")

//             item4.classList.toggle("image3")
//             item4.classList.remove("image4")

//             item5.classList.toggle("image4")
//             item5.classList.remove("image5")
//         }
//     }


   
// }
// for (let index = 0; index < selectorEst.length; index++) {
//     selectorEst[index].addEventListener('click',function () {
//         carouselEst(index) 
//     } ) 
// }

//sliders


$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    variableWidth: false,
    autoplay: true,
    responsive:[
        {
            breakpoint:1200,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint:800,
            settings:{
                slidesToShow:1
            }
        }
]

});

// contador = 3
// setInterval(function(){

//     item1 = document.querySelector(".image1")
//     item2 = document.querySelector(".image2")
//     item3 = document.querySelector(".image3")
//     item4 = document.querySelector(".image4")
//     item5 = document.querySelector(".image5")

//     item1.classList.toggle("image5")
//     item1.classList.remove("image1")

//     item2.classList.toggle("image1")
//     item2.classList.remove("image2")

//     item3.classList.toggle("image2")
//     item3.classList.remove("image3")

//     item4.classList.toggle("image3")
//     item4.classList.remove("image4")

//     item5.classList.toggle("image4")
//     item5.classList.remove("image5") 
//     selectorEst[contador].checked = true
//     if (contador>=4) {
//         contador = 0
//     }else{
//         contador++
//     }
// },2000)

$(".carousel").flipster({
    loop : true,
    autoplay :2000,
    buttons : false,
    keyboard : true,
});
var myFlipster = $(".carousel").flipster()

$(document).on("click", function(e){
    var elemrntClicado = $(e.target)
    if(elemrntClicado.is("span") && elemrntClicado.parent().is(".carousel-nav")){
        myFlipster.flipster('jump',  $(".carousel ul > li:nth-child("+elemrntClicado.data("index")+")"));
    }
})

var carouselNav = $(".carousel-nav");
$(".carousel ul > li").each(function(key){
    carouselNav.append($("<span data-index='"+(key+1)+"' />"))
})

// Seleciona o elemento-alvo que você deseja observar
var elementoAlvo = document.querySelectorAll('.carousel ul > li');

// Cria uma nova instância do MutationObserver
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // Verifica se houve adição de atributos
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      var classesAntigas = mutation.oldValue.split(' ');
      var classesNovas = mutation.target.classList;

     if (classesNovas[1] ==  "flipster__item--current") {
        var elementosMudados= $(".flipster__item--current")
        $(".carousel-nav > span.selected").removeClass("selected")
        $("span:nth-child("+elementosMudados.data("index")+")").addClass("selected")
        
       
     }
    }
  });
});

// Configura as opções de observação
var options = {
  attributes: true, // Observa mudanças nos atributos
  attributeOldValue: true, // Guarda o valor antigo do atributo
  attributeFilter: ['class'], // Observa apenas mudanças na classe
  subtree: false // Observa apenas o elemento-alvo, não seus descendentes
};

// Inicia a observação do elemento-alvo com as opções fornecidas
elementoAlvo.forEach(function(elemento, i){
        observer.observe(elementoAlvo[i], options);        
})
