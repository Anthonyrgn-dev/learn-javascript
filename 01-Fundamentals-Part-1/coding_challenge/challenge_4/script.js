const bill = 275;

let tip;
let totalValue;

if (bill >= 50 && bill <= 300){
    tip = bill * (15 / 100)
    totalValue = tip + bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`)
} else {
    tip = bill * (20 / 100)
    totalValue = tip + bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`)
}

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// const total = bill + tip;
//
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`);

