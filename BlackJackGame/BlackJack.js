let total = 0 ; // initialized the total

let image ; // initialize the image

document.getElementById('total').innerHTML = "Current Total is : 0 " ; // total preview

// function of the game 
function GenCard() {

    image = document.createElement('img') ;

    let min_val = 1 ;   // initialize a minimum value that user will get randomly
    let max_val = 13 ;  // initialize a maximum value that user will get randomly

    let number = Math.floor(Math.random() * (max_val - min_val + 1)) + min_val; //generating a random number

    console.log(number)

    total += number ;  // update the total

    //check totals value

    if ( total <= 21) {

        document.getElementById('total').innerHTML = "Current Total is : " + total ;

        //generating cards according to the generated number value
        switch(number) {
    
            case 1 :
    
                image.src = "Images/AH.svg";
                document.body.appendChild(image);
                break ;
    
            case 2 :
    
                image.src = "Images/2H.svg";
                document.body.appendChild(image);
                break ;
    
            case 3 :
    
                image.src = "Images/3H.svg";
                document.body.appendChild(image);
                break ;
    
            case 4 :
    
                image.src = "Images/4H.svg";
                document.body.appendChild(image);
                break ;
    
            case 5 :
    
                image.src = "Images/5H.svg";
                document.body.appendChild(image);
                break ;
    
            case 6 :
    
                image.src = "Images/6H.svg";
                document.body.appendChild(image);
                break ;
    
            case 7 :
    
                image.src = "Images/7H.svg";
                document.body.appendChild(image);
                break ;
    
            case 8 :
    
                image.src = "Images/8H.svg";
                document.body.appendChild(image);
                break ;
    
            case 9 :
    
                image.src = "Images/9H.svg";
                document.body.appendChild(image);
                break ;
    
            case 10 :
    
                image.src = "Images/TH.svg";
                document.body.appendChild(image);
                break ;
    
            case 11 :
        
                image.src = "Images/JH.svg";
                document.body.appendChild(image);
                break ;
    
            case 12 :
    
                image.src = "Images/QH.svg";
                document.body.appendChild(image);
                break ;
    
            case 13 :
    
                image.src = "Images/KH.svg";
                document.body.appendChild(image);
                break ;
    
        }
         
        if(total == 21) { // if total is equals to 21 

            document.getElementById('message').innerHTML = " Congratulations ! You Won !!!!" ; //displaying the message 
            document.getElementById('restart').style.visibility = "visible" ; // set restart button visible
            document.getElementById('generate-btn').style.visibility = "hidden" ; // set generate button hide
        }

    }


    else if( total > 21 ) { // if total is grater than 21 

        let finalNumber = number ; // get the finally generated number 

        //display a message that user finally got number

        if (finalNumber == 11 ) {
            alert( "Your Last Generate number is Jack !") ;
        }
        else if (finalNumber == 12 ) {
            alert( "Your Last Generate number is Queen !") ;
        }
        else if (finalNumber == 13 ) {
            alert( "Your Last Generate number is King ! ") ;
        }
        else {
            alert ("Your Last Generate number is : " + finalNumber ) ;
        }

        // display finally got card 
        
        switch(finalNumber) {
    
            case 1 :
    
                image.src = "Images/AH.svg";
                document.body.appendChild(image);
                break ;
    
            case 2 :
    
                image.src = "Images/2H.svg";
                document.body.appendChild(image);
                break ;
    
            case 3 :
    
                image.src = "Images/3H.svg";
                document.body.appendChild(image);
                break ;
    
            case 4 :
    
                image.src = "Images/4H.svg";
                document.body.appendChild(image);
                break ;
    
            case 5 :
    
                image.src = "Images/5H.svg";
                document.body.appendChild(image);
                break ;
    
            case 6 :
    
                image.src = "Images/6H.svg";
                document.body.appendChild(image);
                break ;
    
            case 7 :
    
                image.src = "Images/7H.svg";
                document.body.appendChild(image);
                break ;
    
            case 8 :
    
                image.src = "Images/8H.svg";
                document.body.appendChild(image);
                break ;
    
            case 9 :
    
                image.src = "Images/9H.svg";
                document.body.appendChild(image);
                break ;
    
            case 10 :
    
                image.src = "Images/TH.svg";
                document.body.appendChild(image);
                break ;
    
            case 11 :
        
                image.src = "Images/JH.svg";
                document.body.appendChild(image);
                break ;
    
            case 12 :
    
                image.src = "Images/QH.svg";
                document.body.appendChild(image);
                break ;
    
            case 13 :
    
                image.src = "Images/KH.svg";
                document.body.appendChild(image);
                break ;
    
        }
        
        document.getElementById('message').innerHTML = "Game Over ! You Lost !!!!" ; //displaying the message
        document.getElementById('restart').style.visibility = "visible" ; // set restart button visible
        document.getElementById('generate-btn').style.visibility = "hidden" ; // set generate button hide


    }


}

// function to reload the game 

function ReGenCard() {

    location.reload() ;

}

