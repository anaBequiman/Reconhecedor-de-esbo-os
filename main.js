function preload(){
    classificar = ml5.imageClassifier('DoodleNet')
}
function setup(){
    cnv = createCanvas(280,280);
    cnv.center();
    background("white");
    cnv.mouseReleased(classificador);
    falar = window.speechSynthesis;
}
function preload(){
    classificar = ml5.imageClassifier('DoodleNet')
}
function draw(){
    strokeWeight(7);
    stroke(document.getElementById("caixadecor").value);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function limpar(){
    background("white");
}
function classificador(){
    classificar.classify(canvas, pegarResultado);
}
function pegarResultado(erro, resultado){
    if(erro){
        console.log(erro);
    }
    else{
        console.log(resultado);
        desenho = resultado[0].label;
        precisao = resultado[0].confidence;
        var correcao = desenho.replace("_", " ");
        document.getElementById("nome").innerHTML = correcao;
        document.getElementById("prc").innerHTML = Math.round(precisao * 100) + "%";
        converter = new SpeechSynthesisUtterance(correcao);
        falar.speak(converter);
    }
}