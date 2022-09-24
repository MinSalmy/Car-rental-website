document.getElementById("button-look").addEventListener('click', () => {
    document.getElementById('cars').scrollIntoView({behavior: "smooth"});
});

let bookingButtons = document.querySelectorAll(".booking");
bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('price').scrollIntoView({behavior: "smooth"});
        document.getElementById("car").value = button.parentElement.getElementsByClassName("car-title")[0].innerHTML;
    });    
});

document.getElementById('validation').addEventListener('click', function(event) {
    if (document.getElementById("price-form").checkValidity()) {
        alert('Спасибо за Вашу заявку.\nМы свяжемся с Вами в ближайшее время.')
    } 
})

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".info");
    document.addEventListener('scroll', () => {
            elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});