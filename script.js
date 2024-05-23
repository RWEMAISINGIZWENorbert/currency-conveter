
function convert(){
    const amount = parseFloat(document.getElementById("amount").value);
    const fromcurrency = document.getElementById("from").value;
    const tocurrency = document.getElementById("to").value;

    const exchangerates = {
                "USD": 1,
                "EUR": 0.930617,
                'GBP': 0.8,
                "RWF": 1299.071765, 
                "ZAR": 18.584106,
                "AFN": 72.144113,
    }

    if(isNaN(amount)){
        document.getElementById("result").innerHTML = "Please Enter a Valid Amount";
        return;
    }

    if (!(fromcurrency in exchangerates) || !(tocurrency in exchangerates)){
        document.getElementById('result').innerHTML = "Invalid currency selection.";
        return;
    }

    const convertedamount = amount * exchangerates[tocurrency] / exchangerates[fromcurrency];
    document.getElementById('result').innerHTML = convertedamount.toFixed(3) + tocurrency;

}

