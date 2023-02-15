function getPin(){
    const random =Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-btn-pin').addEventListener('click',function(){
    const pin =getPin();
    const input_Field =document.getElementById('inputField');
    input_Field.value=pin;
   
})

document.getElementById('calculator').addEventListener('click', function(event){
    const target =event.target.innerText;

    const inputValue =document.getElementById('inputType');
    const inputNumber=inputValue.value;

    if(isNaN(target)){
        if(target === 'c'){
            inputValue = "";
        }
        else if(target === '<'){
            const digits= inputNumber.split('');
            digits.pop();
            const remainingDigits =digits.join('');
            inputValue.value =remainingDigits;
        }
    }
    else{
        
        
        const inputValueNumber = inputNumber + target;
        inputValue.value=inputValueNumber;
    }

    })



    document.getElementById('pin-match-btn').addEventListener('click', function(){
        const pinGenarate= document.getElementById('inputField');
        const input_Field =pinGenarate.value;

        const pinType= document.getElementById('inputType');
        const input_Type =pinType.value;

        const pinSuccess= document.getElementById('Pin-Matched');
        const pinWrong= document.getElementById('DiDont_Match');
        if(input_Type === input_Field){
            pinSuccess.style.display='block';
            pinWrong.style.display='none';
        }
        else{
            pinWrong.style.display='block';
            pinSuccess.style.display='none';
        }

    });