// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard, history) {
        this.callingCard = callingCard;
        this.ccProps = [callingCard];
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
        this.ccProps.forEach(prop => prop.useMinutes());
    }

    endCall() {

    }

    // getHistory() {
    //     return this.history = this.history;
    // }

}

export default CellPhone;
