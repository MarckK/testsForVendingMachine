function getChange (priceString, cashPaidString) {
  var priceNumber;
  var cashNumber;
  if (priceString.charAt(0) == '£') {
    var priceNumber = Number(priceString.substring(1));
  } else { priceNumber = Number(priceString);}
  if (cashPaidString.charAt(0) == '£') {
    cashNumber = Number(cashPaidString.substring(1));
  } else {cashNumber = Number(cashPaidString);}

  var changeReturned = [];
  if (priceNumber === cashNumber) {
    return changeReturned;
  }
  if (priceNumber > cashNumber) {
    return 'You do not have enough money to buy';
  }

  var changeInPennies = [(((cashNumber - priceNumber) * 10000) / 10000) * 100];
  function remainder(n) {
    while (changeInPennies >= n) {
    changeReturned.push(n);
    changeInPennies -= n;
    }
  }
  remainder(200);
  remainder(100);
  remainder(50);
  remainder(20);
  remainder(10);
  remainder(5);
  remainder(2);
  remainder(1);

  return changeReturned;
}
