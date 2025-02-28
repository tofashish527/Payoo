 document.getElementById('cashout').style.display="none";
 document.getElementById('trans-hist').style.display="none";

document.getElementById('addmoney-box').addEventListener('click',function()
{
    handleToggle('addmoney','block');
    handleToggle('cashout','none');
    handleToggle('trans-hist','none');
})
document.getElementById('cashout-box').addEventListener('click',function()
{
    handleToggle('cashout','block');
    handleToggle('addmoney','none');
    handleToggle('trans-hist','none');
})




// document.getElementById('trans-box').addEventListener('click',function()
// {
//     handleToggle("cashout","none");
//     handleToggle("addmoney","none");
//     handleToggle("trans-hist","block");
// })
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
