class Elev extends Person {

  constructor(fornavn, etternavn, alder, fodselsdag, erBlid) {
    super(fornavn, etternavn, alder, fodselsdag, erBlid); //sender til superklassens konstruktør
    this.antallPrikker=0;
  }

  sjekkPrikker(){
    if (this.antallPrikker>5) {
      this.blirUtivist();
    }
    return this.antallPrikker
  }

  blirUtivist(){
    this.erBlid=false;
    this.antallPrikker=0;
  }

  faarPrikk(){
    this.antallPrikker++;
  }

}
