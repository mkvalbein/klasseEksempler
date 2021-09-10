class Person {
  /*
  Denne klassen tar inn en String Fornavn, en String etternavn, ett tall alder, ett tall fodselsdag på formen mmddyyyy, og en boolsk variabel for humør. blid = true, sur = false.

  har metodene.....
  */
  constructor(fornavn, etternavn, alder, fodselsdag, erBlid) {
    this.fornavn=fornavn;
    this.etternavn = etternavn;
    this.alder = alder;
    this.fodselsdag = fodselsdag;
    this.erBlid = erBlid;
  }
  harBursdag(){
    this.alder++ //this peker til det aktuelle objektet
    if (!this.erBlid) {
      this.erBlid=true;
    }
  }

  sjekkHumor(){
    return this.erBlid
  }
  presenterDeg(){
    return "Eg heiter " + this.fornavn + " " + this.etternavn
  }
  byttFornavn(navn){
    this.fornavn = navn;
  }
  oppgiAlder(){
    return this.alder
  }
}
