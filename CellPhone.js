// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard) {
        this.callingCard = callingCard;
        this.talking === false;
    }

    call(phoneNumber) {
        if (phoneNumber != null) {
            return this.talking === true
        } else {
            return this.talking === false
        }
    }

    tick() {

    }

    endCall() {

    }

    getHistory() {

    }

}

export default CellPhone;