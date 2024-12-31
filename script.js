let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-nav');
let body= document.body ;

burger.addEventListener('click', function(){
mobileMenu.classList.toggle('classlistMobileNav');
body.classList.toggle('bodyOnScroll');
});

let ankerLinks = document.querySelectorAll('.mobile-nav a');
console.log(ankerLinks);
ankerLinks.forEach(function(ele){
    ele.addEventListener('click', function(){
        mobileMenu.classList.remove('classlistMobileNav');
        body.classList.remove('bodyOnScroll');
    });
});


