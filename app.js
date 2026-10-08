let listaDeTeclas = document.querySelectorAll(".tecla");

let midias = {

    som_brasil: "./assents/EfeitosSonoros/brasil.gif",
    som_impostor: "./assents/EfeitosSonoros/impostor.gif",
    som_aaaaaaa: "./assents/EfeitosSonoros/aaaaaaaa.jpg",
    som_mibombo: "./assents/EfeitosSonoros/mibombo.jpg",
    som_zeca: "./assents/EfeitosSonoros/zeca.jpg",
    som_eusebio: "./assents/EfeitosSonoros/eusebio.jpg",

    som_fahhhhh: "./assents/Memes/fahhhhh.gif",
    som_ditador: "./assents/Memes/ditador.jpg",
    som_probleminha: "./assents/Memes/probleminha.jpg",
    som_stonks: "./assents/Memes/stonks.jpg",
    som_berinjela: "./assents/Memes/berinjela.jpg",
    som_goti: "./assents/Memes/goti.jpg",

    som_arara: "./assents/Animais/arara azul.jpg",
    som_lobo: "./assents/Animais/lobo.jpg",
    som_gato: "./assents/Animais/gato.jpg",
    som_leao: "./assents/Animais/leao.jpg",
    som_cachorro: "./assents/Animais/lobo.jpg",
    som_macaco: "./assents/Animais/Macaco.jpg",
};


function tocarSom(audio, midia){

    document.querySelectorAll("audio").forEach(function(som){
        som.pause();
        som.currentTime = 0;
    });

    document.querySelector(audio).play();

    let imagem = document.querySelector("#imagem");

    if(midia.endsWith(".mp4")){

        imagem.outerHTML = `<video id="imagem" src="${midia}" autoplay loop muted controls></video>`;

    }else{

        imagem.outerHTML = `<img id="imagem" src="${midia}" alt="">`;

    }
}


let contador = 0;

while(contador < listaDeTeclas.length){

    let tecla = listaDeTeclas[contador];

    let instrumento = tecla.classList[1];

    let audio = `#som_${instrumento}`;

    tecla.onclick = function(){

        tocarSom(audio, midias[instrumento]);

    };

    contador++;
}