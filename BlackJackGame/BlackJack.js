let total = 0 ;

let image ;

document.getElementById('total').innerHTML = "Current Total is : 0 " ;


function GenCard() {

    image = document.createElement('img') ;

    let min_val = 1 ;   // initialize a minimum value that user will get randomly
    let max_val = 13 ;  // initialize a maximum value that user will get randomly

    let number = Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
    console.log(number);

    total += number ; 


    if ( total <= 21) {

        document.getElementById('total').innerHTML = "Current Total is : " + total ;

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
        
        if(total == 21) {
            document.getElementById('message').innerHTML = " Congratulations ! You Won !!!!" ;
            document.getElementById('restart').style.visibility = "visible" ;
            document.getElementById('generate-btn').style.visibility = "hidden" ;
        }

    }


    else if( total > 21 ) {
        
        document.getElementById('message').innerHTML = "Game Over ! You Lost !!!!" ;
        document.getElementById('restart').style.visibility = "visible" ;
        document.getElementById('generate-btn').style.visibility = "hidden" ;


    }


}

// function to reload the game 

function ReGenCard() {

    location.reload() ;

}