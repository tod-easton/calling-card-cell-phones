// import CallingCard from "./CallingCard";

class CellPhone {
    constructor(callingCard, history) {
        this.callingCard = [callingCard];
        // this.ccProps = [callingCard];
        this.talking = false;
        this.calledNumber = [];
        this.availMin = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);
        // console.log(this.availMin);
        this.usedMinCount = [];
        this.history = history;
    }

    isTalking() {
        return this.talking;
    }

    call(phoneNumber) {
        this.calledNumber.push(phoneNumber);
        this.talking = true;
    }

    tick() {
        this.callingCard.forEach(prop => prop.useMinutes(1));  // since this runs CallingCard.useMinutes() on every element/property (including centsPerMinute); is that most efficient?

        // let amResult = this.callingCard.map(({ centsPerMinute }) => centsPerMinute);  // can't get .find() to work, try to refactor later
        let rmResult = this.callingCard.map(({ remainingMinutes }) => remainingMinutes);  // can't get .find() to work, try to refactor later
        // let amValue = amResult[0];
        // console.log('avail minutes ' + amValue);
        let rmValue = rmResult[0];
        // console.log('remaing minutes ' + rmValue);
        // let usedMinCount = [];
        this.usedMinCount.push(rmValue);
        // console.log(usedMinCount);


        // let currentHistory = null;
        // console.log(currentHistory);

        // if (currentHistory === null) {
        //     console.log(currentHistory);
        //     return this.history = `${this.calledNumber} (${rmValue} minutes)`;
            
        // } else {
        //     console.log(currentHistory);
        //     return currentHistory += `${this.calledNumber} (${rmValue} minutes)`;
            
            //     let usedMinCount = this.history;
            //     console.log('hi tod');
            //     this.history += `${this.calledNumber} (${rmValue} minutes)`;
            //     console.log(this.history);
            // }
            // let currentHistory = this.history = `${this.calledNumber} (${rmValue} minutes)`;

            // console.log(`${this.calledNumber} (${rmValue} minutes)`);
            // return `${this.calledNumber} (${rmValue} minutes)`;
        }
    

    endCall() {
        this.talking = false;
    }

    getHistory() {
        this.history = `${this.calledNumber} (${this.usedMinCount} minutes)`
        console.log(this.history);
    }

}

export default CellPhone;
