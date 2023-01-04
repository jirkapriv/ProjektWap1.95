const google = document.getElementById("google");
const attack = document.getElementById("attack");
const info = document.getElementById("info");
const yourHP = document.getElementById("yourHP");
const enemyHP = document.getElementById("enemyHP");
const PlayerDMG = document.getElementById("PlayerDMG");
const PlayerCoins = document.getElementById("PlayerCoins");
const PlayerMaxHP = document.getElementById("PlayerMaxHP");
const displaing = document.getElementById("displaing");

let PlayerMaxHPLS = parseInt(sessionStorage.getItem("hpmax")) || 20;
let countOfCoinsLS = parseInt(sessionStorage.getItem("coiny")) || 0;
let countOfDmgLS = parseInt(sessionStorage.getItem("dmg")) || 1;
let PlayerHPLS = parseInt(sessionStorage.getItem("hp")) || PlayerMaxHPLS;

parseInt(sessionStorage.setItem("hpmax", PlayerMaxHPLS));
parseInt(sessionStorage.setItem("coiny", countOfCoinsLS));
parseInt(sessionStorage.setItem("dmg", countOfDmgLS));
parseInt(sessionStorage.setItem("hp", PlayerHPLS));

PlayerMaxHP.innerHTML = `Max HP: ${PlayerMaxHPLS}`;
PlayerCoins.innerHTML = `Coins: ${countOfCoinsLS}`;
PlayerDMG.innerHTML = `DMG: ${countOfDmgLS}`;
