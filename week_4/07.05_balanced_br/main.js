function isBalanced(s) {
var l = s.length;
//     {[(
//     }])
if(l % 2 === 0) {
    var head = s.slice(0, l/2);
    var tail = s.slice(l/2, l);
    tail = tail.split("").reverse().join("");

    console.log(head);
    console.log(tail);

    for(var i = 0; i < l/2; i++) {
        if(!isPair(head[i], tail[i])) return 'NO';
    }
    return 'YES';
}
else return 'NO';
}

function isPair(c1, c2) {
    if      (c1 === '{' && c2 === '}') return true;
    else if (c1 === '[' && c2 === ']') return true;
    else if (c1 === '(' && c2 === ')') return true;
    else return false;
}

console.log(isBalanced('{{[[(())]]}}'));


//      {(([])[])[]}
//      {(([])[])[]]}
//      {(([])[])[]}[]
        
//      YES
//      NO
//      YES