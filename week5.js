// week5.js

// media view width number
let screenWidth = 600

// starts as closed when in default view
// starts as open when in media view
let navIsOpen = true
if (outerWidth <= screenWidth) {
    navIsOpen = false
} else {
    navIsOpen = true
}

// nav hide/open
function hamburgClick() {
    if (navIsOpen === true) {
        hideNav();
    }
    else {
        showNav();
    }
}

function hideNav() {
    let leftNav = document.getElementById("leftNav")
    let navUl = document.getElementById("navUl")
    let hamburger = document.getElementById("hamburger")
    let content = document.getElementById("content")

    if (outerWidth <= screenWidth) {
        console.log("This works.");

        leftNav.style.height = "88px"
        content.style.top = "100px"
        navUl.style.visibility = "hidden"
    } else {
        content.style.left = "96px"
        hamburger.style.left = "13px"
        leftNav.style.width = "72px"
        navUl.style.width = "66px"
        navUl.style.opacity = "0"
    }

    console.log("Hiding nav");
    navIsOpen = false;
}

function showNav() {
    let leftNav = document.getElementById("leftNav")
    let navUl = document.getElementById("navUl")
    let hamburger = document.getElementById("hamburger")
    let content = document.getElementById("content")

    if (outerWidth <= screenWidth) {
        console.log("This works.");

        // not the "full screen" but close enough?
        // I want the user to not be wondering where everything went?
        // 100% would make it look like it disappeared entirely
        leftNav.style.height = "80%"
        navUl.style.visibility = "visible"
    } else {
        content.style.left = "256px"
        hamburger.style.left = ""
        leftNav.style.width = "232px"
        navUl.style.width= ""
        navUl.style.opacity = "1"
    }

    console.log("Showing nav");
    navIsOpen = true;
}