//some styling tryouts using java script

document.getElementById('num-input').style.border = "2px solid ";
document.getElementById('num-input').style.borderRadius = "5px";
document.getElementById('num-input').style.width = "200px";


function ValidateNum() {
    
    let number = document.getElementById('num-input').value ; //getting number from input box and declare it to number variable

    if (number.length == 0){

        document.getElementById('message').innerHTML = "Please enter a number !" ;

    }else {

        if (number.length == 9 && number[0] == 7) {
        
            document.getElementById('message').innerHTML = "+ 94" + number ;
        }
    
        else if (number.length == 10 && number[0]== 0) {
            
            let newNumber = number.slice(1,-1) ;
            document.getElementById('message').innerHTML = "+ 94" + newNumber ;
        }
    
        else if (number.length == 11 && (number[0]==9 && number[1]==4) ){
    
            document.getElementById('message').innerHTML = "+ " + number ;
        }
    
        else{
    
            document.getElementById('message').innerHTML = "Invalid Number !" ;
        }
    }

}
