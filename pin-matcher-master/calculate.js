console.log('added app.js file');
// To solve this porblem to used this mathoed......
function getPin(){

   const pin = generatPin();
   const pinString = pin +'';
   if(pinString.length==4){

      return pin;
}
else{
    return getPin();
}
}
// Randowm Number generate 3 digit of number .....
function generatPin(){


    const random= Math.round(Math.random()*10000);
    return random;

}


document.getElementById('genterateId').addEventListener('click',function(){


    console.log('Yeah! Button is clicked');

    const randomNumber=document.getElementById('ran');

    randomNumber.value= getPin();
})

// calculate for button.....
document.getElementById('calculator').addEventListener('click',function(event){

const number1=event.target.innerText;
const inputField=document.getElementById('formcontorl');
    
    if(isNaN(number1)){
       console.log(number1);
        if(number1 === 'C'){

            inputField.value = '';
        }
       
    }
    else{

        // const inputField=document.getElementById('formcontorl');
        const proviousTypeNumber=inputField.value;
// number pasapasi bosanor newom.....
        const newNumber=proviousTypeNumber+number1;
        inputField.value= newNumber;

    }


})

document.getElementById('submit1').addEventListener('click',function(){


    

    const displatInputField=document.getElementById('ran');
    const currentPin=displatInputField.value;

    const typeNumnerField=document.getElementById('formcontorl');
    const typeNumner=typeNumnerField.value;
// variable declaration...
const pin1=document.getElementById('pin_sucess');
const pin2=document.getElementById('pin_wrong');

    if(currentPin=== typeNumner){
        console.log('Yeah! You type a valid Number!');
        
        pin1.style.display='block';
        pin2.style.display='none';

       
    }

    else
    {
        
        
        pin2.style.display='block';
        pin1.style.display='none';
    }
})