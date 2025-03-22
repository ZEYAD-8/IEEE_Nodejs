const user = {
    name: "Ashraf Ben Sharqy",
    age: 29,
    teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
    nationalTeam: {
        name: "Morroco",
        best: {
            africanCupOfNations: ["Champion", 2018],
            worldCup: ["4th", 2022],
        }
    }
}

let {teams:[,,zama], nationalTeam:{best:{worldCup:[fourth]}}} = user;
console.log(zama, fourth);