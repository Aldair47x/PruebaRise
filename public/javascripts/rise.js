$('.carousel').carousel({
    interval: 2000
  })

const myCarousel = document.querySelector('#myCarousel');
myCarousel.addEventListener("mouseover", function() {
    fetch("zapato.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
});