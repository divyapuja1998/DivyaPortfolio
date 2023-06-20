// read more/less working...........
function myfunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById ("more");
    var btnText = document.getElementById ("myBtn");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }

    else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}


//toggle icon navbar.............................
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        }
    })

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scrolls)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// input field clear after submission...........
// let btnClear = document.querySelector('button');
// let inputs = document.querySelectorAll('input');

// btnClear.addEventListener('click', () => {
//     inputs.forEach(input => input.value = '');
// });

function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByName('form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
 }

