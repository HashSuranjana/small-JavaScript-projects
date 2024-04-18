let total = 0 ;

document.getElementById('total').innerHTML = "Current Total is : 0 " ;


function GenCard() {

    document.getElementById('card-preview').style.visibility = "visible" ;

    let min_val = 1 ;   // initialize a minimum value that user will get randomly
    let max_val = 13 ;  // initialize a maximum value that user will get randomly

    let number = Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
    console.log(number);

    
    if ( total > 21 ) {
        
        document.getElementById('message').innerHTML = "Game Over ! You Lost !!!!" ;

    }

    else if ( total == 21) {
        
        document.getElementById('message').innerHTML = " Congratulations ! You Won !!!!" ;

    }

    else {

        switch(number) {
        
            case 1 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/AH.svg";
                break ;
    
            case 2 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/2H.svg";
                break ;
    
            case 3 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/3H.svg";
                break ;
    
            case 4 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/4H.svg";
                break ;
    
            case 5 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/5H.svg";
                break ;
    
            case 6 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/6H.svg";
                break ;
    
            case 7 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/7H.svg";
                break ;
    
            case 8 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/8H.svg";
                break ;
    
            case 9 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/9H.svg";
                break ;
    
            case 10 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/TH.svg";
                break ;
    
            case 11 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/JH.svg";
                break ;
    
            case 12 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/QH.svg";
                break ;
    
            case 13 :
    
                total += number ;
                document.getElementById('total').innerHTML = "Current Total is : " + total ;
                document.getElementById('card-preview').src = "Images/KH.svg";
                break ;
    
        }
    }

}

function ReGenCard() {

}