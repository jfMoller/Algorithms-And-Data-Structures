function checkCashRegister(price, cash, cid) {
    //sort cash-in-drawer (cid) array in descending order by cash value
    cid = cid.sort((a, b) => getValueByCashType(a[0]) - getValueByCashType(b[0]))
  
    let updatedCid = [];
  
    const drawerStatus = {
      closed: { status: "CLOSED", change: cid },
      error: { status: "INSUFFICIENT_FUNDS", change: [] },
      open: { status: "OPEN", change: updatedCid }
    };
  
    let change = cash - price;
    let totalCashAvailable = cid.reduce((total, cash) => total + cash[1], 0)
    
    //check if total cash available is equal to the change
    if (totalCashAvailable === change) { return drawerStatus.closed }
  
    //check if change is greater than total cash available
    else if (change > totalCashAvailable) { return drawerStatus.error }
  
    else {
      //iterate through the cash-in-drawer array
      for (let i = cid.length - 1; i >= 0; i--) {
        let cashType = cid[i][0]
        let cashTypeAmount = cid[i][1]
        let cashTypeValue = getValueByCashType(cashType)
        let cashTypeCount = cashTypeAmount / cashTypeValue
        
        //check if change can be given using the current cash type
        if (change >= cashTypeValue) {
          let changeAmount = 0
          //keep subtracting cash type value from change until not possible or cash-in-drawer count is exhausted
          while (change >= cashTypeValue && cashTypeCount > 0) {
            change -= cashTypeValue
            cashTypeAmount -= cashTypeValue
            changeAmount += cashTypeValue
            cashTypeCount--
            change = Math.round(change * 100) / 100
          }
          updatedCid.push([cashType, changeAmount])
        }
      }
      
      //check if change is still remaining, indicating insufficient funds
      if (change > 0) { return drawerStatus.error }
      
      return drawerStatus.open;
    }
  
    //retrieve the value of a cash type from the cashTypeValues object
    function getValueByCashType(cashType) {
      const cashTypeValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100,
      };
      return cashTypeValues[cashType];
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);