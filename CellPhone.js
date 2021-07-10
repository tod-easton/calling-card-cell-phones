// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard) {
        this.callingCard = [callingCard];
        // this.ccProps = [callingCard];
        this.talking = false;
        this.calledNumber = [];
        // this.availMin = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);
        // console.log(this.availMin);
        // this.usedMinCount = [];
        this.minsBeforeCall = 0;
        // this.rmResult = 0;
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
        // if () 
        this.callingCard.forEach(prop => prop.useMinutes(1));  // since this runs CallingCard.useMinutes() on every element/property (including centsPerMinute); is that most efficient?

        // if (this.rmResult != 0) {
        //     this.callingCard.forEach(prop => prop.useMinutes(1));  // since this runs CallingCard.useMinutes() on every element/property (including centsPerMinute); is that most efficient?
        // } else {
        //     this.endCall();
        // }

    }


    endCall() {
        this.talking = false;

        // let amResult = this.callingCard.map(({ centsPerMinute }) => centsPerMinute);  // can't get .find() to work, try to refactor later

        // Collected remainingMinutes at start of call above call(); to subtract remainingMinutes after call to get call duration
        let rmResult = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);  // can't get .find() to work, try to refactor later
        let rmValue = rmResult[0];
        // console.log('remaing minutes ' + rmValue);

        let talkMin = this.minsBeforeCall - rmValue;

        let talkMinRes = '';
        if (this.history.length === 1) {
            talkMinRes = `(${talkMin} minute) `;
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
