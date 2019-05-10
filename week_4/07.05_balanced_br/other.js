function isBalanced(s) {
    var l = s.length;
    s = s.split("");

    var stack = [];
    stack.push(s.shift());

    for(var i = 1; i < l; ++i) {
        console.log(i + "  " + stack + "---" + s);

        if(isPair(stack[stack.length - 1], s[0])) {
            stack.pop();
            s.shift();
        } else {
            stack.push(s.shift());
        }
    }

    if(stack.length === 0) {
        return 'YES';
    } 
    else {
        return 'NO';
    }
}

function isPair(c1, c2) {
    if (c1 === '{' && c2 === '}') return true;
    else if (c1 === '[' && c2 === ']') return true;
    else if (c1 === '(' && c2 === ')') return true;
    else return false;
}

console.log(isBalanced('{(([])[])[]}'));


    //      {(([])[])[]}
    //      {(([])[])[]]}
    //      {(([])[])[]}[]

    //      YES
    //      NO
    //      YES