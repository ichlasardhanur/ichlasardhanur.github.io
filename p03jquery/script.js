$(document).ready(() => {
  $("td").click(function (event) {
    alert("Sekarang Anda Mengklik kolom " + $(this).html() + "!");
  });
  $("th").click(function (event) {
    alert("Sekarang Anda Mengklik kolom " + $(this).html() + "!");
  });
});