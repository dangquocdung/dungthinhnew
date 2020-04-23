
require('./flipbook.js');

$(document).ready(function() {
    $("#xem-pdf").flipBook({
        pdfUrl: "/uploads/topics/{{ $Topic->attach_file }}"
    });

})