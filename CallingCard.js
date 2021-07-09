class CallingCard {
    constructor(centsPerMinute, remainingMinutes, useMinutes) {
        this.centsPerMinute = centsPerMinute;
        this.remainingMinutes = remainingMinutes;
        this.useMinutes = useMinutes;
    }

    // Add money to the card.
    addDollars(money) {
        let dollerToCents = money * 100;
        return this.centsPerMinute += dollerToCents;  //placeholder until tested 
    }

    // Check how many minutes are left.  don't need
    // get remainingMinutes() {
    //     return this.remainingMinutes;  //placeholder until tested
    // }

    
    // Decrease the number of minutes left. don't need
    // set useMinutes(minutes) {
    //     this.useMinutes = minutes  //placeholder until tested
    // }
}

export default CallingCard;