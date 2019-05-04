function doMagic ()
{
    var number = Number(document.getElementById("num1").value);
    var str = document.getElementById("num2").value.toUpperCase();

    countingValleys(number, str);
}

function countingValleys(n, s) {
    var valleys = 0;   
    var level = 0;
    s = s.toUpperCase();

    if(n >= 2 && n < Math.pow(10, 6)) {
        if(n === s.length) {
            for(var i = 0; i < s.length; i++){
                if(s[i] == 'U') ++level;
                if(s[i] == 'D') --level;
                if(level == 0 && s[i] == 'U')
                    ++valleys;
            }
            if(level != 0) alert('Gary didn\'t return to sea level.');
            else alert('Number of valleys: ' + valleys);
        }
        else alert('Gary is lost :( Check inputs');
    }
    else alert('Wrong number of steps');
}