$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'

    });


let hemburger=document.querySelector('.hemburger');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');

hemburger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});
times.addEventListener('click',function(){
    mobileNav.classList.remove('open');

});

})