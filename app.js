 /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const navMenu =document.getElementById('navbar__list');
const sections =document.querySelectorAll('section');

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav=()=>{  // build function for building theDynamic navigation menu
    const ul ='';
    sections.forEach(section=>{
         
    
        const sec_ID=section.id;
        const sec_DataNav=section.dataset.nav;
        ul+=`<li><a class="menu__link" href="#${sec_ID}">${sec_DataNav}</a></li>`
    });
    navMenu.innerHTML=ul;
    };
    buildNav();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

    onscroll = function () { //add event on scroll
      var scrollPosition = document.documentElement.scrollTop; // get the section position for all document
    
      sections.forEach((section) => { //loop all sections to target every section
        if (// put our condition
          scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
          scrollPosition <
          section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
          var currentId = section.attributes.id.value;
          removeSelectionFromLinkInNav();
          addSelectionToLinkInNav(currentId);
          section.classList.remove('your-active-class');
          section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
          section.classList.add('your-active-class');
    
        }
      });
    };
    
    var removeSelectionFromLinkInNav = function () { // remove all active classes
      document.querySelectorAll("li a").forEach((el) => {
        el.style.backgroundColor = '#fff';
      });
    };
    
    var addSelectionToLinkInNav = function (id) { // add the active class by using addSelectionToLinkInNa function
      // console.log(id);
      var selector = `li a[href="#${id}"]`;
      se = document.querySelector(selector);
      se.style.backgroundColor = '#333';
    };
    
    var navLinks = document.querySelectorAll("li a");
    
    navLinks.forEach((link) => { // add for each loop to add event when click every section
      link.addEventListener("click", (e) => {
        e.preventDefault();
        var currentId = e.target.attributes.href.value;
        var section = document.querySelector(currentId);
        var sectionPos = section.offsetTop;
        
        window.scroll({ // to scroll smoothly
          top: sectionPos,
          behavior: "smooth",
        });
      });
    });