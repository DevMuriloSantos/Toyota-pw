const categoryLinks = document.querySelectorAll('.category > a');

const carro_passeio_links = document.querySelectorAll(".pt1");
const suvs_links = document.querySelectorAll(".pt2");
const hibridos_links = document.querySelectorAll(".pt3");
const pickups_links = document.querySelectorAll(".pt4"); 

const travelingcar = document.getElementById("carro-passeio");
const suv = document.getElementById("suv");
const hibridos = document.getElementById("hibridos");
const pickups = document.getElementById("pickups");

categoryLinks[0].style.borderBottom = '3px solid red';
carro_passeio_links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    categoryLinks.forEach(link => {
      link.style.border = 'none';
    });

    link.style.borderBottom = '3px solid red';

    travelingcar.style.display = "block";
    suv.style.display = "none";
    hibridos.style.display = "none";
    pickups.style.display = "none";
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
    hibridos.style.display = "none";
    pickups.style.display = "none";
  });
});

hibridos_links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    categoryLinks.forEach(link => {
      link.style.border = 'none';
    });

    link.style.borderBottom = '3px solid red';

    hibridos.style.display = "block";
    travelingcar.style.display = "none";
    suv.style.display = "none";
    pickups.style.display = "none";
  });
});

pickups_links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    categoryLinks.forEach(link => {
      link.style.border = 'none';
    });

    link.style.borderBottom = '3px solid red';

    pickups.style.display = "block";
    hibridos.style.display = "none";
    travelingcar.style.display = "none";
    suv.style.display = "none";
  });
});