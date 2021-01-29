    function Calculator() {
        // Code we want to run each time a Calculator is set up
        this.operators()
    }

    Calculator.prototype.addToDisplay = function (e) {
        //When a user clicks on a number, the number appears in the h2
        let outcome = document.querySelector("#beep");
        let dot = document.querySelector("#dot").value;
        let itemClicked = e.path[0].innerHTML;
        if (itemClicked <= 9 || itemClicked === dot) {
            let itemNumber = Number(itemClicked);
            outcome.innerHTML += itemNumber;
        } else if (itemClicked === "/" || itemClicked === "*" || itemClicked === "-" || itemClicked === "+" || itemClicked ===".") {
            outcome.innerHTML += " " + itemClicked + " ";
        }
        let myParts = outcome.innerHTML.split(" ")
        return myParts;
    }

    Calculator.prototype.tally = function () {
        let outcome = document.querySelector("#beep");
        let myParts = outcome.innerHTML.split(" ")
        //erases uneeded empty strings
        myParts = myParts.filter(item => item !== " ")
        console.log(myParts);
        let result;
        if (myParts[1] === "+") {
            result = Number(myParts[0]) + Number(myParts[2])
        } else if (myParts[1] === "-") {
            result = Number(myParts[0]) - Number(myParts[2])
        } else if (myParts[1] === "*") {
            result = Number(myParts[0]) * Number(myParts[2])
        } else if (myParts[1] === "/") {
            result = Number(myParts[0]) / Number(myParts[2])
        } else {
            return false
        }
        outcome.innerHTML = result
    }

    Calculator.prototype.operators = function () {
        const opSign = document.querySelectorAll(".operator");
        Array.from(opSign).forEach(elements => elements.addEventListener("click", this.addToDisplay.bind(this)))

        const finalResult = document.querySelector(".equal-sign");
        finalResult.addEventListener("click", this.tally.bind(this));

        const numbers = document.querySelectorAll(".number"); // Previously .getElementsByClassName, but was being passed '.number'
        Array.from(numbers).forEach(elements => elements.addEventListener("click", this.addToDisplay.bind(this)))
    }

    const calc = new Calculator();

    // const numbers = document.getElementsByTagName("span");
    // Array.from(numbers).forEach(elements => elements.addEventListener("click", addToDisplay))

    //When user clicks an operator, the operator appears in the h2

    // const opSign = document.querySelectorAll(".operator");
    // Array.from(opSign).forEach(elements => elements.addEventListener("click", addToDisplay))

    // const finalResult = document.querySelector(".equal-sign");
    // finalResult.addEventListener("click", tallyResult)

    // function addToDisplay(e) {
    //     let outcome = document.querySelector("#beep");
    //     let itemClicked = e.path[0].innerHTML;
    //     if (itemClicked <= 9) {
    //         let itemNumber = Number(itemClicked);
    //         outcome.innerHTML += itemNumber;
    //     } else if (itemClicked === "/" || itemClicked === "*" || itemClicked === "-" || itemClicked === "+") {
    //         outcome.innerHTML += " " + itemClicked + " ";
    //     }
    //     let myParts = outcome.innerHTML.split(" ")
    //     return myParts;

    // }

    //When user clicks the "=", do math of what is in the h2, and then re assign the h2 to that new value.

    // function tallyResult() {
    //     let outcome = document.querySelector("#beep");
    //     let myParts = outcome.innerHTML.split(" ")
    //     let result;
    //     if (myParts[1] === "+") {
    //         result = Number(myParts[0]) + Number(myParts[2])
    //     } else if (myParts[1] === "-") {
    //         result = Number(myParts[0]) - Number(myParts[2])
    //     } else if (myParts[1] === "*") {
    //         result = Number(myParts[0]) * Number(myParts[2])
    //     } else if (myParts[1] === "/") {
    //         result = Number(myParts[0]) / Number(myParts[2])
    //     } else {
    //         return false
    //     }
    //     outcome.innerHTML = result
    // }

    //Clear button clears the display 

    // document.querySelector("#clear").addEventListener("click", clearDisplay)

    // function clearDisplay() {
    //     document.querySelector("#beep").innerHTML = ""
    // }