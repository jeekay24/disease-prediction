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