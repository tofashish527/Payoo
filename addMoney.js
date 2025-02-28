document.getElementById('add-money').addEventListener('click',function(event)
{
    event.preventDefault();
    const pin=getInputValueById('pin');
    const amount=getInputValueById('amount');
    const account=document.getElementById('account').value;
    const balance=getInnertextValueById('balance');
    if(account.length===11)
    {
      if(pin===1234 && amount)
      {
          const sum=balance+amount;
          //document.getElementById('balance').innerText=sum;
          setInnertextByIDandValue('balance',sum);
      }
      else
      {
        alert("Enter pin or amount");
      }

    }
    else
    {
        alert("invalid account number");
    }
    
})



// document.getElementById('add-money').addEventListener('click',function(event){
//     event.preventDefault();
//     const pin=document.getElementById('pin').value;
    //    const convertedpin=parseInt(pin);
    //    const balance=document.getElementById('balance').innerText;
    //    const convertedbalance=parseInt(balance);
// })