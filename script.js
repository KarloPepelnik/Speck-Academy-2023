function createCustomButton() {
    let customButton = document.createElement("div");
    let inputValue = document.getElementById("inputField").value;
    if(inputValue !== ''){
        customButton.innerHTML = inputValue;
        customButton.className = 'custom-button';
        document.getElementById("resultContainer").appendChild(customButton);
        document.getElementById("inputField").value = '';
    }
}

function removeAll() {
    let customButtons = document.querySelectorAll('.custom-button');
    customButtons.forEach((element) => {
        element.remove();
    });
}

let input = document.getElementById("inputField");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        createCustomButton();
    }
});
