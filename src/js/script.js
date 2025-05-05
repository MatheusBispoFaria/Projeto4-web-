//DECLARANDO UM ARRAY DE IMAGENS

let imagem=[
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
]

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo = 5000;

//DECLARANDO A FUNÇÃO DO SLIDESHOW

function slideshow(){
    document.getElementById('image').src = imagem[i];
    i++;
    if(i == imagem.length){
        i=0;
    }
    setTimeout("slideshow()",tempo)
}
slideshow();