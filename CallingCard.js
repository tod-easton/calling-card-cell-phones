export default CallingCard;

class CallingCard {
    constructor(centsPerMinute, remainingMinutes, useMinutes) {
        this.centsPerMinute = centsPerMinute;
        this.remainingMinutes = remainingMinutes;
        this.useMinutes = useMinutes;
    }

    addDollars() {
        this.centsPerMinute += 1;  //placeholder until tested
    }

    get remainingMinutes() {
        return this.remainingMinutes;  //placeholder
    }

    set useMinutes(minutes) {
        this.centsPerMinute = minutes  //placeholder
    }
}