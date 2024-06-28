
let chave = "286b6e8f8ac83a3923ed79798ed54495"



function colocarnatela(dados) {
    console.log(dados)


    document.querySelector("h2").innerHTML = "Tempo em " + dados.name
    document.querySelector('.grau').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".nuvens").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = " Umidade " + dados.main.humidity + "%"

}



async function buscarcidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())

    colocarnatela(dados)

}





function buttonprocurar() {

    let cidade = document.querySelector('input')

    buscarcidade(cidade.value)

}