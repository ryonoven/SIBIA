$(document).on('click', '#btn-edit', function () {
    $('.modal-body #id-bisnis').val($(this).data('id'));
    $('.modal-body #bis').val($(this).data('bis'));
    $('.modal-body #lain').val($(this).data('lain'));
    $('.modal-body #ketiga').val($(this).data('ketiga'));
    $('.modal-body #hasil').val($(this).data('hasil'));
    $('.modal-body #apps').val($(this).data('apps'));
    $('.modal-body #id-inv').val($(this).data('id'));
    $('.modal-body #namadat').val($(this).data('namadat'));
    $('.modal-body #media').val($(this).data('media'));
    $('.modal-body #lokasi').val($(this).data('lokasi'));
    $('.modal-body #utgjawab').val($(this).data('utgjawab'));
    $('.modal-body #keterangan').val($(this).data('keterangan'));
});