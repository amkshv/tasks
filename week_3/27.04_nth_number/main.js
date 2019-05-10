

function findDigit () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if(num2[0] === '-') {
        return alert("-1");
    }
    if(num1[0] === '-') {
        num1 = num1.slice(1);
    }
    var integer = parseInt(num2, 10);
    if(integer > num1.length) {
        return alert("0");
    }
    else return alert(num1.charAt(num1.length - num2));
}