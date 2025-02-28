document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();

const pin_num=document.getElementById('PIN-num').value;
const convertedPIN=parseInt(pin_num);
const amount=document.getElementById('amount').value;
const convertedAmount=parseFloat(amount);
const balance=document.getElementById('balance').innerText;
const convertedBalance=parseFloat(balance);
if(amount && pin_num)
{
    const sum=convertedBalance+convertedAmount;
    document.getElementById('balance').innerText=sum;
}
else
{
    alert("Enter Amount")
}
})