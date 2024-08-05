const backbtn = document.getElementById('backbtn');
backbtn.addEventListener('click',()=>{
    // alert("clickedme")
    window.history.back();
});
// Select the div element by its id
// const backbtn = document.getElementById('backbtn');

// Function to add text on hover
function addTextOnHover() {
    backbtn.textContent = '<';
}

// Function to remove text when not hovered
function removeTextOnHover() {
    backbtn.textContent = '';
}

// Function to add text on click
function addTextOnClick() {
    backbtn.textContent = backbtn.textContent === '<' ? '' : '<';
}

// Add event listeners for hover and click events
backbtn.addEventListener('mouseover', addTextOnHover);
backbtn.addEventListener('mouseout', removeTextOnHover);
backbtn.addEventListener('click', addTextOnClick);

document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector(".typed");

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typewriter.classList.add("typing");
                observer.unobserve(entry.target); // Stop observing after the animation is triggered
            }
        });
    }, observerOptions);

    observer.observe(typewriter);
});

