function getInputValueById(id){
    const value=document.getElementById(id).value;
    const convertedvalue=parseFloat(value);
    return convertedvalue;
}

function getInnertextValueById(id){
    const value=document.getElementById(id).innerText;
    const convertedvalue=parseFloat(value);
    return convertedvalue;
}

function setInnertextByIDandValue(id,value)
{
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status)
{
    document.getElementById(id).style.display=status;
}