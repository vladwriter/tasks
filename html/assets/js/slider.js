// First slider "Features"

$(function () {
    let sldr = $('.features .slider_space'),
        sldrContent = sldr.html(),
        slideWidth = $('.features .slider_control').outerWidth(),
        slideCount = $('.features .slider_space .slide_content').length,
        prv_b = $('.f_prev'),
        nxt_b = $('.f_next'),
        sldrInterval = 50000,
        animateTime = 1000,
        course = 1,
        margin = - slideWidth;
    $('.features .slider_space .slide_content:last').clone().prependTo('.features .slider_space'); $('.features .slider_space .slide_content').eq(1).clone().appendTo('.features .slider_space'); $('.features .slider_space').css('margin-left', -slideWidth); function nxt_bSlide() { interval = window.setInterval(animate, sldrInterval) } function animate() { if (margin == -slideCount * slideWidth - slideWidth) { sldr.css({ 'marginLeft': -slideWidth }); margin = -slideWidth * 2 } else if (margin == 0 && course == -1) { sldr.css({ 'marginLeft': -slideWidth * slideCount }); margin = -slideWidth * slideCount + slideWidth } else { margin = margin - slideWidth * (course) } sldr.animate({ 'marginLeft': margin }, animateTime) } function sldrStop() { window.clearInterval(interval) } prv_b.click(function () { if (sldr.is(':animated')) { return false } var course2 = course; course = -1; animate(); course = course2 }); nxt_b.click(function () { if (sldr.is(':animated')) { return false } var course2 = course; course = 1; animate(); course = course2 }); sldr.add(nxt_b).add(prv_b).hover(function () { sldrStop() }, nxt_bSlide); nxt_bSlide()
});

//Second slider "Menu"

$(function () {
    let sldr = $('.menu .slider_space'),
        sldrContent = sldr.html(),
        slideWidth = $('.menu .slide_content').outerWidth(),
        slideCount = $('.menu .slider_space .slide_content').length,
        prv_b = $('.m_prev'),
        nxt_b = $('.m_next'),
        sldrInterval = 40000,
        animateTime = 1500,
        course = 1,
        margin = - slideWidth;
    $('.menu .slider_space .slide_content:last').clone().prependTo('.menu .slider_space'); $('.menu .slider_space .slide_content').eq(1).clone().appendTo('.menu .slider_space'); $('.menu .slider_space').css('margin-left', -slideWidth); function nxt_bSlide() { interval = window.setInterval(animate, sldrInterval) } function animate() { if (margin == -slideCount * slideWidth - slideWidth) { sldr.css({ 'marginLeft': -slideWidth }); margin = -slideWidth * 2 } else if (margin == 0 && course == -1) { sldr.css({ 'marginLeft': -slideWidth * slideCount }); margin = -slideWidth * slideCount + slideWidth } else { margin = margin - slideWidth * (course) } sldr.animate({ 'marginLeft': margin }, animateTime) } function sldrStop() { window.clearInterval(interval) } prv_b.click(function () { if (sldr.is(':animated')) { return false } var course2 = course; course = -1; animate(); course = course2 }); nxt_b.click(function () { if (sldr.is(':animated')) { return false } var course2 = course; course = 1; animate(); course = course2 }); sldr.add(nxt_b).add(prv_b).hover(function () { sldrStop() }, nxt_bSlide); nxt_bSlide()
});

//Third slider "Menu"

$(function () {
    let sldr = $('.reviews .slider_space'),
        sldrContent = sldr.html(),
        slideWidth = $('.reviews .primary-field').outerWidth(),
        slideCount = $('.reviews .slider_space .primary-field').length,
        prv_b = $('.r_prev'),
        nxt_b = $('.r_next'),
        sldrInterval = 40000,
        animateTime = 1000,
        course = 1,
        margin = - slideWidth;
    $('.reviews .slider_space .primary-field:last').clone().prependTo('.reviews .slider_space'); $('.reviews .slider_space .primary-field').eq(1).clone().appendTo('.reviews .slider_space'); $('.reviews .slider_space').css('margin-left', -slideWidth); function nxt_bSlide() { interval = window.setInterval(animate, sldrInterval) } function animate() { if (margin == -slideCount * slideWidth - slideWidth) { sldr.css({ 'marginLeft': -slideWidth }); margin = -slideWidth * 2 } else if (margin == 0 && course == -1) { sldr.css({ 'marginLeft': -slideWidth * slideCount }); margin = -slideWidth * slideCount + slideWidth } else { margin = margin - slideWidth * (course) } sldr.animate({ 'marginLeft': margin }, animateTime) } function sldrStop() { window.clearInterval(interval) } prv_b.click(function () { if (sldr.is(':animated')) { return false } var course2 = course; course = -1; animate(); course = course2 }); nxt_b.click(function () { if (sldr.is(':animated')) { return false } var course2 = course; course = 1; animate(); course = course2 }); sldr.add(nxt_b).add(prv_b).hover(function () { sldrStop() }, nxt_bSlide); nxt_bSlide()
});


//Fourth slider "Food"

let viewport = $("#viewport").width(); 
let slider = $("div.slider"); 
let viewSliders = $(".viewSlide"); 
let viewSlide = 0; 
 
viewSliders[viewSlide].style.color = "#fae2c7";
$(".l_next").click(function () { 
    viewSliders[viewSlide].style.color = "#fff";
    if (viewSlide < 6) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewSliders[viewSlide].style.color = "#fae2c7";
    slider.animate({'left': -viewSlide * viewport + "px"}, {'duration': 700})  
});
$(".l_prev").click(function () { 
    viewSliders[viewSlide].style.color = "#fff";
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 6;
    }
    viewSliders[viewSlide].style.color = "#fae2c7";
    slider.animate({'left': -viewSlide * viewport + "px"}, {'duration': 700})  
});