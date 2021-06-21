"use strict";

// TODO - write your code here.

//randomDamage arrow function
const randomDamage = () => {
    return Math.ceil(Math.random () * 10);
}

//chooseOption arrow function
const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return randNum == 0 ? opt1 : opt2;
}

//Declare a function expression namedattackPlayerthathas one parameter namedhealthwhich returns a number equal tohealthminusthe result of therandomDamagefunction.
const attackPlayer = function (health) {
    return health - randomDamage();
};

//logHealth arrow function
const logHealth = (player, health) => {
    console.log (`${player} health: ${health}`);
};

//logDeath arrow function
const logDeath =(winner, loser) => {
    console.log (`${winner} defeated ${loser}`);
};

//isDead arrow function GO BACK TO THIS!!!!!
const isDead = (health) => {
    return health <= 0;
};

//fight declaration
function fight (player1, player2, player1Health, player2Health) {
    while (true) {
            let attacker = chooseOption (player1, player2);
            if (attacker == player1) {
                player2Health = attackPlayer(player2Health);
                logHealth(player2, player2Health);
                if (isDead(player2Health)) {
                    logDeath(player1, player2);
                    break;
                }
            } else {
                player1Health == attackPlayer(player1Health);
                logHealth(player1, player1Health);
                if (isDead(player1Health)) {
                    logDeath(player2, player1);
                    break;
                }
            }
        } 
};

fight("Eli", "Jenny", 100, 100);
