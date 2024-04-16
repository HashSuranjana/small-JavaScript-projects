
//trigger when button is clicked
document.getElementById('btn-submit-text').addEventListener('click',function(){

    let message = document.getElementById('txt-input').value ; // getting the value of input box's value and save it into a variable

    //calling the function JsBarcode

    JsBarcode("#barcode" , message, {

        displayValue : false  // setting the value not printing in the Barcode 
    });

})