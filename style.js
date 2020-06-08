// Preloader script

// setTimeout(function () {

//     $('.loader-container').addClass('done');
//     $('.progress').addClass('done');

// }, 10000);

var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
    overlay.style.display = 'none';
})