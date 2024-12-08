


let p = document.querySelectorAll("h4"); // All h4 elements inside the container

window.addEventListener('load', () => {
    p.forEach(element => {
        let num = parseInt(element.textContent); // Parse the textContent as an integer
        let i = 0;

        // Check if num is a valid number
        if (!isNaN(num)) {
            let timer = setInterval(() => {
                if (i >= num) {
                    clearInterval(timer); // Stop the timer when we reach the target number
                } else {
                    element.textContent = i; // Update the text content
                    i++;
                }
            }, 10); // Update every 10ms
        }
    });
});
