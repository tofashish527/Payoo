document.getElementById('add-money').addEventListener('click',function(event)
{
    event.preventDefault();
    const pin=getInputValueById('pin');
    const amount=getInputValueById('amount');
    const account=document.getElementById('account').value;
    const balance=getInnertextValueById('balance');
    const selectedBank=document.getElementById('allBank').value
    if(amount<0)
    {
      alert("Invalid");
      return;
    }
   
    if(account.length===11)
    {
      if(pin===1234 && amount)
      {
          const sum=balance+amount;
          //document.getElementById('balance').innerText=sum;
          setInnertextByIDandValue('balance',sum);
          

          const container=document.getElementById('trans-container');
          const div=document.createElement("div");
          div.classList.add("bg-gray-400")
          div.innerHTML=`
          <h1 class="font-bold">Added Moneey</h1>
          <h3>${amount}</h3>
          <p>account number: ${account} from ${selectedBank} Bank</p>
          `
          container.appendChild(div)


          // const p=document.createElement('p');
          // p.innerText=`added ${amount} from ${account} account`
          // container.appendChild(p);
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