window.addEventListener("load", function(){


    var a = 7;
    var b = 4;
    var answer = a + b;
    var rangeA = [6, 7, 8, 9];
    var resultArr = [11, 12, 13, 14];
    var arrowCoordinates  = json;
    var expres = document.getElementById('expression__content');
    var spanA = document.getElementById('A');
    var spanB = document.getElementById('B');
    var inputA = document.getElementById('input__a');
    var question = document.getElementById('question');
    var ruler = document.getElementsByClassName('ruler__inputs')[0];


    if( !rangeA.includes(a) ){
        alert('Число А не входит в диапозон условия задачи.');
    } else if( !resultArr.includes(answer) ){
        alert('Число B не входит в диапозон условия задачи.');        
    }

    spanA.innerHTML = a;
    spanB.innerHTML = b;


    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle="#FF0000";

    function drawArrow(from, to){
        var coordinates = arrowCoordinates[from + '-' + to];

        var startPointX = coordinates.startPointX;
        var startPointY = coordinates.startPointY;
        var endPointX = coordinates.endPointX;
        var endPointY = coordinates.endPointY;
        var ControlStartPointX = coordinates.ControlStartPointX;
        var ControlStartPointY = coordinates.ControlStartPointY;
        var ControlEndPointX = coordinates.ControlEndPointX;
        var ControlEndPointY = coordinates.ControlEndPointY;


        ctx.beginPath();
        ctx.lineWidth=1;
        ctx.moveTo(startPointX, startPointY);
        ctx.bezierCurveTo(ControlStartPointX, ControlStartPointY, ControlEndPointX, ControlEndPointY, endPointX, endPointY);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth=2 ;
        ctx.moveTo(endPointX, endPointY);
        ctx.lineTo(endPointX-10, endPointY-10);
        ctx.moveTo(endPointX, endPointY);
        ctx.lineTo(endPointX+10, endPointY-10);
        ctx.stroke();
    }

    drawArrow(0, a);


    inputA.addEventListener('input', function(e) {

        var value = parseInt(e.target.value);
        if( !value ){
            e.target.value = '';
        } else if(value === a){
            e.target.parentNode.removeChild(e.target);
            

            spanA.style.background = '';
            var span = document.createElement('span');
            span.classList += ' number__a';
            span.innerHTML = a;
            ruler.appendChild(span);

            drawArrow(a, a+b);
            inputB = document.createElement('input');
            inputB.id = 'input__b';
            ruler.appendChild(inputB);
            inputB.addEventListener('input', handlerInputB);
        } else {
            spanA.style.background = '#ff930f';
            e.target.style.color = 'red';
        }
    });

    var inputB = document.getElementById('input__b');

    function handlerInputB(e) {

        var value = parseInt(e.target.value);
        if( !value ){
            e.target.value = '';
        } else if(value === b){
            e.target.parentNode.removeChild(e.target);

            spanB.style.background = '';
            var span = document.createElement('span');
            span.classList += ' number__b';
            span.innerHTML = b;
            var ruler = document.getElementsByClassName('ruler__inputs')[0];
            ruler.appendChild(span);


            question.parentNode.removeChild(question);       
            var input = document.createElement('input'); 
            input.classList += ' result__input'
            expres.appendChild(input);

            input.addEventListener('input', handlerResultInput);
        } else {
            spanB.style.background = '#ff930f';
            e.target.style.color = 'red';
        }
    }


    function handlerResultInput(e) {
        var value = parseInt(e.target.value);
        if( !value ){
            e.target.value = '';
        } else if(value === a+b){
            e.target.parentNode.removeChild(e.target);

            var span = document.createElement('span');
            span.innerHTML = a+b;
            expres.appendChild(span);
        } else {
            e.target.style.color = 'red';
        }
    }


});