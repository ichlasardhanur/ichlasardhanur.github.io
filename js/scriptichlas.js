$(document).ready(function(){
    $(".menu").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_menu = split[1];

        $(".menu").removeClass('aktif');
        $("#menu_"+id_menu).addClass('aktif');

        $(".home").slideUp();

        $("#isi_1").slideUp();
        $("#isi_2").slideUp();
        $("#isi_3").slideUp();
        $("#isi_"+id_menu).slideToggle();


      });
});
$(document).ready(function(){
    $(".tugas").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_tugas = split[1];

        $("tugas").removeClass('awal');
        $("#tugas_"+id_tugas).addClass('awal');

        $(".homet").slideUp();

        $("#isit_1").slideUp();
        $("#isit_2").slideUp();
        $("#isit_3").slideUp();
        $("#isit_4").slideUp();
        $("#isit_"+id_tugas).slideToggle();
      });
});
