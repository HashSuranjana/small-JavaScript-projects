function Calculate() {

    let weight = parseFloat(document.getElementById('weight-input').value) ; //get the weight from the user

    let height = parseFloat(document.getElementById('height-input').value) ; //get the height from the user

    let BMI = weight / ( height ** 2 ) ;

    if (weight == 0 || height == 0) {
        document.getElementById('message').innerHTML = "" ;
    }

    else if (weight < 0 || height < 0) {
        document.getElementById('message').innerHTML = "Please enter Correct weight and height" ;
    }

    else{
        
        if(BMI < 18) {
            document.getElementById('message').innerHTML = "You are UnderWeight !"
        }
    
        else if (BMI >=18 && BMI <=30){
            document.getElementById('message').innerHTML = "You are Normal !"
        }
    
        else if (BMI >30 ){
            document.getElementById('message').innerHTML = "You are OverWeight !"
        }
    }

}