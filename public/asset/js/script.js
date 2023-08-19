$(document).on("click", "#btn-edit", function () {
    
  $(".modal-body #id-bisnis").val($(this).data("id"));
  $(".modal-body #bis").val($(this).data("bis"));
  $(".modal-body #lain").val($(this).data("lain"));
  $(".modal-body #ketiga").val($(this).data("ketiga"));
  $(".modal-body #hasil").val($(this).data("hasil"));
  $(".modal-body #apps").val($(this).data("apps"));

  $(".modal-body #id-inv").val($(this).data("id"));
  $(".modal-body #namadat").val($(this).data("namadat"));
  $(".modal-body #media").val($(this).data("media"));
  $(".modal-body #lokasi").val($(this).data("lokasi"));
  $(".modal-body #utgjawab").val($(this).data("utgjawab"));
  $(".modal-body #keterangan").val($(this).data("keterangan"));

  $(".modal-body #id-bia").val($(this).data("id"));
  $(".modal-body #subordinat").val($(this).data("subordinat"));
  $(".modal-body #proses").val($(this).data("proses"));
  $(".modal-body #kredit").val($(this).data("kredit"));
  $(".modal-body #pasar").val($(this).data("pasar"));
  $(".modal-body #liquiditas").val($(this).data("liquiditas"));
  $(".modal-body #operasional").val($(this).data("operasional"));
  $(".modal-body #kepatuhan").val($(this).data("kepatuhan"));
  $(".modal-body #hukum").val($(this).data("hukum"));
  $(".modal-body #reputasi").val($(this).data("reputasi"));
  $(".modal-body #strategi").val($(this).data("strategi"));
  $(".modal-body #total").val($(this).data("total"));

  $(".modal-body #appsti").val($(this).data("appsti"));
  $(".modal-body #rto").val($(this).data("rto"));
  $(".modal-body #datahasil").val($(this).data("datahasil"));
  $(".modal-body #rpo").val($(this).data("rpo"));
  $(".modal-body #mtd").val($(this).data("mtd"));
  $(".modal-body #puncak").val($(this).data("puncak"));
});
