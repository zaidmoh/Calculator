var inputField=document.getElementById('read_input');
function submit(){
    var text=inputField.value;
    if(checkString(text))
    {
        var temp=text[text.length-1];
        text=text.substring(0,text.length-1);
        text=text+temp+text;
        inputField.value=eval(text);
    }
    else 
        inputField.value=eval(text);
    // console.log(text);
}

function keyEventHandler(event){
    if(event.keyCode==13){  //Enter
        var text=inputField.value;
        if(checkString(text))
        {
            var temp=text[text.length-1];
            text=text.substring(0,text.length-1);
            text=text+temp+text;
            inputField.value=eval(text);
        }
        else 
            inputField.value=eval(text);
    }
    else if(event.keyCode==107||event.keyCode==187){        //Addition
        var text=inputField.value;
        if(text.length!=0)
        {
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            inputField.value=eval(text);
        } 
    }
    else if(event.keyCode==109||event.keyCode==189){    //Subtraction
        var text=inputField.value;
        if(text.length!=0)
        {
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            inputField.value=eval(text);
        }
    }
    else if(event.keyCode==106||event.keyCode==56){     //Multiplication
        var text=inputField.value;
        if(text.length!=0)
        {
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            inputField.value=eval(text);
        }
    }  
    else if(event.keyCode==111||event.keyCode==191){    //Division
        var text=inputField.value;
        if(text.length!=0)
        {
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            inputField.value=eval(text);
        }
    }
    else{

    }
    //console.log(String.fromCharCode(event.keyCode));
}

function inputData(val){

    switch(val){
        case "C":
            inputField.value="";
            break;
        case "plus-minus":
            var text=inputField.value;
            inputField.value=eval(text*-1); 
            break;
        case 'backspace':
            var text=inputField.value;
            inputField.value=text.substring(0,text.length-1);
            break;
        case 'square':
            var text=inputField.value;
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            inputField.value=eval(text*text);
            break;
        case 'ByX':
            var text=inputField.value;
            if(text.length==0){
                inputField.value="Cann't Divide By 0";
            }
            else if(checkString(text)){
                var temp=text[text.length-1];
                var a=text.substring(0,text.length-1);
                var temp_result=1/a;
                text=a+temp+temp_result;
                inputField.value=eval(text);
            }
            else
                inputField.value=eval(1/text);
            break;
        case 'root':
            var text=inputField.value;
            inputField.value=eval(Math.sqrt(text));
            break;
        case '%':
            var text=inputField.value;
            if(text.length==0)
                break;
            inputField.value=eval(text)+val;
            break;
        case '+':
            var text=inputField.value;
            if(text.length==0)
                break;
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            var temp=eval(text);
            inputField.value= temp+val;
            break;
        case '-':
            var text=inputField.value;
            if(text.length==0)
                break;
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            var temp=eval(text);
            inputField.value= temp+val;
            break;
        case '/':
            var text=inputField.value;
            if(text.length==0)
                break;
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            var temp=eval(text);
            inputField.value= temp+val;
            break;
        case '*':
            var text=inputField.value;
            if(text.length==0)
                break;
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            var temp=eval(text);
            inputField.value= temp+val;
            break;
        case '.':
            var text=inputField.value;
            if(text.includes('.')){
                inputField.value=text;
            }
            else
                inputField.value=text+val;
            break;
        case 'xfact':
            var text=inputField.value;
            if(checkString(text)){
                text=text.substring(0,text.length-1);
            }
            var f=1,i;
            for(i = 1; i <= text; i++)    
            {  
                f = f * i;  
            }  
            inputField.value= f;
            break;
        default:
            var text=inputField.value;
            if(text=='0')
                inputField.value=val;
            else
                inputField.value=text+val;
    }
}

function checkString(text){
    let temp=text[text.length-1];
    if(temp=='+'||temp=='-'||temp=='/'||temp=='*'||temp=='%'){
        return true;
    }
    return false;
}