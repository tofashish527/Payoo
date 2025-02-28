document.getElementById('login-btn').addEventListener("click", function (event) {
    // console.log("HELLO");//btn press korle shob reload diye haray jay
    //console.log(event);//pointerevent naamer object return kore but reload hoye jay
    event.preventDefault();//default behaviour prevent kore + reload hoye jay na
    const accountNumber = document.getElementById('Account-num').value;
    const pinNumber = document.getElementById('PIN-num').value;
    if (accountNumber.length === 11) {
        if (parseInt(pinNumber) === 1234) //parseint na dile no hobe karon pinNumber er type edike string or amra "1234" rakhte hobe
            window.location.href="main.html";//jokhon kono folder e thakbe na// r kono subfolder e thaakle ../filename 
        else {
            alert("pin not matched");
        }
    }
    else {
        alert("Need Valid Account  Number");
    }


})