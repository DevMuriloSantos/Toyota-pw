const categoryLinks = document.querySelectorAll('.category a');

const carro_passeio_links = document.querySelectorAll(".pt1");
const suvs_links = document.querySelectorAll(".pt2");

const travelingcar = document.getElementById("carro-passeio");
const suv = document.getElementById("suv");

carro_passeio_links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    categoryLinks.forEach(link => {
      link.style.border = 'none';
    });

    link.style.borderBottom = '3px solid red';

    travelingcar.style.display = "block";
    suv.style.display = "none";
  });
});

suvs_links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    categoryLinks.forEach(link => {
      link.style.border = 'none';
    });

    link.style.borderBottom = '3px solid red';

    suv.style.display = "block";
    travelingcar.style.display = "none";
  });
});