
let person1 = new Person("Magnus", "Kvalbein", 36, 03151985, true);

let elev1 = new Elev("Hauk", "wilson", 18, 02020202, true);

console.log(elev1);

for (var i = 0; i < 6; i++) {
  elev1.faarPrikk();
}

elev1.sjekkPrikker();
console.log(elev1.sjekkHumor(), elev1.sjekkPrikker());
