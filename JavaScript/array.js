const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
  ]

let moreThan9 = hitchedSpaceships.filter(spaceships => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let unreadyPlatforms = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spacheship[0].toUpperCase()
})