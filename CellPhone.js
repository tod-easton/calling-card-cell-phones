// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard, calledNumber, remMin, history) {
        this.callingCard = [callingCard];
        // this.ccProps = [callingCard];
        this.talking = false;
        this.calledNumber = calledNumber;
        this.remMin = remMin;
        this.history = history;
    }

    isTalking() {
        return this.talking;
    }

    call(phoneNumber) {
        this.calledNumber = phoneNumber;
        this.talking = true;
    }

    tick() {
        this.callingCard.forEach(prop => prop.useMinutes(1));  // since this runs CallingCard.useMinutes() on every element/property (including centsPerMinute); is that most efficient?
    }

    endCall() {
        this.talking = false;
    }

    getHistory() {
        let rmResult = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);
        let rmValue = rmResult[0];
        // console.log(`${this.calledNumber} (${rmValue} minutes)`);
        return `${this.calledNumber} (${rmValue} minutes)`;
    }

}

export default CellPhone;
