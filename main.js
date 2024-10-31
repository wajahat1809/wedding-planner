let nav = document.querySelector(".navigation-wrap");

window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});
                
$(document).ready(function(){
    window.onscroll = function() {
    if(document.documentElement.scrollTop < 30) {
        $('#balloo').removeClass('bg-light')
    } else {
        $('#balloo').addClass('bg-light')
    }
}
})
// gallery

$(document).ready(function(){
    // Handle click for 'All' button
    $("#btn1").click(function(){
        $(".container img").show(); // Show all images
    });

    // Handle click for 'Dining' button
    $("#btn7").click(function(){
        $(".container img").hide(); // Hide all images first
        $('#img1, #img2, #img3, #img4, #img5, #img6, #img7').show(); // Show only Dining images
    });

    // Handle click for 'Couple Shot' button
    $("#btn2").click(function(){
        $(".container img").hide(); // Hide all images first
        $('#img9, #img10, #img11, #img12, #img13, #img14').show(); // Show only Couple Shot images
    });

    // Handle click for 'Entrance' button
    $("#btn3").click(function(){
        $(".container img").hide(); // Hide all images first
        $('#img15, #img16, #img17, #img18, #img19, #img20').show(); // Show only Entrance images
    });

    // Handle click for 'Wedding cards' button
    $("#btn4").click(function(){
        $(".container img").hide(); // Hide all images first
        $('#img21, #img22, #img23, #img24').show(); // Show only Wedding cards images
    });

    // Handle click for 'Groom Dress' button
    $("#btn5").click(function(){
        $(".container img").hide(); // Hide all images first
        $('#img25, #img26, #img27, #img28').show(); // Show only Groom Dress images
    });

    // Handle click for 'Bride Dress' button
    $("#btn6").click(function(){
        $(".container img").hide(); // Hide all images first
        $('#img29, #img30, #img31, #img32').show(); // Show only Bride Dress images
    });

    // Handle click for 'Wedding cake' button
    $("#btn8").click(function(){
        $(".container img").hide(); // Hide all images first
        $('#img33, #img34').show(); // Show only Wedding cake images
    });
});

