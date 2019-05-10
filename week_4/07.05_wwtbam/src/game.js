var questions = [
    {'question': '1+1=?', 'answer1': '1', 'right_answer': '4'},
    {'question': '10/5=?', 'answer1': '5', 'right_answer': '2'},
    {'question': '2+2=?', 'answer1': '1', 'right_answer': '4'},
    {'question': '40/5=?', 'answer1': '5', 'right_answer': '2'},
    {'question': '3+3?', 'answer1': '1', 'right_answer': '4'},
    {'question': '20/5=?', 'answer1': '5', 'right_answer': '2'},
    {'question': '3+3=?', 'answer1': '1', 'right_answer': '4'},
    {'question': '30/5=?', 'answer1': '5', 'right_answer': '2'},
]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var check_index = [];
var set_question = function(){
    var question = document.createElement('div');
    var main = document.getElementById('main');
    var index = 0
    while (true) {
        index = getRandomInt(0,7);
        if (check_index.includes(index)){
    
        } else {
            check_index.push(index);
            break;
        }
    }
    question.textContent = questions[index].question;
    var ans1 = document.createElement('button');
    ans1.textContent = questions[index].answer1;
    var ans2 = document.createElement('button');
    ans2.textContent = questions[index].right_answer;
    question.style.fontSize = '40px';
    ans1.style.fontSize = '20px';
    ans1.style.margin = '10px';
    ans2.style.margin = '10px';
    ans2.style.fontSize = '20px';
    ans1.addEventListener('click', incorrect);
    ans2.addEventListener('click', correct);
    main.appendChild(question)
    main.appendChild(ans1)
    main.appendChild(ans2)
}
var incorrect = function() {
    alert('Ответ не правильный')
    var main = document.getElementById('main');
    while(main.children.length>0){
        child = main.lastChild;
        main.removeChild(child);
    }
    main.textContent = 'Вы проиграли!';    
}
var correct = function() {
    alert('Ответ верный')
    var main = document.getElementById('main');
    while(main.children.length>0){
        child = main.lastChild;
        main.removeChild(child);
    }
    set_question();    
}

var question = document.createElement('div');
var main = document.getElementById('main');
var index = 0
while (true) {
    var index = getRandomInt(0,7);
    if (check_index.includes(index)){

    } else {
        check_index.push(index);
        break;
    }
}
question.textContent = questions[index].question;
var ans1 = document.createElement('button');
ans1.textContent = questions[index].answer1;
var ans2 = document.createElement('button');
ans2.textContent = questions[index].right_answer;
question.style.fontSize = '40px';
ans1.style.fontSize = '20px';
ans1.style.margin = '10px';
ans2.style.margin = '10px';
ans2.style.fontSize = '20px';
ans1.addEventListener('click', incorrect);
ans2.addEventListener('click', correct);
main.appendChild(question)
main.appendChild(ans1)
main.appendChild(ans2)