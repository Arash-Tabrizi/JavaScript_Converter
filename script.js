// Arash Tabrizi
// Converter tool written in javascript & jquery , proof of concept can be used to automate manual calculations
// https://github.com/Arash-Tabrizi/JavaScript_Converter  

function toBinary(decimal) {
    let result = "";

    if (decimal == 0) {
        return 0;
    }

    else if (decimal < 0){
        window.alert("Negative numbers not defined in unsigned binary!");
    }

    else if (decimal == Math.floor(decimal)) {

        while (decimal > 0) {

            result = decimal % 2 + result + "";
            decimal = Math.floor(decimal / 2);
        }

        return result;

    } else {
        window.alert("Invalid input , only integers are supported!");
    }
}

function isPrime(num){
    let Prime=true;
        for(let divisor=2;divisor<num;divisor++){
            if(num%divisor == 0){
                Prime=false;
            }
        }
        console.log(Prime == true && num!==1)
        if(Prime == true && num!=1){
            return 'yes, Its a prime'
        } else {
            return 'no , not a prime'
        }

    }
    

$(document).ready(function(){



    $('#button1').on('click', function(){

        for(let number=1;number<=$('#number').val();number++){
            let Prime=true;
            for(let divisor=2;divisor<number;divisor++){
                if(number%divisor == 0){
                    Prime=false;
                }
            }
            if(Prime == true && number!==1){
                $('#text').append(`${number} <br>`)
            }
        }
        
    })
    $('#button2').on('click', function(){

        $('#text').text(`${toBinary($('#number').val())}`);

    })
    $('#button3').on('click', function(){

        $('#text').text(`${isPrime($('#number').val())}`);

    })
})