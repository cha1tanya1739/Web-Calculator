const equation = document.getElementById("display");

function append_to_equation(input) {
    if (equation.innerText === "0") {
        equation.innerText = input;
    } else {
        equation.innerText += input;
    }
}

function clearDisplay() {
    equation.innerText = "0";
}

function calculate() {
    try {
        let result = eval(equation.innerText);
        equation.innerText = result;
    } catch (error) {
        equation.innerText = "Error";
    }
}

function backspace() {
    if (equation.innerText.length > 1) {
        equation.innerText = equation.innerText.slice(0, -1);
    } else {
        equation.innerText = "0";
    }
}

function custom_cursor(){
    const cursor = document.getElementById("cursor");

    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        cursor.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 50, fill: "forwards"})
    })
}

custom_cursor();