// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard) {
        this.callingCard = [callingCard];
        this.talking = false;
        this.calledNumber = [];
        this.minsBeforeCall = 0;
        this.history = [];
    }

    isTalking() {
        return this.talking;
    }

    call(number) {
        let phoneNumber = number + ' ';
        this.talking = true;
        this.history.push(phoneNumber);

        // Get remainingMinutes at start of call to subtract remainingMinutes after call to get call duration; below in endCall()
        this.minsBeforeCall = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);
        // console.log('mins before call ' + this.minsBeforeCall);
    }

    tick() {
        let checkRemaingMinutes = this.callingCard.map(({ remainingMinutes }) => remainingMinutes)[0];
        // console.log(checkRemaingMinutes);
        if (checkRemaingMinutes === 1) {
            this.callingCard.forEach(prop => prop.useMinutes(1));
            // this.cardEmpty;
        } else {
            this.callingCard.forEach(prop => prop.useMinutes(1));
        }
    }


    endCall() {
        this.talking = false;

        // let amResult = this.callingCard.map(({ centsPerMinute }) => centsPerMinute);  // can't get .find() to work, try to refactor later

        // Collected remainingMinutes at start of call above call(); to subtract remainingMinutes after call to get call duration
        let rmResult = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);  // can't get .find() to work, try to refactor later
        let rmValue = rmResult[0];
        // console.log(rmValue);

        let talkMin = this.minsBeforeCall - rmValue;

        let talkMinRes = '';
        if (this.history.length === 1) {
            talkMinRes = `(${talkMin} minute) `;
        } else if (rmValue === 0) {
            talkMinRes = `(cut off at ${talkMin} minutes)`;
        } else {
            talkMinRes = `(${talkMin} minutes) `;
        }

        this.history.push(talkMinRes);
    }

    getHistory() {
        let arrayElems = '';
        for (var i = 0; i < this.history.length; i++) {
            arrayElems += this.history[i];
            // console.log(arrayElems);
        }
        return arrayElems;
    }

}

export default CellPhone;
