class CallingCard {
    constructor(centsPerMinute, remainingMinutes, usageMinutes) {
        this.centsPerMinute = centsPerMinute;
        this.remainingMinutes = remainingMinutes;
        this.usageMinutes = usageMinutes;  //needed ?
    }

    // Add money/minutes to the card.
    addDollars(money) {
        let addMinutes = money * 100 / this.centsPerMinute;
        if (addMinutes % 2 === 0) {
            return this.remainingMinutes = addMinutes;
        } else {
            return this.remainingMinutes = Math.round(addMinutes);
        }
        
    }

    getRemainingMinutes() {
        return this.remainingMinutes;
    }

    // Delete minutes from the card
    useMinutes(minutes) {
        let delMinutes = this.remainingMinutes - minutes;
        if (delMinutes < 0) {
            return this.remainingMinutes = 0;
        } else {
            return this.remainingMinutes = delMinutes;
        }
    }
}

export default CallingCard;