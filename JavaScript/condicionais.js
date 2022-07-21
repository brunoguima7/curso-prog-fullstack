let pilotName = ""
let initialVelocity = 0
let velocity = 0
let confirmation = false

pilotName = prompt("Olá piloto, Qual seu nome?")

initialVelocity = prompt("A qual velocidade você gostaria de acelerar a nave?")

if (initialVelocity > 0) {
    confirmation = confirm("Sua nave está indo para a velocidade de " + initialVelocity + " Km/s.")
}
else {
    alert("Por favor digite uma velocidade maior que 0.")
    initialVelocity = prompt("A qual velocidade você gostaria de acelerar a nave?")
    confirmation = confirm("Sua nave está indo para a velocidade de " + initialVelocity + " Km/s.")
}
if(confirmation) {
    velocity = initialVelocity 
}
switch(velocity) {
    case "0":
        alert("Nave está parada. Considere partir e aumentar a velocidade.")
        break
    case "10":
    case "20":
    case "30":
    case "40": 
        alert("Você está devagar, podemos aumentar mais.")
        break
    case "50":
    case "60":
    case "70":
    case "80":
        alert("Parece uma boa velocidade para menter.")
        break
    case "90":
    case "100":
        alert("Velocidade alta. Considere diminuir.")
        break
}
alert("Nome do piloto: " + pilotName + "\nVelocidade atual da nave: " + velocity + " Km/s.")

