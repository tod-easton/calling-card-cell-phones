// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard) {
        this.callingCard = [callingCard];
        this.talking = false;
        this.calledNumber = null;
        this.minsBeforeCall = 0;
        this.history = [];
    }

    isTalking() {
        return this.talking;
    }

    call(number) {
        this.talking = true;
        this.calledNumber = number + ' ';
        this.history.push(this.calledNumber);

        // Get remainingMinutes at START of call to subtract remainingMinutes AFTER call to get call duration: below in endCall()
        this.minsBeforeCall = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);
    }

    tick() {
        // Get / verify if there are available minutes on Calling Card
        let checkRemaingMinutes = this.callingCard.map(({ remainingMinutes }) => remainingMinutes)[0];
        if (checkRemaingMinutes === 1) {
            this.callingCard.forEach(prop => prop.useMinutes(1));
            let cardEmpty = `(cut off at ${this.minsBeforeCall} minutes)`;
            this.history.push(cardEmpty);
        } else {
            this.callingCard.forEach(prop => prop.useMinutes(1));
        }
    }

    endCall() {
        this.talking = false;

        // Get remainingMinutes at START of call to subtract remainingMinutes AFTER call to get call duration: above in call()
        let rmResult = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);  // can't get .find() to work, try to refactor later
        let rmValue = rmResult[0];

        let talkMin = this.minsBeforeCall - rmValue;

        let talkMinRes = '';
        if (talkMin === 1) {
            talkMinRes = `(${talkMin} minute), `;
        } else if (rmValue === 0) {  // Not needed leaving for reivew / refactor
            talkMinRes = `(cut off at ${talkMin} minutes), `;
        } else {
            talkMinRes = `(${talkMin} minutes), `;
        }

        this.history.push(talkMinRes);
    }

    getHistory() {
        let arrayElems = '';
        for (var i = 0; i < this.history.length; i++) {
            arrayElems += this.history[i];
        }
        return arrayElems;
    }

}

export default CellPhone;
