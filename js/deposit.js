// step-1 
document.getElementById('btn-deposit').addEventListener('click', function(){

       // step-2 button e sathe deposit field er connection korte hobe
       const depositField = document.getElementById('deposite-field');
              const NewDepositAmountString = depositField.value;
              const NewDepositAmount =   parseFloat ( NewDepositAmountString)



              // step-3 deposit tolal
              // inner text use korte korte hobe
              const depositTotalElement = document.getElementById('deposit-total');
              const PreviousDepositTotalString = depositTotalElement.innerText;
              const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

              //step-4 add number

              const currentDepositTotal = PreviousDepositTotal + NewDepositAmount;

              depositTotalElement.innerText = currentDepositTotal;

              // step-5

              const balanceTotalElement = document.getElementById('balance-total');

              const previousBalanceTotalString = balanceTotalElement.innerText;

              const PreviousbalanceTotal = parseFloat(previousBalanceTotalString);

              // step-6 add
              const currentBalanceTotal = PreviousbalanceTotal + NewDepositAmount;


              balanceTotalElement.innerText = currentBalanceTotal;



              








              // step-7
              depositField.value = '';


})