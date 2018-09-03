// get url parameter

var get_url_parameter = function get_url_parameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

nilai = 0
penilaian = ['l', 'n', 'p', 'r', 't', 'v', 'x', 'z', 'ab', 'ad']
for (x in penilaian){
    nilai += Number(get_url_parameter(penilaian[x]))
}
nilai += 4
$('.nilai-total').html(nilai)
$('.progress-nilai-total').attr('value', nilai)

kategori = ''
if (nilai >= 0 && nilai <= 6){
    kategori = 'rendah'
    $('.step-kategori .rendah').addClass('active')
} else if (nilai >= 7 && nilai <= 13){
    kategori = 'menengah'
    $('.step-kategori .menengah').addClass('active')
} else if (nilai >= 14 && nilai <= 20){
    kategori = 'tinggi'
    $('.step-kategori .tinggi').addClass('active')
} else {
    kategori = 'Silahkan cek kembali'
}
$('.kategori').html(kategori)

$('.nama').html(get_url_parameter('a').replace(/\+/g, ' '))
$('.nomor-registrasi').html(get_url_parameter('b').replace(/\+/g, ' '))
$('.tanggal-lahir').html(get_url_parameter('c').replace(/\+/g, ' '))
$('.jenis-kelamin').html(get_url_parameter('d'))
$('.lokasi').html(get_url_parameter('e').replace(/\+/g, ' '))
$('.tindak-pidana').html(get_url_parameter('f').replace(/\+/g, ' '))
$('.lama-pidana').html(get_url_parameter('g').replace(/\+/g, ' '))

$('.alasan-assesment-dilakukan').html(get_url_parameter('h'))
$('.alasan-lainnya').html(get_url_parameter('i').replace(/\+/g, ' '))
$('.nama-pewawancara').html(get_url_parameter('j').replace(/\+/g, ' '))
$('.tanggal-assesment').html(get_url_parameter('k'))

// jawaban

konklusi_1 = ''
switch (Number(get_url_parameter('l'))){
    case 1:
        konklusi_1 = '.soal-1 .jawaban-1'
        break
    case 0:
        konklusi_1 = '.soal-1 .jawaban-2'
        break
}
$(konklusi_1).attr('checked', '')

konklusi_2 = ''
switch (Number(get_url_parameter('n'))){
    case 3:
        konklusi_2 = '.soal-2 .jawaban-1'
        break
    case 1:
        konklusi_2 = '.soal-2 .jawaban-2'
        break
    case -1:
        konklusi_2 = '.soal-2 .jawaban-3'
        break
}
$(konklusi_2).attr('checked', '')

konklusi_3 = ''
switch (Number(get_url_parameter('p'))){
    case 2:
        konklusi_3 = '.soal-3 .jawaban-1'
        break
    case 1:
        konklusi_3 = '.soal-3 .jawaban-2'
        break
    case 0:
        konklusi_3 = '.soal-3 .jawaban-3'
        break
    case -1:
        konklusi_3 = '.soal-3 .jawaban-4'
        break
}
$(konklusi_3).attr('checked', '')

konklusi_4 = ''
switch (Number(get_url_parameter('r'))){
    case 1:
        konklusi_4 = '.soal-4 .jawaban-1'
        break
    case 0:
        konklusi_4 = '.soal-4 .jawaban-2'
        break
}
$(konklusi_4).attr('checked', '')

konklusi_5 = ''
switch (Number(get_url_parameter('t'))){
    case 2:
        konklusi_5 = '.soal-5 .jawaban-1'
        break
    case 0:
        konklusi_5 = '.soal-5 .jawaban-2'
        break
}
$(konklusi_5).attr('checked', '')

konklusi_6 = ''
switch (Number(get_url_parameter('v'))){
    case 1:
        konklusi_6 = '.soal-6 .jawaban-1'
        break
    case 0:
        konklusi_6 = '.soal-6 .jawaban-2'
        break
    case -1:
        konklusi_6 = '.soal-6 .jawaban-3'
        break
}
$(konklusi_6).attr('checked', '')

konklusi_7 = ''
switch (Number(get_url_parameter('x'))){
    case 2:
        konklusi_7 = '.soal-7 .jawaban-1'
        break
    case 0:
        konklusi_7 = '.soal-7 .jawaban-2'
        break
    case -1:
        konklusi_7 = '.soal-7 .jawaban-3'
        break
}
$(konklusi_7).attr('checked', '')

konklusi_8 = ''
switch (Number(get_url_parameter('z'))){
    case 1:
        konklusi_8 = '.soal-8 .jawaban-1'
        break
    case 0:
        konklusi_8 = '.soal-8 .jawaban-2'
        break
}
$(konklusi_8).attr('checked', '')

konklusi_9 = ''
switch (Number(get_url_parameter('ab'))){
    case 1:
        konklusi_9 = '.soal-9 .jawaban-1'
        break
    case 0:
        konklusi_9 = '.soal-9 .jawaban-2'
        break
}
$(konklusi_9).attr('checked', '')

konklusi_10 = ''
switch (Number(get_url_parameter('ad'))){
    case 2:
        konklusi_10 = '.soal-10 .jawaban-1'
        break
    case 1:
        konklusi_10 = '.soal-10 .jawaban-2'
        break
    case 0:
        konklusi_10 = '.soal-10 .jawaban-3'
        break
}
$(konklusi_10).attr('checked', '')