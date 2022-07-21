let allSpaceships = []

class spaceships {
    constructor () {
        this.name = ""
        this.tripulants = 0
        this.engaged = false
        this.doors = false
    }
}

function register() {
    spaceships.name = prompt("Qual o nome da espaconave?")
    spaceships.tripulants = prompt("quantos tripulantes a nave possui?")
}

function engage() {
    spaceships.engaged = true
    spaceships.doors = true
}

function list() {
    alert("Lista de todas as naves: " + allSpaceships)
}

function menu() {
    let chosenOption = Number(prompt("O que voce deseja fazer:\n1- Cadastrar uma nave\n2- Gerar lista de naves\n3-Sair do programa"))
    while (chosenOption <= 0 || chosenOption >= 4) {
        chosenOption = prompt("Digite apenas um valor válido. (1, 2 ou 3)")    
    }
    switch (chosenOption) {
        case 1:
            register()
            let = confirmEngage = confirm("Deseja engatar a nave?")
            if (confirmEngage == true) {
            engage()
            }
            break
        case 2:
            list()
            break
        case 3:
            alert("Encerrando programa")
            break
            
        
    }

}