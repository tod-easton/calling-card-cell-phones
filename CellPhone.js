// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard) {
        this.callingCard = callingCard;
        this.talking === false;
    }

    isTalking() {
        return this.talking;
    }

    call(phoneNumber) {
        this.talking = true;
    }

    tick() {

    }

    endCall() {

    }

    getHistory() {

    }

}

export default CellPhone;