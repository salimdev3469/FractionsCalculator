const firstinput = document.querySelector(".input1");
const secinput = document.querySelector(".input2");
const thirdinput = document.querySelector(".input3");
const fourthinput = document.querySelector(".input4");

const frame = document.querySelector(".container");

const error = document.querySelector(".errormessage");

const resultElement = document.querySelector(".result");

const calc = document.querySelector(".btn");

const operand = document.querySelector(".selection");

calc.addEventListener("click", (e) => {
    const inp1 = parseFloat(firstinput.value) / parseFloat(secinput.value); //parseFloat converts value to the float type
    const inp2 = parseFloat(thirdinput.value) / parseFloat(fourthinput.value);

    const var1 = parseFloat(firstinput.value);
    const var2 = parseFloat(secinput.value);
    const var3 = parseFloat(thirdinput.value);
    const var4 = parseFloat(fourthinput.value);

    // we re using isNaN to controle
    if (isNaN(var1) || isNaN(var2) || isNaN(var3) || isNaN(var4)) {
        frame.classList.add("shake");
        frame.addEventListener("animationend", () => {
            error.style.visibility = "visible";
            frame.classList.remove("shake");
            resultElement.textContent = ""; //if any time, user inputs a value which is not a number, this code clears the result representation and shows the error message
            resultElement.classList.remove("display", "scale");
        });
        e.preventDefault();
        return;
    }

    switch (operand.value) {
        case '+':
            resultElement.textContent = `Result: ${inp1 + inp2}`;//updates the inner value of the label tag which have result class, doesnt look inside value inside of the html
            resultElement.classList.add("display");
            resultElement.classList.add("scale");
            
            error.style.visibility = "hidden";
            break;
        case '/':
            resultElement.classList.add("display"); //doesnt matter the orders of commands, it works
            resultElement.textContent = `Result: ${inp1 / inp2}`;
            resultElement.classList.add("scale");
            error.style.visibility = "hidden";
            break;
        case '-':
            resultElement.textContent = `Result: ${inp1 - inp2}`;
            resultElement.classList.add("display");
            resultElement.classList.add("scale");
            error.style.visibility = "hidden";
            break;
        case '*':
            resultElement.textContent = `Result: ${inp1 * inp2}`;
            resultElement.classList.add("display");
            resultElement.classList.add("scale");
            error.style.visibility = "hidden";
            break;
        default:
            resultElement.textContent = "Invalid Operand";
            resultElement.classList.add("display");
            resultElement.classList.add("scale");
            error.style.visibility = "hidden";
            break;
    }
});


