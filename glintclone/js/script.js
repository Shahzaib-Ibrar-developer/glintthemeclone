
// Select all counter elements
let counterEl = document.querySelectorAll('.counter-box h2');

// Function to start the counting animation
function startCounting(el) {
    el.innerHTML = '0';

    function innerFunction() {
        let currentValue = Number(el.innerHTML);
        let finalValue = el.getAttribute('data-final');
        let addNewValue = finalValue / 30;
        let replaceValue = Math.floor(addNewValue) + currentValue;

        if (currentValue < finalValue) {
            el.innerHTML = replaceValue;
            setTimeout(innerFunction, 50);
        }
    }

    innerFunction();
}

// Set up the IntersectionObserver
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the element is in the viewport
        if (entry.isIntersecting) {
            startCounting(entry.target);  // Start counting when the element is in view
            observer.unobserve(entry.target);  // Stop observing after counting starts
        }
    });
}, { threshold: 0.5 });  // Adjust the threshold as needed (0.5 means the element is 50% visible)

// Observe each counter element
counterEl.forEach((el) => {
    observer.observe(el);
});






















document.addEventListener('DOMContentLoaded', function () {
    const targetElements = document.querySelectorAll('.target-element');

    function checkVisibility() {

        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        targetElements.forEach((targetElement) => {

            const rect = targetElement.getBoundingClientRect();

            // Check if the element is in the middle of the screen (approximately)

            // did some changes in the original code

            if (rect.top <= windowHeight / 1.5 && rect.bottom >= windowHeight / 1.5) {

                targetElement.classList.add('visible');
            }
        })

    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the element is already in view
});









// let menuButton = document.getElementById('toggle-menu-button');
// let menuSidebar = document.getElementById('menu-sidebar');

// let sidebarHeader = document.getElementById('sidebar-head');

// let sidebarItems = document.getElementById('sidebar-items');

// let sidebarMediaIcons = document.getElementById('sidebar-media-icons')


// menuButton.addEventListener('click',()=>{
//     menuSidebar.style.translate = '0';
// })

// document.addEventListener('click',(event)=>{

//     let notToHide = menuSidebar.contains(event.target) || menuButton.contains(event.target);


//     let hideOnIT = sidebarHeader.contains(event.target) || sidebarItems.contains(event.target) || sidebarMediaIcons.contains(event.target);


//     if(notToHide){
//         menuSidebar.style.translate = '0%';
//     }
//     if(hideOnIT){
//         menuSidebar.style.translate = '100%'
//     }
// })






// copied from chatGPT , its cleaner than my code
const menuButton = document.getElementById('toggle-menu-button');
const menuSidebar = document.getElementById('menu-sidebar');

const sidebarHeader = document.getElementById('sidebar-head');
const sidebarItems = document.getElementById('sidebar-items');
const sidebarMediaIcons = document.getElementById('sidebar-media-icons');
const sidebarFooter = document.getElementById('sidebar-footer');
document.addEventListener('DOMContentLoaded', function () {

    // Function to show sidebar
    function showSidebar() {
        menuSidebar.style.translate = '0%';
        setTimeout(showItems, 300)
    }

    // Function to hide sidebar
    function hideSidebar() {
        menuSidebar.style.translate = '100%';
        setTimeout(hideItems, 0)

    }

    // Toggle sidebar when the menu button is clicked
    // dont know tf this function is doing
    menuButton.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevent click from bubbling up to document
        showSidebar();
    });

    // Handle click outside the sidebar or on specific elements to hide sidebar
    document.addEventListener('click', (event) => {
        // Check if the click is outside the sidebar and menu button
        if (!menuSidebar.contains(event.target) && !menuButton.contains(event.target)) {
            hideSidebar();
        }

        // If clicked inside sidebarHeader, sidebarItems, or sidebarMediaIcons, hide the sidebar
        if (sidebarHeader.contains(event.target) || sidebarItems.contains(event.target) || sidebarMediaIcons.contains(event.target)) {
            hideSidebar();
        }
    });
});




function showItems() {
    sidebarHeader.classList.remove('sidebar-non-active');
    sidebarItems.classList.remove('sidebar-non-active');
    sidebarFooter.classList.remove('sidebar-non-active');
}


function hideItems() {
    sidebarHeader.classList.add('sidebar-non-active');
    sidebarItems.classList.add('sidebar-non-active');
    sidebarFooter.classList.add('sidebar-non-active');
}


















// go-up button



window.addEventListener('scroll', () => {

    let scrollBtn = document.getElementById('up-btn');

    this.scrollY >= 350 ? scrollBtn.classList.add('show-up-btn') : scrollBtn.classList.remove('show-up-btn');

})



// menu button background change functionality 



window.addEventListener('scroll', () => {

    this.scrollY >= 350 ? menuButton.style.backgroundColor = 'var(--black)' : menuButton.style.backgroundColor = 'transparent'
})













const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Number of slides to show
    slidesPerView: 6,

    // Number of slides to move per swipe
    slidesPerGroup: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Add space between slides (optional)
    spaceBetween: 50, // Adjust the space between slides if needed


    breakpoints: {
        // When the window width is >= 1024px
        1024: {
            slidesPerView: 6,
        },
        // When the window width is >= 768px
        768: {
            slidesPerView: 4,
        },
        // When the window width is < 768px (optional)
        0: {
            slidesPerView: 2,
        }
    }
});















const testimonialsSlider = new Swiper('#testimonials', {
    direction: 'horizontal',
    loop: true,


});



