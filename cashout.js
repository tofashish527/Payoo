document.getElementById('cashout-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const pin=getInputValueById('pin');
    const amount=getInputValueById('cashout-amount');
    const balance=getInnertextValueById('balance');
    const account=document.getElementById('account').value;
    //const selectedBank=document.getElementById('allBank').value;
     
    if(amount>balance)
        {
          alert("Invalid");
          return;
        }
    
    
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


       const container=document.getElementById('trans-container')
       const div=document.createElement('div')
       div.classList.add()
       div.innerHTML=`
       <h1>Withdrawn Money</h1>
       <h3>${amount}</h3>
       <p>account number:${account}</p>
       `
       container.appendChild(div)
    
    
    
    
    
    
       //    const p=document.createElement('p');
    //    p.innerText=`withdrawn ${amount} from ${account} account`
    //    container.appendChild(p)


    }
    else
    {
        alert("Invalid account");
    }
})