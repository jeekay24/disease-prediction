function printContent() {
    const printButton = document.querySelector(".print:last-child button");
    if (printButton) {
        printButton.style.display = "none";
    }

    window.print();

    if (printButton) {
        printButton.style.display = "block";
    }
}
function test_result(){
    const result = document.querySelector(".print:result");
    if(result=="Non-Diabetic"){
        console.log("Hello");
    }
}

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the gender and pregnancies inputs
    var genderInput = document.getElementsByName('gender');
    var pregnanciesInput = document.getElementById('pregnanciesInput');

    // Add an event listener to the gender inputs
    for (var i = 0; i < genderInput.length; i++) {
        genderInput[i].addEventListener('change', function () {
            if (genderInput[0].checked) {
                // Male is selected
                pregnanciesInput.value = '0';
                pregnanciesInput.readOnly='True';
            } else {
                // Female or Others is selected
                pregnanciesInput.value = ''; // Clear the value
                pregnanciesInput.readOnly=false;
            }
        });
    }
});
