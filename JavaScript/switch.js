let distanceInLY 
let chosenOption 
let chosenUnity 
let convertedDistance 

distanceInLY = prompt("Digite a distância em anos-luz")

chosenOption = prompt("Para qual unidade deseja converter?\n1. Parsec(pc)\n2. Unidade Astronômica(AU)\n3. Quilômetros (KM)\n\n(Digite o número da opção desejada)")

switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversao fora do escopo"
}
alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)