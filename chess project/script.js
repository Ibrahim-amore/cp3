// JavaScript for Image Slider with jQuery
$(document).ready(function () {
    const slider = $('.slider');
    const slideCount = slider.children().length;
    let currentIndex = 0;

    // Function to update the slider based on the current index
    function updateSlider() {
        const translateX = currentIndex * -100;
        slider.css('transform', `translateX(${translateX}%)`);
    }

    // Function to move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Handle next slide button click
    $('#next-slide').click(function () {
        nextSlide();
    });

    // Handle previous slide button click
    $('#prev-slide').click(function () {
        prevSlide();
    });

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});