const homeBox = document.getElementById("scoreBoxHome");
const guestBox = document.getElementById("scoreBoxGuest");

let home = 0;
let guest = 0;

function add1Home() {
  home += 1;
  homeBox.textContent = home;
}

function add2Home() {
  home += 2;
  homeBox.textContent = home;
}

function add3Home() {
  home += 3;
  homeBox.textContent = home;
}

function add1Guest() {
  guest += 1;
  guestBox.textContent = guest;
}

function add2Guest() {
  guest += 2;
  guestBox.textContent = guest;
}

function add3Guest() {
  guest += 3;
  guestBox.textContent = guest;
}
