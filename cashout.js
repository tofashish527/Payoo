document.getElementById('cashout-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const pin=getInputValueById('pin');
    const amount=getInputValueById('cashout-amount');
    const balance=getInnertextValueById('balance');
    const account=document.getElementById('account').value;
    if(account.length===11)
    {
       if(pin===1234 && amount)
       {
        const new_balance=balance-amount;
        //document.getElementById('balance').innerText=new_balance;
        setInnertextByIDandValue('balance',new_balance);
       }
       else{
        alert("Check pin or amount")
       }
    }
    else
    {
        alert("Invalid account");
    }
})