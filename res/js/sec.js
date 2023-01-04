const ItemJednaJedna = document.getElementById("ItemJednaJedna");
const ItemJednaDva = document.getElementById("ItemJednaDva");
const ItemJednaTri = document.getElementById("ItemJednaTri");
const ItemJednaCtyri = document.getElementById("ItemJednaCtyri");
const ItemJednaPet = document.getElementById("ItemJednaPet");

const PopisekItemJedna = document.getElementById("PopisekItemJedna");
const PopisekItemDva = document.getElementById("PopisekItemDva");
const PopisekItemTri = document.getElementById("PopisekItemTri");
const PopisekItemCtyri = document.getElementById("PopisekItemCtyri");
const PopisekItemPet = document.getElementById("PopisekItemPet");

const obalNaPopiskyJ = document.getElementById("obalNaPopiskyJ");
const obalNaPopiskyD = document.getElementById("obalNaPopiskyD");
const obalNaPopiskyT = document.getElementById("obalNaPopiskyT");
const obalNaPopiskyC = document.getElementById("obalNaPopiskyC");
const obalNaPopiskyP = document.getElementById("obalNaPopiskyP");

const villSound = document.getElementById("villSound");
const potakSound = document.getElementById("potakSound");
const clickSound = document.getElementById("clickSound");

let ItemJednaTricount = parseInt(sessionStorage.getItem("ItemJednaTri")) || 0;
parseInt(sessionStorage.setItem("ItemJednaTri", ItemJednaTricount));

let ItemJednaCtyricount =
  parseInt(sessionStorage.getItem("ItemJednaCtyri")) || 0;
parseInt(sessionStorage.setItem("ItemJednaCtyri", ItemJednaCtyricount));

let ItemJednaPetcount = parseInt(sessionStorage.getItem("ItemJednaPet")) || 0;
parseInt(sessionStorage.setItem("ItemJednaPet", ItemJednaPetcount));

window.onload = () => {
  villSound.play();
};

PlayerMaxHPLS = parseInt(sessionStorage.getItem("hpmax")) || 20;
countOfCoinsLS = parseInt(sessionStorage.getItem("coiny")) || 0;
countOfDmgLS = parseInt(sessionStorage.getItem("dmg")) || 1;
PlayerHPLS = parseInt(sessionStorage.getItem("hp")) || PlayerMaxHPLS;

PlayerCoins.innerHTML = `Coins: ${countOfCoinsLS}`;
PlayerDMG.innerHTML = `DMG: ${countOfDmgLS}`;
PlayerMaxHP.innerHTML = `Max HP: ${PlayerMaxHPLS}`;

ItemJednaJedna.onclick = () => {
  if (countOfCoinsLS >= 10) {
    countOfDmgLS += 1;
    PlayerDMG.innerHTML = `DMG: ${countOfDmgLS}`;
    parseInt(sessionStorage.setItem("dmg", countOfDmgLS));
    countOfCoinsLS -= 10;
    PlayerCoins.innerHTML = `Coins: ${countOfCoinsLS}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoinsLS));
    clickSound.play();
  }
};

ItemJednaDva.onclick = () => {
  if (countOfCoinsLS >= 10) {
    PlayerMaxHPLS += 1;
    PlayerMaxHP.innerHTML = `Max HP: ${PlayerMaxHPLS}`;
    parseInt(sessionStorage.setItem("hpmax", PlayerMaxHPLS));

    countOfCoinsLS -= 10;
    PlayerCoins.innerHTML = `Coins: ${countOfCoinsLS}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoinsLS));
    clickSound.play();
  }
};

/* -- Trird Item -- */

ItemJednaTri.onclick = () => {
  if (countOfCoinsLS >= 200) {
    countOfDmgLS *= 2;
    PlayerDMG.innerHTML = `DMG: ${countOfDmgLS}`;
    parseInt(sessionStorage.setItem("dmg", countOfDmgLS));

    ItemJednaTricount += 1;
    obalNaPopiskyT.style.display = "none";
    PopisekItemTri.style.display = "none";
    ItemJednaTri.style.display = "none";
    parseInt(sessionStorage.setItem("ItemJednaTri", ItemJednaTricount));

    countOfCoinsLS -= 200;
    PlayerCoins.innerHTML = `Coins: ${countOfCoinsLS}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoinsLS));
    potakSound.play();
  }
};

if (ItemJednaTricount == 1) {
  obalNaPopiskyT.style.display = "none";
  PopisekItemTri.style.display = "none";
  ItemJednaTri.style.display = "none";
  parseInt(sessionStorage.setItem("ItemJednaTri", ItemJednaTricount));
}

/* -- Trird Item -- */

/* -- Fourth Item -- */

ItemJednaCtyri.onclick = () => {
  /*
if(countOfCoinsLS >= 500){
}
*/
  potakSound.play();
  ItemJednaCtyricount += 1;
  obalNaPopiskyC.style.display = "none";
  PopisekItemCtyri.style.display = "none";
  ItemJednaCtyri.style.display = "none";
  parseInt(sessionStorage.setItem("ItemJednaCtyri", ItemJednaCtyricount));
};

if (ItemJednaCtyricount == 1) {
  obalNaPopiskyC.style.display = "none";
  PopisekItemCtyri.style.display = "none";
  ItemJednaCtyri.style.display = "none";
  parseInt(sessionStorage.setItem("ItemJednaCtyri", ItemJednaCtyricount));
}

/* -- Fourth Item -- */

ItemJednaPet.onclick = () => {
  potakSound.play();
  ItemJednaPetcount += 1;
  obalNaPopiskyP.style.display = "none";
  PopisekItemPet.style.display = "none";
  ItemJednaPet.style.display = "none";
  parseInt(sessionStorage.setItem("ItemJednaPet", ItemJednaPetcount));
};

if (ItemJednaPetcount == 1) {
  obalNaPopiskyP.style.display = "none";
  PopisekItemPet.style.display = "none";
  ItemJednaPet.style.display = "none";
  parseInt(sessionStorage.setItem("ItemJednaPet", ItemJednaPetcount));
}
