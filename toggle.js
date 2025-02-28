document.getElementById('cashout').style.display="none";

document.getElementById('addmoney-box').addEventListener('click',function()
{
    handleToggle('addmoney','block');
    handleToggle('cashout','none');
})
document.getElementById('cashout-box').addEventListener('click',function()
{
    handleToggle('cashout','block');
    handleToggle('addmoney','none');
})



// document.getElementById('addmoney-box').addEventListener('click',function()
// {
//     document.getElementById('cashout').style.display="none";
//     document.getElementById('addmoney').style.display="block";
// })

// document.getElementById('cashout-box').addEventListener('click',function()
// {
//     document.getElementById('addmoney').style.display="none";
//     document.getElementById('cashout').style.display="block";
// })
