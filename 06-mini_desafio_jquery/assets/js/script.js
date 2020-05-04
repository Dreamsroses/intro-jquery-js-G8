$(document).ready(function () {
  console.log("ready!");

  // Generar link desde todos los links
  $("a").attr("target", "_blank");
  $("a").attr("href", "http://empieza.desafiolatam.com/");

  // Agregar icono por delante de los li
  $("ul li:first-child").prepend("<span class='fab fa-facebook-f'></i></span> ");
  $("ul li:nth-child(2)").prepend("<span class='fab fa-instagram'></i></span> ");
  $("ul li:nth-child(3)").prepend("<span class='fab fa-twitter'></i></span> ");
  $("ul li:nth-child(4)").prepend("<span class='fab fa-pinterest'></i></span> ");

  $("h2").on("click", function () {
    $(this).css("color", "#ff0000");
  })

  // Agregar li en la segunda section
  $("body section:nth-child(3) ul li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>');
  $("body section:nth-child(3) ul li:nth-child(4)").after('<li><a href="#">link 5</a></li>');
});