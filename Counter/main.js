const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");

let count = 0;

button.forEach(function(btn) {
    btn.addEventListener('click', function(s) {
        const styles = s.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }


        value.textContent = count;
    });

});