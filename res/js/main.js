const google = document.getElementById("google");
const attack = document.getElementById("attack");
const info = document.getElementById("info");
const yourHP = document.getElementById("yourHP");
const enemyHP = document.getElementById("enemyHP");
const PlayerDMG = document.getElementById("PlayerDMG");
const PlayerCoins = document.getElementById("PlayerCoins");
const PlayerMaxHP = document.getElementById("PlayerMaxHP");
const displaing = document.getElementById("displaing");
const swordSound = document.getElementById("swordSound");
const win7LoadSound = document.getElementById("win7LoadSound");
const damegedSound = document.getElementById("damegedSound");

const EatingSound = document.getElementById("EatingSound");

const revive = document.getElementById("revive");

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
yourHP.innerHTML = PlayerHPLS || 20;

let CountOfPlayerCoins = 0;
let pomucka = 1;

revive.onclick = () => {
  clickSound.play();
};

let interv = setInterval(() => {
  PlayerHPLS--;
  yourHP.innerHTML = PlayerHPLS;
  parseInt(sessionStorage.setItem("hp", PlayerHPLS));
  if (PlayerHPLS <= 0) {
    info.innerHTML = "You are dead.....";
    clearInterval(interv);
    google.style.left = `${20}px`;
    countOfCoinsLS -= 5;
    PlayerCoins.innerHTML = `Coins: ${countOfCoinsLS}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoinsLS));
  }
}, 1000);

attack.onmousedown = () => {
  if (enemyHP.innerHTML > 0 && PlayerHPLS > 0) {
    google.style.left = `${300}px`;
    enemyHP.innerHTML -= countOfDmgLS;
    damegedSound.play();
  }
  if (enemyHP.innerHTML <= 0) {
    info.innerHTML = "You've slained the enemy!!!!";
    clearInterval(interv);
    pomucka--;
  }
  if (enemyHP.innerHTML <= 0 && pomucka == 0) {
    countOfCoinsLS += 5;
    PlayerCoins.innerHTML = `Coins: ${countOfCoinsLS}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoinsLS));
    enemyHP.innerHTML = 0;
  }
};

attack.onmouseup = () => {
  if (PlayerHPLS > 0) {
    google.style.left = `${20}px`;
  }
};
