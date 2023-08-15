// step 1 
document.getElementById('btn-widraw').addEventListener('click', function(){

       // step 2
       const widrawField = document.getElementById('widraw-field');
       const newWidrawAmountString = widrawField.value;
       const newWidrawAmount = parseFloat(newWidrawAmountString);

       // step-3

       const widrawTotalElement = document.getElementById('widraw-total');
       const previousWidrawTotalString = widrawTotalElement.innerText;
       const previousWidrawTotal = parseFloat(previousWidrawTotalString);

       // step-4

       const currentWidrawTotal = previousWidrawTotal + newWidrawAmount;
       widrawTotalElement.innerText = currentWidrawTotal;

       // step-5

       const balancetotalElement = document.getElementById('balance-total');
       const previousbalanceTotalString = balancetotalElement.innerText;
       const previousBalanceTotal = parseFloat(previousbalanceTotalString);
       
       // step-6 
       const NewBalancetotal = previousBalanceTotal - newWidrawAmount;
       balancetotalElement.innerText = NewBalancetotal;



       // step-7
       widrawField.value = '';



})