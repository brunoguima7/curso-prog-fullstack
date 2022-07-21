let spaceshipName = prompt("Digite o nome da nave:")

function menu(spaceship, option , speed = 0) {
    while (speed >= 0) {
        if (speed >= 5) {
            option = prompt("1. Acelerar a nave em 5 km/s\n2. Desacelerar a nave em 5 km/s\n3. Imprimir dados de bordo\n4. Sair do programa")
            while (option < "1" || option > "4") {
                option = prompt("Digite apenas um valor válido. (1, 2, 3 ou 4)")
            }
            switch (option) {
                case "1":
                    speed = speed + 5
                    alert("Velocidade aumentada em 5 km/s")
                    break
                case "2":
                    speed = speed - 5
                    alert("Velocidade reduzida em 5 km/s")
                    break
                case "3":
                    alert("Nome da nave: " + spaceship + "\nVelocidade atual: " + speed)
                    break
                case "4":
                    alert("Encerrando programa de bordo.")
                    speed = -1
                    break
            }
        }
        else {
            option = prompt("1. Acelerar a nave em 5 km/s\n2. Imprimir dados de bordo\n3. Sair do programa")
            while (option < "1" || option == "2" || option > "4") {
                option = prompt("Digite apenas um valor válido. (1, 3 ou 4)")
            }
            switch (option) {
                case "1":
                    speed = speed + 5
                    alert("Velocidade aumentada em 5 km/s")
                    break
                case "3":
                    alert("Nome da nave: " + spaceship + "\nVelocidade atual: " + speed)
                    break
                case "4":
                    alert("Encerrando programa de bordo.")
                    speed = -1
                    break
            }
        }
    }
}

menu(spaceshipName)
    



    
    
    



