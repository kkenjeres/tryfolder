class Reservations {
  constructor(aMailaddress, aName) {
      this._mailAddress = aMailaddress;
      this._name = aName;
      this._mySeatList = [];
  }

  seatReservation(aSeat) {
      const secret = aSeat;
      return function() {
          return secret;
      };
  }

  addSeatReservation(aSeat) {
      const seatClosure = this.seatReservation(aSeat);
      this._mySeatList.push(seatClosure());
  }

  printReservations() {
      this._mySeatList.forEach(seat => {
          console.log(seat);
      });
  }
}
const list = new Reservations('peter@web.de', 'Peter Müller');
list.addSeatReservation('Reihe1-Sitz10');
list.addSeatReservation('Reihe7-Sitz8');
list.printReservations();
