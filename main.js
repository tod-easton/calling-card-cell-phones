import CallingCard from './CallingCard.js';


const CallingCard = require('./CallingCard.js');

let card1 = new CallingCard(10); // card1 costs 10 cents / minute to use

let card2 = new CallingCard(15); // card2 costs 15 cents / minute to use



let card = new CallingCard(20); // this card costs 20 cents / minute to use

card.addDollars(1);           // add $1 (100 cents).  100 cents / 20 cents/minute = 5 minutes added

card.getRemainingMinutes();   // returns 5  (5 minutes left)

card.useMinutes(3);
card.getRemainingMinutes();   // return 2

card.useMinutes(1);
card.getRemainingMinutes();   // returns 1



let card = new CallingCard(5); // this card costs 5 cents / minute to use

card.addDollars(2);           // 200 cents / 5 cents/minute = 40 minutes added
card.getRemainingMinutes();   // returns 40

card.useMinutes(43);
card.getRemainingMinutes();   // return 0



let card1 = new CallingCard(11);
card1.addDollars(3);         // 300 cents / 11 = 27.2727272... = 27 minutes added
card1.getRemainingMinutes(); // => returns 27

let card2 = new CallingCard(17);
card2.addDollars(3);         // 300 cents / 17 = 17.647... = 17 minutes added
card2.getRemainingMinutes(); // => returns 17



let card = new CallingCard(10);
card.addDollars(1);

let phone = new CellPhone(card);



let card = new CallingCard(10);
card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

let phone = new CellPhone(card);
phone.isTalking();  // => returns false

phone.call("555-1212");
phone.isTalking();  // => returns true

phone.tick();       // simulate a minute going by
phone.tick();       // simulate another minute going by

phone.endCall();
phone.isTalking();  // => returns false (because the call is over)
phone.getHistory(); // => returns "555-1212 (2 minutes)"

card.getRemainingMinutes() // => return 8, because the call lasted 2 minutes;



let card = new CallingCard(10);
card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

let phone = new CellPhone(card);
phone.call("555-1111");
phone.tick();       // simulate a minute going by
phone.endCall();

phone.call("555-2222");
phone.tick();       // simulate a minute going by
phone.tick();       // simulate a minute going by
phone.endCall();

phone.getHistory(); // => returns "555-1111 (1 minute), 555-2222 (2 minutes)"

card.getRemainingMinutes() // => return 7, because the phone used 3 minutes



let card = new CallingCard(20);
card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

let phone = new CellPhone(card);
phone.call("555-1111");
phone.tick();       // 1 minute elapsed
phone.tick();       // 2 minutes elapsed
phone.endCall();

phone.call("555-3333");
phone.tick();       // 3 minutes elapsed
phone.tick();       // 4 minutes elapsed
phone.tick();       // this is the end of the 5th minute, so the call is ended

phone.getHistory(); // => returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"

card.getRemainingMinutes() // => returns 0, because all 5 minutes have been used up
