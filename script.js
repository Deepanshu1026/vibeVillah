function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Get all elements with class="tab-button" and remove the class "active"
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName('tab-button')[0].click();
});

// Select the navbar
const navbar = document.querySelector('.nav');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the fixed-nav class to the navbar when you reach its scroll position. Remove "fixed-nav" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
}

// When the user scrolls the page, execute stickyNavbar 
window.onscroll = function() {
    stickyNavbar();
};


// hotels tabs section
function showContent(contentId, element) {
    // Hide all content
    var contents = document.getElementsByClassName('custom-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    // Remove active class from all tabs
    var tabs = document.getElementsByClassName('custom-tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }
    // Show the clicked tab's content and add active class to the clicked tab
    document.getElementById(contentId).style.display = 'block';
    element.classList.add('active-tab');
}

// Show the first tab's content by default
document.getElementById('content-one').style.display = 'block';
document.getElementsByClassName('custom-tab')[0].classList.add('active-tab');


document.getElementById('nav-toggle').addEventListener('click', function() {
    var navmenu = document.getElementById('navmenu');
    navmenu.classList.toggle('active');
});
