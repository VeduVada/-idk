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
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // Example using JavaScript to remove an element on resize
  function handleResize() {
    const element = document.querySelector('span');
    const elementId = 'my-element'; // Use a unique ID for the element
    if (window.innerWidth <= 600) {
        if (element) element.remove();
    } else {
        // Re-add the element if it was removed and doesn't exist
        if (!document.querySelector(`#${elementId}`)) {
            const newElement = document.createElement('span');
            newElement.id = elementId;
            newElement.textContent = '';
            document.body.appendChild(newElement); // Append to the body or appropriate container
        }
    }
}
// Attach the resize handler
window.addEventListener('resize', handleResize);

// Initial check
handleResize();

function handleResize() {
    const element = document.querySelector(".sidebar");
    const elementId = 'my-Sidenav'; // Use a unique ID for the element

    if (window.innerWidth <= 600) {
        if (element) element.remove();
    } else {
        // Re-add the element if it was removed and doesn't exist
        if (!document.querySelector(`#${elementId}`)) {
            const newElement = document.createElement('span');
            newElement.id = elementId;
            newElement.textContent = '';
            
            // Insert as the first child of the body
            const body = document.body;
            if (body.firstChild) {
                body.insertBefore(newElement, body.firstChild);
            } else {
                body.appendChild(newElement);
            }
        }
    }
}

// Call the function initially and also on window resize
window.addEventListener('resize', handleResize);
handleResize();


// Attach the resize handler
window.addEventListener('resize', handleResize);

// Initial check
handleResize();


function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const span = document.querySelector('span');
    
    logo.addEventListener('click', function(e) {
        if (window.innerWidth <= 523) {
            e.preventDefault(); // Prevent default action on small screens
            openNav(); // Open the side navigation instead
        }
    });
    
    span.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action
        openNav();
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// device-detection.js
function getDeviceInfo() {
const userAgent = navigator.userAgent;

if (/iPhone|iPad|iPod/i.test(userAgent)) {
return 'iOS device';
} else if (/Android/i.test(userAgent)) {
return 'Android device';
} else if (/Windows/i.test(userAgent)) {
return 'Windows device';
} else {
return 'Other device';
}
}

// Update the webpage with device information
document.addEventListener('DOMContentLoaded', () => {
const deviceInfo = getDeviceInfo();
document.getElementById('device-info').textContent = deviceInfo;
});
// global.js

document.addEventListener('DOMContentLoaded', () => {
    if (isIOS()) {
        removeSpecificCSSRules();
    }
});

function isIOS() {
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        alert("ios he bhai")
    return true;
    
    // return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}}

function removeSpecificCSSRules() {
    const styleSheets = document.styleSheets;

    // Iterate through all stylesheets
    for (let sheet of styleSheets) {
        try {
            // Iterate through all rules in the stylesheet
            for (let i = sheet.cssRules.length - 1; i >= 0; i--) {
                const rule = sheet.cssRules[i];
                
                // Check if the rule is a media query and matches the criteria
                if (rule.media) {
                    for (let j = 0; j < rule.media.length; j++) {
                        const mediaQuery = rule.media[j];
                        if (mediaQuery === '(max-width: 386px)' ||
                            mediaQuery === '(max-width: 344px)' ||
                            mediaQuery === '(max-width: 620px)') {
                            sheet.deleteRule(i); // Remove the rule
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Error accessing stylesheet:', e);
        }
    }
}
// global.js




// Navbar behaviour--
// let lastScrollTop = 0;
// const navbar = document.getElementById('navbar');
// window.addEventListener('scroll', () => {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         navbar.classList.add('hidden');
//     } else {
//         navbar.classList.remove('hidden');
//     }
//     lastScrollTop = scrollTop;
