// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard, history) {
        this.callingCard = [callingCard];
        // this.ccProps = [callingCard];
        this.talking = false;
        this.history = history;
    }

    isTalking() {
        return this.talking;
    }

    call(phoneNumber) {
        this.talking = true;
    }

    tick() {
        this.callingCard.forEach(prop => prop.useMinutes(1));  // since this runs useMinutes() on every element/property (including centsPerMinute); is that most efficient?
    }

    endCall() {

    }

    getHistory() {
        return this.history = this.history;
    }

}

export default CellPhone;
