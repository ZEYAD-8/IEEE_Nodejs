let player = {
    name: "Samir Kamona",
    club: "Al Ahly",
    score: 25
}

let fantasyPlayer = {...player};
fantasyPlayer.score = 50;
fantasyPlayer.position = "ST";

console.log(player)
console.log(fantasyPlayer)